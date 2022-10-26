import Link from "next/link";
import Image from "next/image";
export const Card = ({ guest, link }) => {
  return (
    <Link href={link} passHref={true}>
      <div className=" w-96 h-52 bg-slate-100 rounded-md p-5 mb-5 cursor-pointer">
        <div className="flex ">
          <Image
            className=" w-40 h-36 bg-violet-700 rounded"
            src="/cover.jpeg"
            alt="Picture of the author"
            width={250}
            height={250}
          />
          <p className=" text-lg text-right text-violet-700 font-semibold">
            Celebrating Women in Cybersecurity
          </p>
        </div>
        <p className=" text-lg text-right text-violet-700">{guest}</p>
      </div>
    </Link>
  );
};
