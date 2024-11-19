const Button = ({buttonText}) => {
  return (
    <div>
        <button className="text-amber-300, bg-slate-300 rounded-[10px] w-[50px]">
            {buttonText}
        </button>
    </div>
  )
}

export default Button