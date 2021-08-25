
import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
import * as Fa from 'react-icons/fa';
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import * as Bi from "react-icons/bi";
import "./Navbar.css"

import { useHistory } from "react-router-dom";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
const Slider1= () => {
    let history= useHistory();
    const [items] = useState([
        {id:1,logo:<Fa.FaDna />,title:'Complete Blood coutn;CBC',des:'26 Parmeter covered\n $330.00' ,logoCart:<Bi.BiCartAlt onClick={()=> {history.push("/BookTest");}}/>}, 
         {id:2,logo:<Fa.FaDna/>,title:'',des:'6 Paramete(s) Covered\n$400.00',logoCart:<Bi.BiCartAlt onClick={()=> {history.push("/BookTest");}}/>}, 
         {id:3,logo:<Fa.FaDna/>,title:'Complete Blood coutn;CBC',des:'26 Parmeter covered\n $330.00',logoCart:<Bi.BiCartAlt onClick={()=> {history.push("/BookTest");}}/>}, 
         {id:4,logo:<Fa.FaDna/>,title:'',des:'6 Paramete(s) Covered\n$400.00',logoCart:<Bi.BiCartAlt onClick={()=> {history.push("/BookTest");}}/>},  
          ]);
  
  
  
    return (
      <div className="App">
        <div className="controls-wrapper">
         
        </div>
        
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <Item key={item.id}>
                  <div className="logod">{item.logo}</div>
            <div  className="this"> 
              <h3>{item.title}</h3> 
              <p>{item.des}</p>
              </div>
              <div className="logoCart">
                  {item.logoCart}
              </div>
              </Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
}

export default Slider1