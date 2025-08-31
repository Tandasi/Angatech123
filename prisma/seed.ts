import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Seed Service Categories
  console.log('📊 Creating service categories...')
  const serviceCategories = await Promise.all([
    prisma.serviceCategory.upsert({
      where: { name: 'analytics-bi' },
      update: {},
      create: {
        name: 'analytics-bi',
        description: 'Analytics & Business Intelligence',
        displayOrder: 1
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'cloud-infrastructure' },
      update: {},
      create: {
        name: 'cloud-infrastructure',
        description: 'Cloud Infrastructure',
        displayOrder: 2
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'data-engineering' },
      update: {},
      create: {
        name: 'data-engineering',
        description: 'Data Engineering',
        displayOrder: 3
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'ai-ml' },
      update: {},
      create: {
        name: 'ai-ml',
        description: 'Artificial Intelligence & Machine Learning',
        displayOrder: 4
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'software-development' },
      update: {},
      create: {
        name: 'software-development',
        description: 'Software Development',
        displayOrder: 5
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'data-governance' },
      update: {},
      create: {
        name: 'data-governance',
        description: 'Data Governance & Security',
        displayOrder: 6
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'consulting-training' },
      update: {},
      create: {
        name: 'consulting-training',
        description: 'Consulting & Training',
        displayOrder: 7
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'support-maintenance' },
      update: {},
      create: {
        name: 'support-maintenance',
        description: 'Support & Maintenance',
        displayOrder: 8
      }
    }),
    prisma.serviceCategory.upsert({
      where: { name: 'other' },
      update: {},
      create: {
        name: 'other',
        description: 'Other Services',
        displayOrder: 9
      }
    })
  ])

  console.log(`✅ Created ${serviceCategories.length} service categories`)

  // Seed Project Types
  console.log('🚀 Creating project types...')
  const projectTypes = await Promise.all([
    // Analytics & BI
    prisma.projectType.upsert({
      where: { name: 'data-analytics' },
      update: {},
      create: {
        name: 'data-analytics',
        description: 'Data Analytics & Business Intelligence',
        estimatedDuration: '4-8 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 1,
        categoryId: serviceCategories[0].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'powerbi-dashboards' },
      update: {},
      create: {
        name: 'powerbi-dashboards',
        description: 'Power BI Dashboard Development',
        estimatedDuration: '2-6 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 2,
        categoryId: serviceCategories[0].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'tableau-dashboards' },
      update: {},
      create: {
        name: 'tableau-dashboards',
        description: 'Tableau Dashboard Development',
        estimatedDuration: '2-6 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 3,
        categoryId: serviceCategories[0].id
      }
    }),

    // Cloud Infrastructure
    prisma.projectType.upsert({
      where: { name: 'aws-cloud' },
      update: {},
      create: {
        name: 'aws-cloud',
        description: 'AWS Cloud Infrastructure',
        estimatedDuration: '6-12 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 1,
        categoryId: serviceCategories[1].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'azure-cloud' },
      update: {},
      create: {
        name: 'azure-cloud',
        description: 'Microsoft Azure Solutions',
        estimatedDuration: '6-12 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 2,
        categoryId: serviceCategories[1].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'google-cloud' },
      update: {},
      create: {
        name: 'google-cloud',
        description: 'Google Cloud Platform',
        estimatedDuration: '6-12 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 3,
        categoryId: serviceCategories[1].id
      }
    }),

    // Data Engineering
    prisma.projectType.upsert({
      where: { name: 'data-pipeline' },
      update: {},
      create: {
        name: 'data-pipeline',
        description: 'Data Pipeline & ETL',
        estimatedDuration: '8-16 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 1,
        categoryId: serviceCategories[2].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'data-warehouse' },
      update: {},
      create: {
        name: 'data-warehouse',
        description: 'Data Warehouse Design',
        estimatedDuration: '12-20 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 2,
        categoryId: serviceCategories[2].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'stream-processing' },
      update: {},
      create: {
        name: 'stream-processing',
        description: 'Real-time Stream Processing',
        estimatedDuration: '10-18 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 3,
        categoryId: serviceCategories[2].id
      }
    }),

    // AI & ML
    prisma.projectType.upsert({
      where: { name: 'predictive-analytics' },
      update: {},
      create: {
        name: 'predictive-analytics',
        description: 'Predictive Analytics & AI',
        estimatedDuration: '12-24 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 1,
        categoryId: serviceCategories[3].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'machine-learning' },
      update: {},
      create: {
        name: 'machine-learning',
        description: 'Machine Learning Models',
        estimatedDuration: '16-32 weeks',
        complexityLevel: 'HIGH',
        displayOrder: 2,
        categoryId: serviceCategories[3].id
      }
    }),

    // Software Development
    prisma.projectType.upsert({
      where: { name: 'custom-software' },
      update: {},
      create: {
        name: 'custom-software',
        description: 'Custom Software Development',
        estimatedDuration: '8-24 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 1,
        categoryId: serviceCategories[4].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'web-applications' },
      update: {},
      create: {
        name: 'web-applications',
        description: 'Web Application Development',
        estimatedDuration: '6-16 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 2,
        categoryId: serviceCategories[4].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'mobile-apps' },
      update: {},
      create: {
        name: 'mobile-apps',
        description: 'Mobile Application Development',
        estimatedDuration: '8-20 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 3,
        categoryId: serviceCategories[4].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'api-development' },
      update: {},
      create: {
        name: 'api-development',
        description: 'API Development & Integration',
        estimatedDuration: '4-12 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 4,
        categoryId: serviceCategories[4].id
      }
    }),

    // Other important types
    prisma.projectType.upsert({
      where: { name: 'database-management' },
      update: {},
      create: {
        name: 'database-management',
        description: 'Database Management & Migration',
        estimatedDuration: '4-10 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 1,
        categoryId: serviceCategories[8].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'data-migration' },
      update: {},
      create: {
        name: 'data-migration',
        description: 'Data Migration Services',
        estimatedDuration: '6-14 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 2,
        categoryId: serviceCategories[8].id
      }
    }),
    prisma.projectType.upsert({
      where: { name: 'performance-optimization' },
      update: {},
      create: {
        name: 'performance-optimization',
        description: 'Performance Optimization',
        estimatedDuration: '4-8 weeks',
        complexityLevel: 'MEDIUM',
        displayOrder: 3,
        categoryId: serviceCategories[8].id
      }
    })
  ])

  console.log(`✅ Created ${projectTypes.length} project types`)

  // Seed Timeline Options
  console.log('⏰ Creating timeline options...')
  const timelineOptions = await Promise.all([
    prisma.timelineOption.upsert({
      where: { value: 'asap' },
      update: {},
      create: {
        value: 'asap',
        displayName: 'ASAP',
        daysEstimate: 7,
        displayOrder: 1
      }
    }),
    prisma.timelineOption.upsert({
      where: { value: '1-month' },
      update: {},
      create: {
        value: '1-month',
        displayName: 'Within 1 month',
        daysEstimate: 30,
        displayOrder: 2
      }
    }),
    prisma.timelineOption.upsert({
      where: { value: '3-months' },
      update: {},
      create: {
        value: '3-months',
        displayName: 'Within 3 months',
        daysEstimate: 90,
        displayOrder: 3
      }
    }),
    prisma.timelineOption.upsert({
      where: { value: '6-months' },
      update: {},
      create: {
        value: '6-months',
        displayName: 'Within 6 months',
        daysEstimate: 180,
        displayOrder: 4
      }
    }),
    prisma.timelineOption.upsert({
      where: { value: 'flexible' },
      update: {},
      create: {
        value: 'flexible',
        displayName: 'Flexible timeline',
        daysEstimate: null,
        displayOrder: 5
      }
    })
  ])

  console.log(`✅ Created ${timelineOptions.length} timeline options`)

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Database seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
