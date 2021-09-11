import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "antd";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions";

function App() {
  const {setAuth, setUser, fetchUsers, fetchEvents} = useActions();

  useEffect(() => {
      if(localStorage.getItem('auth')) {
          setAuth(true);
          setUser({username: localStorage.getItem('username')});
      }
      fetchUsers();
      fetchEvents();
  }, []);

  return (
      <Router>
          <Layout>
              <Navbar />
              <Layout.Content>
                  <AppRouter />
              </Layout.Content>
          </Layout>
      </Router>
  )
}

export default App;
