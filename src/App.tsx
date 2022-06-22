import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"
import { client } from "./lib/apollo"

function App() {
 
  return (
    <Event/>
  )
}

export default App
