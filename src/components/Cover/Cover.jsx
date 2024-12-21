import "./Cover.css"
import nameTitle from "../../assets/img/name.png"
import { Spinning } from "../Spinning/Spinning"
import arterisco from "../../assets/img/arterisco.webp"
import fondo from "../../assets/img/fondo.png"

export const Cover = () => {
    return (
      <div className="cover-container">
        {/* <video className="video" preload="none" autoPlay loop muted src={fondo}/> */}
        <img  className="video" src={fondo} />
        <div className='container-title'>
          <img src={nameTitle} />
        </div>
        <p className="cover-p">FRONTEND DEVELOPER</p>
      <div className='container-spinning'>
      <Spinning  text='FRONTEND DEVELOPER * CARO ARAYA * '><div className='container-arterisco'><img src={arterisco}/></div></Spinning>
      </div>
      </div>
    );
  };