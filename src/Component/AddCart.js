import React from 'react'
import { Info } from './Info'
const AddCart = () => {
    return (
        
      <>
        {Info.map((item,index)=>{
            return(
                <>
                 <div className="addBox">
                     <div className="f1">
                         <div className="a2">
                         {item.icons}
                         </div>
                         <div className="fin">
                          <h5>{item.title} </h5> 
                         </div>
                     <div>
                        {item.path}{item.log}
                        </div>
                        
                        </div>
                        <div className="f2">
                            
                            <div className="i">
                             {item.icon} {item.des} {item.lin}
                            </div>
                            <div className="i">
                                {item.setlog} {item.set}
                            </div>
                            <div className="i">
                                {item.dailylog} {item.daily}
                            </div>
                            <div className="i hj">
                               {item.cName} <p className="lp">{item.add}                             </p>
                            </div>
                        </div>
                     </div>
               
                   
                       
                    
                
               
                </>
            )
        })}
</>
    )
}

export default AddCart
