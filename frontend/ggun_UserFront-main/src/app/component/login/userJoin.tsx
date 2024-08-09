
import { useRouter } from 'next/navigation';
import { WhiteLink } from '../link/whiteLink';
import { BrownLink } from '../link/brawnLink';

export default function AdminsDetail() {

    const router = useRouter();

    return (
        <div>
            <div className='w-[90%] px-3 grid grid-cols-6 gap-3'>
                <div className=' '>사원명 :</div>
                <div className=' '><input type="text" placeholder="enpName" disabled={false} /></div>
                <div className=''>사원번호 : </div>
                <div className=' '><input type="text" placeholder="enpNam" disabled={false} /></div>
                <div className=''>부서 : </div>
                <div className=' '><input type="text" placeholder="department" disabled={false} /></div>
                <div className=''>직책 : </div>
                <div className=' '><input type="text" placeholder="positon" disabled={false} /></div>
                <div className=''>직무 : </div>
                <div className=' '><input type="text" placeholder="job" disabled={false} /></div>
                <div className=''>이메일 : </div>
                <div className=' '><input type="text" placeholder="email" disabled={false} /></div>
                <div className=''>핸드폰 : </div>
                <div className=' '><input type="text" placeholder="phone" disabled={false} /></div>
                <div className=''>비밀번호 : </div>
                <div className=' '><input type="text" placeholder="password" disabled={false} /></div>
                <div className=''>권한 : </div>
                <div className=' '><input type="text" placeholder="role" disabled={false} /></div>
            </div>
            <div className=' h-[100px] p-5 content-center justify-center space-y-3'>
                <BrownLink click='/login'>회원가입하기</BrownLink>
                <WhiteLink click='/'>돌아가기</WhiteLink>
            </div>
        </div>
    )
}
