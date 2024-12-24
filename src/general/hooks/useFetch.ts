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
    const defaultRequstConfig :RequestInit = {
        method:"GET",}
  const finalRequestConfig:RequestInit =requestConfig && Object.keys(requestConfig).length>0? {
    ...defaultRequstConfig,
    ...requestConfig
  }:{...defaultRequstConfig}

  if (onState) onState("loading");

  useEffect(() => {
    fetch(url, finalRequestConfig)
      .then((res) =>
        res.json().then((data) => {
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


const useFetch = function(){
    return {useGet}
}
export default useFetch;