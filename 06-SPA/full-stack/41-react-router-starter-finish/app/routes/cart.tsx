import {Await, Form, useFetcher, useNavigation} from 'react-router';
import {type Route} from '../../.react-router/types/app/routes/+types/cart';
import {Counter} from '~/resources/counter';
import {Suspense} from 'react';

let fruits = ['Apple', 'Orange', 'Banana'];

async function readDataFromDb() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return fruits
}

export async function loader(args: Route.LoaderArgs) {
  console.log("Loading Cart.")
  const fruits = readDataFromDb()
  return {fruits};
}

export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData()
  console.log("Cart action.", formData)
  const fruit = formData.get('fruit') as string;
  // fruits.push(new Date().toISOString())
  fruits.push(fruit)
}


export default function Cart({loaderData}: Route.ComponentProps) {
  console.log("Rendering Cart.", loaderData)
  const navigation = useNavigation();
  
  function handleClick() {
  }
  
  return (
    <>
      <Form method={'post'}>
        <label>
          <span>Fruit</span>
          <input type="text" name="fruit"/>
        </label>
        <button onClick={() => handleClick} type="submit">Add Fruit</button>
      </Form>
      { navigation.state !== 'idle' && <div>Saving...</div> }
      <h1>
        Display of Cart:
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={loaderData.fruits}>
        {(fruits) => (
          <ul>
            {fruits.map((fruit: any) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        )}
      </Await>
      </Suspense>
      {/*<Counter/>*/}
    </>
  );
}
