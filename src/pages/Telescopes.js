import '../App.css';
import Title from '../Title';

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
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/mmt_panorama_igor_med.jpg)"}}></div>
        <div className="inner-left-top" style={{textColor: "#fff", width:"35%"}}>
          <h4 style={{textTransform:"uppercase"}}>Arizona</h4>
          <h3>MMT</h3>
          <p style={{color: "#fff"}}>Operated by the Smithsonian Astrophysical Observatory and the University of Arizona.</p>
          
          
          
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/magellans_igor_med.jpg)"}}></div>
        <div className="inner-left-top" style={{textColor: "#fff", width:"35%"}}>
          <h4 style={{textTransform:"uppercase"}}>Chile</h4>
          <h3>Magellan</h3>
          <p style={{color: "#fff"}}>Operated by Carnegie Observatories.</p>
          
          
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
