import {Button, Form, Input, Row} from "antd";
import {rules} from "../utils/rules";
import {useState} from "react";
import {useActions} from "../hooks/useActions";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useActions();

    const submitForm = () => {
        const payload = {
            username,
            password,

        }

        login(payload);
    }

    return (
        <Row justify={"center"} align={"middle"} style={{height: "calc(100vh - 64px)"}} >
            <Form onFinish={submitForm}
                  autoComplete="off">
                <Form.Item
                    label="Username"
                    name="username"

                    rules={[rules('Please input your username!')]}
                >
                    <Input value={username}
                           onChange={e => setUsername(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules('Please input your password!')]}
                >
                    <Input.Password value={password}
                                    onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
}

export default Login;