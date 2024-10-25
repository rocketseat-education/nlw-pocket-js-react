import * as ProgressPrimitive from '@radix-ui/react-progress'
import { twMerge } from 'tailwind-merge'

export function Progress(props: ProgressPrimitive.ProgressProps) {
  return (
    <ProgressPrimitive.Progress
      {...props}
      className={twMerge('bg-zinc-900 rounded-full h-2', props.className)}
    />
  )
}

export function ProgressIndicator(
  props: ProgressPrimitive.ProgressIndicatorProps
) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className="bg-gradient-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full"
    />
  )
}
