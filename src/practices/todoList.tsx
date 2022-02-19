import { FormEvent, useEffect, useState } from "react"
import { FiEdit, FiDelete } from 'react-icons/fi'
import { json } from "stream/consumers"

interface CreateID {
    id: number;
    text: string;
}

interface InputObject{
    id: number,
    text: string
}

export default function TodoList() {
    const [items, setItems] = useState<string>('')
    const [pagesEdit, setPagesEdit] = useState<boolean>(false)
    const [screenItems, setScreenItems] = useState<CreateID[]>(getItemLocalStorage)
    const [editInput, setEditInput] = useState<InputObject>({id: 0, text: 'string'})

    useEffect(() => {
        localStorage.setItem('screenItems', JSON.stringify(screenItems))
    }, [screenItems])

    function getItemLocalStorage(){
        const save = localStorage.getItem('screenItems')

        if(save){
            return JSON.parse(save)
        }else{
            return []
        }
    }

    function handleSubmitItem(event: FormEvent) {
        event.preventDefault()

        if (items !== '') {
            setScreenItems([...screenItems, {
                id: screenItems.length + 1,
                text: items.trim()
            }])
        }

        setItems('')
    }

    function handleRemoveItem(id: number) {
        const remove = screenItems.filter(item => item.id !== id)

        setScreenItems(remove)
    }

    function handelSaveById(id: number, paramsID: CreateID){
        const update = screenItems.map(item => item.id === id ? paramsID : item)

        setPagesEdit(false)
        setScreenItems(update)
    }

    function handleSaveEdit(event: FormEvent){
        event.preventDefault()

        handelSaveById(editInput.id, editInput)
    }

    function handleEditForm(params: CreateID) {

        setPagesEdit(true)
        setEditInput({...params})
    }

    return (
        <>
            {pagesEdit ? (
                <form onSubmit={handleSaveEdit}>
                    <input
                        type="text"
                        placeholder="edit  item"
                        value={editInput.text}
                        onChange={e => setEditInput({...editInput, text: e.target.value})}
                    />

                    <button>edit item</button>
                    <button onClick={() => setPagesEdit(false)}>cancel</button>
                </form>
            ) : (
                <form onSubmit={handleSubmitItem}>
                    <input
                        type="text"
                        placeholder="add a item"
                        value={items}
                        onChange={event => setItems(event.target.value)}
                    />

                    <button>add item</button>
                </form>
            )}

            <ul>
                {screenItems.map(sreenItem => (
                    <li
                        key={sreenItem.id}
                    >
                        {sreenItem.text}
                        <button onClick={() => handleRemoveItem(sreenItem.id)}> <FiDelete /> </button>
                        <button onClick={() => handleEditForm(sreenItem)}> <FiEdit /> </button>
                    </li>
                ))}
            </ul>
        </>
    )
}