const Input = ({type,name,id,onChange, placeholder, value}) =>{
    return(
        <>
            <input type={type} name={name} id={id} onChange={onChange} placeholder={placeholder} value={value}/>
        </>
    )
}
export default Input