import { atom } from "recoil"
import { resumeData } from "../../constants/data"
const resumeAtom = atom({
  key: "resumeAtom",
  default: resumeData,
})
export default resumeAtom
