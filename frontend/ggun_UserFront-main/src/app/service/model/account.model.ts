interface IAccount {
    id?: number,
    account?:number,
    acno?: string,
    receiveAcId?: number,
    acpw?: string,
    balance?: number,
    refundAcno?: string,
    bank?: string,
    briefs?: string
    acType?: string,
    tradeType?: string,
    paymentUid?: string,
    regDate?: string,
    modDate?: string,
}

interface IAskTrade {
    pdno: string,
    prdtName: string,
    pdQty: number,
    avgPrvs: number,
    tradeType: string,
    account: number,
    acpw: number,
    sllBuyDvsnCd: number,
    ordDvsnCd: number
}