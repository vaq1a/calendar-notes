import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router";
import {routeNames} from "../router";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const username = useSelector(state => state.auth.user?.username);
    const router = useHistory();
    const {logout} = useActions();

    const logOut = () => {
        logout();
        router.push(routeNames.login);
    }

    return (
        <Layout.Header>
            <Row justify={"end"}>
                {
                    isAuth ? (
                        <>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item key={1}
                                           onClick={() => router.push(routeNames.calendar)}>
                                    Calendar Events
                                </Menu.Item>
                                <Menu.Item key={2}
                                           onClick={logOut}>
                                    Sign out
                                </Menu.Item>
                            </Menu>
                            <div style={{color: "white"}}>
                                {username}
                            </div>
                        </>
                    ) : (
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1}
                                       onClick={() => router.push(routeNames.login)}>
                                Sign in
                            </Menu.Item>
                        </Menu>
                    )
                }
            </Row>
        </Layout.Header>
    )
}

export default Navbar;