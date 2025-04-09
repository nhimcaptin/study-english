import "./index.css";
import IconEye from "./assets/eye.svg";
function App() {
  return (
    <div>
      <div className="m-[10px]">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add New
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Practice
        </button>

        <div className="flex items-center">
          <input
            type="text"
            className="border-b border-green-500 focus:outline-none focus:border-green-700 p-[2px] text-[16px]"
          />
          <span className="mr-[10px] ml-[5px] text-[20px] font-[500] leading-none">:</span>
          <input
            type="text"
            className="border-b border-green-500 focus:outline-none focus:border-green-700 p-[2px] text-[16px]"
          />
        </div>
        <div>
          <div className="flex items-end">
            <input
              type="text"
              className="border-b border-green-500 focus:outline-none focus:border-green-700 p-[2px] text-[16px]"
            />
            <span className="mr-[10px] ml-[5px] text-[20px] font-[500] leading-none">:</span>
            <p className="text-[16px] leading-none">12312312312</p>
          </div>
          <div className="flex items-center mt-[10px]">
            <p className="font-[700px] text-green-500 ">Suggestion: </p>
            <img src={IconEye} alt="eye" className="h-[25px] ml-[10px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
