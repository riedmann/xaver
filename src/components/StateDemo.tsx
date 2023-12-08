import React, { useState } from 'react'
import { useArrayState } from '../services/useArrayState'

type Props = {}

export default function StateDemo({ }: Props) {
    const [todos, { add, remove }] = useArrayState([]);
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <h1>Todos</h1>
            <div>
                <div className='p-4'>
                    <input type="text" value={inputText} onChange={(el) => setInputText(el.target.value)} />
                </div>

                <button onClick={() => {
                    add({ "title": inputText });
                }}>Add todo</button>
            </div>
            <ul>
                {todos.map((todo: any, index: number) => <li onClick={() => remove(index)}>{todo.title}</li>)}
            </ul>


        </div>
    )
}