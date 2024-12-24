import { PropsWithChildren, useState } from "react";

interface IProps {
  title?: string;
}

const Box = function (props: PropsWithChildren<IProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="w-[30%] h-[500px] bg-gray-500 rounded-xl overflow-y-scroll relative">
      <div
        className="bg-gray-700 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer hover:bg-gray-900 text-[18px] font-bold absolute top-[10px] right-[10px] text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? `-` : `+`}
      </div>
      <div className={`${!isOpen ? "hidden" : ""}`}>{props.children}</div>
    </div>
  );
};
export default Box;
