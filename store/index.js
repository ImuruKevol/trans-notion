import { atom } from "recoil";

export const loginState = atom({
  key: "login",
  default: {
    key: null,
    value: false,
  }
})

export const loadingState = atom({
  key: "loading",
  default: false,
});

// export default {
//   loginState: atom({
//     key: "login",
//     default: {
//       key: null,
//       value: false,
//     }
//   }),
//   loadingState: atom({
//     key: "loading",
//     default: false,
//   }),
// }
