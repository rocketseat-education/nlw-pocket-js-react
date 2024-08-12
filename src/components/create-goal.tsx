import { X } from 'lucide-react'
import { Button } from './ui/button'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './ui/radio-group'
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>

            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">
                Qual a atividade?
              </Label>

              <Input 
                name="title" 
                id="title"  
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredWeeklyFrequency">
                Quantas vezes na semana?
              </Label>

              <RadioGroup name="desiredWeeklyFrequency" id="desiredWeeklyFrequency">
                {Array.from({ length: 7 }).map((_, i) => {
                  const frequency = String(i + 1)

                  return (
                    <RadioGroupItem key={i} value={frequency}>
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">{frequency}x na semana</span>
                      <span className="text-lg leading-none">🥱</span>
                    </RadioGroupItem>
                  )
                })}
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1">Fechar</Button>
            </DialogClose>

            <Button type="submit" className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}