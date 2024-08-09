
import { WhiteLink } from "@/app/component/link/whiteLink";
import { WhiteBox } from "@/app/component/style/whiteBox";

export default function GotoLogin() {

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[50%] h-[320px] text-center">
            <WhiteBox style="">
                <div className="flex-col">
                    <h1 className="bold text-[60px]">!!!로그인이 필요합니다.!!!</h1>
                    <h1 className="bold text-[50px]">비회원 및 계좌미개설 고객님은 확인할수 없는 페이지입니다.</h1>
                    <br />
                    <h4 className="bold text-[30px]">로그인해주세요.</h4>
                    <div><WhiteLink click="/login">LOG IN</WhiteLink></div>
                </div>
            </WhiteBox>
            </div>
        </div>
    )
}