import stl from "./styles/studentPanorama.module.css";
import leftimg from './imgg.png'
import rightimg from './imgr.png'
import arr from './Arrow.png'

const StudentPanorama = () => {
  return (
    <div className={stl.parent}>
      <div className={stl.left}>
        <span className={stl.sectionHeading}>STUDENT PANORAMA</span>
        <div className={stl.leftWrap}>
          <TripleText text="EDITIONS" />
          <img src={leftimg} className={stl.leftImg}></img>
          </div>
      </div>
      <div className={stl.right}>
      <div className={stl.blogLink}>
      <span className={stl.blogTxt}>BLOG</span> <img src={arr}></img>
      </div>
      <div className={stl.rightWrap}>
          <TripleText text="BULLETIN" />
          <img src={rightimg} className={stl.rightImg}></img>
          </div>
      </div>
    </div>
  );
};



const TripleText = (props) => {
  const s1 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Monument Extended",
    fontSize: "85px",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "-0.425px",
  };

  const s2 = {
    textAlign: "center",
    fontFamily: "Monument Extended",
    fontSize: "85px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23.83px" /* 28.035% */,
    letterSpacing: "-0.425px",
    color: "#E5E5E5", // Text color
    textShadow: '-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,0.5px 0.5px 0 #000'
  };

  const s3 = {
    
    textAlign: "center",
    fontFamily: "Monument Extended",
    fontSize: "85px",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "-0.425px",
    color: "#E5E5E5", // Text color
    textShadow: '-0.3px -0.3px 0 #000, 0.3px -0.3px 0 #000, -0.3px 0.3px 0 #000, 0.3px 0.3px 0 #000'
  };

  return (
    <div style={{ display:'inline-flex', flexDirection: "column" }}>
      <span style={s1}>{props.text}</span>
      <span style={s2}>{props.text}</span>
      <span style={s3}>{props.text}</span>
    </div>
  );
};

export default StudentPanorama;
