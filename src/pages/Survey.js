import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/gaia_gas_med.jpg)"}}></div>
        <div className="inner-center-middle">
          <h1 style={{marginBottom:"50px"}}>An all-sky survey</h1>
          <h4 style={{textTransform:"uppercase", paddingBottom:"5px"}}>{'150 nights per year \u25cf 5 years \u25cf 3 million spectra'}</h4>
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/survey_footprint_offset_med.png)"}}></div>
        
        <div className="inner-left-top" style={{textColor:"#fff", top:"auto", bottom:"15%", backgroundColor:"rgba(0,0,0,0.)"}}>
          <h4 style={{textTransform:"uppercase", paddingBottom:"5px"}}>Overview</h4>
          <h3 style={{paddingBottom:"5px"}}>Survey Design</h3>
          <p style={{color: "#fff"}}>The Via Survey will target stellar streams and dwarf galaxy candidates identified by the <a href="https://rubinobservatory.org/">Vera Rubin Observatory</a>, as well as map large contiguous areas of the sky. The Primary Survey will observe each field for 3x20 minutes. Regions of interest, like faint dwarf galaxy candidates, or perturbed regions of a stream, will be observed in the Deep Drilling Mode, with total exposure time up to 8 hours. The analysis pipeline to measure radial velocities, stellar parameters and interstellar gas will be based on the <a href="https://github.com/pacargile/MINESweeper">MINESweeper</a> framework.</p>
          
          <table className="data">
            <tbody>
              <tr>
                <td>RV precision ([Fe/H] = -1<span>/-2</span>)</td><td>{'\u003c100 m/s'}<span> / 300 m/s</span></td>
              </tr>
              <tr>
                <td>[Fe/H] precision ([Fe/H] = -1<span>/-2</span>)</td><td>{'\u003c0.02 dex'}<span> / 0.04 dex</span></td>
              </tr>
            </tbody>
          </table>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
