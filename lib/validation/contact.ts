import Joi from 'joi'

export const contactFormSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required()
    .messages({
      'string.min': 'First name must be at least 2 characters long',
      'string.max': 'First name cannot exceed 100 characters',
      'any.required': 'First name is required'
    }),
  
  lastName: Joi.string().min(2).max(100).required()
    .messages({
      'string.min': 'Last name must be at least 2 characters long',
      'string.max': 'Last name cannot exceed 100 characters',
      'any.required': 'Last name is required'
    }),
  
  email: Joi.string().email().max(255).required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email address is required'
    }),
  
  phone: Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).optional()
    .messages({
      'string.pattern.base': 'Please provide a valid phone number'
    }),
  
  company: Joi.string().max(200).optional(),
  
  serviceCategory: Joi.string().valid(
    'analytics-bi', 'cloud-infrastructure', 'data-engineering', 'ai-ml',
    'software-development', 'data-governance', 'consulting-training',
    'support-maintenance', 'other'
  ).optional(),
  
  projectType: Joi.string().required()
    .messages({
      'any.required': 'Please select a specific service'
    }),
  
  budget: Joi.string().max(200).optional(),
  
  timeline: Joi.string().valid('asap', '1-month', '3-months', '6-months', 'flexible').optional(),
  
  message: Joi.string().min(10).max(2000).required()
    .messages({
      'string.min': 'Project details must be at least 10 characters long',
      'string.max': 'Project details cannot exceed 2000 characters',
      'any.required': 'Project details are required'
    }),
  
  attachments: Joi.string().max(1000).optional(),
  
  uploadedFiles: Joi.string().max(2000).optional(),
  
  newsletterSubscribed: Joi.boolean().default(false)
})

export const contactUpdateSchema = Joi.object({
  status: Joi.string().valid('NEW', 'REVIEWING', 'CONTACTED', 'PROPOSAL_SENT', 'NEGOTIATING', 'CONVERTED', 'LOST', 'SPAM').optional(),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH', 'URGENT').optional(),
  assignedTo: Joi.string().optional(),
  notes: Joi.string().max(1000).optional()
})

export const contactQuerySchema = Joi.object({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(20),
  status: Joi.string().valid('NEW', 'REVIEWING', 'CONTACTED', 'PROPOSAL_SENT', 'NEGOTIATING', 'CONVERTED', 'LOST', 'SPAM').optional(),
  serviceCategory: Joi.string().optional(),
  projectType: Joi.string().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  search: Joi.string().max(100).optional()
})
