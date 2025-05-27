import './TrainingRecord.css'
import editIcon from './assets/edit.svg'
import deleteIcon from './assets/delete.svg'


function TrainingRecord(props) {
    const recordData = props.recordData


    return (
        <div className='record__wrapper'>
            <p className="record__date">{recordData.date}</p>
            <p className="record__distance">{recordData.distance}</p>
            <div className="record__actions__wrapper">
                <button className="actions__button edit">
                    <img src={editIcon} />
                </button>
                <button onClick={(e) => {props.deleteRecordCallback(recordData.date)}} className="actions__button delete">
                    <img src={deleteIcon} />
                </button>
            </div>
        </div>
    )
}


export default TrainingRecord