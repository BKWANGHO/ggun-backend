import AfterHome from "./afterMain/page";
import BeforeHome from "./beforeMain/page";

export default function Home() {
    const login:Boolean = false
    return(<>
         {/* {parseCookies().accessToken != undefined ?  */}
        {login == true ?
            <div><AfterHome /> </div>
            :   <div><BeforeHome /> </div>
        
        }
    </>)
}
