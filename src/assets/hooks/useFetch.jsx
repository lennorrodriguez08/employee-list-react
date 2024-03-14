import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // Use effect is used to prevent infinite loop
    // URL is put as dependency so the fetch will re-render once URL gets updated
    useEffect(() => {

        const fetchData = async () => {

            try {
                setIsPending(true)
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const json = await response.json()

                // Set timeout is used just to show the loading state
                setTimeout(() => {
                    setData(json)
                    setIsPending(false)
                }, 3000)

                setError(null)

            }   catch(err) {

                // Set timeout is used just to show the loading state
                setTimeout(() => {
                    setError('Could not fetch the data')
                    setIsPending(false)
                }, 3000)

                console.log(err.message)
            }


        }

            fetchData()

    }, [url])

    return { data, error, isPending } // These values are being passed to be consumed to the List Component
}

export default useFetch