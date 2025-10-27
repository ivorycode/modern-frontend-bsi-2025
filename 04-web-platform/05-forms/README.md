# Fastify TypeScript API

A simple TypeScript project with Fastify that implements two API endpoints.

## Endpoints

1. **POST /api/json** - Accepts JSON data and prints it to the console
2. **POST /api/form** - Accepts native web platform FormData (multipart/form-data) and prints it to the console

## Requirements

- Node.js 20+ (required for native FormData API support)

## Getting Started

### Run in development mode:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
npm start
```

## Testing the Endpoints

### Using the web interface:
Visit http://localhost:3000/test.html in your browser to test both endpoints with a simple web form.

### Test JSON endpoint:
```bash
curl -X POST http://localhost:3000/api/json \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "email": "john@example.com"}'
```

### Test form endpoint (multipart/form-data):
```bash
curl -X POST http://localhost:3000/api/form \
  -F "name=John" \
  -F "email=john@example.com"
```
