const DisplayResults = ({pass,copyRef,copyPass}) =>{
    return(
        <>
             <div className="results">
          <div className="randPass" ref={copyRef}>
            {pass.length > 0 ? pass : "Slide to generate password"}
          </div>
          <button className="copy" onClick={copyPass}>
            Copy
          </button>
        </div>
        </>
    )
}
export default DisplayResults