import React, { useState } from 'react'
// import Transparent from './images/transparent.gif'
import Addmember from './Addmember';
import AddSuper from './AddSuper';
import BankingModel from './BankingModel';
import ChangeStatus from './ChangeStatus';
import CreditRef from './CreditRef';
import Dashboard from './Dashboard';
import Marqueebox from './Marqueebox';
import TotalBox from './TotalBox';
import FixedFooter from './FixedFooter';


export default function Agents(props) {

    const [Changestatus, setChangestatus] = useState(false);
    const [AddMember, setAddMember] = useState(false);
    const [Creditrefence, setCreditrefence] = useState(false)

    


    const HandlePopup = (val1,val2)=>{
        if(val1 === 1){
          setChangestatus(val2);
        }
        if(val1 === 2){
          setAddMember(val2);
        }
        if(val1 === 3){
          setCreditrefence(val2);
        }
       }


    return (
        <React.Fragment>
          {Changestatus && <ChangeStatus HandlePopup={HandlePopup}/>}
          {AddMember && <Addmember HandlePopup={HandlePopup}/>}
          {Creditrefence && <CreditRef HandlePopup={HandlePopup}/>}  
          <div id="mainWrap" class="main_wrap">
              <Marqueebox/>
              <AddSuper HandlePopup={HandlePopup}/>
              <TotalBox/>
              <Dashboard HandlePopup={HandlePopup}/>
          </div> 
          <BankingModel/>
          <FixedFooter/> 
                   
        </React.Fragment>
     )
  }
