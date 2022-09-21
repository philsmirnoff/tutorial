import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  // // this function will runs once when the component is rendered for the first time,
  // // and then it will run again whenever the dependencies change and we run it as side effect with useEffect to avoid infinite loops and make sure that code that can be intensive does not run for every component re-render cycle, only if we wanted to run it when the dependencies change
  // useEffect(() => {
  //   const storedUserLoggedinInformation = localStorage.getItem('isLoggedIn');

  //   if (storedUserLoggedinInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('IsLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    // value={{
    //   isLoggedIn: isLoggedIn,
    //   onLogout: logoutHandler
    // }}>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;


