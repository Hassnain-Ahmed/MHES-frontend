
const Textarea = (props) => {
    return (
        <textarea name={props.name} id="" cols="30" rows="3" placeholder="Write Query Here" className={`p-1 w-[90%] lg:w-[95%] h-[10%] bg-transparent border-2 ${props.class}`}></textarea>
    )
}

export default Textarea