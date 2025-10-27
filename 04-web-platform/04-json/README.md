# JSON Test Example with Vitest and TypeScript

This is a simple example demonstrating how to write unit tests with Vitest and TypeScript for JSON serialization and deserialization.

## Prerequisites

- Node.js installed on your system

## Setup

Install the dependencies:

```bash
npm install
```

## Running the Tests

To run the test:

```bash
npm test
```

## What the Test Does

The test in `json.test.ts:1` demonstrates:

1. Defines a TypeScript interface for type safety
2. Creates a typed object with various properties
3. Serializes it to a JSON string using `JSON.stringify()`
4. Deserializes it back to a typed object using `JSON.parse()`
5. Verifies that the parsed object matches the original using `expect().toEqual()`

This confirms that JSON serialization/deserialization preserves the object structure and values correctly.
