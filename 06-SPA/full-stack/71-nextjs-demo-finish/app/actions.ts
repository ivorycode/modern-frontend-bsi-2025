'use server'



import {persistFruitToDb} from '@/app/db';
import {revalidatePath} from 'next/cache';

export async function persistFruitForm(data: FormData) {
  console.log('Persisting fruit form')
  const fruitName = data.get("fruitName") as string;
  // TODO Validation!!!
  await persistFruitToDb(fruitName);
  revalidatePath("/")
}

export async function persistFruit(fruitName: string) {
  console.log('Persisting fruit:', fruitName)
  await persistFruitToDb(fruitName);
  revalidatePath("/")
}