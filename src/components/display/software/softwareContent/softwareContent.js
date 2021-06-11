import arx from "../../../../picdata/software/arztProjectViedo_Clip.mp4";
import {softwareDiscrption} from "./softwareDiscreption";

const linkSpringBoot = 'https://github.com/muhtello/middle-point.git';


export const getSoftwareContent = () => {
  
  const softerContent = [
    {
      header: "Appointment Reservation",
      discreption: softwareDiscrption.arztPraxis,
      info: [
        {
          label: "Backend",
          value: "[Express.js, Chatbot Dialog Flow]"
        },
        {
          label: "Frontend",
          value: "[React.js, Redux, 3DAvatar]"
        },
        {
          label: "Databank",
          value: "{NoSQL: MongoDB}"
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
          label: "Framework",
          value: "[Spring Boot]"
        },
        {
          label: "Databank",
          value: "{SQL: PostgreSQL}"
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