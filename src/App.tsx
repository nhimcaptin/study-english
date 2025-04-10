import { useRef, useState } from "react";
import "./index.css";
import { AddNew } from "./Pages/AddNew";
import { Practice } from "./Pages/Practice";
function App() {
  const [isAddNew, setIsAddNew] = useState(false);
  const [isPractice, setIsPractice] = useState(false);
  const refClickButton = useRef<HTMLInputElement>(null);
  const handleSubmitButton = () => {
    if (!!refClickButton.current) {
      refClickButton.current?.click();
    }
  };
  return (
    <div>
      <div className="m-[10px]">
        <button
          type="button"
          onClick={() => {
            setIsPractice(false);
            setIsAddNew(true);
          }}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-5 mb-2 "
        >
          Add New
        </button>
        <button
          type="button"
          onClick={() => {
            setIsPractice(true);
            setIsAddNew(false);
          }}
          className="py-2.5 px-5 me-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
        >
          Practice
        </button>
        {isAddNew && (
          <button
            type="button"
            onClick={handleSubmitButton}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-5 mb-2 "
          >
            Save
          </button>
        )}
        <div>
          {isAddNew && <AddNew refClick={refClickButton} />}
          {isPractice && <Practice />}
        </div>
      </div>
    </div>
  );
}

export default App;
