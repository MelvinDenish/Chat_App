import { create } from "zustand";

type userStoreType = {
    userName : string ,
    setUserName : (name : string) => void;
}
export const useUserStore = create<userStoreType>((set , get) => (
    {
        userName : "",
        setUserName : (name) => {
            set({userName : name})
        },
    }
))