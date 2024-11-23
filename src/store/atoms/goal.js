import { atom } from 'recoil';
import { GOALS } from "../../constants/dummy"

const goalAtom = atom({
  key: 'goalAtom',
  default: GOALS,
});

export default goalAtom;