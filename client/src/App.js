//import logo from './logo.svg';
import './App.css';
import {useHistory, Route, Switch} from "react-router-dom"
import {useState,useEffect} from 'react'
// import Navbar from "../src/components/Navbar/Navbar"
import SignIn from './components/Screens/SignIn';
import Signup from './components/SignUps/SignUp';
import {loginUser, registerUser, verifyUser, removeToken} from "../src/services/auth"
import Layout from './components/Layout/Layout';
// import PostCreate from './components/PostCreate/PostCreate';
// import Trend from './components/Trend/Trend';
// import CommentCreate from './components/Comment/CommentCreate';
// import Blog from './components/Blog/Blog';
import Container from './containers/Container';
function App() {
  const [currentUser, setCurrentUser] = useState(null)
    const history = useHistory();
   

  useEffect(()=>{
    const handleVerify = async ()=> {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  },[])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData);
      history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
     history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
     history.push('/');
  };

  return (
     <div>
       <Layout currentUser={currentUser} handleLogin={handleLogin} handleLogout={handleLogout}>
       {/* <Navbar currentUser={currentUser} handleLogout={handleLogout}/> */}
       <Switch>
     <Route path="/sign-in">
       <SignIn handleLogin={handleLogin}/>
     </Route>
     <Route path="/sign-up">
       <Signup handleRegister={handleRegister}/>
     </Route>
    <Route path="/">
      <Container currentUser={currentUser}/>
    </Route>
     </Switch>
     </Layout>
    </div>
  );
}

export default App;
