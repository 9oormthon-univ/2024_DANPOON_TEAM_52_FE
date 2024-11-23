import { atom } from "recoil";
const userAtom = atom({
  key: 'userAtom',
  default: {
    nickname: "김구름",
    image_url: ""
  },
});

export default userAtom;