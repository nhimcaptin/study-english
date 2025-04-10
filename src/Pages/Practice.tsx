import IconEye from "../assets/eye.svg";

export const Practice = () => {
  return (
    <div>
      <div className="my-[15px]">
        <div className="flex items-end">
          <input
            type="text"
            className="border-b border-green-500 focus:outline-none focus:border-green-700 px-[2px] text-[20px] border-dotted leading-[20px]"
          />
          <span className="mr-[10px] ml-[5px] text-[20px] font-[500] leading-none">:</span>
          <p className="text-[20px] leading-[20px]">12312312312</p>
        </div>
        <div className="flex items-center mt-[10px]">
          <p className="font-[700px] text-green-700 ">Suggestion: </p>
          <img src={IconEye} alt="eye" className="h-[25px] ml-[10px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
