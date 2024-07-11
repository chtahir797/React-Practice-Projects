const Input = ({type,name,id,value,change,max}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={change}
        max={max}
      />
    </>
  );
};
export default Input;
