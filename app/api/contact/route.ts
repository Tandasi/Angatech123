import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation/contact'
import { prisma } from '@/lib/db'
import { emailService } from '@/lib/services/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate request body
    const { error, value } = contactFormSchema.validate(body)
    if (error) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: error.details.map(detail => detail.message) 
        },
        { status: 400 }
      )
    }

    // Get client IP and user agent
    const ipAddress = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'

    // Create contact submission in database
    const submission = await prisma.contactSubmission.create({
      data: {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phone: value.phone,
        company: value.company,
        serviceCategory: value.serviceCategory,
        projectType: value.projectType,
        budget: value.budget,
        timeline: value.timeline,
        message: value.message,
        attachments: value.attachments,
        uploadedFiles: value.uploadedFiles,
        newsletterSubscribed: value.newsletterSubscribed || false,
        ipAddress,
        userAgent,
        status: 'NEW',
        priority: 'MEDIUM'
      }
    })

    // Send notification email to admin
    try {
      await emailService.sendContactNotification(submission)
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError)
      // Don't fail the request if email fails
    }

    // Send auto-reply to user
    try {
      await emailService.sendAutoReply(submission)
    } catch (emailError) {
      console.error('Failed to send auto-reply:', emailError)
      // Don't fail the request if email fails
    }

    // Create analytics entry
    try {
      await prisma.contactFormAnalytics.create({
        data: {
          submissionId: submission.id,
          pageUrl: req.headers.get('referer') || 'unknown',
          formFillTime: null, // Could be calculated from frontend timing
          formAbandoned: false
        }
      })
    } catch (analyticsError) {
      console.error('Failed to create analytics entry:', analyticsError)
      // Don't fail the request if analytics fails
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: submission.id,
      estimatedResponseTime: '24 hours'
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Internal server error',
          error: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status')
    const serviceCategory = searchParams.get('serviceCategory')
    const projectType = searchParams.get('projectType')
    const search = searchParams.get('search')

    // Build where clause
    const where: any = {}
    
    if (status) where.status = status
    if (serviceCategory) where.serviceCategory = serviceCategory
    if (projectType) where.projectType = projectType
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get submissions with pagination
    const [submissions, total] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          fileAttachments: true,
          analytics: true
        }
      }),
      prisma.contactSubmission.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Failed to fetch contact submissions:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch submissions' 
      },
      { status: 500 }
    )
  }
}
