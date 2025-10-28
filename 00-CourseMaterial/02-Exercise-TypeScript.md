
## Exercise: TypeScript

### Online Exercises:

Here are some good TypeScript exercises https://typescript-exercises.github.io/



### Installing a 3rd Party Library:

Start with `01-starter/vanilla-vite`. Run `npm install` and `npm dev`.

Install jQuery: `npm i jquery`

In `main.ts` add the following snippets:

```
import $ from 'jquery';

$.get('https://swapi.info/api/people/1').then((data) => {
  console.log(data)
})
```

=> The code works, but there is a TypeScript error.

Create the file `src/types.d.ts` with:
```
declare module 'jquery';
```

=> The above TypeScript error disappears.

=> but $ is untyped ... `$.gugus()` does not produce a compile error ...

Extend `src/types.d.ts` :

```
declare module 'jquery' {
  const $: { 
    get: (url:string) => Promise<any>
  }
  export default $;
}
```

=> $ in `main.ts` becomes typesafe ...

Imagine the effort to declare all the functions of jQuery ....

Delete `src/types.d.ts`

Run: `npm i -D @types/jquery`

Tada!!
