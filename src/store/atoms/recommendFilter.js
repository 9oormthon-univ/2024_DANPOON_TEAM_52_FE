import { atom } from "recoil"

export const recommendFilterAtom = atom({
  key: "recommendFilterAtom",
  default: {},
})

export const selectedRecommendFilterAtom = atom({
  key: "selectedRecommendFilterAtom",
  default: {
    status: "filter",
    category: "all",
    name: "all",
  },
})
