'user client'
import { useQuery } from "@tanstack/react-query";
import AiExistFalse from "./existFalse/page";
import AiExistTrue from "./existTrue/page";
import { existAccount } from "@/app/service/asset/ai.api";

export default function aiExist() {

    // const fetchData = async (): Promise<boolean> => {
    //     const response = await existAccount()
    //     if (typeof response === 'object' && 'status' in response) {
    //         throw new Error(`Error: ${response.status}`);
    //     }
    //     return response;
    // }

    // const { data } = useQuery<boolean>(
    //     {
    //         queryKey: ["accExist"],
    //         queryFn: fetchData,
    //         placeholderData: false,
    //     }
    // );
    const data = true;

    return (
        <div className="w-full h-full flex justify-center">
            {data == true ? <div className="w-full h-full"><AiExistTrue /></div> :<div className="w-full h-full"><AiExistFalse /></div>}
        </div>
    )
}