import axios from "axios"
import { useEffect, useState } from "react"

interface DatasGitHub {
    id: number;
    name: string;
}

export default function callApi(){
    const [names, setNames] = useState<DatasGitHub[]>([])

    useEffect(() => {
        async function handleApi() {
            const response = await axios.get("https://api.github.com/users/lucasalvess96/repos")
            const data = await response.data

            setNames(data)
        }
        handleApi()
    }, [])

    return (
        <>
            <h1>Repositories GitHub</h1>

            <ul>
                {names.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}