import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRouters, publicRouters} from "../router";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <Switch>
            {
                isAuth ? (
                    <>
                        {
                            privateRouters.map(({
                                                    path,
                                                    exact,
                                                    component: Component,

                                                }) => (
                                <Route path={path}
                                       key={path}
                                       exact={exact}>
                                    <Component />
                                </Route>
                            ))
                        }
                        <Redirect to="/calendar" />
                    </>
                ) : (
                    <>
                        {
                            publicRouters.map(({
                                                    path,
                                                    exact,
                                                    component: Component,

                                                }) => (
                                <Route path={path}
                                       key={path}
                                       exact={exact}>
                                    <Component />
                                </Route>
                            ))
                        }
                        <Redirect to="/login" />
                    </>
                )
            }
        </Switch>
    )
}

export default AppRouter;