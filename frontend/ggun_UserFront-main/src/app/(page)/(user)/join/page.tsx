'use client'

import Image from 'next/image';
import { NextPage } from "next";
import React, { Suspense } from "react";
import { MoveButton } from '@/app/component/button/buttons';
import { WhiteBox } from '@/app/component/style/whiteBox';
import AdminsDetail from '@/app/component/login/userJoin';
import { useQuery } from '@tanstack/react-query';
import { adminDummy } from '@/app/common/dummy/admin.dummy';

const AdminJoin: NextPage = () => {
    
    return (
        <div className='w-full h-full flex justify-center content-center items-center'>
        <WhiteBox style='w-[50%] h-[500px] space-y-4'>
            <div className='text-center text-3xl'>회원가입 정보 입력</div>
            {/* <div className='w-full h-auto flex justify-center'>
                <div className='w-[200px]'>
                    <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                </div>
            </div> */}

            <Suspense>
                <div className='w-full flex justify-center'>
                    <AdminsDetail />
                </div>
            </Suspense>
        </WhiteBox>

    </div >
    )
};
export default AdminJoin;

