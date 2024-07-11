import Child from "./Child";
const sendData = "Tahir";
const Parent = () => {
  const ClickMe =()=>{
    console.log("Hello man")
  }
  return (
    <>
      <h1>Parent Component</h1>
      <Child data={sendData} passEvent={ClickMe}>
        {/* <h2>Hello Mr Tahir</h2> */}
      </Child>
    </>
  );
};
export default Parent;
