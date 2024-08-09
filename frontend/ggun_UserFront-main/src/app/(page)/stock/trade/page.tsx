'use client'

import { KisAskPriceDummy } from "@/app/common/dummy/kis.dummy";
import AskPriceChart from "@/app/component/chart/askPriceChart";
import CandleChart from "@/app/component/chart/candleChart";
import QuoteChart from "@/app/component/chart/quoteChart";
import StockInfo from "@/app/component/stock/stockInfo";
import { WhiteBox } from "@/app/component/style/whiteBox";
import TradeOrder from "@/app/component/trade/tradeOrder";
import { fetchKisAskingprice } from "@/app/service/kis/kis.api";
import { useaskTradeAction } from "@/app/store/askTrade";
import { useQuery } from "@tanstack/react-query";


export default function AskTrade({ props }: { props: number }) {

    const queryKisAskPrice = async (): Promise<IKisAskPrice[]> => {
        const response = await fetchKisAskingprice()
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    // const { data } = useQuery<IKisAskPrice[]>(
    //     {
    //         queryKey: ["kisAskPrice"],
    //         queryFn: queryKisAskPrice,
    //         placeholderData: [KisAskPriceDummy],
    //     }
    // );

    const data: IKisAskPrice[] = [KisAskPriceDummy];
    const ask: IAskPriceOutput1[] = [KisAskPriceDummy.output1];

    // const askp: string[] = Array.from({ length: 10 }, (_, index) =>
    //     KisAskPriceDummy.output1[`askp${index + 1}` as keyof IAskPriceOutput1]
    // ) as string[];


    const handleAskPrice = () => { }
    const tradeOrder = useaskTradeAction();

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="grid grid-cols-2 gap-1">
                <div className="content-center">
                    <div className="border rounded-lg">
                        {data && Array.from({ length: 5 }, (v: any, i: number) => (
                            <button key={i + 2} className="text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer" 
                            onClick={()=>tradeOrder.update} value={parseInt(ask[0][`askp${i + 1}` as keyof IAskPriceOutput1])}>
                                <div className="w-1/3"><QuoteChart props={{ data: ask[0][`askp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask[0].total_askp_rsqn, color: '#F87171' }} /></div>
                                <div className={`w-1/3 text-xl items-center hover:text-red-600
                                    ${data[0].output2.stck_prpr < ask[0][`bidp${i + 1}` as keyof IAskPriceOutput1] ? 'text-blue-400' : 'text-red-400'}`}>
                                    {parseInt(ask[0][`askp${i + 1}` as keyof IAskPriceOutput1])?.toLocaleString()}
                                </div>
                                <div className="w-1/3 text-slate-400 content-center">{ask[0][`askp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1]}</div>
                            </button>
                        ))}
                        {data && Array.from({ length: 6 }, (v: any, i: number) => (
                            <div key={i + 2} className={`text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer
                            ${data[0].output2.stck_prpr == ask[0][`bidp${i + 1}` as keyof IAskPriceOutput1] ? 'border-y-2 border-pebble-600 border-dashed ' : ''}`}>
                                <div className="w-1/3 "><QuoteChart props={{ data: ask[0][`bidp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask[0].total_askp_rsqn, color: '#60a5fa' }} /></div>
                                <div className={`w-1/3 text-xl content-center hover:text-blue-600
                                    ${data[0].output2.stck_prpr < ask[0][`bidp${i + 1}` as keyof IAskPriceOutput1] ? 'text-red-400' : 'text-blue-400'}`}>
                                    {parseInt(ask[0][`bidp${i + 1}` as keyof IAskPriceOutput1])?.toLocaleString()}
                                </div>
                                <div className="w-1/3 text-slate-400 content-center">{ask[0][`bidp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1]}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-pebble-100 text-white col-span-2 text-center">잔량 총합 {parseInt(ask[0].ntby_aspr_rsqn).toLocaleString()}</div>
                </div>
                <div className=" w-full h-full"><TradeOrder props={props}/></div>
            </div>
        </div>
    )
}