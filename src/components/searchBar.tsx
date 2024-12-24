import { PropsWithChildren } from "react";

interface IProps {
  query?: string;
  className?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar = function (props: PropsWithChildren<IProps>) {
  const { query, setQuery, className } = props;
  return (
    <input
      className={`w-[70%] px-[20px] py-[10px] rounded-2xl  ${className} `}
      placeholder="search..."
      value={query}
      onChange={(e) => setQuery && setQuery(e.target.value)}
    />
  );
};
export default SearchBar;
