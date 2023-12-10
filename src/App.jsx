
import Products from "./Products";

export default function App() {
  return (
    <div className="font-[Inter,_system-ui,_Avenir,_Helvetica,_Arial,_sans-serif] text-[rgba(255,_255,_255,_0.87)] bg-[#242424] ">
      <div className="m-0 flex place-items-center min-w-[320px] min-h-screen">
        <h1 className="text-[2.5em] animate-text bg-gradient-to-r from-[#497BB8] via-[#4A4FB8] to-[#7749B8] bg-clip-text text-transparent font-semibold w-full max-w-4xl mx-auto flex flex-col items-center justify-center">Shopping App</h1>
      <Products />
      </div>
    </div>
  );
}
