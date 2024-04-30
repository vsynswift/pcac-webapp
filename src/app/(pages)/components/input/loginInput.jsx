const LoginInput = ({ name, type, placeholder, id, classnames }) => {
    return (
      <div className="w-full">
        <input
          type={type}
          id={id}
          name={name}
          className={`w-full  ${classnames}`}
          placeholder={placeholder}
        />
      </div>
    );
  };
  export default LoginInput;