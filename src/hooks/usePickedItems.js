import { useState, useEffect } from "react"
import { useStepNavigation } from "./useStepNavigation"
export function usePickedItems(initialItems, popStateHandler) {
  //세부 관심사
  const [pickedItems, setPickedItems] = useState(
    initialItems ? initialItems.split(" ") : []
  )
  const [jobItem, setJobItem] = useState("")
  const {updateStep} = useStepNavigation();
  useEffect(() => {
    if (popStateHandler) {
      popStateHandler()
    }
  }, [popStateHandler])

  const toggleItem = (item) => {
    setPickedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const selectItem = (event) => {
    const index = event.target.dataset.index;
    setJobItem(index);
    updateStep(1, jobItem)
  };
  
  //callback : 서버에 데이터 전송(선택항목)
  const sendData = (callback) => {
    if (callback) callback()
  }

  return { pickedItems, jobItem, setJobItem, toggleItem, selectItem, sendData }
}
