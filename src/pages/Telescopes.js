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
          <p style={{color: "#fff"}}>Via builds upon the legacy of Hectochelle in bringing world-leading wide-field, high-resolution, fiber-fed spectroscopy to the 6.5m MMT. The <a href="https://www.mmto.org/">MMT Observatory</a> is a joint facility of the Smithsonian Institution and the University of Arizona.</p>
          
          <table className="data">
            <tbody>
              <tr>
                <td>Latitude</td><td>{'31\u00b0 41\' 18" N'}</td>
              </tr>
              <tr>
                <td>Longitude</td><td>{'110\u00b0 53\' 06" W'}</td>
              </tr>
              <tr>
                <td>Altitude</td><td>2,616 m</td>
              </tr>
              <tr>
                <td>Median seeing</td><td>1"</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
      
      <div className="section">
        <div className="background" style={{backgroundImage: "url(../img/magellans_igor_med.jpg)"}}></div>
        <div className="inner-left-top" style={{textColor: "#fff", width:"35%"}}>
          <h4 style={{textTransform:"uppercase"}}>Chile</h4>
          <h3>Magellan</h3>
          <p style={{color: "#fff"}}>Via will be mounted at the f/5 focus of the 6.5m Magellan/Clay telescope, which has the identical 1deg field-of-view to MMT. Operated by Carnegie Observatories at the <a href="https://www.lco.cl/">Las Campanas Observatory</a>.</p>
          
          <table className="data">
            <tbody>
              <tr>
                <td>Latitude</td><td>{'29\u00b0 00\' 57" S'}</td>
              </tr>
              <tr>
                <td>Longitude</td><td>{'70\u00b0 41\' 31" W'}</td>
              </tr>
              <tr>
                <td>Altitude</td><td>2,380 m</td>
              </tr>
              <tr>
                <td>Median seeing</td><td>0.7"</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
