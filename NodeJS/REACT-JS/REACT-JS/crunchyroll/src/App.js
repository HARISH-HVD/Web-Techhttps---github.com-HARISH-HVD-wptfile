import "./assets/css/style.css"
import prime from "./assets/imgs/primevideowp.jpg"
import tvhd1 from "./assets/imgs/tv1.jpg"
import tvhd2 from "./assets/imgs/tv2.jpg"


function App() {
  return (
    <>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
    <a className="navbar-brand" href="#">Prime Video</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">TV Shows</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live TV
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Sports</a></li>
            <li><a className="dropdown-item" href="#">Health</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">News</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"> | </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"> 📺 Subscriptions</a>
        </li>
       </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Movies" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        <img src={prime} width={1536} height={680} alt=""/>

<div>
      <div className="row">
        <div className="text-col "  style={{ color: 'white' }}>
          <h2>Enjoy on your TV</h2>
          <p>Watch on Smart TV, Mobiles, Tablets, PC, X-Box, PS-5, and More...</p>
        </div>
        <div className="image-col">
          <img src={tvhd1} height={560} width={768} alt="" />
        </div>
      </div>
      
      <div className="row">
        <div className="image-col">
          <img src={tvhd2} height={560} width={768} alt="" />
        </div>
        <div className="text-col"  style={{ color: 'white' }}>
          <h2>Download Your Shows to Watch Offline</h2>
          <p>Save your favorites easily and watch anywhere you want...</p>
        </div>
      </div>
    </div>
    </div>
    

          
           
    </>
  );
}

export default App;
