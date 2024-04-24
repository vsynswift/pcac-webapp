const DefaultInput = ({ name, type, placeholder, id, classnames }) => {
    return (
        <div className="lg:w-[375px] w-full">
            <input
                type={type}
                id={id}
                name={name}
                className={`focus:ring-0 focus:outline-none border-0 text-black p-4 ${classnames}`}
                placeholder={placeholder}
            />
        </div>
    )
}
export default DefaultInput;