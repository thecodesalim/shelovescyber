import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex pt-5 flex-col h-screen w-full ">
      <div className="flex grow p-2 flex-col">
        <nav className="flex justify-end w-full">
          <ul className=" gap-5 text-gray-400 text-sm laptop:flex">
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/podcast">
                <a>PODCAST</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/enquiry">
                <a>ENQUIRY</a>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
      <footer className="flex h-10 w-full bg-gray-100 pl-10 bg-gradient-to-r from-pink-500 to-violet-500">
        <ul className="flex items-center text-xs text-white">
          <li>© 2022 shelovescyber. All rights reserved.</li>
        </ul>
      </footer>
    </div>
  );
}
