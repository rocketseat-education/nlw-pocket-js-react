import { CheckCircle2, Plus } from "lucide-react";
import { InOrbitIcon } from "./in-orbit-icon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";

export function WeeklySummary() {
  return (
    <main className="max-w-[480px] py-10 px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">05 a 12 de Agosto</span>
        </div>

        <DialogTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500 text-indigo-50 text-sm font-medium tracking-tight hover:bg-violet-600">
          <Plus className="size-4" />
          Cadastrar meta
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={50} max={100} className="bg-zinc-900 rounded-full h-2">
          <ProgressIndicator className="bg-gradient-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full" />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Você completou <span className="text-zinc-100">8</span> de <span className="text-zinc-100">15</span> metas nessa semana.</span>
          <span>58%</span>
        </div>
      </div>

      <div className="h-px bg-zinc-900" />

      <div className="flex flex-wrap gap-3">
        <button className="flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700">
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </button>

        <button className="flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700">
          <Plus className="size-4 text-zinc-600" />
          Praticar exercício
        </button>

        <button className="flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700">
          <Plus className="size-4 text-zinc-600" />
          Levantar cedo
        </button>

        <button 
          disabled
          className="flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Plus className="size-4 text-zinc-600" />
          Manter uma boa alimentação
        </button>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        <div className="space-y-4">
          <h3 className="font-medium">Hoje <span className="text-zinc-400 text-xs">(06 de agosto)</span></h3>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:13h</span>
              </span>
              <button className="underline text-zinc-500 text-xs hover:text-zinc-400">
                Desfazer
              </button>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Meditar</span>" às <span className="text-zinc-100">08:13h</span>
              </span>
              <button className="underline text-zinc-500 text-xs hover:text-zinc-400">
                Desfazer
              </button>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Praticar exercício</span>" às <span className="text-zinc-100">08:13h</span>
              </span>
              <button className="underline text-zinc-500 text-xs hover:text-zinc-400">
                Desfazer
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Ontem <span className="text-zinc-400 text-xs">(05 de agosto)</span></h3>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:13h</span>
              </span>
              <button className="underline text-zinc-500 text-xs hover:text-zinc-400">
                Desfazer
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Quarta-feira <span className="text-zinc-400 text-xs">(04 de agosto)</span></h3>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "<span className="text-zinc-100">Acordar cedo</span>" às <span className="text-zinc-100">08:13h</span>
              </span>
              <button className="underline text-zinc-500 text-xs hover:text-zinc-400">
                Desfazer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}