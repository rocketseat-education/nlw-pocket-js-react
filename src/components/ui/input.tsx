import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Input(props: ComponentProps<'input'>) {
  return (
    <input 
      {...props}
      className={twMerge("px-4 h-12 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10", props.className)}
    />
  )
}