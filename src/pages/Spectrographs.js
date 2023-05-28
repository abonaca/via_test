import '../App.css';
import Title from '../Title';

function App() {
  return (
    <div id="wrapper">
      <Title />
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/diffraction_grating.jpg)"}}></div>
        <div className="inner-center-bottom">
          <h1>ViaSpec</h1>
          <h4 style={{textTransform:"uppercase", paddingTop:"10px"}}>Delivering 100 m/s radial velocities for millions of stars</h4>
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/system_design.png)"}}></div>
        <div className="inner-left-bottom" style={{width:"30%", left:"100px"}}>
          <h4 style={{textTransform:"uppercase", paddingBottom:"5px"}}>Overview</h4>
          <h3 style={{paddingBottom:"5px"}}>System Design</h3>
          <p>Viaspec will be mounted at the f/5 Cassegrain focus. The fiber positioner system will be attached to the primary mirror with six spokes. The fiber run will be kept short to minimize the throughput loss. The bench spectrograph will be positioned on the telescope platform, and store on a cart for easier storage.</p>
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/viaspec_fps_med.png)"}}></div>
        <div className="inner-left-bottom" style={{width:"30%", left:"100px"}}>
          <h4 style={{textTransform:"uppercase", paddingBottom:"5px"}}>Component</h4>
          <h3 style={{paddingBottom:"5px"}}>Focal Plane System</h3>
          <p>ViaSpec will be fed by 600 robotic fibers, positioned in the focal plane by the vertically-orientetd theta/phi actuators, developed by MPS. The fibers can be positioned nearly simultaneously and the system is very fault tolerant. The optical fibers will travel on the neutral axis of a controlled-radius cable carrier in the fiber derotator and between the fiber positioner and the bench spectrograph.</p>
        <table className="data">
            <tbody>
              <tr>
                <td>Fiber Size</td><td>1.15"<span> / 0.19mm</span></td>
              </tr>
              <tr>
                <td>Patrol region</td><td>155"<span> / 25.9mm</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default App;
