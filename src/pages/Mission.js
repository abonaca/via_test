import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/mission_tng.jpg)"}}></div>
        <div className="inner-left-top" style={{textAlign:"left", width:"35%", top:"20%", left:"100px", maxWidth:"600px"}}>
          <p className="inspiration">What is the nature of dark matter?<br/>
          What are the limits of galaxy formation?<br/>
          How does gas cycle into and out of galaxies?</p>
          
          <p>The answer to these questions lies in the high-resolution map and motions of stars and gas in the Milky Way, beyond the precision and scale of current astronomical instrumentation.</p>
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/mission_cosmicweb.jpg)"}}></div>
        <div className="background" style={{zorder:1, backgroundImage:"linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 60%)", backgroundColor:"rgba(0,0,0,0)", opacity:0.8}}></div>
        
        <div className="inner-left-bottom" style={{width:"30%", left:"100px"}}>
          <h4 style={{textTransform:"uppercase", paddingBottom:"5px"}}>Overview</h4>
          <h3 style={{paddingBottom:"5px"}}>The Via Project</h3>
          <p>The Via Project is using the Milky Way galaxy as a laboratory to answer fundamental questions about the nature of the universe. Via will conduct an all-sky survey of stars using the 6.5-meter MMT (Arizona) and Magellan (Chile) telescopes. The survey will utilize the ViaSpec instruments, which will be built and deployed on each of the telescopes.</p>
          <p>The project is a collaboration between Carnegie Observatories, the Center for Astrophysics | Harvard & Smithsonian, and the University of Arizona. Our team includes experts in conducting large-scale surveys and building astronomical instrumentation. We expect to begin the survey in early 2027 to immediately build on the enabling data released by Gaia DR4 and LSST.</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
