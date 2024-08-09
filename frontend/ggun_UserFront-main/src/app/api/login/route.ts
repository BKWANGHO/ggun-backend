'use server'

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    console.log('POST')
    const bodys = {
        username: 'req.username',
        password: 'req.password',
    };
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/local`, {
        method: 'POST',
        // headers: '',
        body: JSON.stringify(bodys),
    })

    // if (!response.ok) { throw new Error('API Network response was not ok'); }
    const data: boolean = await response.json();
    if (data == undefined || data == null) { return { status: 404 }; }

    console.log("loginAdmin : " + JSON.stringify(data))
    // console.log("cookies : " + cookies().get()?.value)

    // if(token.accessToken && token.refreshToken){
    //     cookies().set('accessToken', token.accessToken);
    //     cookies().set('refreshToken', token.refreshToken);
        // cookies().set('id', token.refreshToken);
    //     console.log("toekens : {},{}",cookies().get('accessToken'),cookies().get('refreshToken'))
    // }
    
        return NextResponse.json(data);
    } catch (error) {
        console.error("findExchangeByCodeAPI err : " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}