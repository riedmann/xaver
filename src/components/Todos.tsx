import React, { useState } from 'react'
import { useArrayState } from '../services/useArrayState'

type Props = {}

export default function Todos({ }: Props) {
    const [todos, { add, remove }] = useArrayState([]);
    const [inputText, setInputText] = useState("");

    return (
        <div>

           
            <h1>Supinger</h1>
            <h1>Supinger</h1>
            
            
           
            <ul>
                {todos.map((todo: any, index: number) => <li onClick={() => remove(index)}>{todo.title}</li>)}
            </ul>

            <div className='p-4'>
                <input type="text" value={inputText} onChange={(el) => setInputText(el.target.value)} />
            </div>

            <button onClick={() => {
                add({ "title": inputText });
            }}>Add todo</button>
        </div>
    )
}