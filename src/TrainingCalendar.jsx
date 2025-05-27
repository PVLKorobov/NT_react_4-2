import './TrainingCalendar.css'
import TrainingTable from './TrainingTable'
import { useState } from "react"


function TrainingCalendar() {
    const [dateInput, setDateInput] = useState('')
    const [distanceInput, setDistanceInput] = useState('')
    const [tableRows, setTableRows] = useState(new Map())


    function isValidDate(input) {
        const pattern = /^(\d{2})\.(\d{2})\.(\d{4})$/
        return pattern.test(input)
    }

    function deleteRecord(date) {
        setTableRows(currentTableRows => {
                currentTableRows.delete(date)
                return new Map(currentTableRows)
            })
    }

    function getDateFromStr(string) {
        const [day, month, year] = string.split('.')
        return new Date(`${year}-${month}-${day}`)
    }

    function addRecord(date, distance) {
        let newDistance = distance
        if (tableRows.has(date)) {
            const oldDistance = tableRows.get(date)
            newDistance = distance + oldDistance
        }
        setTableRows(currentTableRows => {
            return new Map([...currentTableRows.set(date, newDistance).entries()].sort((a, b) => {return getDateFromStr(b[0]) - getDateFromStr(a[0])}))
        })
    }

    function onFormSubmit(e) {
        e.preventDefault()

        if (dateInput !== '' && isValidDate(dateInput)) {
            const distance = parseFloat(distanceInput)
            if (distance) {
                addRecord(dateInput, distance)
            }
        }
    }


    return (
        <div className="training-calendar__wrapper">
            <form onSubmit={onFormSubmit} className="training-calendar__form">
                <section className="form__input__section">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input className="form__input" value={dateInput} onChange={(e) => {setDateInput(e.target.value)}} type="text" name="date"/>
                </section>
                <section className="form__input__section">
                    <label htmlFor="distance">Пройдено км</label>
                    <input className="form__input" value={distanceInput} onChange={(e) => {setDistanceInput(e.target.value)}} type="text" name="distance"/>
                </section>
                <section className="form__button__section">
                    <button type="submit">ОК</button>
                </section>
            </form>
            <section className="training-calendar__table__headers">
                <p className="table__header">Дата (ДД.ММ.ГГ)</p>
                <p className="table__header">Пройдено км</p>
                <p className="table__header">Действия</p>
            </section>
            <section className="training-calendar__table">
                <TrainingTable rows={tableRows} deleteRecordCallback={deleteRecord}/>
            </section>
        </div>
    )
}


export default TrainingCalendar