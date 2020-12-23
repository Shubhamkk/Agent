import React, { useState,useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import Transparent from './images/transparent.gif'


const cookies = new Cookies();


var globalArray1 = [];
var globalArray2 = [];


export default function Dashboard(props) {
   const [user,setuser] = useState([]);
   const [client,setclient] = useState([]);
   const [agentView,setagentView] = useState(1);
   const [clientView,setclientView] = useState(1);
    
   



    useEffect(()=>{

        var ssid = cookies.get('sid');
        if(!ssid) return;
        axios.post('http://65.0.111.203:3000/agentBelowDetailInfo',{
               sid:ssid
    
              })
              .then(result => {
                  if(result.status === 200){
                     
                    
                    for (let key in result.data) { 
                        
                        if (result.data.hasOwnProperty(key)) 
                        { 
                            result.data[key].user = key;
                            globalArray1.push(result.data[key]);
                            
                            
                        } 
                    }
                    let arr = [];
                    globalArray1.map((item)=>{
                        arr.push(item);
                    });
                    var startCount = 10*(agentView-1);
                    var endCount = 10*agentView;
                    setuser(arr.splice(startCount,endCount)); 
                    

                  }
         
                 }
                     
                ).catch(e => {
                  //setIsError(true);
              });

             axios.post('http://65.0.111.203:3000/clientBelowDetailInfo',{
               sid:ssid
    
              })
              .then(result => {
                  if(result.status === 200){
                    
                     
                    for (let key in result.data) { 
                        
                        if (result.data.hasOwnProperty(key)) 
                        { 
                            result.data[key].user = key;
                            globalArray1.push(result.data[key]);
                        } 
                    }
                    let arr = [];
                    globalArray2.map((item)=>{
                        arr.push(item);
                    });
                    var startCount = 10*(clientView-1);
                    var endCount = 10*clientView;
                    setclient(arr.splice(startCount,endCount)); 
                    

                  }
         
                 }
                     
             ).catch(e => {
                  //setIsError(true);
             });
             
             
          
        },[]);


        const changeCountClient = ()=>{

        }

        const changeCount = ()=>{
            
        }
      


    return (
        <React.Fragment>
            <table id="resultTable" class="table01 margin-table" style={{display:' table'}}>
            <tbody><tr>
                <th id="accountTh" width="" class="align-L" >Account(Agents)</th>
                <th id="creditRefTh" style={{display:'none'}} width="10%" >Credit Ref.</th> 
                <th id="creditLimitTh" width="10%" style={{display:'none'}}>Credit Limit</th>
                
                <th id="currentPLTh" width="10%" style={{display:'none'}}>Current P/L
                </th>
                <th id="transferablePLTh" width="10%" style={{display:'none'}}>Transferable P/L
                </th>
                <th id="balanceTh" width="10%" >Remaining bal.</th>
                <th id="exposureTh" width="10%" >Total Agent bal.</th>
                <th id="availableBalanceTh" width="10%" >Total client bal.</th>
                <th id="creditPLTh" width="10%" style={{display:'none'}}>Balance</th>
                <th id="playerBalanceTh" width="10%" >Available bal.</th>
                <th id="exposureLimitTh" width="10%" style={{display:'none'}}>Exposure Limit</th>
            
                <th id="refPLTh" width="10%" >Ledger Exposure</th>
                <th id="statusTh" width="10%" >Status</th>
                <th id="actionTh" width="15%" >Action</th>
            </tr>
            <tr id="dataTemplate" style={{display:'none'}}>
                <td id="accountCol"  class="align-L">
                    
                    <a id="account" class="ico_account" href="#"></a>
                </td>
                <td id="creditRef" class="credit-amount-member" ><a id="creditRefBtn" class="favor-set" href="javascript:void(0);"></a></td>
                <td id="creditLimit" style={{display:'none'}}></td>
                
                <td id="currentPL" style={{display:'none'}}></td>
                <td id="transferablePL" style={{display:'none'}}></td>
                <td id="balance" ></td>
                <td id="currentExposure" ></td>
                <td id="available" ></td>
                <td id="creditPL" style={{display:'none'}}></td>
                <td id="playerBalance" style={{display:'none'}}></td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL" ></td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>
                    <span id="status"></span>
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank">Bank</a>
                        </li>
                        <li>
                            <a id="p_l" class="p_l" href="#">Betting Profit &amp; Loss</a>
                        </li>
                        <li>
                            <a id="betting_history" class="betting_history" href="#">Betting History</a>
                        </li>
                        <li>
                            <a id="change" class="status" href="#change">Change Status</a>
                        </li>
                        <li>
                            <a id="profile" class="profile">Profile</a>
                        </li>
                    </ul>
                </td>
            </tr>

      {user.map((item,index)=>{
        var lev;
        if(item.level == 1){
            lev = 'SA';
          }
          else if(item.level == 2){
           lev = 'SS';
          }
         else if(item.level == 3){
           lev = 'SM';
          }
         else if(item.level == 4){
           lev = 'MA';
          }

          let b = item.balance ? item.balance : 0;
          let ld = item.ldb ? item.ldb : 0;
          let lw = item.lwc ? item.lwc : 0;
          let le = item.le ? item.le : 0;
          

        return(
        <tr id="14" style={{display: 'table-row'}} main_userid="wb77">
                <td id="accountCol"  class="align-L">
                    
                    <a id="account14" class="ico_account" href="javascript: void(0);"><span class="lv_2">{lev}</span>{item.user}</a>
                </td>
                <td id="creditRef14" style={{display:'none'}} class="credit-amount-member" ><a id="creditRefBtn" style={{display:'none'}} class="favor-set" href="javascript:void(0);">0.00</a></td>
                <td id="creditLimit14" style={{display:'none'}}>0.00</td>
                
                <td id="currentPL14" style={{display:'none'}}>0.00</td>
                <td id="transferablePL14" style={{display:'none'}}>0.00</td>
                <td id="balance14" >{parseFloat(b).toFixed(2)}</td>
                <td id="currentExposure14" >{parseFloat(ld).toFixed(2)}</td>
                <td id="available14" >{parseFloat(lw).toFixed(2)}</td>
                <td id="creditPL14" style={{display:'none'}}>0.00</td>
                <td id="playerBalance14" style={{display: 'table-cell'}}>0.00</td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL14" className={`${(le >= 0) ? "green": "red"}`}>{le >= 0 ? parseFloat(Math.abs(le)).toFixed(2): '('+parseFloat(Math.abs(le)).toFixed(2)+')'}</td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>

                   {item.userBlocked == 0 && item.betBlocked == 0 && <span id="status14"  class="status-active"><img src={Transparent}/>Active</span>}
                   {item.userBlocked == 0 && item.betBlocked == 1 && <span id="status14"  class="status-suspend"><img src={Transparent}/>Suspended</span>}
                   {item.userBlocked == 1 && <span id="status14"  class="status-lock"><img src={Transparent}/>Locked</span>}
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank" href="#bank" style={{display:'none'}}>Bank</a>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            <a id="change14" class="status"  onClick={()=>{props.HandlePopup(1,true)}}>Change Status</a>
                        </li>
                        <li>
                            <a id="profile14" class="profile">Profile</a>
                        </li>
                    </ul>
                </td>
             </tr>
            )})}
            </tbody></table>

            <div>      
            <ul id="pageNumberContent" class="pages">
                <li id="prev"><a onClick = {()=>{if(agentView > 1){setagentView(agentView-1);changeCount();}}} class="disable" style={{pointerEvents: 'none'}}>Prev</a></li>
                <li id="pageNumber"><a  class="select" style={{pointerEvents: 'none'}}>{agentView}</a></li>
                <li id="next"><a onClick = {()=>{if(user.length >= 10){setagentView(agentView+1);changeCount();}}} class="disable" style={{pointerEvents: 'none'}}>Next</a></li>
                <input type="text" id="goToPageNumber_1"  maxlength="6" size="4"/><a id="goPageBtn_1">GO</a> 
                </ul>
            </div>  

         <table id="resultTable" class="table01 margin-table" style={{display:' table'}}>
           <tbody><tr>
                <th id="accountTh" width="" class="align-L" >Account(Clients)</th>
                <th id="creditRefTh" style={{display:'none'}} width="10%" >Credit Ref.</th> 
                <th id="creditLimitTh" width="10%" style={{display:'none'}}>Credit Limit</th>
                
                <th id="currentPLTh" width="10%" style={{display:'none'}}>Current P/L
                </th>
                <th id="transferablePLTh" width="10%" style={{display:'none'}}>Transferable P/L
                </th>
                <th id="balanceTh" width="10%" >Remaining bal.</th>
                <th id="exposureTh" width="10%" >Total Agent bal.</th>
                <th id="availableBalanceTh" width="10%" >Total client bal.</th>
                <th id="creditPLTh" width="10%" style={{display:'none'}}>Balance</th>
                <th id="playerBalanceTh" width="10%" >Available bal.</th>
                <th id="exposureLimitTh" width="10%" style={{display:'none'}}>Exposure Limit</th>
            
                <th id="refPLTh" width="10%" >Ledger Exposure</th>
                <th id="statusTh" width="10%" >Status</th>
                <th id="actionTh" width="15%" >Action</th>
            </tr>

         {user.map((item,index)=>{
          var lev;
          if(item.level == 1){
            lev = 'SA';
          }
          else if(item.level == 2){
           lev = 'SS';
          }
          else if(item.level == 3){
           lev = 'SM';
           }
          else if(item.level == 4){
           lev = 'MA';
          }

          let b = item.balance ? item.balance : 0;
          let ld = item.ldb ? item.ldb : 0;
          let lw = item.lwc ? item.lwc : 0;
          let le = item.le ? item.le : 0;
          

        return(
        <tr id="14" style={{display: 'table-row'}} main_userid="wb77">
                <td id="accountCol"  class="align-L">
                    
                    <a id="account14" class="ico_account" href="javascript: void(0);"><span class="lv_2">{lev}</span>{item.user}</a>
                </td>
                <td id="creditRef14" style={{display:'none'}} class="credit-amount-member" ><a id="creditRefBtn" style={{display:'none'}} class="favor-set" href="javascript:void(0);">0.00</a></td>
                <td id="creditLimit14" style={{display:'none'}}>0.00</td>
                
                <td id="currentPL14" style={{display:'none'}}>0.00</td>
                <td id="transferablePL14" style={{display:'none'}}>0.00</td>
                <td id="balance14" >{parseFloat(b).toFixed(2)}</td>
                <td id="currentExposure14" >{parseFloat(ld).toFixed(2)}</td>
                <td id="available14" >{parseFloat(lw).toFixed(2)}</td>
                <td id="creditPL14" style={{display:'none'}}>0.00</td>
                <td id="playerBalance14" style={{display: 'table-cell'}}>0.00</td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL14" className={`${(le >= 0) ? "green": "red"}`}>{le >= 0 ? parseFloat(Math.abs(le)).toFixed(2): '('+parseFloat(Math.abs(le)).toFixed(2)+')'}</td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>

                   {item.userBlocked == 0 && item.betBlocked == 0 && <span id="status14"  class="status-active"><img src={Transparent}/>Active</span>}
                   {item.userBlocked == 0 && item.betBlocked == 1 && <span id="status14"  class="status-suspend"><img src={Transparent}/>Suspended</span>}
                   {item.userBlocked == 1 && <span id="status14"  class="status-lock"><img src={Transparent}/>Locked</span>}
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank" href="#bank" style={{display:'none'}}>Bank</a>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            <a id="change14" class="status"  onClick={()=>{props.HandlePopup(1,true)}}>Change Status</a>
                        </li>
                        <li>
                            <a id="profile14" class="profile">Profile</a>
                        </li>
                    </ul>
                  </td>
               </tr>
             )})}
          </tbody>
           
      </table>

            <div>      
            <ul id="pageNumberContent" class="pages">
                <li id="prev"><a onClick = {()=>{if(clientView > 1){setagentView(clientView-1);changeCountClient();}}} class="disable" style={{pointerEvents: 'none'}}>Prev</a></li>
                <li id="pageNumber"><a  class="select" style={{pointerEvents: 'none'}}>{clientView}</a></li>
                <li id="next"><a onClick = {()=>{if(client.length >= 10){setagentView(clientView+1);changeCountClient();}}} class="disable" style={{pointerEvents: 'none'}}>Next</a></li>
                <input type="text" id="goToPageNumber_1"  maxlength="6" size="4"/><a id="goPageBtn_1">GO</a> 
                </ul>
            </div>
            <div style = {{marginTop: '15px'}}>.</div>

            
           
        

        </React.Fragment>
    )
}
