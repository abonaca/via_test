import '../App.css';
import Title from '../Title';
import Tiles from '../Tiles';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/mmt_igor_med.jpg)"}}></div>
        <div className="inner-center-bottom">
          <h1>View of the entire sky</h1>
          <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>Twin 6.5-meter, wide-field telescopes in Arizona and Chile</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
