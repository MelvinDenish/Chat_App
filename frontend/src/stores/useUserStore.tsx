import { create } from "zustand";

type userStoreType = {
    userName : string ,
    userId : string,
    setUserName : (name : string) => void,
    setUserId : (id : string ) => void,
}
export const useUserStore = create<userStoreType>((set) => (
    {
        userName : "",
        userId : "",
        setUserName : (name) => {
            set({userName : name})
        },
        setUserId : (id) =>{
            set({userId : id})
        }
    }
))