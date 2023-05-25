import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
        <div className="section">
          <div className="background" style={{backgroundImage: "url(../img/us_night_med.jpg)"}}></div>
          <div className="inner-center-bottom">
            <h1>A Collaboration</h1>
            <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>{'Carnegie Observatories \u25cf Center for Astrophysics \u25cf University of Arizona'}</h4>
          </div>
        </div>
        
        <div className="section">
          <div className="background" style={{backgroundImage: "url(../img/cfa_coffee_med.png)"}}></div>
          <div className="background" style={{zorder:1, backgroundImage:"linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 60%)", backgroundColor:"rgba(0,0,0,0)", opacity:0.8}}></div>
          
          <div className="inner-left-top" style={{textColor:"#fff", top:"auto", bottom:"15%"}}>
            <h3>Leadership</h3>
            <p style={{color: "#fff"}}>A morning coffee conversation in September 2022 about the successor to the <a href="http://h3survey.rc.fas.harvard.edu/">H3 survey</a> snowballed into the dual-hemisphere, 3-million spectra Via project.</p>
            <table className="data">
              <tbody>
                <tr>
                  <td>PROJECT PIs</td>
                  <td>
                    <a href="https://obs.carnegiescience.edu/dr-ana-bonaca-0">Ana Bonaca<span> / Carnegie</span></a>
                    <span style={{paddingTop:"5px", display:"block"}}></span>
                    <a href="https://scholar.harvard.edu/cconroy/home">Charlie Conroy<span> / Harvard</span></a>
                  </td>
                </tr>
                <tr>
                  <td>INSTRUMENT PI</td>
                  <td><a href="https://www.cfa.harvard.edu/people/daniel-fabricant">Dan Fabricant<span> / SAO</span></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
        
        <div className="section">
          <div className="background" style={{backgroundImage: "url(../img/parts_med.jpg)"}}></div>
          <div className="background" style={{zorder:1, backgroundImage:"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 65%)", backgroundColor:"rgba(0,0,0,0)", opacity:0.8}}></div>
          <div className="inner-right-bottom" style={{textColor: "#fff", width:"35%"}}>
            <h3>Team</h3>
            <p style={{color: "#fff"}}>A small group of engineers, project managers, and scientists with experience in building optical spectrographs, focal plane systems, and control and analysis pipelines are the core builders of Via.</p>
            
            <table>
            <tbody>
              <tr>
                <td>Julia Brady<span> / Carnegie</span></td><td>Solange Ramirez<span> / Carnegie</span></td>
              </tr>
              <tr>
                <td>Phill Cargile<span> / Harvard</span></td><td>Conor Sayers<span> / SAO</span></td>
              </tr>
              <tr>
                <td>Vedant Chandra<span> / Harvard</span></td><td>Alan Uomoto<span> / Carnegie</span></td>
              </tr>
              <tr>
                <td>Charlie Hull<span> / Carnegie</span></td>
              </tr>
            </tbody>
          </table>
            
          </div>
        </div>
    </div>
  );
}

export default App;
