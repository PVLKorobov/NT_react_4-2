import styles from './TrainingRecord.module.css'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/delete.svg'


function TrainingRecord(props) {
    const recordData = props.recordData

    return (
        <div className={styles.record__wrapper}>
            <p className={styles.record__date}>{recordData.date}</p>
            <p className={styles.record__distance}>{recordData.distance}</p>
            <div className={styles.record__actions__wrapper}>
                <button onClick={(e) => {props.startDateEditCallback(recordData.date, recordData.distance)}} className={`${styles.actions__button} ${styles.edit}`}>
                    <img src={editIcon} />
                </button>
                <button onClick={(e) => {props.deleteRecordCallback(recordData.date, recordData.distance)}} className={`${styles.actions__button} ${styles.delete}`}>
                    <img src={deleteIcon} />
                </button>
            </div>
        </div>
    )
}


export default TrainingRecord