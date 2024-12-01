import { atom } from "recoil";
const promptAtom = atom({
    key:'promptAtom',
    default:{
        known_prompt:"",
        help_prompt:"",
    }
})
export default promptAtom;