import React, { useState,useEffect } from 'react'

import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function AgentProfile(props) {
    const [view, setview] = useState(1);

    useEffect(()=>{

        //console.log(props.agentStack);
        var ssid = cookies.get('sid');
        //axios.post('http://65.0.111.203:3000/agentAccountSummary',{
        axios.post('http://65.0.111.203:3000/agentAccountStatement',{
        //axios.post('http://65.0.111.203:3000/changeAgentPassword',{
         sid:ssid,
         agentId:props.agentStack[props.agentStack.length-1].userid,
         agentPass:'1212',
         myPass:'8989'

        })
        .then(result => {
           
     
          if(result.status === 200){
             
            console.log(result.data);
          
           }
          
         }
         
         ).catch(e => {
            //setIsError(true);
         });
         
        
     },[]);


    return (
  <React.Fragment>
    
    <div class="main_wrap">
   
    
     <div style={{top:'0px'}} class="col-left">

    
      <div class="sub_path">

       
        <ul class="menu-list">
            
	            <li class="class">Position</li>
	            <li>
	                <a onClick={()=>{setview(1);}} id="accountSummary"  className={`${view === 1 ? "select":""}`}>Account Summary</a>
	            </li>
	
	            <li class="class">Performance</li>
	            
	            
	            <li>
	                <a onClick={()=>{setview(2);}}  id="transactionHistory" className={`${view === 2 ? "select":""}`} >Transaction&nbsp;History
	                </a>
	            </li>
	            
	            <li><a id="_activityLog" >Activity Log</a></li>

            
           </ul>
       </div>
   </div>


    
{view === 1 && <div class="col-center report">
        


<div id="loading" class="loading-wrap" style={{display:'none'}}>
  <ul class="loading">
    <li><img src="/images/loading40.gif"/></li>
    <li>Loading...</li>
  </ul>
</div>


<div id="message" class="message-wrap success">
  <a class="btn-close">Close</a>
  <p></p>
</div>



		<h2>Account Summary</h2>

        <ul class="acc-info">
			<li class="user">alamin786</li>
            <li class="status_all">
                <strong id="status"></strong>
            </li>
            
            
            
        </ul>

        
        <table class="table01">
            <tbody><tr>
        <th width="20%" class="align-L">Wallet</th>
                
        <th width="25%">Available to Bet</th>
        <th width="">Funds available to withdraw</th>
        <th width="25%">Current exposure</th>
            </tr>

            <tr>
        <td class="align-L">Main wallet</td>
                
                <td id="availableToBet">1,681.42</td>
                <td id="availableToWithDraw">1,681.42</td>
                <td id="currentExposure">0.00</td>
            </tr>
        </tbody></table>

    <h2>Profile</h2>
        <div class="event-left">
            <div class="profile-wrap">
				<h3>About You</h3>
                <dl>
					<dt>First Name</dt>
					<dd>Alamin</dd>

					<dt>Last Name</dt>
					<dd></dd>

					<dt>Birthday</dt>
                    <dd></dd>

					<dt>E-mail</dt>
					<dd>sky@gmail.com</dd>

					<dt>Password</dt>
                    <dd>********************************
						
						<a class="favor-set" >Edit</a>
						
                    </dd>

					<dt>Time Zone</dt>
					<dd>IST</dd>
                </dl>
            </div>

            <div class="profile-wrap">
				<h3>Contact Details</h3>
                <dl>
					<dt>Primary number</dt>
					<dd></dd>
                </dl>
            </div>
        </div>

        <div class="event-right">
            <div class="profile-wrap">
				<h3>Limits &amp; Commission</h3>
                <dl>
					<dt>Exposure Limit</dt>
					<dd id="mainwalletExposureLimit">0
						
                    </dd>
					
					<dt>Commission</dt>
                    <dd>
                        <span id="commission">2.0%</span>
						
						<a href="#exposure" class="favor-set" >Edit</a>
						
                    </dd>

					
                </dl>
            </div>
			
            <div class="profile-wrap" style={{display:'none'}}>
                <h3>PT</h3>
                <dl class="casinopt-list-wrap">
					
                    <dt>PT Allowed</dt>
					<dd><span id="profile_pt_allowed">0%</span></dd>
					
					
					<dt>PT Setting</dt>
                    <dd>
                    
						<a  class="favor-set">Edit</a>
							
                    </dd>
					
                    <dd class="dl_list">
                        <img class="expand-arrow" src="/images/transparent.gif"/>
                        <dl class="casinopt-list-head">
							<dt></dt>
							
							<dd>Total PT</dd>
							
						</dl>
						
                   		<dl class="casinopt-list">
                         <dt>Soccer</dt>
							
                         <dd id="profile_soccer_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Tennis</dt>
							
                         <dd id="profile_tennis_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Cricket</dt>
							
                         <dd id="profile_cricket_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Rugby Union</dt>
							
                         <dd id="profile_rugby_union_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Horse Racing</dt>
							
                         <dd id="profile_horse_racing_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Greyhound Racing</dt>
							
                         <dd id="profile_greyhound_racing_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>American Football</dt>
							
                         <dd id="profile_american_football_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Basketball</dt>
							
                         <dd id="profile_basketball_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Politics</dt>
							
                         <dd id="profile_politics_PT"></dd>
							
                    	</dl>
                        
                    </dd>
                    <div style={{display:'none'}}>
                        <dt>Binary PT Setting</dt>
                        <dd></dd>
                        <dd class="dl_list">
                            <img class="expand-arrow" src="/images/transparent.gif"/>
                            <dl>
                                <dt>Binary</dt>
                                <dd id="profile_company_binary_PT">0%</dd>
                            </dl>
                        </dd>
                    </div>

   
                </dl>
             </div>

                 
        </div>
      </div> }



     {view === 2 && <div class="col-center report">
		

        
        <div id="loading" class="loading-wrap" style={{display:'none'}}>
          <ul class="loading">
            <li><img src="/images/loading40.gif"/></li>
            <li>Loading...</li>
          </ul>
        </div>
        
        
        <div id="message" class="message-wrap success">
          <a class="btn-close">Close</a>
          <p></p>
         </div>
        
            <h2>Transaction&nbsp;History
             </h2>
            
                <table style={{display:'none'}}>
        
                    <tbody>
                        <tr id="tempTr">
                        <td id="createDate" class="align-L"></td>
                        <td id="deposit">-</td>
                        <td id="withdraw">-</td>
                        <td id="balance"></td>
                        <td id="remark"></td>
                        <td>
                            <spen id="from"></spen>
                            <img class="fromto" src="/images/transparent.gif"/>
                            <spen id="to"></spen>
                        </td>
                    </tr>
        
                    <tr id="noDataTempTr">
                        <td class="no-data" colspan="5">
                            <p>No Data</p>
                        </td>
                    </tr>
                </tbody></table>
        
                <table id="table_log" class="table01">
                    <tbody><tr>
                        <th width="15%" class="align-L">Date/Time</th>
                        <th width="18%">Deposit</th>
                        <th width="18%">Withdraw</th>
                        <th width="18%">Balance</th>
                        <th width="16%">Remark</th>
                        <th width="">From/To</th>
                    </tr>
        
                    </tbody>
                    <tbody id="content"><tr id="tempTr">
                        <td id="createDate" class="align-L">2020-12-14 14:47:55</td>
                        <td id="deposit">-</td>
                        <td id="withdraw"><span class="red">( 1.00)</span></td>
                        <td id="balance"> 0.00</td>
                        <td id="remark"></td>
                        <td>
                            <spen id="from">Senior Super</spen>
                            <img class="fromto" src="/images/transparent.gif"/>
                            <spen id="to">alamin786</spen>
                        </td>
                    </tr><tr id="tempTr">
                        <td id="createDate" class="align-L">2020-09-15 20:39:05</td>
                        <td id="deposit">-</td>
                        <td id="withdraw"><span class="red">( 20.38)</span></td>
                        <td id="balance"> 0.00</td>
                        <td id="remark"></td>
                        <td>
                            <spen id="from">alamin786</spen>
                            <img class="fromto" src="/images/transparent.gif"/>
                            <spen id="to">star20</spen>
                        </td>
                    </tr>
                    <tr id="tempTr">
                        <td id="createDate" class="align-L">2020-07-30 14:16:35</td>
                        <td id="deposit"> 1,000.00</td>
                        <td id="withdraw">-</td>
                        <td id="balance"> 1,000.00</td>
                        <td id="remark"></td>
                        <td>
                            <spen id="from">alamin786</spen>
                            <img class="fromto" src="/images/transparent.gif"/>
                            <spen id="to">kabirx</spen>
                        </td>
                    </tr></tbody>
                </table>
        
                
        
           <div>
            <ul style={{display:'none'}}>
                <li id="prev"><a >Prev</a></li>
                <li id="next"><a >Next</a></li>
                <li id="pageNumber"><a ></a></li>
                <li id="more"><a >...</a></li>
                <input type="text" id="goToPageNumber"  maxlength="6" size="4"/>
                <li><a id="goPageBtn">GO</a></li>			
            </ul>
        
            <ul id="pageNumberContent" class="pages"><li id="prev"><a class="disable" style={{pointerEvents:'none'}}>Prev</a></li><li id="pageNumber"><a  class="select" style={{pointerEvents:'none'}}>1</a></li><li id="pageNumber"><a >2</a></li><li id="next"><a >Next</a></li></ul>
         </div>
        
            </div> }


     </div>
        </React.Fragment>
    )
}
