import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"
import { client } from "./lib/apollo"

function App() {
  const { data } = useQuery<{ lessons : Lesson[] }>( GET_LESSONS_QUERY )

  return (
    <Event/>
  )
}

export default App
