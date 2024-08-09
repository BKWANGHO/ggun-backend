import { create } from 'zustand'

interface AccountState {
    data: IAccount[],
    update: (data: IAccount[]) => void,
}

const useAccountStore = create<AccountState>()((set) => ({
    data: [],
    // update : ()=> set( (state) => ({ data:{ ...state.data, ...state } }) ),
    update: (data: IAccount[]) => set({ data }),
}))

export const useAccountAction = () => useAccountStore((store) => store.update)
export const useAccountStack = () => useAccountStore((store) => store.data)
export const useAccountState = () => useAccountStore.getState();
