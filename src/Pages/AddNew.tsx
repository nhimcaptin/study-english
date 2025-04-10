import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import IconAdd from "../assets/plus.svg";
import IconRemove from "../assets/trashbin.svg";

export const AddNew = ({ refClick }: any) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      vocabularyList: [
        {
          english: "",
          vietnamese: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "vocabularyList",
  });

  const handleAddData = () => {
    append({
      english: "",
      vietnamese: "",
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const dataVocabulary = useWatch({ control, name: "vocabularyList" });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {fields.map((item, index) => {
          return (
            <div className="flex items-end my-[15px]" key={index}>
              <Controller
                control={control}
                name={`vocabularyList.${index}.english`}
                key={`vocabularyList.${index}.english${dataVocabulary.length}`}
                render={({ field: { value, onChange } }) => {
                  return (
                    <input
                      type="text"
                      onChange={onChange}
                      value={value}
                      className="border-b border-green-500 focus:outline-none focus:border-green-700 px-[2px] text-[20px] border-dotted leading-[20px]"
                    />
                  );
                }}
              />
              <span className="mr-[10px] ml-[5px] text-[20px] font-[500] leading-none">:</span>
              <Controller
                control={control}
                name={`vocabularyList.${index}.vietnamese`}
                key={`vocabularyList.${index}.vietnamese${dataVocabulary.length}`}
                render={({ field: { value, onChange } }) => {
                  return (
                    <input
                      type="text"
                      onChange={onChange}
                      value={value}
                      className="border-b border-green-500 focus:outline-none focus:border-green-700 px-[2px] text-[20px] border-dotted leading-[20px]"
                    />
                  );
                }}
              />
              <img src={IconAdd} alt="add" className="h-[20px] ml-[20px] cursor-pointer" onClick={handleAddData} />
              {dataVocabulary.length > 1 && (
                <img
                  src={IconRemove}
                  alt="add"
                  className="h-[20px] ml-[5px] cursor-pointer"
                  onClick={() => handleRemove(index)}
                />
              )}
            </div>
          );
        })}
      </div>
      <input ref={refClick} className="hidden" type="submit" value="111111" />
    </form>
  );
};
