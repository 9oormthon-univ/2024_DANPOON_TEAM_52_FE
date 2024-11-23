import Drawer from "../../../components/Drawer"
import { useEffect, useState } from "react"
import FilterPage from "./FilterPage"
import CategoryPage from "./CategoryPage"
import NamePage from "./NamePage"

export default function FilterDrawer({ open, onClose }) {
  const [isOpen, setIsOpen] = useState(open)
  const [status, setStatus] = useState("filter")
  const [filter, setFilter] = useState({
    category: "test",
    name: "all",
  })
  const close = () => {
    setIsOpen(false)
    onClose()
  }
  useEffect(() => {
    setIsOpen(open)
  }, [open])
  return (
    <>
      <Drawer open={isOpen} onClose={close}>
        {status === "filter" && (
          <FilterPage
            filter={filter}
            setFilter={setFilter}
            status={status}
            setStatus={setStatus}
          />
        )}
        {status === "category" && (
          <CategoryPage
            filter={filter}
            setFilter={setFilter}
            status={status}
            setStatus={setStatus}
          />
        )}
        {status === "name" && (
          <NamePage
            filter={filter}
            setFilter={setFilter}
            status={status}
            setStatus={setStatus}
          />
        )}
      </Drawer>
    </>
  )
}
