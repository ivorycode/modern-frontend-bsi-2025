import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import staticPlugin from '@fastify/static';
import path from 'path';
import { z } from 'zod';

const fastify = Fastify({
  logger: true
});

// Zod validation schema for form data
const formDataSchema = z.object({
  name: z.string().min(1, 'Name is required').trim(),
  email: z.string().min(1, 'Email is required').email('Invalid email format').trim()
});

// Register static plugin to serve test.html and other static files
// Root points to client directory
fastify.register(staticPlugin, {
  root: path.join(__dirname, '../client'),
  prefix: '/'
});

// Register multipart plugin to handle FormData (multipart/form-data)
// attachFieldsToBody is required for formData() method
fastify.register(multipart, { attachFieldsToBody: true });

// First endpoint: Handle JSON data
fastify.post('/api/json', async (request, reply) => {
  console.log('=== JSON Data Received ===');

  // Validate request body with Zod
  const result = formDataSchema.safeParse(request.body);

  if (!result.success) {
    reply.status(400);
    return {
      success: false,
      error: 'Validation failed',
      issues: result.error.issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message
      }))
    };
  }

  const submittedData = result.data;
  console.log(submittedData);
  console.log('========================\n');

  return { success: true, message: 'JSON data received and logged', data: submittedData };
});

// Second endpoint: Handle form data using native FormData API
fastify.post('/api/form', async (request, reply) => {
  console.log('=== Form Data Received ===');

  // Use native FormData API (requires Node.js 20+)
  const formData = await request.formData();

  // Create a plain JavaScript object from FormData
  const rawData: Record<string, any> = {};
  for (const [key, value] of formData.entries()) {
    rawData[key] = value;
  }

  // Validate with Zod
  const result = formDataSchema.safeParse(rawData);

  if (!result.success) {
    reply.status(400);
    return {
      success: false,
      error: 'Validation failed',
      issues: result.error.issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message
      }))
    };
  }

  const submittedData = result.data;
  console.log(submittedData);
  console.log('=========================\n');

  return { success: true, message: 'Form data received and logged', data: submittedData };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
    console.log('Test page: http://localhost:3000/test.html');
    console.log('\nAvailable endpoints:');
    console.log('  POST /api/json  - Send JSON data');
    console.log('  POST /api/form  - Send form data');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
