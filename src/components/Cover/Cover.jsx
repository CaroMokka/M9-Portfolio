import nameTitle from "../../assets/img/name.png"
import "./Cover.css"

export const Cover = () => {
    return (
      <div className="cover-container">
        {/* <video className="video" preload="none" src={coverVideo} autoPlay loop muted /> */}
        <div className='container-title'>
          <img src={nameTitle} />
        </div>
        <p className="cover-p">FRONTEND DEVELOPER</p>
      <div className='container-spinning'>
      {/* <Spinning  text='FRONTEND DEVELOPER * CARO ARAYA * '><div className='container-arterisco'><img src={arterisco}/></div></Spinning> */}
      </div>
      </div>
    );
  };