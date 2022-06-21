import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query lessons {
    lessons {
      id
      title
    }
  }
`

function App() {
  const { data } = useQuery( GET_LESSONS_QUERY)

   return (
   <h1 className="title">Hello World!!!</h1>
  )
}

export default App
