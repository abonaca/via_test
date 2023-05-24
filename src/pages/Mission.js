import '../App.css';
import Title from '../Title';
import Tiles from '../Tiles';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/TNG50_protocluster_med.png)"}}></div>
        <div className="inner-center-bottom">
          <h1>Mission</h1>
          <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>Discover the nature of dark matter and drivers of galaxy formation</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
