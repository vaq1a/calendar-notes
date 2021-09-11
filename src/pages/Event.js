import EventCalendar from "../components/EventCalendar";
import {Button, Form, Modal} from "antd";
import {useState} from "react";
import EventForm from "../components/EventForm";

const Event = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="Add event" footer={null} visible={isModalVisible} onCancel={hideModal}>
                <EventForm onCancel={hideModal} />
            </Modal>
            <EventCalendar />
            <Button onClick={showModal} type={"primary"}>Add event</Button>
        </>
    )
}

export default Event;