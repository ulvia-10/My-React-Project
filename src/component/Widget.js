import { KeyboardArrowUpOutlined, PeopleOutlineSharp, PersonAddAlt1Outlined, PersonAddAlt1Sharp, PersonOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import styling from "../component/Widget.module.css"
import {Link} from "react-router-dom"

const Widget = ({type}) => {
  let data;

  const amount=100;
  switch(type){

    case "Pasien":
      data= {
        title:"PASIEN",
        isMoney: false,
        link: "View All Pasien ",
        icon: <PersonAddAlt1Sharp className={styling.icon}/>

      };

      break;
      case "Dokter":
        data= {
          title:"DOKTER",
          isMoney: false,
          link:"View All Doctors ",
          icon: <PersonAddAlt1Outlined className={styling.icon} style={{backgroundColor: 'black'}}/>
  
        };
        break;
        case "Antrian":
          data= {
            title:"ANTRIAN",
            isMoney: false,
            link:"View All Antrian ",
            icon: <PeopleOutlineSharp className={styling.icon}/>
    
          };
        break;
        default:
        break;

  }

  return (
    <div className={styling.widget}>
       <div className={styling.left}>
           <span className={styling.title}>{data.title}</span> 
           <span className={styling.counter}>{data.isMoney && ""} {amount}</span>
           <span className={styling.links}>
             <Link to="">
             {data.link}
             </Link>
             </span>
       
       </div> 
       <div className={styling.right}> 
       <div className={styling.precentage_positive}>
           <KeyboardArrowUpOutlined/>
           20%
       </div>
       <div className={styling.person}>{data.icon} </div>
       </div>
       </div>
  )
}

export default Widget