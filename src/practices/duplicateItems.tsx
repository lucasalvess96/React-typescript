
import {  useState } from "react"

interface objectDatas {
    week_day: 0,
    from: '',
    to: 0
}

function DuplicateItems() {
    const [items, setItems] = useState<objectDatas[]>([{ week_day: 0, from: '', to: 0 }])
    const duplicate = () => setItems([...items, { week_day: 0, from: '', to: 0 }])

    return (
        <div>
            <form>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={duplicate}>+ novo horário</button>
                    </legend>

                    {items.map(item => (
                        <div className="schedule-item" key={item.week_day}>
                            <label>Dia da semana</label>
                            <select name="subject">
                                <option value='0' selected>Selecione uma opção</option>
                                <option value='Domingo'>Domingo</option>
                                <option value="Segunda-feira">Segunda-feira</option>
                                <option value="Terça-feira">Terça-feira</option>
                                <option value="Quarta-feira">Quarta-feira</option>
                                <option value="Quinta-feira">Quinta-feira</option>
                                <option value="Sexta-feira">Sexta-feira</option>
                                <option value="Sábado">Sábado</option>
                            </select>

                            <label>Das</label>
                            <input
                                name="from"
                                type="time"
                            />

                            <label>Até</label>
                            <input
                                name="to"
                                type="time"
                            />
                        </div>
                    ))}
                </fieldset>
            </form>
        </div>
    )
}