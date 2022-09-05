import Link from "next/link";
import { BsSpotify, BsInstagram } from "react-icons/bs";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="pt-5">
        <div className="flex grow p-2 flex-col">
          <div className="pt-24 self-center">
            <div className="h-64 pt-2 pl-2 pr-2 max-w-screen-md border-2 border-indigo-700 shadow-[10px_10px_0px_5px_rgba(0,0,0,1)]">
              <p className="text-xl pl-1 pe-1 bg-slate-200 mb-3">
                Fatimah Adelodun
              </p>
              <p className="text-xl pl-1 pe-1 bg-slate-200 mb-3">
                Information Security Expert
              </p>
              <p className="text-xl pl-1 pe-1 bg-slate-200 mb-3">
                I share cybersecurity tips and record podcasts
              </p>
              {/* <Link href="blog">
                <button className="bg-indigo-700 hover:bg-indigo-500 text-white font-normal py-2 px-4">
                  Read our blog
                </button>
              </Link> */}
              <div className=" flex justify-center gap-3 mt-3">
                <Link href="https://www.instagram.com/shelovescyber/">
                  <BsInstagram size={30} />
                </Link>
                <Link href="https://www.spotify.com/">
                  <BsSpotify size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
