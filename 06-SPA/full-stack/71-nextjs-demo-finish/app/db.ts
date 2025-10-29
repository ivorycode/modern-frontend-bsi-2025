let _fruits = ['Apple', 'Banana', 'Orange'];

export async function readFruitsFromDb() {
  console.log('Reading fruits from database');
  await new Promise(resolve => setTimeout(resolve, 1000));
  return _fruits
}

export async function persistFruitToDb(fruit: string) {
  _fruits.push(fruit);
  console.log('Persisted fruit to database: ', fruit);
}