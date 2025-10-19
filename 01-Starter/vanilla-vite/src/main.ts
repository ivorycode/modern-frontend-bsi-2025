import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="max-w-[1280px] mx-auto px-8 py-8 text-center">
    <div class="flex justify-center items-center gap-4">
      <a href="https://vite.dev" target="_blank" >
        <img src="${viteLogo}" class="h-36 p-6 duration-300 hover:drop-shadow-vite-glow" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="h-36 p-6 duration-300 hover:drop-shadow-typescript-glow" alt="TypeScript logo" />
      </a>
    </div>
    <h1 class="text-[3.2em] font-bold leading-[1.1]">Vite + TypeScript</h1>
    <div class="p-8">
      <button id="counter" type="button" class="rounded-lg border border-gray-300 px-5 py-2.5 cursor-pointer"></button>
    </div>
    <p class="text-text-muted">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
