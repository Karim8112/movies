import { PropsWithChildren } from "react";

const Nav = function (props: PropsWithChildren) {
  return (
    <div className="bg-purple-500 py-[10px] px-[20px] mb-[32px] rounded-lg">
      {props.children}
    </div>
  );
};
export default Nav;
