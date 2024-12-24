import { IError, state } from "../constants";
export interface IRequestProps<req, res> {
  url: string;
  data?: req;
  onState?: (state: state) => void;
  onError?: (error: IError<res>) => void;
  onDataBack?: (data: res) => void;
}
const GetAll = function <req, res>(props: IRequestProps<req, res>) {
  const { url, data, onState } = props;
  if (onState) onState("loading");
  //   const fetchedData = {

  //   }
};
export default GetAll;
