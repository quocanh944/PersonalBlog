import Image from "next/image"
import Link from "next/link"
export default function ProjectSection() {
    return (
        <section className="flex flex-col justify-start gap-[32px]">
            <h2>My Project</h2>
            <div>
                <div className="flex flex-col rounded-lg bg-white shadow md:max-w-xl md:flex-row hover:bg-gray-100">
                    <Image
                        className="h-96 w-full md:w-auto p-2 rounded-t-lg object-contain md:h-auto md:!rounded-none md:!rounded-l-lg"
                        src="/cns.svg"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col justify-start p-6">
                        <h3 className="mb-2">
                            COMPARE N SAVE
                        </h3>
                        <p className="mb-4">
                            Compare 100s of home loans, investment loans and SMSF loans from Australia{"'"}s most trusted lenders.
                            <br />
                            <b>Role</b>: Front End Developer.
                            <b>Team Size</b>: 8.
                        </p>
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">ReactJS</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Gatsby</span>
                        </div>
                        <div className="mt-3">
                            <a target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://comparensave.com.au/">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex flex-col-reverse rounded-lg bg-white shadow md:max-w-xl md:flex-row hover:bg-gray-100">
                    <div className="flex flex-col justify-start p-6">
                        <h3 className="mb-2">
                            MASTER PTE VN
                        </h3>
                        <p className="mb-4">
                            MASTER PTE VN is a website for learning English.
                            <br />
                            <b>Role</b>: Software Engineer.
                            <b>Team Size</b>: 4.
                        </p>
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">NextJS</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">StoryBlok</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Headless CMS</span>
                        </div>
                        <div className="mt-3">
                            <a target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://www.masterpte.vn">
                                View Demo
                            </a>
                        </div>
                    </div>
                    <Image
                        className="h-96 w-full md:w-auto rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-r-lg"
                        src="/master-pte-vn.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
                <hr className="my-5" />
                <div className="flex flex-col rounded-lg bg-white shadow md:max-w-xl md:flex-row hover:bg-gray-100">
                    <Image
                        className="h-96 w-full md:w-auto p-2 rounded-t-lg object-contain md:h-auto md:!rounded-none md:!rounded-l-lg"
                        src="/personal-blog.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col justify-start p-6">
                        <h3 className="mb-2">
                            PERSONAL BLOG
                        </h3>
                        <p className="mb-4">
                            Personal blog using NextJS and Notion to manage blog.
                            <br />
                            <b>Role</b>: Fullstack Developer.
                        </p>
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">NextJS</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">NotionAPI</span>
                        </div>
                        <div className="mt-3">
                            <a target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://hannguyen0111.netlify.app/">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex flex-col-reverse rounded-lg bg-white shadow md:max-w-xl md:flex-row hover:bg-gray-100">
                    <div className="flex flex-col justify-start p-6">
                        <h3 className="mb-2">
                            SAKE FIGURE SHOP
                        </h3>
                        <p className="mb-4">
                            Ecommerce website for selling anime figure.
                            This website has 2 version: Spring Boot and ASP.NET MVC. <br />
                            However, Spring version just only has back-end.
                            <br />
                            <b>Role</b>: Fullstack Developer. <br />
                            <b>Fun fact: </b> This also my shop. <Link href={"https://shopee.vn/sakefigureshop"} target="_blank" passHref><span className="underline font-bold">Visit here</span></Link>.
                        </p>
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">ASP.NET MVC</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">JQuery</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Bootstrap</span>
                        </div>
                        <div className="mt-3">
                            <a target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://github.com/quocanh944/SakeFigureShopASP.NET">
                                View Code ASP.NET
                            </a>
                        </div>
                        <hr className="my-2" />
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Spring Boot</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Swagger</span>
                        </div>
                        <div className="mt-3">
                            <a target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="https://github.com/quocanh944/figure-shop">
                                View Code Spring Boot
                            </a>
                        </div>
                    </div>
                    <Image
                        className="h-96 w-full md:w-auto rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-r-lg"
                        src="/sake.webp"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
                <hr className="my-5" />
            </div>
        </section>
    )
}
