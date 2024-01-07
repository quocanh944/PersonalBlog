'use client'
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
    const navClassName = 'flex flex-col sm:flex-row justify-between items-center gap-[30px]'
    const divClassName = 'flex gap-[30px] mb-[20px] sm:mb-[0px]'

    return (
        <nav className={navClassName}>
            <div className="m-auto sm:m-0">
                <Image
                    src={'/logo.png'}
                    alt="Han Nguyen's Logo"
                    width={300}
                    height={150}
                />
            </div>
            <div className={divClassName}>
                <Link href={'/'} className={pathname == '/' ? "underline" : ""}>
                    Home
                </Link>
                <Link href={'/blogs'} className={pathname.startsWith("/blogs") ? "underline" : ""}>
                    Blogs
                </Link>
            </div>
        </nav>
    )
}
