import TrainingRecord from "./TrainingRecord"
import './TrainingTable.css'


function TrainingTable(props) {
    return (
        <ul className="table__rows">
            {[...props.rows.keys()].map(date => (
                <li key={date}>
                    <TrainingRecord recordData={{date: date, distance: props.rows.get(date)}} 
                                    deleteRecordCallback={props.deleteRecordCallback}/>
                </li>
            ))}
        </ul>
    )
}


export default TrainingTable