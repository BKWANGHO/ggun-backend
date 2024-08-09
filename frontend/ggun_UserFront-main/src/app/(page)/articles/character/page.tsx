"use client"
import { useInterval } from "@/app/common/hook/useInterval";
import { ChartIcon } from "@/app/common/icon/icon";
import { TabButton } from "@/app/component/button/tabButton";
import Image from "next/image"
import { useState } from "react";

export default function CharacterPage() {

    const [btn, setBtn] = useState(0);
    const [landingTitle, setLandingTitle] = useState("");
    const [count, setCount] = useState(0);

    const characterInfo = [
        { id: 0, color: '#f87171', title: '공격투자형, 적극적인 주식전문가', info: '시장평균 수익률을 훨씬 넘어서는 수준의 투자수익을 추구하며 이을 위해 자산가치의 변동에 따른 손실위험을 적극 수용, 투자자금 대부분을 주식, 주식형 펀드 또는 파생상품 등의 위험자산에 투자할 의향이 있는 유형 \n 10개 종목 중에 가장 상승가 높은 종목의 단타 \n 전일 뉴스 기준  상승 종목에 대하여) 전일 기준 1% 오르면 매수, 매수한 금액에서 2% 오르면 매도' },
        { id: 1, color: '#fcd34d', title: '적극투자형', info: '투자원금의 보전보다는 위험을 감내하더라도 높은 수준의 투자수익 실현을 추구함. 투자 자금 상당부분을 주식, 주식형 펀드 또는 파생상품 등의 위험자산에 투자할 의향이 있는 유형\n 상위 2개, 전일 기준 10%이면 매수, 매도. + 하위 8개에서 가장 상승가 높은 종목의 단타' },
        { id: 2, color: '#c084fc', title: '위험중립형', info: '투자자는 그에 상응하는 투자위험이 있음을 충분히 인식하고 있으며, 예ㆍ적금보다 높은 수익을 기대할 수 있다면 일정수준의 위험을 감수 할 수 있는 유형 \n 10개 종목을 사고파는데, 전일 기준 5%이면 매수, 매도.' },
        { id: 3, color: '#60a5fa', title: '안정추구형', info: '투자원금의 손실위험은 최소화 하고, 이자소득이나 배당소득 수준의 안정적인 투자를 목표로 함. 다만, 수익을 위해 단기적인 손실을 수용할 수 있으며, 예ㆍ적금보다 높은 수익을 위해 자산 중 일부를 변동성 높은 상품에 투자할 의향이 있는 유형\n 상위 5개 종목, 전일 기준 10%이면 매수, 매도' },
        { id: 4, color: '#4ade80', title: '안정형', info: '예금 또는 적금 수준의 수익율을 기대하며, 투자원금에 손실이 발생하는 것을 원하지 않음 \n 상위 1위 종목(삼성전자), 전일 기준 10%이면 매수, 매도.' },
    ]

    useInterval(() => {
        // 만약, count가 completedTitle의 길이와 같거나 커지면 반복을 멈춘다.
        if (count >= characterInfo[btn].info.length) {
            return;
        }

        setLandingTitle((prev) => {
            // 빈 문자열("")은 false이므로 completedTitle의 가장 앞 글자가 result에 할당된다.
            // 그 뒤로는 landingTitle이 빈 문자열이 아니므로
            // 이전에 존재하던 것과 count번 인덱스에 존재하는 문자열을 합쳐서
            // 다시 result에 할당한다.

            // count를 증가시킨다.
            let result = prev ? prev + characterInfo[btn].info[count] : characterInfo[btn].info[0];
            setCount(count + 1);

            // 연산된 result를 반환한다.
            return result;
        });

        // 150ms에 한번씩 연산이 진행된다.
        // 즉, 150ms에 한번씩 문자열이 늘어난다.(타이핑 효과)
    }, 50);

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%] flex justify-center flex-col">
                <div className="text-xl bold h-[15%] content-center text-center my-10">다섯가지 매매 성격 유형</div>
                <div className="border-2 border-pebble-200"></div>
                <div className="w-full justify-center flex">
                    <Image src={"/imgs/character2.jpg"} alt={"character"} width={700} height={500} priority></Image>
                </div>
                <div className=" shadow-lg rounded-lg ">
                    <div className="h-[50px] grid grid-cols-5">
                        <TabButton click={() => { setBtn(0), setLandingTitle(''), setCount(0) }} select={btn == 0} >RED</TabButton>
                        <TabButton click={() => { setBtn(1), setLandingTitle(''), setCount(0) }} select={btn == 1} >YELLOW</TabButton>
                        <TabButton click={() => { setBtn(2), setLandingTitle(''), setCount(0) }} select={btn == 2} >PURPLE</TabButton>
                        <TabButton click={() => { setBtn(3), setLandingTitle(''), setCount(0) }} select={btn == 3} >BlUE</TabButton>
                        <TabButton click={() => { setBtn(4), setLandingTitle(''), setCount(0) }} select={btn == 4} >GREEN</TabButton>
                    </div>
                    <div className="p-5 border border-t-0" >
                        <div className="w-full h-full space-y-5">
                            <div className="justify-center flex"><ChartIcon color={`${characterInfo[btn].color}`} /></div>
                            <div className={`text-xl bold`}>{characterInfo[btn].title}</div>
                            <div className="border"></div>
                            <div>{landingTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}