import { atom } from "recoil";

export const login = atom({
  key: "login",
  default: {
    key: null,
    value: false,
  }
})
