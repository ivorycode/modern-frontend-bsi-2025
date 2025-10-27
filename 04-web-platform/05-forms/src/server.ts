import Fastify from 'fastify';
import multipart from '@fastify/multipart';

const fastify = Fastify({
  logger: true
});

// Register multipart plugin to handle FormData (multipart/form-data)
// attachFieldsToBody is required for formData() method
fastify.register(multipart, { attachFieldsToBody: true });

// First endpoint: Handle JSON data
fastify.post('/api/json', async (request, reply) => {
  console.log('=== JSON Data Received ===');
  console.log(request.body);
  console.log('========================\n');

  return { success: true, message: 'JSON data received and logged' };
});

// Second endpoint: Handle form data using native FormData API
fastify.post('/api/form', async (request, reply) => {
  // Use native FormData API (requires Node.js 20+)
  const formData = await request.formData();

  // Create a plain JavaScript object from FormData
  const extractedData: Record<string, any> = {};
  for (const [key, value] of formData.entries()) {
    extractedData[key] = value;
  }

  console.log('=== Form Data Received ===');
  console.log(extractedData);
  console.log('=========================\n');

  return { success: true, message: 'Form data received and logged' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
    console.log('Available endpoints:');
    console.log('  POST /api/json  - Send JSON data');
    console.log('  POST /api/form  - Send form data');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
