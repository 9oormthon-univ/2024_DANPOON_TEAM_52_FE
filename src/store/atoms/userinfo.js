import { atom } from "recoil";
const userInfoAtom = atom({
    key: `userInfoAtom`,
    default: {
        nickname: "",
        known_prompt: "",
        help_prompt: "",
        is_notification: false,
        is_profile: false
    }
});
export default userInfoAtom;