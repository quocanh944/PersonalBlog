import Link from "next/link"
import Image from "next/image";
import { headers } from 'next/headers'

export default function NavBar() {
    const domain = process.env.DOMAIN ? process.env.DOMAIN : 'http://localhost:3000';
    const headersList = headers()
    let referer = headersList.get('x-url')
    const navClassName = 'flex flex-col sm:flex-row justify-between items-center gap-[30px]'
    const divClassName = 'flex gap-[30px] mb-[20px] sm:mb-[0px]'

    if (referer == domain + '/') {
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
                    <Link href={'/'} className="underline">
                        Home
                    </Link>
                    <Link href={'/blogs'}>
                        Blogs
                    </Link>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className={navClassName}>
                <div className="m-auto sm:m-0">
                    <Image
                        src={'/logo.png'}
                        alt="Han Nguyen's Logo"
                        width={300}
                        height={150}
                        placeholder="blur"
                        blurDataURL="/logo-blur.png"
                    />
                </div>
                <div className={divClassName}>
                    <Link href={'/'}>
                        Home
                    </Link>
                    <Link href={'/blogs'} className="underline">
                        Blogs
                    </Link>
                </div>
            </nav>
        )
    }
}
