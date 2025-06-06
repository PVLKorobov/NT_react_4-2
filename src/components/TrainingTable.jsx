import TrainingRecord from "./TrainingRecord"
import styles from './TrainingTable.module.css'


function TrainingTable(props) {
    return (
        <ul className={styles.table__rows}>
            {[...props.rows.keys()].map(date => (
                <li key={date}>
                    <TrainingRecord recordData={{date: date, distance: props.rows.get(date)}} 
                                    deleteRecordCallback={props.deleteRecordCallback}
                                    startDateEditCallback={props.startDateEditCallback}/>
                </li>
            ))}
        </ul>
    )
}


export default TrainingTable