"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serviceCategory, setServiceCategory] = useState('')
  const [projectType, setProjectType] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    
    // Get individual files information
    const fileInput = document.getElementById('fileUpload') as HTMLInputElement
    const files = fileInput?.files
    let fileInfo = ''
    
    if (files && files.length > 0) {
      const fileList = Array.from(files)
      const fileDetails = fileList.map(file => {
        const size = (file.size / 1024 / 1024).toFixed(2) // Convert to MB
        return `${file.name} (${size} MB)`
      })
      fileInfo = fileDetails.join('\n• ')
      fileInfo = `📎 Individual Files (${files.length}):\n• ${fileInfo}`
    }
    
    // Get folder uploads information
    const folderInput = document.getElementById('folderUpload') as HTMLInputElement
    const folderFiles = folderInput?.files
    let folderInfo = ''
    
    if (folderFiles && folderFiles.length > 0) {
      const folderList = Array.from(folderFiles)
      const folderDetails = folderList.map(file => {
        const path = (file as any).webkitRelativePath || file.name
        const size = (file.size / 1024 / 1024).toFixed(2) // Convert to MB
        return `${path} (${size} MB)`
      })
      folderInfo = folderDetails.join('\n• ')
      folderInfo = `📁 Folder Contents (${folderFiles.length} files):\n• ${folderInfo}`
    }
    
    // Combine both file and folder information
    const allFileInfo = [fileInfo, folderInfo].filter(Boolean).join('\n\n')
    
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      serviceCategory: formData.get('serviceCategory'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
      attachments: formData.get('attachments'),
      uploadedFiles: allFileInfo,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="h-fit">
        <CardContent className="p-8 text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours with a detailed response to your inquiry.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your data analytics, cloud infrastructure, or software development needs. We'll provide a detailed proposal within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" placeholder="First Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="Email Address" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+254 XXX XXX XXX" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" name="company" placeholder="Your Company Name" />
          </div>

                     <div className="space-y-2">
             <Label htmlFor="serviceCategory">Service Category</Label>
             <Select value={serviceCategory} onValueChange={setServiceCategory}>
               <SelectTrigger>
                 <SelectValue placeholder="Select service category" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="analytics-bi">Analytics & Business Intelligence</SelectItem>
                 <SelectItem value="cloud-infrastructure">Cloud Infrastructure</SelectItem>
                 <SelectItem value="data-engineering">Data Engineering</SelectItem>
                 <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                 <SelectItem value="software-development">Software Development</SelectItem>
                 <SelectItem value="data-governance">Data Governance & Security</SelectItem>
                 <SelectItem value="consulting-training">Consulting & Training</SelectItem>
                 <SelectItem value="support-maintenance">Support & Maintenance</SelectItem>
                 <SelectItem value="data-analytics">Data Analytics & Business Intelligence</SelectItem>
                 <SelectItem value="powerbi-dashboards">Power BI Dashboard Development</SelectItem>
                 <SelectItem value="tableau-dashboards">Tableau Dashboard Development</SelectItem>
                 <SelectItem value="aws-cloud">AWS Cloud Infrastructure</SelectItem>
                 <SelectItem value="azure-cloud">Microsoft Azure Solutions</SelectItem>      
                 <SelectItem value="google-cloud">Google Cloud Platform</SelectItem>
                 <SelectItem value="database-management">Database Management & Migration</SelectItem>
                 <SelectItem value="data-warehouse">Data Warehouse Design</SelectItem>
                 <SelectItem value="predictive-analytics">Predictive Analytics & AI</SelectItem>
                 <SelectItem value="machine-learning">Machine Learning Models</SelectItem>
                 <SelectItem value="data-pipeline">Data Pipeline & ETL</SelectItem>
                 <SelectItem value="stream-processing">Real-time Stream Processing</SelectItem>
                 <SelectItem value="custom-software">Custom Software Development</SelectItem>
                 <SelectItem value="web-applications">Web Application Development</SelectItem>
                 <SelectItem value="mobile-apps">Mobile Application Development</SelectItem>         
                 <SelectItem value="api-development">API Development & Integration</SelectItem>
                 <SelectItem value="data-governance">Data Governance & Security</SelectItem>
                 <SelectItem value="data-quality">Data Quality & Validation</SelectItem>
                 <SelectItem value="business-intelligence">Business Intelligence Strategy</SelectItem>
                 <SelectItem value="consulting">Strategic Consulting</SelectItem>
                 <SelectItem value="training">Training & Workshops</SelectItem>
                 <SelectItem value="support-maintenance">Support & Maintenance</SelectItem> 
                 <SelectItem value="data-migration">Data Migration Services</SelectItem>
                 <SelectItem value="performance-optimization">Performance Optimization</SelectItem>
                 <SelectItem value="other">Other</SelectItem>
               </SelectContent>
             </Select>
             <Input 
               id="serviceCategory" 
               name="serviceCategory" 
               type="hidden" 
               value={serviceCategory} 
             />
           </div>

           <div className="space-y-2">
             <Label htmlFor="projectType">Specific Service *</Label>
             <Select value={projectType} onValueChange={setProjectType}>
               <SelectTrigger>
                 <SelectValue placeholder="What service are you interested in?" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="data-analytics">Data Analytics & Business Intelligence</SelectItem>
                 <SelectItem value="powerbi-dashboards">Power BI Dashboard Development</SelectItem>
                 <SelectItem value="tableau-dashboards">Tableau Dashboard Development</SelectItem>
                 <SelectItem value="aws-cloud">AWS Cloud Infrastructure</SelectItem>
                 <SelectItem value="azure-cloud">Microsoft Azure Solutions</SelectItem>      
                 <SelectItem value="google-cloud">Google Cloud Platform</SelectItem>
                 <SelectItem value="database-management">Database Management & Migration</SelectItem>
                 <SelectItem value="data-warehouse">Data Warehouse Design</SelectItem>
                 <SelectItem value="predictive-analytics">Predictive Analytics & AI</SelectItem>
                 <SelectItem value="machine-learning">Machine Learning Models</SelectItem>
                 <SelectItem value="data-pipeline">Data Pipeline & ETL</SelectItem>
                 <SelectItem value="stream-processing">Real-time Stream Processing</SelectItem>
                 <SelectItem value="custom-software">Custom Software Development</SelectItem>
                 <SelectItem value="web-applications">Web Application Development</SelectItem>
                 <SelectItem value="mobile-apps">Mobile Application Development</SelectItem>         
                 <SelectItem value="api-development">API Development & Integration</SelectItem>
                 <SelectItem value="data-governance">Data Governance & Security</SelectItem>
                 <SelectItem value="data-quality">Data Quality & Validation</SelectItem>
                 <SelectItem value="business-intelligence">Business Intelligence Strategy</SelectItem>
                 <SelectItem value="consulting">Strategic Consulting</SelectItem>
                 <SelectItem value="training">Training & Workshops</SelectItem>
                 <SelectItem value="support-maintenance">Support & Maintenance</SelectItem> 
                 <SelectItem value="data-migration">Data Migration Services</SelectItem>
                 <SelectItem value="performance-optimization">Performance Optimization</SelectItem>
                 <SelectItem value="other">Other</SelectItem>
               </SelectContent>
             </Select>
             <Input 
               id="projectType" 
               name="projectType" 
               type="hidden" 
               value={projectType} 
               required
             />
           </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range</Label>
            <Input 
              id="budget" 
              name="budget" 
              type="text" 
              placeholder="e.g., Ksh 2,000,000 - Ksh 5,000,000 or USD 15,000 - USD 25,000" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select name="timeline">
              <SelectTrigger>
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Flexible timeline</SelectItem>
              </SelectContent>
            </Select>
          </div>
 
                     <div className="space-y-2">
             <Label htmlFor="message">Project Details *</Label>
             <Textarea
               id="message"
               name="message"
               placeholder="Tell us about your project goals, current challenges, and any specific requirements..."
               rows={5}
               required
             />
           </div>

                                               <div className="space-y-4">
                               <div className="space-y-2">
                  <Label htmlFor="fileUpload" className="text-black font-semibold">Upload Files (Optional)</Label>
                  <Input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,.rar,.jpg,.jpeg,.png,.gif,.fig,.sketch"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-black">
                    Files • Formats: PDF, Word, Excel, PowerPoint, Text, CSV, ZIP, Images, Design files • Max 10MB per file
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="folderUpload" className="text-black font-semibold">Upload  Folders (Optional)</Label>
                  <Input
                    id="folderUpload"
                    name="folderUpload"
                    type="file"
                    multiple
                    {...{
                      webkitdirectory: "",
                      directory: ""
                    } as any}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  <p className="text-xs text-black">
                    Select folders with all contents • Preserves folder structure • All file types supported • Max 10MB per file
                  </p>
                  <p className="text-xs text-black font-medium">
                    Tip: Click "Choose Files" and select a folder to upload all its contents
                  </p>
                </div>
               
               <div className="space-y-2">
                 <Label htmlFor="attachments" className="text-black font-semibold"> Links & References (Optional)</Label>
                                   <Textarea
                    id="attachments"
                    name="attachments"
                    placeholder="Paste links or reference folders here...
Example: https://github.com/your-org/project-repo"
                    rows={3}
                  />
               </div>
            </div>

           <div className="flex items-center space-x-2">
             <Checkbox id="newsletter" />
             <Label htmlFor="newsletter" className="text-sm">
               Subscribe to our newsletter for data insights and project updates
             </Label>
           </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
