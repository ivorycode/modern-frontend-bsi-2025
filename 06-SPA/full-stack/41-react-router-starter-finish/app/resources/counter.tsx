import {useFetcher} from 'react-router';
import {useEffect} from 'react';

let _count = 41;

export function loader() {
  console.log("Counter Loader")
  return _count;
}

export function action({request}: any) {
  console.log("Counter action.", request.method)
  _count++;
  return _count;
}

export function Counter() {
  const fetcher = useFetcher()

  useEffect(() => {
    fetcher.load("/resource/counter")
  }, []);

  console.log("Rendering Counter.")
  return (
    <>
      <h1>
        Count: {fetcher.data}
      </h1>
      <button onClick={() => fetcher.submit(null, {method: 'post', action: "/resource/counter"})}>Incr!</button>
      <fetcher.Form method="post" action="/resource/counter" className="flex gap-2">
        <button type="submit">Increment</button>
      </fetcher.Form>
    </>
  )
}