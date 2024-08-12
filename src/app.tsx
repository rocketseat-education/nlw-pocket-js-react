import { Dialog } from "@radix-ui/react-dialog";
// import { EmptyGoals } from "./components/empty-goals";
import { CreateGoal } from "./components/create-goal";
import { WeeklySummary } from "./components/weekly-summary";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <WeeklySummary />

      <CreateGoal />
    </Dialog>
  )
}

