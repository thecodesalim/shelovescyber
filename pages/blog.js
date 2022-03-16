import Link from "next/link";

export default function Blog() {
  return (
    <div class="flex pt-5 flex-col h-screen w-full">
      <div class="flex grow pl-10 pr-10 flex-col">
        <nav class="flex justify-end w-full">
          <ul class="flex gap-10">
            <li>Blog</li>
            <li>About us</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className="pt-10">
          <p className="text-center text-2xl">SheLovesCyber Blog</p>
          <p className="text-center text-blue-600">Updates and Insights</p>
          <div className="pt-10">
            <div className="flex gap-10">
              <div className="w-72 h-60 bg-slate-500"></div>
              <div className="flex flex-col gap-7">
                <div className="w-64 h-0.5 bg-black"></div>
                <p>Spectre is looming</p>
                <p>
                  Solana has exploded onto the crypto scene since launching in
                  early 2020. The high-speed, high-throughput, proof of stake
                  chain is known for its lightning fast transactions,
                  scalability & low fees.
                </p>
                <div className="w-64 h-0.5 bg-blue-600"></div>
                <p className="text-gray-500">02-02-2022</p>
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
