import {Button, DatePicker, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {useState} from "react";
import {convertDate} from "../utils/convertDate";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const EventForm = ({
    onCancel = () => {},

}) => {
    const [form] = Form.useForm();
    const users = useSelector(state => state.events.users);
    const {addEvent} = useActions();
    const [event, setEvent] = useState({
        text: '',
        date: '',
        user: '',

    });


    const onChangeDatePicker = (date) => {
        date && setEvent(data => ({...data, date: convertDate(date?.toDate())}));

    }

    const onChangeUser = (user) => {
        setEvent(data => ({...data, user}));
    }

    const onChangeText = (text) => {
        setEvent(data => ({
            ...data,
            text
        }));
    }

    const submitForm = () => {
        addEvent(event);
        form.resetFields();

        onCancel();
    }

    return (
        <Form form={form}
              onFinish={submitForm}
              autoComplete="off">
            <Form.Item
                label="text"
                name="text"
                rules={[rules('Please input your text!')]}
            >
                <Input value={event.text}
                       placeholder={"text"}
                       onChange={e => onChangeText(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="date"
                name="date"
                rules={[rules('Please input your date!')]}
            >
                <DatePicker onChange={onChangeDatePicker} />
            </Form.Item>

            <Form.Item
                label="user"
                name="user"
                rules={[rules('Please input your user!')]}
            >
                <Select value={event.user}
                        placeholder="Select a user"
                        onChange={onChangeUser}>
                    {
                        users.length !== 0 && users.map(({username}) => (
                            <Select.Option key={username} value={username}>{username}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default EventForm;