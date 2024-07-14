'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar (){
    const pathname = usePathname();
    const router = useRouter();
    return(
        <nav className="flex bg-gray-800 py-2 px-5 justify-between">
            <div className="flex">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5">
                <Link href="/">
                    <li className={`mr-3 ${pathname === '/' ? 'text-blue-500' : 'text-white' } cursor-pointer`}>Home</li>
                </Link>
                <Link href="/about">
                    <li className={`mr-3 ${pathname === '/about' ? 'text-blue-500' : 'text-white' } cursor-pointer`}>About</li>
                </Link>
                <Link href="/about/profile">
                    <li className={`mr-3 ${pathname === '/about/profile' ? 'text-blue-500' : 'text-white' } cursor-pointer`}>Profile</li>
                </Link>
                
            </ul>
            </div>
            <div>
                <button className="bg-white px-4 py-2 text-sm rounded-lg" onClick={()=>router.push('/login')}>
                    
                    Login</button>
            </div>
        </nav>
    )
}