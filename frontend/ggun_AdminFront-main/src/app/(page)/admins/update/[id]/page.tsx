
import Image from 'next/image';
import React, { Suspense } from "react";
import { WhiteBox } from '@/app/common/box/whiteBox';
import { adminDummy } from '@/app/common/dummy/admin.dummy';
import AdminsDetailEdit from '@/app/component/admins/detail/detailEdit';

export default async function AdminUpdate({ params }: {params:{id:number}}) {

    const myinfo = adminDummy[params.id]

    return (
        <div className='w-full h-[150px]'>
            <div className='pb-10'> <WhiteBox style="text-center">"수정모드"</WhiteBox></div>
            <div className='w-full h-auto flex'>
                <div className='w-[10%]'>
                    <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                </div>
                <Suspense>
                <AdminsDetailEdit props={myinfo}/>
                </Suspense>
            </div>
        </div>
    )
};


