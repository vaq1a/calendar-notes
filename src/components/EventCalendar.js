import {Calendar} from "antd";
import {useSelector} from "react-redux";
import {convertDate} from "../utils/convertDate";

const EventCalendar = () => {
    const events = useSelector(state => state.events.events);
    const username = useSelector(state => state.auth.user?.username);

    const dateCellRender = (value) => {
        const formatedDate = convertDate(value.toDate());

        const listData = events.filter(elem => elem.date === formatedDate && elem.user === username);

        return (
            <ul className="events">
                {listData.length !== 0 && listData.map(({user, text, date}, index) => (
                    <div key={index}
                         style={{border: "2px solid red"}}>
                        {user} | {text} | {date}
                    </div>
                ))}
            </ul>
        );
    }

    return (
        <Calendar dateCellRender={dateCellRender} />
    )
}

export default EventCalendar;