import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/survey_footprint_med.png)"}}></div>
        <div className="inner-center-middle">
          <h1>An all-sky survey</h1>
          <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>{'150 nights per year \u25cf 5 years \u25cf 3 million spectra'}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
