export default function Footer() {

    return (
        <footer>
            <div className="flex flex-col sm:flex-row justify-between py-[30px] mt-[20px] border-t-2">
                <p>2024 @ Han Nguyen.</p>
                <div className="flex gap-[15px]">
                    <a href="https://github.com/quocanh944" target="_blank" className="underline">Github</a>
                    /
                    <a href="https://www.linkedin.com/in/quoc-anh-88738a1b6" target="_blank" className="underline">Linkedin</a>
                    /
                    <a href="https://www.tiktok.com/@hannguyen011103" target="_blank" className="underline">Tiktok</a>
                </div>
            </div>
        </footer>
    )
}
