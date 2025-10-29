'use client'
import {persistFruit} from '@/app/actions';

export function FruitForm() {
  console.log('Rendering FruitForm')

  async function addFruit() {
    console.log('Adding fruit');
    await persistFruit(new Date().toISOString());
  }

  return (
    <article>
      <div> Display of FruitForm.</div>
      <button onClick={addFruit} >Add Fruit</button>
    </article>
  );
}
