import { describe, it, expect } from 'vitest';

interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
    number: number;
  };
  hobbies: string[];
}

describe('JSON stringify and parse', () => {
  it('should serialize and deserialize an object correctly', () => {
    // Original object
    const originalObject: Person = {
      name: 'John Doe',
      age: 30,
      address: {
        city: 'New York',
        street: 'Main St',
        number: 123
      },
      hobbies: ['reading', 'coding', 'gaming']
    };

    // Stringify the object
    const jsonString: string = JSON.stringify(originalObject);

    // Parse it back
    const parsedObject: Person = JSON.parse(jsonString);

    // Compare with original
    expect(parsedObject).toEqual(originalObject);
  });
});
