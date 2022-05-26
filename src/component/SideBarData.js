import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title:'Home', 
        path:"/Dashboard",
        Icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'List Doctor', 
        path:"/ListDoctor",
        Icon: <AiIcons.AiFillProfile/>,
        cName: 'nav-text'
    },
    {
        title:'List Patient', 
        path:"/ListPatient",
        Icon: <IoIcons.IoIosAddCircleOutline/>,
        cName: 'nav-text'
    },
    {
        title:'Log Out', 
        path:"/Logout",
        Icon: <AiIcons.AiOutlineArrowRight/>,
        cName: 'nav-text'
    },

]