import '../App.css';
import Title from '../Title';
import Tiles from '../Tiles';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/diffraction_grating.jpg)"}}></div>
        <div className="inner-center-bottom">
          <h1>ViaSpec</h1>
          <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>100 m/s radial velocities for all Gaia stars</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
