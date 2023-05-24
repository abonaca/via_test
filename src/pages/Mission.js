import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/TNG50_protocluster_med.png)"}}></div>
        <div className="inner-right-bottom">
          <h2>Discover</h2>
          <h3 className="indent">The nature of dark matter</h3>
          <h2 style={{marginTop: "25px"}}>Find</h2>
          <h3 className="indent">The edge of galaxy formation</h3>
          <h2 style={{marginTop: "25px"}}>Map</h2>
          <h3 className="indent">The cold gas feeding the Milky Way</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
