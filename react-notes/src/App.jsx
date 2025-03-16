import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
//import Students from './components/student_props.jsx';
// import UserGreeting from './components/userGreetings.jsx';
//import Button from "./assets/button.jsx";
// import List from './components/list.jsx';
import Counter from "./pages/counter.jsx";
import ColorPicker from './pages/ColoPicker.jsx'



import OnChangeCom from './notes/onChange.jsx';
function App() {
  return (  
    <>
        <Header />
        <Blogs />
        {/*<Students name="John Doe" age={22} isStudent={false} />*/}  
        {/* <Students name="Joan Saura" age={20} isStudent={true} />*/}
        {/* <UserGreeting isLoggedIn={true} username="Joan" /> */}
        {/* <List /> */}
        <Counter />
        {/*<Button />*/}
        <OnChangeCom />
        <Footer />
        <ColorPicker />
    </>
  );
}

export default App;
