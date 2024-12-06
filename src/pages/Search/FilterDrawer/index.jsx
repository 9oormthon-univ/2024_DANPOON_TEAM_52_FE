import Drawer from "../../../components/Drawer"
import { useEffect, useState } from "react"
import FilterPage from "./FilterPage"
import CategoryPage from "./CategoryPage"
import NamePage from "./NamePage"
import { reqGetJob } from "../../../apis/job"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  recommendFilterAtom,
  selectedRecommendFilterAtom,
} from "../../../store/atoms/recommendFilter"

export default function FilterDrawer({ open, onClose }) {
  const [isOpen, setIsOpen] = useState(open)
  const selectedFilter = useRecoilValue(selectedRecommendFilterAtom)
  const setRecommendFilter = useSetRecoilState(recommendFilterAtom)

  const getJobs = async () => {
    const res = await reqGetJob()
    setRecommendFilter(res.jobs)
  }
  useEffect(() => {
    setIsOpen(open)
  }, [open])
  useEffect(() => {
    getJobs()
  }, [])

  console.log("selectedFilter", selectedFilter)

  return (
    <>
      <Drawer open={isOpen} onClose={onClose}>
        {selectedFilter.status === "filter" && <FilterPage onSave={onClose} />}
        {selectedFilter.status === "category" && <CategoryPage />}
        {selectedFilter.status === "name" && <NamePage />}
      </Drawer>
    </>
  )
}
