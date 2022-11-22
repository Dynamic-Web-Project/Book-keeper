import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
function App() {
  return (
    <Router>
      <Header>
        <Container>
          <Routes>
            <Route path='/' component={HomeScreen} exact/>
          </Routes>
        </Container>
      </Header>
    </Router>
  );
}

export default App;
