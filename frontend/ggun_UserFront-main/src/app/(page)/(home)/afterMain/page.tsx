'use client'

import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { MyStockList } from "@/app/component/stock/stockJisu";
import StockLank, { StockLogos } from "@/app/component/stock/stockLank";
import MyAccInfo from "@/app/component/main/myAccInfo";
import NewsTopic from "@/app/component/news/newsTopic";
import ChartRoomList from "@/app/component/chat/chatRoom";
import { stockCommunDummy } from "@/app/common/dummy/chat.dummy";
import Link from "next/link";
import Image from "next/image";
import { useNewsFetch, useNewsStack } from "@/app/store/news.store";
import MyStocks from "@/app/component/stock/myStock";

export default async function AfterHome() {

    const accList = tradeDummy;
    // const newslist: INews[] = newsDummy;

    // const highestIdPerAcno = Object.values(accList.reduce((acc: Record<string, IAccount>, account: IAccount) => {
    //     if (!acc[account.acno] || acc[account.acno].id < account.id) {
    //         acc[account.acno] = account;
    //     }
    //     return acc;
    // }, {}));


    const fecthNews = useNewsFetch();
    const newslist = useNewsStack();

    try {
        if(newslist.length == 0){
            fecthNews();
        }
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }

    return (
        <main className="w-full h-full space-y-3">
            <div className="w-full h-[300px] "><MyAccInfo /></div>
            <div className="px-8"><MyStockList /></div>

            <div className="px-8">
                <div className="text-2xl py-5">오늘의 hot토픽</div>
                <NewsTopic />
            </div>
            <div className="w-full flex justify-center">
                {/* <div className="w-[50%] ">
                <MyStocks />
            </div> */}
                <div className="w-[50%] ">
                    <StockLank />
                </div>
            </div>
            <div className="w-full flex justify-center space-x-5">
                <div className="w-[30%]">
                    <div className="text-xl py-3">인기 급상승 오픈채팅방</div>
                    <ChartRoomList />
                </div>
                <div className="w-[50%]">
                    <div className="text-xl py-3">인기 급상승 커뮤니티</div>
                    <div className="mb-15">
                        {stockCommunDummy.slice(0, 5).map((v: any, i: number) =>
                            <Link className="w-full h-[50px] grid grid-cols-3 px-4 items-center active:text-xl" href={`/stock/stockCommun/${v.id}`}>
                                <div className="flex">
                                    <Image src={StockLogos(v.id)} width={30} height={10} alt={"logos"} className="rounded-lg" />
                                    주식 이름 {v.id}
                                </div>
                                <div className="text-lg text-left active:text-xl">{v.title}</div>
                                <div className="text-slate-400 text-right">{v.writer}</div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
