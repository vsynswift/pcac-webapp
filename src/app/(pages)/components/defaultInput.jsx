const DefaultInput = ({ name, type, placeholder, id, classnames }) => {
    return (
        <div className="lg:w-3/4 w-[250px]">
            <input
                type={type}
                id={id}
                name={name}
                className={`focus:ring-0 focus:outline-none border-0 h-10 text-black p-2 ${classnames}`}
                placeholder={placeholder}
            />
        </div>
    )
}
export default DefaultInput;