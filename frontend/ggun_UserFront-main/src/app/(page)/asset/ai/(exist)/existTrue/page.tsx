'user client'

import { LocalNumberOptions } from "@/app/common/config/localeString";
import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { findAccountById } from "@/app/service/asset/account.api";
import { useQuery } from "@tanstack/react-query";

export default function AiExistTrue() {

    // const fetchData = async (): Promise<IAccount[]> => {
    //     const response = await findAccountById()
    //     if ('status' in response) {
    //         throw new Error(`Error: ${response.status}`);
    //     }
    //     let result = response;
    //     if(response.length == 0){
    //         result = tradeDummy
    //     }
    //     return result;
    // }

    // const { data } = useQuery<IAccount[]>(
    //     {
    //         queryKey: ["myAccInfo"],
    //         queryFn: fetchData,
    //         // placeholderData: tradeDummy,
    //     }
    // );

    const data = tradeDummy

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%]">
                <div className="gap-3 bg-gradient-to-r content-center from-pebble-200 to-pebble-400 via-pebble-300 grid border grid-cols-2 text-center mb-5 text-[25px] rounded-lg min-h-[100px]">
                    <div>계좌종류 : AI 자동 매매</div>
                    <div>계좌번호 : {data && data[0].acno} </div>
                    <div className="col-span-2">현재 수익률 : 40%</div>
                    <div className="col-span-2">현재 잔액 : {data && data[0].balance?.toLocaleString("ko", LocalNumberOptions)}</div>
                </div>

                <table className="p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>거래일자</th>
                            <th>종류</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                            <th>거래처</th>
                            <th>적요</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data&&data.map((v: IAccount, i: any) =>
                            <tr key={v.id}>
                                <td>{i+1}</td>
                                <td>{v.modDate}</td>
                                <td>{v.bank}</td>
                                <td>{v.tradeType == "입금" ? v.balance : 0}</td>
                                <td>{v.tradeType == "출금" ? v.balance : 0}</td>
                                <td>{v.balance}</td>
                                <td>{v.briefs}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}