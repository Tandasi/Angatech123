# 🚀 AngaTech Contact Form Backend

A robust, scalable backend system for handling contact form submissions with database storage, email notifications, and analytics tracking.

## ✨ Features

- **Database Storage**: PostgreSQL with Prisma ORM
- **Email Notifications**: Admin notifications + user auto-replies
- **File Uploads**: Support for individual files and folder uploads
- **Data Validation**: Joi schema validation
- **Analytics Tracking**: Form submission analytics
- **Service Management**: Dynamic service categories and project types
- **Security**: Rate limiting, input validation, secure email handling

## 🏗️ Architecture

```
├── lib/
│   ├── db.ts                 # Database configuration
│   ├── validation/           # Joi validation schemas
│   └── services/             # Business logic services
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.ts              # Database seeder
├── app/api/
│   └── contact/
│       └── route.ts         # Contact form API endpoints
└── components/
    └── contact-form.tsx     # Frontend form component
```

## 🗄️ Database Schema

### Core Tables

1. **contact_submissions** - Main form submissions
2. **file_attachments** - File upload metadata
3. **service_categories** - Service category definitions
4. **project_types** - Specific service offerings
5. **timeline_options** - Project timeline choices
6. **contact_form_analytics** - Form usage analytics

### Key Relationships

- `ContactSubmission` → `FileAttachment` (One-to-Many)
- `ServiceCategory` → `ProjectType` (One-to-Many)
- `ContactSubmission` → `ContactFormAnalytics` (One-to-One)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Environment Setup
Copy `env.example` to `.env` and configure:
```bash
cp env.example .env
```

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` - Email configuration
- `SMTP_FROM`, `ADMIN_EMAIL` - Email addresses

### 3. Database Setup
```bash
# Generate Prisma client
pnpm run db:generate

# Push schema to database
pnpm run db:push

# Seed initial data
pnpm run db:seed
```

### 4. Start Development Server
```bash
pnpm run dev
```

## 📊 Database Operations

### Generate Prisma Client
```bash
pnpm run db:generate
```

### Database Migrations
```bash
pnpm run db:migrate
```

### View Database (Prisma Studio)
```bash
pnpm run db:studio
```

### Seed Database
```bash
pnpm run db:seed
```

## 🔌 API Endpoints

### POST /api/contact
Submit a new contact form.

**Request Body:**
```typescript
{
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceCategory?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  attachments?: string;
  uploadedFiles?: string;
  newsletterSubscribed?: boolean;
}
```

**Response:**
```typescript
{
  success: boolean;
  message: string;
  submissionId: string;
  estimatedResponseTime: string;
}
```

### GET /api/contact
Retrieve contact submissions with filtering and pagination.

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)
- `status` - Filter by submission status
- `serviceCategory` - Filter by service category
- `projectType` - Filter by project type
- `search` - Search across text fields

## 📧 Email System

### Admin Notifications
- Sent to `ADMIN_EMAIL` on form submission
- Includes all form data and file information
- Professional HTML formatting

### User Auto-Replies
- Sent to user's email address
- Confirms submission receipt
- Provides submission details and timeline

### Email Templates
- Responsive HTML design
- Professional branding
- Clear information hierarchy

## 🔒 Security Features

### Input Validation
- Joi schema validation
- Type checking and sanitization
- Length and format restrictions

### Rate Limiting
- Configurable request limits
- Time-based windows
- IP-based tracking

### Data Sanitization
- SQL injection prevention
- XSS protection
- File type validation

## 📈 Analytics & Tracking

### Form Analytics
- Submission timestamps
- Page referrer tracking
- Form fill time measurement
- Abandonment tracking

### Performance Metrics
- Database query optimization
- Email delivery tracking
- Error rate monitoring

## 🛠️ Development

### Adding New Services
1. Update `prisma/schema.prisma`
2. Add to `prisma/seed.ts`
3. Update validation schemas
4. Test with form submission

### Customizing Email Templates
- Modify `lib/services/email.ts`
- Update HTML templates
- Test with different data scenarios

### Database Schema Changes
1. Update Prisma schema
2. Run `pnpm run db:generate`
3. Run `pnpm run db:push`
4. Update affected code

## 🧪 Testing

### Test Email Service
```typescript
import { emailService } from '@/lib/services/email'

// Test admin notification
await emailService.sendContactNotification(mockSubmission)

// Test auto-reply
await emailService.sendAutoReply(mockSubmission)
```

### Test Validation
```typescript
import { contactFormSchema } from '@/lib/validation/contact'

const { error, value } = contactFormSchema.validate(testData)
```

## 🚀 Production Deployment

### Environment Variables
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET`
- Configure production database
- Set up production SMTP

### Database
- Use production PostgreSQL instance
- Enable connection pooling
- Set up automated backups
- Monitor performance

### Security
- Enable HTTPS
- Configure CORS properly
- Set up monitoring and logging
- Regular security updates

## 📝 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check `DATABASE_URL` format
   - Verify database server is running
   - Check firewall settings

2. **Email Not Sending**
   - Verify SMTP credentials
   - Check Gmail App Password setup
   - Review email service logs

3. **Validation Errors**
   - Check request body format
   - Verify required fields
   - Review validation schema

### Debug Mode
Enable detailed logging:
```bash
DEBUG=prisma:* pnpm run dev
```

## 🤝 Contributing

1. Follow existing code patterns
2. Add tests for new features
3. Update documentation
4. Use conventional commits

## 📄 License

This project is proprietary to AngaTech.

---

**Need Help?** Contact the development team or check the issue tracker.
