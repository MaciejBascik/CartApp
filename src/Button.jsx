function Button({product,state,dispatch,title}) {
    return(
    <div>
        <h1 className="text-[2em] animate-text bg-gradient-to-r from-[#ffffff] via-[#c7c7c7] to-[#aeaeae] bg-clip-text text-transparent font-semibold mb-[8px]">{title}</h1>
      <div className="flex items-center justify-center">
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "add", product: product })}
      >
        +
      </button>
      
      <button className="hover:border-[#646cff] outline-[4px_auto_-webkit-focus-ring-color] rounded-lg px-[1.5em] py-[0.4em] mx-[0.5em] text-[1em]  border-[#4a4fb8] border-[2px] [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s]"
        onClick={() => dispatch({ type: "subtract", product: product })}
      >
        -
      </button>
      </div>
      </div>
    )
}

export default Button;