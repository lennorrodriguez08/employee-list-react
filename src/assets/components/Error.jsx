const Error = ({ label = 'Sample error ...' }) => {
    return (
        <div>
            <h2 className="text-lg text-red-600">{ label }</h2>
        </div>
    )
}

export default Error