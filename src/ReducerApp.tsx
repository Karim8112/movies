import {  useReducer } from "react";
import "./App.css";


interface IState{
    count:number;
    step:number
}
type IAction = {type:"inc"} | {type:"dec"} | {type:"changeStep", payload:number} | {type:"changeCount", payload:number}

const initialState : IState = {count:0, step:1};


function CountReducer(state:IState, action:IAction){
    switch(action.type){
        case "inc": return {...state, count:state.count+state.step}
        case"dec": return { ...state, count: state.count - state.step };
        case "changeStep": return {...state, step:action.payload}
        case "changeCount": return { ...state, count: action.payload };
        default: return state
    }
}

const ReducerApp = function () {
    const [state, dispatch] = useReducer(CountReducer, initialState)
   
  return (
    <div className="bg-slate-600 w-[100vw] h-[100vh] flex items-center justify-center text-white font-mono">
      <div>
        <input
        className="me-6"
          type="range"
          value={state.step}
          onChange={(e) => {
           dispatch({type:"changeStep", payload:Number(e.target.value)});
          }}
        />
        {state.step}
        <br />
        <br />
        
        <div className="flex">
          <button className="bg-green-300 px-4" onClick={()=>dispatch({type:"dec"})}>-</button>
          <input type="number" className="text-black" value={state.count} onChange={(e)=>dispatch({type:"changeCount", payload:Number(e.target.value)})} />
          
          <button className="bg-green-300 px-4" onClick={()=>dispatch({type:"inc"})}>+</button>
        </div>
      </div>
    </div>
  );
};
export default ReducerApp;
