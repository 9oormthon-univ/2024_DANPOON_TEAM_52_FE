import { useParams } from "react-router-dom"
import BaseLayout from "../../components/BaseLayout"
import List from "./List"

export default function Search() {
  const { id } = useParams()
  return <BaseLayout>{id ? <></> : <List />}</BaseLayout>
}
