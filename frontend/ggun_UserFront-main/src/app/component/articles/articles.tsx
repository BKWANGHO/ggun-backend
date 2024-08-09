'use client'

import { fetchMyArticleList } from "@/app/service/articles/articles.api"
import { articlesDummy, qnalistDummy } from "@/app/common/dummy/articles.dummy"
import { useRouter } from "next/navigation";

export default function Articles({ prop }: { prop: string }) {

    const router = useRouter();

    // const fetchData= async (): Promise<IArticle[]> => {
    //     const response = await fetchMyArticleList(prop)
    //     if ('status' in response) {
    //         throw new Error(`Error: ${response.status}`);}
    //     return response;
    // }
    
    // const { data } = useQuery<IArticle[]>(
    //     {
    //         queryKey: ["actricleList"],
    //         // queryFn: fetchData,
    //         placeholderData: articlesDummy,
    //     }
    // );

    const data = prop === '1' ? articlesDummy :qnalistDummy ;

    return (
        <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    {/* <th>게시판</th> */}
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성일</th>
                    {/* <th>처리완료일</th> */}
                </tr>
            </thead>
            <tbody>
                {data&&data.map((v: IArticle, i: number) =>
                    <tr key={v.id} onClick={()=>router.push(`/articles/detail/${v.id}`)}>
                        <td>{v.id}</td>
                        <td>{v.title}</td>
                        <td>{v.content}</td>
                        <td>{v.modDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}