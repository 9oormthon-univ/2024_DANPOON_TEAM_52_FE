import { useState, useEffect } from "react"
import { useStepNavigation } from "./useStepNavigation"
export function usePickedItems(initialItems, popStateHandler) {
  //세부 관심사
  const [pickedItems, setPickedItems] = useState(
    initialItems ? initialItems.split(" ") : []
  )
  const [jobItem, setJobItem] = useState("")
  const { updateStep } = useStepNavigation()
  useEffect(() => {
    if (popStateHandler) {
      popStateHandler()
    }
  }, [popStateHandler])

  const selectItem = (event) => {
    const index = event.target.dataset.index
    setJobItem(index)
    updateStep(1, jobItem)
  }

  return { pickedItems, jobItem, setJobItem, selectItem }
}
