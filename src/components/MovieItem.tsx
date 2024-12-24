import * as Model from "../models";
interface IProps {
  movie: Model.IMovie;
}
const MovieItem = function (props: IProps) {
  const { Title, Poster, Year, Type } = props.movie;
  return (
    <div className="w-[100%] p-[10px] flex items-start justify-start gap-[20px] hover:bg-gray-700 cursor-pointer">
      <img src={Poster} width={50} alt="" />
      <div className="desc">
        <h2 className="mb-[15px] text-white">{Title}</h2>
        <div className="flex gap-[10px]">
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
