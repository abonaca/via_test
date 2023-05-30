import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
        <div className="section">
          <div className="background" style={{backgroundImage: "url(../img/us_night_med.jpg)"}}></div>
          <div className="inner-center-bottom" style={{bottom:"2%"}}>
            <h1>A Collaboration</h1>
            <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>{'Carnegie Observatories \u25cf Center for Astrophysics \u25cf University of Arizona'}</h4>
          </div>
        </div>
        
        <div className="section">
          <div className="background" style={{backgroundImage: "url(../img/parts_med.jpg)"}}></div>
          <div className="background" style={{zorder:1, backgroundImage:"linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)", backgroundColor:"rgba(0,0,0,0)", opacity:0.8}}></div>
          
          <div className="inner-left-bottom" style={{width:"35%", left:"100px", bottom:"5%"}}>
            <h3>The Via Team</h3>
            <p style={{color: "#fff"}}>A small group of engineers, project managers, and scientists with experience in building optical spectrographs, focal plane systems, and control and analysis pipelines are the core builders of Via.</p>
            
            <table className="data" style={{width:"85%", marginLeft:"10px"}}>
              <tbody>
                <tr>
                  <td>PROJECT PIs</td>
                  <td>
                    <a href="https://obs.carnegiescience.edu/dr-ana-bonaca-0">Ana Bonaca<span> / Carnegie</span></a>
                    <span style={{paddingTop:"10px", display:"block"}}></span>
                    <a href="https://scholar.harvard.edu/cconroy/home">Charlie Conroy<span> / CfA</span></a>
                  </td>
                </tr>
                <tr>
                  <td>INSTRUMENT PI</td>
                  <td><a href="https://www.cfa.harvard.edu/people/daniel-fabricant">Dan Fabricant<span> / CfA</span></a></td>
                </tr>
              </tbody>
            </table>
            
            <p className="team">At Carnegie</p>
            <p>Julia Brady, Charlie Hull, Solange Ramirez, Alan Uomoto</p>
            
            <p className="team">At the CfA</p>
            <p>Phill Cargile, Vedant Chandra, Brian McLeod, Conor Sayers</p>
            
            <p className="team">At Arizona</p>
            <p>Dennis Zaritsky</p>
          </div>
          
        </div>
        
    </div>
  );
}

export default App;
