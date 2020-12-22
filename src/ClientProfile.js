import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function ClientProfile(props) {
    const [view, setview] = useState(props.pro);


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
	
	            <li  class="class">Performance</li>
	            
	            <li>
	                <a onClick={()=>{setview(2);}} id="bettingHistory" className={`${view === 2 ? "select":""}`} >Betting History</a>
	            </li>
	            <li>
	                <a onClick={()=>{setview(3);}} id="profitLoss" className={`${view === 3 ? "select":""}`}>Betting Profit &amp; Loss</a>
	            </li>
	            
	            
	            <li>
	                <a onClick={()=>{setview(4);}} id="transactionHistory" className={`${view === 4 ? "select":""}`}>Transaction&nbsp;History
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
			<li class="user">boroda</li>
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
                
                <td id="availableToBet">49.09</td>
                <td id="availableToWithDraw">49.09</td>
                <td id="currentExposure">0.00</td>
            </tr>
        </tbody></table>

    <h2>Profile</h2>
        <div class="event-left">
            <div class="profile-wrap">
				<h3>About You</h3>
                <dl>
					<dt>First Name</dt>
					<dd></dd>

					<dt>Last Name</dt>
					<dd></dd>

					<dt>Birthday</dt>
                    <dd></dd>

					<dt>E-mail</dt>
					<dd>gdyhfgddg@gmail.com</dd>

					<dt>Password</dt>
                    <dd>********************************
						
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
					<dd id="mainwalletExposureLimit">10,000.00</dd>
					
					<dt>Commission</dt>
                    <dd>
                        <span id="commission">2.0%</span>
						
                    </dd>

					
                </dl>
            </div>
			
            <div class="profile-wrap" style={{display:'none'}}>
                <h3>PT</h3>
                <dl class="casinopt-list-wrap">
					
					
					<dt>PT Setting</dt>
                    <dd>
                    
						<a class="favor-set" >Edit</a>
						
                    </dd>
					
                    <dd class="dl_list">
                        <img class="expand-arrow" src="/images/transparent.gif"/>
                        <dl class="casinopt-list-head">
							<dt></dt>
							
							<dd>SS</dd>
							
							<dd>SS (Actual)</dd>
							
							<dd>SUP (Actual)</dd>
							
							<dd>MA (Actual)</dd>
							
						</dl>
						
                   		<dl class="casinopt-list">
                         <dt>Soccer</dt>
							
							<dd id="profile_soccer_5_PT_setting">0%</dd>
							
							<dd id="profile_soccer_5_PT">0%</dd>
							
							<dd id="profile_soccer_4_PT">0%</dd>
							
							<dd id="profile_soccer_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Tennis</dt>
							
							<dd id="profile_tennis_5_PT_setting">0%</dd>
							
							<dd id="profile_tennis_5_PT">0%</dd>
							
							<dd id="profile_tennis_4_PT">0%</dd>
							
							<dd id="profile_tennis_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Cricket</dt>
							
							<dd id="profile_cricket_5_PT_setting">0%</dd>
							
							<dd id="profile_cricket_5_PT">0%</dd>
							
							<dd id="profile_cricket_4_PT">0%</dd>
							
							<dd id="profile_cricket_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Rugby Union</dt>
							
							<dd id="profile_rugby_union_5_PT_setting">0%</dd>
							
							<dd id="profile_rugby_union_5_PT">0%</dd>
							
							<dd id="profile_rugby_union_4_PT">0%</dd>
							
							<dd id="profile_rugby_union_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Horse Racing</dt>
							
							<dd id="profile_horse_racing_5_PT_setting">0%</dd>
							
							<dd id="profile_horse_racing_5_PT">0%</dd>
							
							<dd id="profile_horse_racing_4_PT">0%</dd>
							
							<dd id="profile_horse_racing_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Greyhound Racing</dt>
							
							<dd id="profile_greyhound_racing_5_PT_setting">0%</dd>
							
							<dd id="profile_greyhound_racing_5_PT">0%</dd>
							
							<dd id="profile_greyhound_racing_4_PT">0%</dd>
							
							<dd id="profile_greyhound_racing_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>American Football</dt>
							
							<dd id="profile_american_football_5_PT_setting">0%</dd>
							
							<dd id="profile_american_football_5_PT">0%</dd>
							
							<dd id="profile_american_football_4_PT">0%</dd>
							
							<dd id="profile_american_football_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Basketball</dt>
							
							<dd id="profile_basketball_5_PT_setting">0%</dd>
							
							<dd id="profile_basketball_5_PT">0%</dd>
							
							<dd id="profile_basketball_4_PT">0%</dd>
							
							<dd id="profile_basketball_3_PT">0%</dd>
							
                    	</dl>
                        
                   		<dl class="casinopt-list">
                         <dt>Politics</dt>
							
							<dd id="profile_politics_5_PT_setting"></dd>
							
							<dd id="profile_politics_5_PT"></dd>
							
							<dd id="profile_politics_4_PT"></dd>
							
							<dd id="profile_politics_3_PT"></dd>
							
                    	</dl>
                        
                    </dd>

					<div style={{display:'none'}}>
                        <dt>Fancy Bet PT Setting</dt>
                        <dd></dd>
                        <dd class="dl_list">
                            <img class="expand-arrow" src="/images/transparent.gif"/>
                            <dl>
                                <dt>Fancy Bet</dt>
                                <dd id="profile_company_fancy_bet_PT">0%</dd>
                            </dl>
                        </dd>
                    </div>

                    <div style={{display:'none'}}>
                        <dt>Book Maker PT Setting</dt>
                        <dd></dd>
                        <dd class="dl_list">
                            <img class="expand-arrow" src="/images/transparent.gif"/>
                            <dl>
                                <dt>Book Maker</dt>
                                <dd id="profile_company_book_maker_PT">0%</dd>
                            </dl>
                        </dd>
                    </div>

					<div style={{display:'none'}}>
                        <dt style={{width:'200px'}}>SportsBook PT Setting</dt>
                        <dd></dd>
                        <dd class="dl_list">
                            <img class="expand-arrow" src="/images/transparent.gif"/>
                            <dl>
                                <dt>PT</dt>
                                <dd id="profile_is_allow_sportsbookTennis">ON</dd>

                                <dt>Sportsbook</dt>
                                <dd id="profile_company_sportsbook_tennis_PT">0%</dd>
                            </dl>
                        </dd>
                    </div>

                    
                    
                </dl>
              </div>   
            
        </div>
      </div>}

 
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
        
        
        
        <h2>Betting History</h2>
        
                
                
        
        
        <ul class="report-tab-wrap" style={{display:'block'}}>
        
            
        
            
        
            <li class="report-tab  select" id="reportType_exchange" data-reporttabtype="0">
                Exchange
            </li>
            
           
        
            <li class="report-tab " id="reportType_sportsBook" data-reporttabtype="2">
                Sportsbook
            </li>
            
        
            
            <li class="report-tab " id="reportType_bookMaker" data-reporttabtype="3">
                BookMaker
            </li>
            
        
            
            <li class="report-tab " id="reportType_binary" data-reporttabtype="5">
                Binary
            </li>
            
        
        </ul>
        
             
        
        
 
        
        <div class="function-wrap">
            <ul class="input-list">
                <div id="statusCondition" style={{}}>
                    <li><label>Bet Status:</label></li>
                    <li>
                        <select name="betStatus" id="betStatus"><option value="0">Unmatched</option><option value="1">Matched</option><option value="2">Settled</option><option value="3">Cancelled</option><option value="4">Voided</option></select>
                    </li>
                </div>
        
                
        
                
                <li><label>Period</label></li>
                <li>
                    <input id="startDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-12-07" max="2020-12-22" onClick={{}}/>
                    <input id="startTime" class="time-input " type="text" placeholder="09:00" maxlength="5"/>
                    to
                    <input id="endDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-12-07" max="2020-12-22" onClick={{}}/>
                    <input id="endTime" class="time-input " type="text" placeholder="08:59" maxlength="5"/>
                </li>
                <li style={{display:'block'}}>(TimeZone:IST)</li>
            </ul>
            
            <ul class="input-list">
                <li><a id="today"  class="btn">Just For Today</a></li>
                <li style={{}}><a id="yesterday"  class="btn">From Yesterday</a></li>
                <li style={{display:'none'}}><a id="last7days"  class="btn">Last 7 days</a></li>
                <li style={{display:'none'}}><a id="last30days"  class="btn">Last 30 days</a></li>
                <li style={{display:'none'}}><a id="last2months"  class="btn">Last 2 Months</a></li>
                <li style={{display:'none'}}><a id="last3months"  class="btn">Last 3 Months</a></li>
                <li><a id="getPL"  class="btn-send">Get History</a></li>
            </ul>
        </div>
       
        <div id="noReportMessage">
             <p>Betting History enables you to review the bets you have placed. <br/>Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p>
             <p>Betting History is available online for the past 30 days.</p>
             </div>
        
       
       
        <div id="report" style={{display:'none'}}>
            <table id="matchTableTemplate" class="table-s" style={{display:'none'}}>
                <tbody><tr>
                    <th width="9%" class="align-L">Bet ID
                    </th>
                    <th width="9%" class="align-L">PL ID
                    </th>
                    <th width="7%" class="align-L" id="siteTitle">Site
                    </th>
                    <th width="" class="align-L">Market
                    </th>
                    <th width="12%">Selection
                    </th>
                    <th width="4%">Type
                    </th>
                    <th width="8%">Bet placed
                    </th>
                    <th width="7%">Odds req.
                    </th>
                    <th width="8%">Stake
                    </th>
                    <th width="8%">Avg. odds matched
                    </th>
                    <th width="10%">Profit/Loss
                    </th>
                    <th width="10%" id="userCancelTitle">User Cancel
                    </th>
                </tr>
        
                <tr id="matchRowTemplate" style={{display:'none'}}>
                    <td class="align-L"><a id="betID"></a></td>
                    <td class="align-L" id="playerID"></td>
                    <td class="align-L" id="siteName"></td>
                    <td id="matchTitle" class="align-L"></td>
                    <td id="matchSelection"></td>
                    <td><span id="matchType"></span></td>
                    <td><span id="betPlaced" class="small-date"></span></td>
                    <td id="matchOddsReq"></td>
                    <td id="matchStake"></td>
                    <td id="matchAvgOdds"></td>
                    <td><span id="pol" class="small-date"></span></td>
                    <td id="userCancel"></td>
                </tr>
        
                <tr id="expandReductionRowTemplate" class="expand" style={{display:'none'}}>
                    <td colspan="11">
                        <img class="expand-arrow" src="/images/transparent.gif"/>
                        <table id="txTableTemplate">
                            <tbody><tr>
                                <th>Bet taken
                                </th>
                                <th width="14%">Odds req.
                                </th>
                                <th width="14%">Stake
                                </th>
                                <th width="14%">Liability
                                </th>
                                <th width="14%">Odds matched
                                </th>
                                <th width="14%">Reduction
                                </th>
                                <th width="14%">Actual Odds.
                                </th>
                            </tr>
        
                            <tr id="txRowTemplate" style={{display:'none'}}>
                                <td><span id="betTaken" class="small-date"></span></td>
                                <td id="txOddsReq"></td>
                                <td id="txStake"></td>
                                <td id="txLiability"></td>
                                <td id="txOddsMatched"></td>
                                <td id="reduction"></td>
                                <td id="actualOdds"></td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        
                <tr id="expandRowTemplate" class="expand" style={{display:'none'}}>
                    <td colspan="2"></td>
                    <td colspan="9">
                        <img class="expand-arrow" src="/images/transparent.gif"/>
                        <table id="txTableTemplate">
                            <tbody><tr>
                                <th>Bet taken
                                </th>
                                <th width="16%">Odds req.
                                </th>
                                <th width="17%">Stake
                                </th>
                                <th width="24%">Liability
                                </th>
                                <th width="24%">Odds matched
                                </th>
                            </tr>
        
                            <tr id="txRowTemplate" style={{display:'none'}}>
                                <td><span id="betTaken" class="small-date"></span></td>
                                <td id="txOddsReq"></td>
                                <td id="txStake"></td>
                                <td id="txLiability"></td>
                                <td id="txOddsMatched"></td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            <p class="table-other">Betting History is shown net of commission.
            </p>
            
        
       
        <div>
            <ul style={{display:'none'}}>
                <li id="prev"><a >Prev</a></li>
                <li id="next"><a >Next</a></li>
                <li id="pageNumber"><a ></a></li>
                <li id="more"><a >...</a></li>
                <input type="text" id="goToPageNumber"  maxlength="6" size="4"/>
                <li><a id="goPageBtn">GO</a></li>			
            </ul>
        
            <ul id="pageNumberContent" class="pages">
            </ul>
          </div>
        
        </div>
      </div> }



    {view === 3 && <div class="col-center report">
        

        
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
         
         
                 <h2>Betting Profit &amp; Loss : Main wallet</h2>
                 <ul class="acc-info">
                     <li class="user">ba9719
                     </li>
                     
                             
                                     
                 </ul>
         
                
                 
         
         
         <ul class="report-tab-wrap" style={{display:'block'}}>
         
             
         
             
         
             <li class="report-tab  select" id="reportType_exchange" data-reporttabtype="0">
                 Exchange
             </li>
             
         
             
         
             
         
             <li class="report-tab " id="reportType_casino" data-reporttabtype="1">
                 Casino
             </li>
             
         
             
         
             
         
             <li class="report-tab " id="reportType_sportsBook" data-reporttabtype="2">
                 Sportsbook
             </li>
             
         
             
         
             
         
             <li class="report-tab " id="reportType_bookMaker" data-reporttabtype="3">
                 BookMaker
             </li>
             
         
             
         
             
         
             <li class="report-tab " id="reportType_bPoker" data-reporttabtype="4">
                 BPoker
             </li>
             
         
             
         
             
         
             <li class="report-tab " id="reportType_binary" data-reporttabtype="5">
                 Binary
             </li>
             
         
             
         
         </ul>
                                 
                
         
         
         
           
         
         
         
         <div class="function-wrap">
             <ul class="input-list">
                 <div id="statusCondition" style={{display:'none'}}>
                     <li><label>Bet Status:</label></li>
                     <li>
                         <select name="betStatus" id="betStatus">
                         </select>
                     </li>
                 </div>
         
                 
         
                 
                 <li><label>Period</label></li>
                 <li>
                     <input id="startDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-12-07" max="2020-12-22" onClick={{}}/>
                     <input id="startTime" disabled="" class="time-input disable" type="text" placeholder="09:00" maxlength="5"/>
                     to
                     <input id="endDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-12-07" max="2020-12-22" onClick={{}}/>
                     <input id="endTime" disabled="" class="time-input disable" type="text" placeholder="08:59" maxlength="5"/>
                 </li>
                 <li style={{display:'none'}}>(TimeZone:IST)</li>
             </ul>
             
             <ul class="input-list">
                 <li><a id="today"  class="btn">Just For Today</a></li>
                 <li style={{}}><a id="yesterday"  class="btn">From Yesterday</a></li>
                 <li style={{display:'none'}}><a id="last7days"  class="btn">Last 7 days</a></li>
                 <li style={{display:'none'}}><a id="last30days"  class="btn">Last 30 days</a></li>
                 <li style={{display:'none'}}><a id="last2months"  class="btn">Last 2 Months</a></li>
                 <li style={{display:'none'}}><a id="last3months"  class="btn">Last 3 Months</a></li>
                 <li><a id="getPL"  class="btn-send">Get P &amp; L</a></li>
             </ul>
         </div>
        
         <div id="noReportMessage"><p>Betting Profit &amp; Loss enables you to review the bets you have placed. <br/>Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p><p>Betting Profit &amp; Loss is available online for the past 14 days.</p></div>
         
        
         <div id="casinoReport" style={{display:'none'}}>
             <ul class="total-show">
                 <li id="casinoTotalPL"></li>
             </ul>
             
             <table id="casinoTableTemplate" class="table01 table-pnl" style={{display:'none'}}>
                 <tbody>
                 <tr>
                     <th width="" class="align-L">Market</th>
                     <th width="15%"></th>
                     <th width="15%"></th>
                     <th width="18%">Profit/Loss</th>
                 </tr>
                 
                 <tr id="casinoSummaryTemplate" style={{display:'none'}}>
                     <td id="title" class="align-L"></td>
                     <td></td>
                     <td></td>
                     <td>
                         <a id="casinoPl" class="expand-close" ></a>
                     </td>
                 </tr>
                 
                 <tr id="casinoDetailTemplate" class="expand" style={{display:'none'}}>
                     <td colspan="4">
                         <img class="expand-arrow-R" src="/images/transparent.gif"/>
         
                         <table class="table-commission">
                             <tbody><tr>
                                 <th>Plateform</th>
                                 <th>Valid Turnover</th>
                                 <th>Win / Loss</th>
                                 <th>PT/Comm.</th>
                                 <th>Profit/Loss</th>
                             </tr>
                             <tr id="casinoTxTemplate" style={{display:'none'}}>
                                 <td id="vendorPlatform"></td>
                                 <td id="turnover"></td>
                                 <td id="payout"></td>
                                 <td id="taxRebate"></td>
                                 <td id="balance"></td>
                             </tr>
                             <tr class="casino-grand-total">
                                 <td>Grand Total</td>
                                 <td id="totalTurnover"></td>
                                 <td id="totalPayout"></td>
                                 <td id="totalTaxRebate"></td>
                                 <td id="totalBalance"></td>
                             </tr>
                         </tbody></table>
         
                     </td>
                 </tr>
                 </tbody>
             </table>
         </div>
         
         
         <div id="report" data-report="profitAndLossReport" style={{display:'none'}}>
             <ul id="spotsUl" class="total-show">
                 <li id="totalPL"></li>
                 <li id="sumOfQuery" class="sports-switch"></li>
                 <li class="sports-switch">
                     <select name="sports" id="sports">
                         <option value="0">All
                         </option>
                     </select>
                 </li>
             </ul>
             <ul id="binaryPL" class="total-show" style={{display:'none'}}>
                 <li id="binaryTotalPL"></li>
             </ul>
         
             <table id="tableTemplate" class="table01 table-pnl" style={{display:'none'}}>
                 <tbody>
                 <tr>
                     <th width="" class="align-L">Market
                     </th>
                     <th width="15%">Start Time
                     </th>
                     <th width="15%">Settled date
                     </th>
                     <th width="18%">Profit/Loss
                     </th>
                 </tr>
         
                 <tr id="summaryTemplate" style={{display:'none'}}>
                     <td id="title" class="align-L"></td>
                     <td id="startTime"></td>
                     <td id="settledDate"></td>
                     <td>
                         <a id="pl" class="expand-close" ></a>
                     </td>
                 </tr>
                 <tr id="detailTemplate" class="expand" style={{display:'none'}}>
                     <td colspan="4">
                         <img class="expand-arrow-R" src="/images/transparent.gif"/>
         
                         <table class="table-commission">
                             <tbody><tr>
                                 <th width="9%">Bet ID
                                 </th>
                                 <th width="">Selection
                                 </th>
                                 <th width="9%">Odds
                                 </th>
                                 <th width="13%">Stake
                                 </th>
                                 <th width="8%">Type
                                 </th>
                                 <th width="16%">Placed
                                 </th>
                                 <th width="23%">Profit/Loss
                                 </th>
                             </tr>
                             <tr id="txTemplate" style={{display:'none'}}>
                                 <td id="betID"></td>
                                 <td id="matchSelection"></td>
                                 <td id="txOddsMatched"></td>
                                 <td id="txStake"></td>
                                 <td><span id="matchType"></span></td>
                                 <td id="placed"></td>
                                 <td id="txLiability"></td>
                             </tr>
                             <tr class="sum-pl">
                                 <td colspan="7">
                                     <dl>
                                         <dt>Total Stakes</dt>
                                         <dd id="totalStakes"></dd>                                
                                         
                                         <dt id="backSubTotalTitle">Back subtotal</dt>
                                         <dd id="backSubTotal"></dd>
                                         
                                         <dt id="laySubTotalTitle">Lay subtotal</dt>
                                         <dd id="laySubTotal"></dd>
                                         
                                         <dt>Market subtotal</dt>
                                         <dd id="marketTotal"></dd>
                                         
                                         <dt id="commissionTitle">Commission</dt>
                                         <dd id="commission"></dd>
                                         
                                         <dt class="net_total">Net Market Total</dt>
                                         <dd id="netTotal" class="net_total"></dd>
                                     </dl>
                                 </td>
                             </tr>
                         </tbody></table>
         
                     </td>
                 </tr>
                 </tbody>
             </table>
             <p class="table-other">Profit and Loss is shown net of commission.
             </p>
         </div>
         
         
         
         
         <div>
             <ul style={{display:'none'}}>
                 <li id="prev"><a >Prev</a></li>
                 <li id="next"><a >Next</a></li>
                 <li id="pageNumber"><a ></a></li>
                 <li id="more"><a >...</a></li>
                 <input type="text" id="goToPageNumber"  maxlength="6" size="4"/>
                 <li><a id="goPageBtn">GO</a></li>			
             </ul>
         
             <ul id="pageNumberContent" class="pages">
             </ul>
         </div>
         
             </div>}     




    {view === 4 && <div class="col-center report">
		

        
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
