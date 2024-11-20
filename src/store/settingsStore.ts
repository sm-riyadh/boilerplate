import { create } from "zustand";
import { User } from "../models/user.ts";

interface Values {
  value: User;
}
interface Actions {
  set: (value: unknown) => void;
}

export default create<Values & Actions>()((set) => ({
  value: <User>{
    name: "",
    email: "",
    password: "",
  },
  set: (value: unknown) =>
    set((state: Values) => ({
      value: { ...state.value, ...(value as User) },
    })),
}));