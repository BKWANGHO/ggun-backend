import MiniProfile from "@/app/component/myprofile/miniProfile"
import Timer from "@/app/component/util/timer"

export const HeaderMenus: IMenu[] = [
    { id: 1, title: "ggunLogo", href: `/` },
    { id: 2, title: "Finance", href: `/gotoLogin` },
    // { id: 3, title: "호가 매매", href: `/trade` },
    { id: 4, title: "주식 랭킹", href: `/gotoLogin` },
    { id: 5, title: "경제 News", href: `/news` },
    { id: 6, title: "고객센터", href: `/articles/list/2` },
    { id: 7, title: '', href: `` },
    { id: 8, title: "Login", href: `/login` },
]

export const MyHeaderMenus: IMenu[] = [
    { id: 1, title: "ggunLogo", href: `/afterMain` },
    { id: 2, title: "Finance", href: `/asset` },
    // { id: 3, title: "호가 매매", href: `/trade` },
    { id: 4, title: "주식 랭킹", href: `/stock` },
    { id: 5, title: "경제 News", href: `/news` },
    { id: 6, title: "고객센터", href: `/articles/list/2` },
    { id: 7, title: <Timer />, href: `` },
    { id: 9, title: `주식꾼 님`, href: `/` },
    // { id: 8, title: "Logout", href: `#` },
]

export const MyMenus: IMenu[] = [
    // { id: 1, title: "Mypage", href: `/user/login` },
    { id: 2, title: "before : Join", href: `/join` },
    { id: 3, title: "before : Login", href: `/login` },
    { id: 4, title: "after : Logout & timer", href: `/beforeMain` },
]

export const BoardMenus: IMenu[] = [
    { id: 1, title: "매매성향 5", href: `/articles/character` },
    { id: 2, title: "자주하는 질문", href: `/articles/list/2` },
    { id: 3, title: "QnA /1:1문의", href: `/articles/list/1` },
    { id: 4, title: "공지사항", href: `/articles/list/3` },
    // { id: 5, title: "이벤트", href: `/articles/list/4` },
    //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
]

export const StockMenus: IMenu[] = [
    { id: 1, title: "종목종합", href: `/stock/list` },
    { id: 2, title: "종목상세", href: `/stock` },
    { id: 3, title: "종목별 레포트", href: `/stock` },
    { id: 4, title: "종목 토론 게시판", href: `/stock/chat` },
]
