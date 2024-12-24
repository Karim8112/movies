import React, { useEffect } from "react";
import { IError, state } from "../constants";

export interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any; // Deprecated
}

export interface IRequestProps<req, res> {
  url: string;
  // data?: req;
  requestConfig?: RequestInit;
  onState?: React.Dispatch<React.SetStateAction<state>>;
  onError?: React.Dispatch<React.SetStateAction<IError<req>>>;
  onDataBack?: React.Dispatch<React.SetStateAction<res>>;
  onFinally?: () => void;
}

const useGet = function <req, res>(props: IRequestProps<req, res>) {
  const { url, requestConfig, onState, onError, onDataBack, onFinally } = props;

  if (onState) onState("loading");

  useEffect(() => {
    fetch(url, requestConfig)
      .then((res) =>
        res.json().then((data) => {
          console.log("this is data", data);
          if (onDataBack) onDataBack(data);
          if (onState) onState("done");
        })
      )
      .catch((error) => {
        if (onState) onState("error");
        if (onError) onError(error);
      })
      .finally(() => {
        if (onFinally) onFinally();
      });
  }, [url, requestConfig]);
};
export default useGet;