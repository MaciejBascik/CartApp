import { useReducer } from "react";

export default function Products() {
  const prices = {
    priceIphone: 500,
    priceSamsung: 400,
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
    {
      amountIphone: 0,
      amountSamsung: 0,
      amountMac: 0,
      amountAir: 0,
    }
  );
  const total = Object.values(state).reduce((sum, amount) => sum + amount, 0);
  const totalPrice =
    state.amountIphone * prices.priceIphone +
    state.amountSamsung * prices.priceSamsung +
    state.amountMac * prices.priceMac +
    state.amountAir * prices.priceAir;

  return (
    <div className=" w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
  <h1 className="text-[4em] animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold w-full max-w-4xl mx-auto flex flex-col items-center justify-center">Shopping Simulator</h1><br />

      <h1 className="text-[2em] animate-text bg-gradient-to-r from-[#ffffff] via-[#c7c7c7] to-[#aeaeae] bg-clip-text text-transparent font-semibold my-[8px]">Apple Iphone 15</h1>
      <div className="flex items-center justify-center">
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "add", product: "amountIphone" })}
      >
        +
      </button>
      
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "subtract", product: "amountIphone" })}
      >
        -
      </button>
      </div>

      <h1 className="text-[2em] animate-text bg-gradient-to-r from-[#ffffff] via-[#c7c7c7] to-[#aeaeae] bg-clip-text text-transparent font-semibold  my-[8px]">Apple Iphone 12</h1>
      <div className="flex items-center justify-center">
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "add", product: "amountSamsung" })}
      >
        +
      </button>
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "subtract", product: "amountSamsung" })}
      >
        -
      </button>
      </div>
      <h1 className="text-[2em] animate-text bg-gradient-to-r from-[#ffffff] via-[#c7c7c7] to-[#aeaeae] bg-clip-text text-transparent font-semibold  my-[8px]">Apple Macbook Air 13</h1>
      <div className="flex items-center justify-center">
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]" onClick={() => dispatch({ type: "add", product: "amountMac" })}>
        +
      </button>
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "subtract", product: "amountMac" })}
      >
        -
      </button>
      </div>
      <h1 className="text-[2em] animate-text bg-gradient-to-r from-[#ffffff] via-[#c7c7c7] to-[#aeaeae] bg-clip-text text-transparent font-semibold  my-[8px]">Apple Airpods 2</h1>
      <div className="flex items-center justify-center">
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]" onClick={() => dispatch({ type: "add", product: "amountAir" })}>
        +
      </button>
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "subtract", product: "amountAir" })}
      >
        -
      </button>
      </div>
      <br />
    <div>
      <div>
        <h1 className="text-[2.3em]">Total price: <span className="animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold">{totalPrice} $</span> </h1>
      </div>
      <div className="text-[1.3em] w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[1.3em]">Your cart: <span className="animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold">{total} Items</span></h2>
      <br />
      {state.amountIphone > 0 && <h3> {state.amountIphone} Iphones, Price: {state.amountIphone * prices.priceIphone}$ </h3>}
      {state.amountSamsung > 0 && <h3> {state.amountSamsung} Samsungs, Price: {state.amountSamsung * prices.priceSamsung}$ </h3>}
      {state.amountMac > 0 && <h3> {state.amountMac} MacBooks, Price: {state.amountMac * prices.priceMac}$ </h3>}
      {state.amountAir > 0 && <h3> {state.amountAir} Airpods, Price: {state.amountAir * prices.priceAir}$ </h3>}
      </div>
    </div>
  </div>
  );
}
