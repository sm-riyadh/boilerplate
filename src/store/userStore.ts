import { create } from "zustand";
import { User } from "../models/user.ts";

interface  Action {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const initUserStore = () => create<User & Action>()((set) => ({
  name: "Temp",
  password: "",
  age: 0,
  email: "",

  setName: (value: string) =>
    set(() => ({
      name: value,
    })),

  setEmail: (value: string) =>
    set(() => ({
      email: value,
    })),

  setPassword: (value: string) =>
    set(() => ({
      password: value,
    })),
}));