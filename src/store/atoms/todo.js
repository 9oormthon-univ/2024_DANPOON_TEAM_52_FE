import { atom } from "recoil"
const calendarAtom = atom({
  key: "calendarAtom",
  default: {
    quest_response_dto_list: [],
    schedule_response_dto_list: [],
  },
})
export default calendarAtom
