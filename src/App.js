import Settings1_Header from './components/Settings1_Header';
import Settings3_Menu from './components/Settings3_Menu';
import Settings2_Nav from './components/Settings2_Nav';
import Settings4_Main from './components/Settings4_Main';
import './styles/style.css'

function App() {
    return (
        <div className="App" >
            <Settings1_Header brand="Devias Kit"></Settings1_Header>
            <Settings2_Nav></Settings2_Nav>
            <Settings3_Menu></Settings3_Menu>
            <Settings4_Main></Settings4_Main>
        </div>
    );
}

export default App;