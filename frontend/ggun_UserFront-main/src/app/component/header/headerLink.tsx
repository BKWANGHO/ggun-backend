'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { HeaderMenus } from "@/app/common/enums/main.menus";


export default function HeaderLink() {

    const pathName = usePathname();

    return (
        <ul className="grid grid-cols-7 justify-center gap-5 h-full w-full">
            {HeaderMenus.map((hover: IMenu, i: number) => (
                <li key={hover.id} className="group/item">
                    <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-full w-full text-center justify-center items-center checked:border ${pathName == hover.href ? 'border-pebble-500 border-t-2' : ''}`}
                        href={hover.href}>{hover.title}</Link>
                </li>
            ))
            }
        </ul>
    );
};