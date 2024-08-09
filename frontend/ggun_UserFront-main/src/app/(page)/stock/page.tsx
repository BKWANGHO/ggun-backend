'use client'

import { StockRankingDummy } from "@/app/common/dummy/stock.dummy";
import MiniChart from "@/app/component/chart/miniChart";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function stockMain() {


    function handleLogo(id:number) {
        const enums: any = {
            1: '/stockLogo/samsung.jpg',
            2: '/stockLogo/lg.jpg',
            3: '/stockLogo/sk.jpg',
            4: '/stockLogo/db.jpg',
            5: '/stockLogo/nepes.jpg',
            6: '/stockLogo/foosung.jpg',
            7: '/stockLogo/wonik.jpg',
            8: '/stockLogo/lsElec.jpg',
            9: '/stockLogo/sk.jpg',
            10: '/stockLogo/motrex.jpg',
            11: '/stockLogo/ssg.jpg',
            12: '/stockLogo/protec.jpg',
        };
        return enums[id];
    };

    const fetchData = async (): Promise<any[]> => {
        const response = await accountHistories()
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
          }
        return response;
    }

    const { data } = useQuery<any[]>(
        {
            queryKey: ["stcokInfo"],
            queryFn: fetchData,
            placeholderData: StockRankingDummy,
        }
    );

    return (
        <div className="w-full h-full justify-center flex">
            <div className="w-[80%]">
                <div className="w-full text-center content-center text-[60px] h-[300px] bg-coin_img bg-left bg-no-repeat bg-[#DECCCA] font-bold my-5 rounded-lg">실시간 랭킹 TOP 10</div>
                <div className="grid grid-cols-8 text-center items-center bg-pebble-100 text-white h-[40px] bold text-lg rounded-lg">
                    <div className="">rank</div>
                    <div className="col-span-3">종목</div>
                    <div className="">현재가</div>
                    <div>거래량</div>
                    <div>시총</div>
                </div>
                {StockRankingDummy.map((v:any, i:number) =>
                    <WhiteBox key={v.id} style="my-3">
                        <Link href={`/stock/stockDetail/${v.id}`}
                            className="grid grid-cols-8 text-center items-center" >
                            <div className="">{v.id}</div>
                            <div className="flex items-center justify-center">
                                <Image src={handleLogo(v.id)} width={50} height={30} alt={"search"} className="rounded-lg"/>
                            </div>
                            <div className=""><MiniChart props={data}/></div>
                            <span className="">{v.stock}</span>
                            <span>{v.now}</span>
                            <span>{v.volume}</span>
                            <span>{v.total}</span>
                        </Link>
                    </WhiteBox>
                )}
            </div>
        </div>
    )
}