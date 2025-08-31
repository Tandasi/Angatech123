#!/usr/bin/env node

/**
 * Professional Database Setup Script
 * Sets up local development database with proper configuration
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up professional database infrastructure...\n');

// Check if Docker is available
function checkDocker() {
  try {
    execSync('docker --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Setup local PostgreSQL with Docker
function setupLocalDatabase() {
  console.log('📦 Setting up local PostgreSQL database...');
  
  try {
    // Stop existing container if running
    try {
      execSync('docker stop angatech-postgres', { stdio: 'ignore' });
      execSync('docker rm angatech-postgres', { stdio: 'ignore' });
    } catch (error) {
      // Container doesn't exist, continue
    }
    
    // Create new PostgreSQL container
    execSync(`
      docker run --name angatech-postgres \
        -e POSTGRES_DB=angatech_dev \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=password \
        -p 5432:5432 \
        -d postgres:15
    `, { stdio: 'inherit' });
    
    console.log('✅ Local PostgreSQL database started successfully!');
    console.log('📍 Database URL: postgresql://postgres:password@localhost:5432/angatech_dev');
    
    return true;
  } catch (error) {
    console.error('❌ Failed to start local database:', error.message);
    return false;
  }
}

// Setup environment files
function setupEnvironment() {
  console.log('\n🔧 Setting up environment configuration...');
  
  const envDevPath = path.join(process.cwd(), '.env.development');
  const envProdPath = path.join(process.cwd(), '.env.production');
  
  // Copy example files if they don't exist
  if (!fs.existsSync(envDevPath)) {
    try {
      fs.copyFileSync('env.development.example', '.env.development');
      console.log('✅ Development environment file created');
    } catch (error) {
      console.log('⚠️  Please manually create .env.development from env.development.example');
    }
  }
  
  if (!fs.existsSync(envProdPath)) {
    try {
      fs.copyFileSync('env.production.example', '.env.production');
      console.log('✅ Production environment file created');
    } catch (error) {
      console.log('⚠️  Please manually create .env.production from env.production.example');
    }
  }
}

// Setup database schema
function setupDatabaseSchema() {
  console.log('\n🗄️  Setting up database schema...');
  
  try {
    // Generate Prisma client
    execSync('pnpm run db:generate', { stdio: 'inherit' });
    console.log('✅ Prisma client generated');
    
    // Push schema to database
    execSync('pnpm run db:push', { stdio: 'inherit' });
    console.log('✅ Database schema deployed');
    
    // Seed initial data
    execSync('pnpm run db:seed', { stdio: 'inherit' });
    console.log('✅ Database seeded with initial data');
    
    return true;
  } catch (error) {
    console.error('❌ Failed to setup database schema:', error.message);
    return false;
  }
}

// Main setup function
async function main() {
  console.log('🎯 Professional Database Setup for AngaTech\n');
  
  // Check Docker availability
  if (!checkDocker()) {
    console.log('⚠️  Docker not found. Please install Docker to continue.');
    console.log('📖 Visit: https://docs.docker.com/get-docker/');
    return;
  }
  
  // Setup local database
  const dbSetup = setupLocalDatabase();
  if (!dbSetup) {
    console.log('❌ Database setup failed. Please check Docker installation.');
    return;
  }
  
  // Wait for database to be ready
  console.log('\n⏳ Waiting for database to be ready...');
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Setup environment
  setupEnvironment();
  
  // Setup database schema
  const schemaSetup = setupDatabaseSchema();
  if (!schemaSetup) {
    console.log('❌ Schema setup failed. Please check database connection.');
    return;
  }
  
  console.log('\n🎉 Professional database setup completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Start development server: pnpm run dev');
  console.log('2. Test contact form at: http://localhost:3000/contact');
  console.log('3. Check database at: http://localhost:3000/api/contact');
  console.log('\n🚀 Ready for professional development!');
}

// Run setup
main().catch(console.error);
