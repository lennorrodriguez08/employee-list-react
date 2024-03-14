import { useState } from "react"
import Button from "./Button"
import useFetch from "../hooks/useFetch"
import LoadingState from "./LoadingState"
import Error from "./Error"

const List = () => {

    const [url, setUrl] = useState('http://localhost:3000/employees')
    const { data, error, isPending } = useFetch(url) // These values are being received from useFetch custom hook

    return (
        <div className="py-2">
            { isPending && <LoadingState label="Loading ..." /> }
            { error && <Error label={error} /> }
            {
                data && data.map((emp) => (
                    <div className="py-5" key={emp.id}>
                        <h2>Name: {emp.name}</h2>
                        <p>Position: {emp.position}</p>
                        <p>Description: {emp.text}</p>
                    </div>
                ))
            }
            <div className="flex gap-1">
                <Button onClick={() => setUrl('http://localhost:3000/employees')} label={'All Employees'} />
                <Button onClick={() => setUrl('http://localhost:3000/employees?position=Developer')} label={'Filter Developers'} />
            </div>
        </div>
    )
}

export default List