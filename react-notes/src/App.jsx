import Header from "./components/header";
import Footer from "./components/footer";
import blogs from "./components/blogs";

function App() {
  return (  
    <>
        <Header />
        <Footer />
        {blogs()}
    </>
  );
}

export default App;
