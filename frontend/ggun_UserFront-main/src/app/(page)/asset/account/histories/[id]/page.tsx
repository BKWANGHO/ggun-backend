'use client'

import { accListDummy } from "@/app/common/dummy/account.dummy";
import { MoveButton } from "@/app/component/button/buttons";
import MiniCalendar from "@/app/component/util/miniCalender";
import { accountHistories } from "@/app/service/asset/account.api";
import { useQuery } from "@tanstack/react-query";

function AccountHistories({ params }
    : {
        params: {
            id: number,
        }
    }) {

    const fetchData = async (): Promise<IAccount[]> => {
        const response = await accountHistories()
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
          }
        return response;
    }

    const { data } = useQuery<IAccount[]>(
        {
            queryKey: ["accHistory"],
            queryFn: fetchData,
            placeholderData: accListDummy,
        }
    );

    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[85%] flex-col flex text-center items-center">
                <div className="grid grid-cols-3 w-full border gap-5 bg-pebble-400 rounded-lg p-3">
                    <div className="col-span-3 text-xl bold">{params.id == 1 ? 'AI 거래내역 조회' : 'CMA 거래내역 조회'}</div>
                    <label htmlFor="" className="text-right">계좌선택 : </label>
                    <select name="" id="" className="">
                        {data && data.map((i: any) =>
                            <option value="" key={i.id}>{i.acno}</option>)}
                    </select>
                    <div></div>
                    <div className="text-right">월별조회 : </div>
                    <div className="flex col-span-2 ">
                        <MiniCalendar /><p className="px-5">~</p><MiniCalendar />
                    </div>

                    <label htmlFor="" className="text-right">입출금 : </label>
                    <div className="flex col-span-2 gap-5 items-center ">
                        <div><input type="radio" name="actype" value="입출금" className="w-5" />입출금</div>
                        <div><input type="radio" name="actype" value="입금" className="w-5" />입금</div>
                        <div><input type="radio" name="actype" value="출금" className="w-5" />출금</div>
                    </div>

                    <div className="col-span-3"><MoveButton>조회하기</MoveButton></div>
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
                            <th>연결계좌번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v: IAccount, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.modDate}</td>
                                <td>{v.bank}</td>
                                <td>{v.acType == "입금" ? v.balance : 0}</td>
                                <td>{v.acType == "출금" ? v.balance : 0}</td>
                                <td>{v.balance}</td>
                                {/* <td>{v.user}</td>
                                <td>{v.name}</td> */}
                                <td>{v.refundAcno}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default AccountHistories;