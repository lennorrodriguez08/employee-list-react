const Button = ({ label, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="border-[1px] border-gray-500 py-1 px-2 rounded-xl">{ label }</button>
        </div>
    )
}

export default Button