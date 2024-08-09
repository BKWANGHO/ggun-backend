'use client'
import { useState } from "react";
import { TabButton } from "../button/tabButton";
import { GrayButton, MoveButton } from "../button/buttons";
import { useaskTradeAction, useaskTradeStack } from "@/app/store/askTrade";

export default function TradeOrder({ props }: { props: number }) {

    const [volume, setVolume] = useState(1);
    const [price, setPrice] = useState(0);

    function handleCount(value: number) {
        value == 1 ? setVolume(volume + 1) : setVolume(volume - 1);
    }

    const tradeOrder = useaskTradeAction();
    const order:IAskTrade = useaskTradeStack();

    const handleOrder = (e: any) => {
        tradeOrder.update({ ...order, [e.target.name]: e.target.value });
        console.log('order : ' + JSON.stringify(order))
    }
    const subminOrder = (e: any) => {
        tradeOrder.update({ ...order, [e.target.name]: e.target.value });
        console.log('order : ' + JSON.stringify(order))
    }

    return (
        <div className="w-full h-full ">
            <div className="h-[50px] grid grid-cols-2">
                <TabButton name="sllBuyDvsnCd" value="1" click={handleOrder} select={order.sllBuyDvsnCd == 1}>매수</TabButton>
                <TabButton name="sllBuyDvsnCd" value="2" click={handleOrder} select={order.sllBuyDvsnCd == 2}>매도</TabButton>
            </div>
            <div className="border border-t-0 p-5 content-center space-y-3" >
                <div className="flex justify-center gap-4">
                    <label className="flex content-center" id="input1"><input type="radio" name="ordDvsnCd" className="w-5" value={2} onClick={handleOrder} readOnly/>지정가</label>
                    <label className="flex content-center" id="input2"><input type="radio" name="ordDvsnCd" className="w-5" value={1} onClick={handleOrder} defaultChecked readOnly/>현재가</label>
                </div>
                <div className="gap-4 space-y-2">
                    <label className="content-center">지정가</label>
                        <input type="text" className="w-auto" name="avgPrvs" 
                        value={order.sllBuyDvsnCd == 2 ? order.avgPrvs : ''}
                        onChange={(e: any) => setPrice(Number(e.target.value))} />
                    <div className="flex">
                        <GrayButton style="min-w-[30px] w-[1%]" name="pdQty" click={tradeOrder.pdQtyIncrease} >+</GrayButton>
                        <label className="flex content-center gap-3 w-auto"><input type="number" className="" value={order.pdQty} onChange={handleOrder} /></label>
                        <GrayButton style="min-w-[30px] w-[1%]" name="pdQty" click={tradeOrder.pdQtyDecrease} >-</GrayButton>
                    </div>
                </div>
                <div className="text-pebble-500 text-xl bold h-[20%] bg-pebble-400 grid grid-cols-2 space-y-3 ">
                    <div className=" border">주문금액</div>
                    <div className="text-right">{price * volume}원</div>
                </div>
                <div className="flex justify-center w-full h-[50px]">
                    <button onClick={subminOrder}
                    className={`border rounded-lg shadow-lg w-[70%] hover:bg-slate-100 text-2xl ${order.sllBuyDvsnCd == 1 ? 'text-blue-400':'text-red-400'}`}>
                        {order.sllBuyDvsnCd == 1 ? "현금 매수": "현금 매도"}</button>
                </div>
            </div>
        </div>
    )
};