import {readFruitsFromDb} from '@/app/db';
import {persistFruit, persistFruitForm} from '@/app/actions';
import {FruitForm} from '@/app/cart/FruitForm';
import {Suspense} from 'react';

export default async function Cart() {

  const fruits = await readFruitsFromDb();

  function addFruit() {
    console.log('Adding fruit');
  }
  
  console.log('Rendering Cart')
  return (
    <div>
      <article>
        {/*<button onClick={addFruit}>Add new Fruit</button>*/}
        <form action={persistFruitForm}>
          <input type="text" name="fruitName"/>
          <button type="submit">Add Fruit</button>
        </form>
      </article>
      <FruitForm/>
      <h1>Display of Cart.</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <CartList/>
      </Suspense>
      {/*<article>*/}
      {/*  <ul>*/}
      {/*    {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}*/}
      {/*  </ul>*/}
      {/*</article>*/}
    </div>
  );
}

export async function CartList() {
  const fruits = await readFruitsFromDb();

  console.log('Rendering Cart List', fruits)
  return (
    <article>
      <ul>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    </article>
  );
}
