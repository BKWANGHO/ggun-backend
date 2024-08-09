import { create } from 'zustand'

interface askTradeState {
    data: IAskTrade,
    action : {
        update: (data: IAskTrade) => void,
        pdQtyIncrease: () => void,
        pdQtyDecrease: () => void,
    }
}

const useaskTradeStore = create<askTradeState>()((set, get) => ({
    data: {
        pdno: '',
        prdtName: '',
        pdQty: 0,
        avgPrvs: 0,
        tradeType: '',
        account: 0,
        acpw: 0,
        sllBuyDvsnCd: 1,
        ordDvsnCd: 2,
    },
    action : {
        update: (data: IAskTrade) => {
            set({ data })
            console.log("set : ", data)
        },
        pdQtyIncrease: () => {
            const currentData = get().data;
            set({ data: { ...currentData, pdQty: currentData.pdQty + 1 } });
            console.log("pdQtyIncrease : ", currentData)
        },
        pdQtyDecrease: () => {
            const currentData = get().data;
            set({ data: { ...currentData, pdQty: currentData.pdQty - 1 } });
            console.log("pdQtyDecrease : ", currentData)
        },
    }
}))

export const useaskTradeAction = () => useaskTradeStore((store) => store.action)
export const useaskTradeStack = () => useaskTradeStore((store) => store.data)
export const useaskTradeState = () => useaskTradeStore.getState();
