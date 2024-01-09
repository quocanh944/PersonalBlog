import Image from "next/image"
import Link from "next/link"
export default function AboutSection() {
    return (
        <section className="flex flex-col justify-start gap-[32px]">
            <div className="flex flex-row justify-between">
                <div>
                    <Image
                        src='/avatar.png'
                        alt="Han Nguyen's Avatar"
                        className="rounded-full"
                        width={175}
                        height={175}
                        placeholder="blur"
                        blurDataURL="/avatar-blur.png"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <h1 className="px-2">
                        Go Sooner.<br />
                        Better Life.
                    </h1>
                </div>
            </div>
            <h1>
                Hi all, I&apos;m Han Nguyen.
                <br />
                I&apos;m Open To Work.
            </h1>
            <a className="text-3xl" href="/Han Nguyen - Software Engineer.pdf">SEE MY RESUME →</a>
            <h2>About me</h2>
            <p>
                I&apos;m a third year student and currently pursuing a Bachelor&apos;s degree in Computer Science at {" "}
                <Link href={"https://www.tdtu.edu.vn/en"} target="_blank" passHref>
                    <span className="underline font-bold">Ton Duc Thang University</span>
                </Link>. I have two years of experience in Software Engineer at <Link href={"https://www.jungtalents.com"} target="_blank" passHref>
                    <span className="underline font-bold">Jung Talents</span>
                </Link> and one year of experience in Programming Teacher at <Link href={"https://algo.edu.vn/en"} target="_blank" passHref>
                    <span className="underline font-bold">Algorithmics</span>
                </Link>.
            </p>
            <div className="normal">
                Here is my some bullet point about myself:
                <ul>
                    <li>Good Data Structure & Algorithm - Gold Medal April{"'"}s Olympic in HCMC.</li>
                    <li>Start coding from 8th Grade.</li>
                    <li>Love to read books.</li>
                </ul>
            </div>
        </section>
    )
}
