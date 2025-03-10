import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Students from './components/student_props.jsx';
import UserGreeting from './components/userGreetings.jsx';

function App() {
  return (  
    <>
        <Header />
        <Blogs />
        <Students name="John Doe" age={22} isStudent={false} />
        <Students name="Joan Saura" age={20} isStudent={true} />
        <UserGreeting isLoggedIn={true} username="Joan" />
        <Footer />
    </>
  );
}

export default App;
