const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} className={`bg-[#e3e3e3] rounded-3xl p-2 text-[#333] w-[35%] md:w-[25%] self-center ${props.class}`}>
            {props.text}
        </button>
    )
}

export default Button; 