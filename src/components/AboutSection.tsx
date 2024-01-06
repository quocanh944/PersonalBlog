import Image from "next/image"
import Link from "next/link"
export default function AboutSection() {
    return (
        <section className="flex flex-col justify-start gap-[32px]">
            <Image
                src='/avatar.png'
                alt="Han Nguyen's Avatar"
                className="rounded-full"
                width={175}
                height={175}
            />
            <h1>
                Hi all, I&apos;m Han Nguyen. 
                <br /> 
                I'm Open To Work.
            </h1>
            <a className="text-3xl" href="/Han Nguyen - Software Engineer.pdf">SEE MY RESUME →</a>
            <h3>About me</h3>
            <p>
                I'm a third year student and currently pursuing a Bachelor's degree in Computer Science at {" "}
                <Link href={"https://www.tdtu.edu.vn/en"} target="_blank" passHref>
                    <span className="underline font-bold">Ton Duc Thang University</span>
                </Link>. I have two years of experience in Software Engineer at <Link href={"https://www.jungtalents.com"} target="_blank" passHref>
                    <span className="underline font-bold">Jung Talents</span>
                </Link> and one year of experience in Programming Teacher at <Link href={"https://algo.edu.vn/en"} target="_blank" passHref>
                    <span className="underline font-bold">Algorithmics</span>
                </Link>.
            </p>

            <h3>My Project</h3>
        </section>
    )
}
