const LoadingState = ({ label = 'Please wait ...' }) => {
    return (
        <div>
            <h2 className="text-lg">{ label }</h2>
        </div>
    )
}

export default LoadingState