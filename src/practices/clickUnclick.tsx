import axios from "axios"
import { useEffect, useState } from "react"

interface DatasGitHub {
    id: number;
    name: string;
}

export default function ClickUnclick() {
    const [names, setNames] = useState<DatasGitHub[]>([])
    const [clickItems, setClicksItems] = useState<number[]>([])

    useEffect(() => {
        async function handleApi() {
            const response = await axios.get("https://api.github.com/users/lucasalvess96/repos")
            const data = await response.data

            setNames(data)
        }
        handleApi()
    }, [])

    function handleClickItem(id: number){
        const click = clickItems.findIndex(item => item === id)

        if(click >= 0){
            const selectedItem = clickItems.filter(item => item !== id)

            setClicksItems(selectedItem)
            console.log(selectedItem)
        }else{
            setClicksItems([...clickItems, id])
            console.log([...clickItems, id])
        }
    }

    return (
        <>
            <h1>Repositories GitHub</h1>

            <ul>
                {names.map(item => (
                    <li 
                        key={item.id}
                        className={clickItems.includes(item.id) ? 'selected' : ''}
                        onClick={() => handleClickItem(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}