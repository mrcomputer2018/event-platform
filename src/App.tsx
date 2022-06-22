import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

function App() {
  const { data } = useQuery<{ lessons : Lesson[] }>( GET_LESSONS_QUERY )

   return (
    <>
    </>
  )
}

export default App
