export const Card = ({ guest }) => {
  return (
    <div className=" w-96 h-52 bg-slate-100 rounded-md p-5 mb-5">
      <div className="flex ">
        <div className=" w-40 h-36 bg-violet-700 rounded"></div>
        <p className=" text-lg text-right text-violet-700 font-semibold">
          Celebrating Women in Cybersecurity
        </p>
      </div>
      <p className=" text-lg text-right text-violet-700">{guest}</p>
    </div>
  );
};
