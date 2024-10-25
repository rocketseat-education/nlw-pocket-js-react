import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQueryClient } from '@tanstack/react-query'
import {
  getGetPendingGoalsQueryKey,
  getGetUserExperienceAndLevelQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateCompletion,
  useGetPendingGoals,
} from '../http/generated/api'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useGetPendingGoals()

  const { mutateAsync: createGoalCompletion } = useCreateCompletion()

  if (isLoading || !data) {
    return null
  }

  async function handleCreateGoalCompletion(goalId: string) {
    await createGoalCompletion({ data: { goalId } })

    queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
    queryClient.invalidateQueries({
      queryKey: getGetUserExperienceAndLevelQueryKey(),
    })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            onClick={() => handleCreateGoalCompletion(goal.id)}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
