import { useReducer } from "react";
import Button from "./Button";
import React from 'react';


export default function Products() {
  const initialState = {
    amountIphone: 0,
    amountIphone2: 0,
    amountMac: 0,
    amountAir: 0,
  }
  const prices = {
    priceIphone: 500,
    priceIphone2: 400,
    priceMac: 1000,
    priceAir: 200,
  };

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "add":
          if (state[action.product] < 0) {
            return { ...state, [action.product]: 0 };
          }
          return {
            ...state,
            [action.product]: state[action.product] + 1,
          };
        case "subtract":
          if (state[action.product] <= 0) {
            return { ...state, [action.product]: 0 };
          }
          return { ...state, [action.product]: state[action.product] - 1 };
        default:
          throw new Error("Invalid action type");
      }
    },
    initialState
 );


  const total = Object.values(state).reduce((sum, amount) => sum + amount, 0);
  const totalPrice =
    (state.amountIphone * prices.priceIphone) +
    (state.amountIphone2 * prices.priceIphone2) +
    (state.amountMac * prices.priceMac) +
    (state.amountAir * prices.priceAir);


  return (
    <div className=" w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
  <h1 className="text-[4em] animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold w-full max-w-4xl mx-auto flex flex-col items-center justify-center">Shopping Simulator</h1><br />

      <Button title="Apple Iphone 15" product="amountIphone" state={state} dispatch={dispatch}/>
      <Button title="Apple Iphone 12" product="amountIphone2" state={state} dispatch={dispatch}/>
      <Button title="Apple Macbook Air 13" product="amountMac" state={state} dispatch={dispatch}/>
      <Button title="Apple Airpods 2" product="amountAir" state={state} dispatch={dispatch}/>
      <br />
    <div>
      <div>
        <h1 className="text-[2.3em]">Total price: <span className="animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold">{totalPrice} $</span> </h1>
      </div>
      <div className="text-[1.3em] w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[1.3em]">Your cart: <span className="animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold">{total} Items</span></h2>
      <br />
      {state.amountIphone > 0 && <h3> {state.amountIphone} Iphones 15, Price: {state.amountIphone * prices.priceIphone}$ </h3>}
      {state.amountIphone2 > 0 && <h3> {state.amountIphone2} Iphones 12, Price: {state.amountIphone2 * prices.priceIphone2}$ </h3>}
      {state.amountMac > 0 && <h3> {state.amountMac} MacBooks, Price: {state.amountMac * prices.priceMac}$ </h3>}
      {state.amountAir > 0 && <h3> {state.amountAir} Airpods, Price: {state.amountAir * prices.priceAir}$ </h3>}
      </div>
    </div>
  </div>
  );
}