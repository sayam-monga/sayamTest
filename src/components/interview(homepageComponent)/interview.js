// import stl from "./styles/interview.module.css";

// const Interviews = () => {
//   return (
//     <div className={stl.parent}>
//       <span className={stl.sectionHeading}>INTERVIEWS</span>
//       <div className={stl.grid}>
//         <Card text='“Echoes Club interviewed Jeeya Prakash, a 4th Year student majoring in Electronics and Communication Engineering at Thapar Institute. She is a freelance writer and the co-founder....”' name="Paras madan" designation="BE, ECE | Batch of 2022"></Card>
//       </div>
//     </div>
//   );
// };

// const Card = ({ props }) => {
//   return (
//     <div className={stl.card}>
//       <div className={stl.innerCard}>
//         <span className={stl.cardText}>{props.text}</span>
//         <div className={stl.profile}>
//           <image
//             src={props.img}
//             style={{ borderRadius: "100%", width: "72px" }}
//           />
//           <div className={stl.details}>
//             <span className={stl.name}>{props.name}</span>
//             <span className={stl.designation}>{props.designation}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Interviews;


import stl from "./styles/interview.module.css";

const Interviews = () => {
  return (
    <div className={stl.parent}>
      <span className={stl.sectionHeading}>INTERVIEWS</span>
      <div className={stl.grid}>
        <Card 
          text='“Echoes Club interviewed Jeeya Prakash, a 4th Year student majoring in Electronics and Communication Engineering at Thapar Institute. She is a freelance writer and the co-founder....”' 
          name="Paras madan" 
          designation="BE, ECE | Batch of 2022"
          // Add img prop if you have an image source
          // img="path_to_image.jpg"
        />
      </div>
    </div>
  );
};

const Card = ({ text, name, designation, img }) => {
  return (
    <div className={stl.card}>
      <div className={stl.innerCard}>
        <span className={stl.cardText}>{text}</span>
        <div className={stl.profile}>
          <img
            src={img}
            alt="Profile" // Remember to add alt text for accessibility.
            style={{ borderRadius: "100%", width: "72px" }}
          />
          <div className={stl.details}>
            <span className={stl.name}>{name}</span>
            <span className={stl.designation}>{designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviews;
