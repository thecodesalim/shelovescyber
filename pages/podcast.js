import Layout from "../components/Layout";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <div className="pt-10">
        <p className="text-center text-2xl">SheLovesFatimah Podcast</p>
        <p className="text-center text-indigo-700">
          I host FatimahLovesCyber where I dit down
        </p>
        <p className="text-center text-indigo-700">
          and talk with other Cybersecurity Professional
        </p>
        <p className="text-center text-indigo-700">around the world.</p>
        <div className="pt-10 flex justify-center ">
          <div className="flex gap-10">
            <div className="flex flex-col gap-7">
              <div className=" w-72 h-0.5 bg-black"></div>
              <p className=" text-2xl">First episode dropping soon</p>
              <div className=" w-72 h-0.5 bg-blue-600"></div>
              <Link href="https://www.instagram.com/shelovescyber/">
                <a className=" text-slate-400">
                  Follow @shelovecyber for updates
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
