
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import BlogScreen from './screens/BlogScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  return (
    <div>
      <Router>
        

        {/*style={{backgroundColor:'#130F0E'}} */}
        <main>
        <Header />
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/login" element={<LoginScreen/>}  />
          <Route path="/register" element={<RegisterScreen/>}  />
          <Route path="/post/:slug" element={<BlogScreen/>}  />
          

        </Routes>
        </Container>
        
        </main>
        <Footer/>
      </Router>
   

    </div>
    
  );
}

export default App;
