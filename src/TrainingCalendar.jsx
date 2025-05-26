import './TrainingCalendar.css'
import { useState } from "react"


function TrainingCalendar() {
    function onFormSubmit(e) {
        e.preventDefault()
    }


    return (
        <div className="training-calendar__wrapper">
            <form onSubmit={onFormSubmit} className="training-calendar__form">
                <section className="form__input__section">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input className="form__input" type="text" name="date"/>
                </section>
                <section className="form__input__section">
                    <label htmlFor="distance">Пройдено км</label>
                    <input className="form__input" type="text" name="distance"/>
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

            </section>
        </div>
    )
}


export default TrainingCalendar