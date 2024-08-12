import { DialogOverlay, DialogContent, DialogPortal, DialogClose, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle, X } from 'lucide-react'

export function CreateGoal() {
  return (
    <DialogPortal>
      <DialogOverlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

      <DialogContent className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 flex flex-col justify-between p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold">Cadastrar meta</DialogTitle>

              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>

            <DialogDescription className="text-zinc-400 text-sm leading-relaxed">
              Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.
            </DialogDescription>
          </div>

          <form action="" className="space-y-6">
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="title"
                className="font-medium text-sm tracking-tight leading-normal" 
              >
                Qual a atividade?
              </label>

              <input 
                type="text" 
                name="title" 
                id="title"  
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
                className="px-4 h-12 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="desiredWeeklyFrequency"
                className="font-medium text-sm tracking-tight leading-normal" 
              >
                Quantas vezes na semana?
              </label>

              <RadioGroup id="desiredWeeklyFrequency" className="flex flex-col gap-2">
                {Array.from({ length: 7 }).map((_, i) => {
                  const frequency = String(i + 1)

                  return (
                    <RadioGroupItem 
                      key={i}
                      value={frequency} 
                      className="group bg-black border border-zinc-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10 data-[state=checked]:bg-pink-500/5 data-[state=checked]:border-pink-500"
                    >
                      <Circle className="size-4 text-zinc-600 group-data-[state=checked]:hidden" />
                      <CheckCircle2 className="size-4 text-pink-500 hidden group-data-[state=checked]:inline" />

                      <span className="text-zinc-300 text-sm font-medium leading-none">{frequency}x na semana</span>
                      <span className="text-lg leading-none">🥱</span>
                    </RadioGroupItem>
                  )
                })}
              </RadioGroup>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3">
          <DialogClose className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-400 text-sm font-medium tracking-tight hover:bg-zinc-800">
            Fechar
          </DialogClose>

          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-500 text-indigo-50 text-sm font-medium tracking-tight hover:bg-violet-600">
            Salvar
          </button>
        </div>
      </DialogContent>
    </DialogPortal>
  )
}