const Popup = ({myclass,time}) =>{
    return(
        <>
        <div className={`${myclass}`}>
        Copied To Clipboard {time}s
        </div>
        
        </>
    )
}
export default Popup