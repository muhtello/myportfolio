import arx from "../../../../picdata/software/arztProjectViedo_Clip.mp4";
import {softwareDiscrption} from "./softwareDiscreption";

const linkSpringBoot = 'https://github.com/muhtello/middle-point.git';


export const getSoftwareContent = () => {
  
  const softerContent = [
    {
      header: "Arztpraxis",
      discreption: softwareDiscrption.arztPraxis,
      info: [
        {
          label: "backend",
          value: "[express.js, Chatbot dialog flow]"
        },
        {
          label: "frontend",
          value: "[React.js, Redux, 3DAvatar]"
        },
        {
          label: "databank",
          value: "{NoSQL, MongoDB}"
        }
      ],
      scriptView: {
        type: "video",
        src: arx
      }
      
    },
    {
      header: "Card Review",
      discreption: softwareDiscrption.ReviewCard,
      info: [
        {
          label: "framework",
          value: "[Spring Boot]"
        },
        {
          label: "databank",
          value: "{SQL, postgreSQL}"
        },
        {
          label: "Coming Soon",
          value: "Client Side"
        }
      ],
      scriptView: {
        type: "link",
        src: linkSpringBoot
      }
    }
  ];
  return softerContent;
}