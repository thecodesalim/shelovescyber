import Link from "next/link";

export default function Home() {
  return (
    <div className="flex pt-5 flex-col h-screen w-full">
      <div className="flex grow pl-10 pr-10 flex-col">
        <nav className="flex justify-end w-full">
          <ul className="flex gap-10">
            <li>
              <Link href="blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>About us</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className="pt-24">
          <div className="flex grow pl-10 pr-10 flex-col">
            <div className="pt-24 self-center">
              <div className="h-64 pt-10 pl-10 pr-10 max-w-screen-md border-2 border-indigo-700 shadow-[10px_10px_0px_5px_rgba(0,0,0,1)]">
                <p className="text-xl text pb-10">
                  Creating awareness about cybersecurity and the internet
                </p>
                <Link href="blog">
                  <button class="bg-indigo-700 hover:bg-indigo-500 text-white font-normal py-2 px-4">
                    Read our blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex h-10 w-full bg-gray-100 pl-10">
        <ul className="flex items-center text-xs text-gray-600">
          <li>© 2022 shelovescyber. All rights reserved.</li>
        </ul>
      </footer>
    </div>
  );
}
