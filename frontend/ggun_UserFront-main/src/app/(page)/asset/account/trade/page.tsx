'use client'

export default function AccountTrade() {

    // const [accinfo, setAccInfo] = useState<IAccount>({
    //     id: 0,
    //     balance: 0,
    //     acType: '',
    //     //입금할때는 
    // });

    const input = (info: string, name: string) => {
        // setAccInfo({
        //     ...accinfo,
        //     [name]: info
        // });
        // console.log('accinfo : ' + JSON.stringify(accinfo))
    }

    const depositMoney = async () => {
        // const result = await deposit(accinfo);
        // return result
    }

    const withdrawMoney = async () => {
        // const result = await withdraw(accinfo);
        // return result
    }


    return (
        <div className="w-ful min-h-[100px] my-[100px] flex justify-center items-center">
            <div className="w-[30%] h-full flex-col">
                <span>출금 정보</span>
                <div>
                    <div>입금 : <input type="radio" name="actype" value="입금" className="w-5" /></div>
                    <div>출금 : <input type="radio" name="actype" value="출금" className="w-5" /></div>
                    계좌이체 금액<input type="number" onChange={(e) => input(e.target.value, 'balance')} />
                </div>
            </div>
        </div>
    )
};