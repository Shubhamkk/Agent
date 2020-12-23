import React from 'react'
import Transparent from './images/transparent.gif'

export default function Runningmarketanlysis() {
    return (
        <React.Fragment>
            <div class="full-wrap">

{/* <!-- Left Column --> */}
<div class="col-left" style={{display:'block', top:'0'}}>

    {/* <!-- Sub Menu and Path --> */}

    <div id="subMenu" class="sub_path" style={{height: 'calc(100% - 0px)'}}>
{/* 
        <!-- Path --> */}
        

        {/* <!-- Path Pop Up--> */}
        <ul id="path-pop" class="path-pop" style={{display:'none'}}><li class="node"><a href="#New Zealand v Pakistan - 3rd T20" id="navi_30194778" menuobjtype="EVENT">New Zealand v Pakistan - 3rd T20</a></li><li class="node"><a href="#International Twenty20 Matches" id="navi_1576028057" menuobjtype="GROUP">International Twenty20 Matches</a></li><li class="node"><a href="/exchange/member/index.jsp?eventType=4" id="navi_4" menuobjtype="EVENT_TYPE">Cricket</a></li>
            <li>
                <a id="pathPopHome" href="/exchange/member/#Home">Sports
                </a>
            </li>
        </ul>

        {/* <!-- Sub Menu --> */}
        <ul id="listBoardLoading" class="loading" style={{display:'none'}}>
            <li><img src="/images/loading40.gif"/></li>
            <li>Loading...
            </li>
        </ul>

        {/* <!-- Sub Menu --> */}
        <ul id="listBoard" class="menu-list">
            <li id="listBoardTemplate" style={{display:'none'}}>
                <a id="arrow" class="Go" style={{cursor:'pointer'}}>Go</a>
                <a id="name" style={{cursor:'pointer'}}></a>
            </li>
        <li id="naviMenu_1_177132011" style={{display: 'list-item'}} sortname="Match Odds" markettype="MATCH_ODDS" istodayscard="0" todayscardgroup="1" title="Match Odds" marketdatetime="1608616800000">
                <a id="arrow" class="Go" style={{cursor: 'pointer', display:' none'}}>Go</a>
                
            </li></ul>

    </div>
</div>

{/* <!-- index start -->
<!-- Center Column --> */}
<div id="centerColumn" class="col-center markets">

    {/* <!-- Message --> */}
    

{/* <!-- Loading Wrap --> */}
<div id="loading" class="loading-wrap" style={{display:'none'}}>
<ul class="loading">
<li><img src="/images/loading40.gif"/></li>
<li>Loading...</li>
</ul>
</div>

{/* <!-- Message --> */}
<div id="message" class="message-wrap success">
<a class="btn-close">Close</a>
<p></p>
</div>



    <div id="oneClickLoading" class="loading-wrap" style={{display:'none'}}>
        <ul class="loading">
            <li><img src="/images/loading40.gif"/></li>
            <li id="oneClickTime">Place Bets
            </li>
        </ul>
    </div>

    <div class="marquee-box" style={{display:'none'}}>
        <h4>News</h4>
        <div class="marquee">
        </div>
    </div>
    
{/* <!-- Game Head --> */}
<div id="gameHead" class="game-head" style={{display:'none'}}>

{/* <!-- Team Table --> */}
{/* <!-- <a class="favor select">Add Favorite</a> --> */}

<a id="refreshButton" class="refresh" style={{cursor:'pointer'}}>Refresh</a>
<a id="multiMarketPin" class="add-pin" name="gameHeadPin" style={{cursor: 'pointer', display:' none'}} title="Add to Multi Markets"></a>
<table id="gameTeam" class="game-team" style={{display:'none'}}>
    <tbody><tr id="noTeam" style={{display:'none'}}>
        <td class="game-name">-event name-<span>All Markets</span></td>
    </tr>
    <tr id="twoTeam" >
        <td id="gameVisit" class="game-visit">New Zealand<span></span></td>
        <td id="gameVs" class="game-vs"><div>Match Odds<span>v</span></div></td>
        <td id="gameHome" class="game-home">Pakistan - 3rd T20<span></span></td>
    </tr>
</tbody></table>


<a id="lineMarketRulesBtn" class="btn-rules" style={{cursor:'pointer', display: 'none'}}><img src={Transparent}/>Rules</a>
<div id="lineMarketRulesWrap" class="rules-wrap" style={{display:'none'}}>
    <h3>Line Market Rules and Information</h3>
    <div class="rules-content">
        <p>How many runs would be scored in mentioned overs, If <strong> 'Back/Yes' </strong> bet is made then it will be win bet if the runs scored in the mentioned overs are <strong> equal or more </strong> then the Backed Runs otherwise it will be a Lost bets. If <strong> 'Lay/No' </strong> bet is made then it will be a win bet if Runs scored in the mentioned overs are <strong> less </strong> than the lay runs otherwise it will be lost bet. All the line markets will be settled only if the mentioned stipulated overs are completed or if the Batting team is bowled out (All out) or the runs are chased, given the inning's stipulated(or reduced) overs are more than or equal to the stipulated over of that particular line Market.</p>
        <p><strong> "Matched Tied" </strong> and <strong> "Completed Match" </strong> doesn't affect the settling of Line markets.</p>
    </div>
    <ul class="btn-wrap break">
        <li><a id="lineMarketRulesOk" class="btn" style={{cursor:'pointer'}}>OK</a></li>
    </ul>
</div>


<table id="cricketScoreBoard" class="game-scores" style={{display:'none'}}>
    <tbody><tr>

        <td id="gameHeadPinSpace" class="scores-space"></td>
        <td class="scores-team">
            <h4 id="teamHome">HOME</h4>
            <h4 id="teamAway">AWAY</h4>
            <ul class="scores-time">
                <li id="description" class="filter-first"></li>
                <li id="currentDay"></li>
            </ul>
        </td>
        <td id="inningsBox1" class="scores-box" style={{display:'none'}}>
            <h4 id="runsHome"><span></span></h4>
            <h4 id="runsAway"><span></span></h4>
            <span class="scores-inns">Innings 1</span>
        </td>
        

        <td id="inningsBoxTemplate" class="scores-box" style={{display:'none'}}>
            <h4 id="runsHome"><span></span></h4>
            <h4 id="runsAway"><span></span></h4>
            <span id="inningsIndex" class="scores-inns"></span>
        </td>

        <td class="scores-space"></td>

    </tr>
</tbody></table>


<table id="tennisScoreBoard" class="game-scores tennis" style={{display:'none'}}>
    <tbody><tr>

        <td id="gameHeadPinSpace" class="scores-space"></td>

        {/* <td class="scores-team">
            <h4 id="teamHome">${ Home }</h4>
            <h4 id="teamAway">${ Away }</h4>
            <ul class="scores-time">
                <li id="currentSet" class="filter-first"></li>
                <li id="fullTimeElapsed"></li>
                <li><span id="court"></span></li>
            </ul>
        </td> */}

        <td id="setBox1" class="scores-box">
            <h4 id="setHome"></h4>
            <h4 id="setAway"></h4>
            <span class="scores-inns">1</span>
        </td>
        <td id="setBox2" class="scores-box">
            <h4 id="setHome"></h4>
            <h4 id="setAway"></h4>
            <span class="scores-inns">2</span>
        </td>
        <td id="setBox3" class="scores-box last-box">
            <h4 id="setHome"></h4>
            <h4 id="setAway"></h4>
            <span class="scores-inns">3</span>
        </td>

        <td id="points" class="scores-box last-box">
            <h4 id="pointsHome" class="scores-now">0</h4>
            <h4 id="pointsAway" class="scores-now">0</h4>
            <span class="scores-inns">Points</span>
        </td>

        <td id="aces" class="scores-box scores-other">
            <h4 id="acesHome">0</h4>
            <h4 id="acesAway">0</h4>
            <span class="scores-inns">Aces</span>
        </td>
        <td id="faults" class="scores-box scores-other">
            <h4 id="faultsHome">0</h4>
            <h4 id="faultsAway">0</h4>
            <span class="scores-inns">Faults</span>
        </td>
        <td id="breaks" class="scores-box scores-other last-box">
            <h4 id="breaksHome">0</h4>
            <h4 id="breaksAway">0</h4>
            <span class="scores-inns">Breaks</span>
        </td>
        <td class="scores-space"></td>

        <td id="setBoxTemplate" class="scores-box last-box" style={{display:'none'}}>
            <h4 id="setHome"></h4>
            <h4 id="setAway"></h4>
            <span id="setIndex" class="scores-inns"></span>
        </td>

        <td class="scores-space"></td>

    </tr>
</tbody></table>


<div id="soccerScoreBoard" class="game-scores" style={{display:'none'}}>
    <ul>
        <li class="game-visit"><h4 id="teamHome"></h4></li>
        <li class="scores-box">
            <p id="vsScores" class="scores-now"></p>
            <span id="timeElapsed" class="scores-now"></span>
        </li>
        <li class="game-home"><h4 id="teamAway"></h4></li>
    </ul>

    <div class="game-progress">
        <div class="progress-bar">

            <div id="progressPercent" class="progress-now" style={{width: '0%'}}></div>

               

            <img id="soccerEventTemplate" class="" style={{left: '0%', display:' none'}} src={Transparent}/>

            <div id="popupTemplate" class="score-pop" style={{left: '0%', display:' none'}}>
                <ul>
                    <li id="matchTime" class="scores-now"></li>
                    <li><img class="" src={Transparent}/></li>
                </ul>
            </div>

            <span id="sumTemplate" class="sum-status" style={{left: '0%', display:' none'}}></span>

            <div id="sumPopupTemplate" class="score-pop-last" style={{left: '0%', display:' none'}}>
                <ul id="list">
                    <li id="matchTimeTemplate" class="scores-now" style={{display:'none'}}></li>
                    <li id="iconTemplate" style={{display:'none'}}><img class="" src={Transparent}/></li>
                </ul>
            </div>

        </div>
    </div>
</div>

<div id="scoresEvent" class="scores-event" style={{display:'none'}}><img src={Transparent}/></div>

{/* <!-- Tab Market --> */}
<ul id="tabMarketList" class="tab-HS" style={{display:'none'}}></ul>

<li id="tabMarketTemplate" style={{display:'none'}}><a id="tabName" class="" style={{cursor:'pointer'}}>Win</a></li>

<div class="game-info-wrap">
    {/* <!-- Game Information --> */}
    <ul class="game-info" style={{display:'block'}}>
        <li id="infoLive" class="info-live" style={{display:'none'}}><a class="btn-live"><img class="icon-live" src={Transparent}/>Live</a></li>
        <li id="gameInfoDate"><img class="icon-time" src={Transparent}/>Thu 9 Jun, --:--</li>
        {/* <!-- <li><img class="icon-live" src={Transparent} />Live</li> -->
        <!-- <li><img class="icon-irun" src={Transparent} />In-Play</li> -->
        <!-- <li><img class="icon-cashout" src={Transparent} />Cash Out</li> -->
        <!-- Low Liquidity Tag --> */}
        <li><span id="lowLiquidityTag" class="game-low_liq" style={{display:'none'}}>Low Liquidity</span></li>
    </ul>

    <dl id="minMaxBox" class="fancy-info" style={{display:'none'}}>
        <dt id="minMaxDt" style={{display:'none'}}>Min/Max</dt>
        <dt id="maxDt" style={{display:'none'}}>Max</dt>
        <dd id="minMaxInfo">0 / 0</dd>
    </dl>

    
<div id="fancyBetRulesWrap" class="rules-wrap" style={{display:'none'}}>
<h3 id="fancyBetHeader">Rules of Fancy Bets</h3>
<h3 id="electionHeader" style={{display:'none'}}>Rules of Election Fancy Bets</h3>
<div class="rules-content">
    <ol id="fancyBetRules" name="fancyBetRules"><li>Once all session/fancy bets are completed and settled there will be no reversal even if the Match is Tied or is Abandoned.</li><li>Advance Session or Player Runs and all Fancy Bets are only valid for 20/50 overs full match each side. (Please Note this condition is applied only in case of Advance Fancy Bets only).</li><li>All advance fancy bets market will be suspended 60 mins prior to match and will be settled.</li><li>Under the rules of Session/Fancy Bets if a market gets Suspended for any reason whatsoever and does not resume then all previous Bets will remain Valid and become HAAR/JEET bets.</li><li>Incomplete Session/Fancy Bet will be cancelled but Complete Session will be settled.</li><li>In the case of Running Match getting Cancelled/ No Result/ Abandoned but the session is complete it will still be settled. Player runs / fall of wicket will be also settled at the figures where match gets stopped due to rain for the inning (D/L) , cancelled , abandoned , no result.</li><li>If a player gets Retired Hurt and one ball is completed after you place your bets then all the betting till then is and will remain valid.</li><li>Should a Technical Glitch in Software occur, we will not be held responsible for any losses.</li><li>Should there be a power failure or a problem with the Internet connection at our end and session/fancy market does not get suspended then our decision on the outcome is final.</li><li>All decisions relating to settlement of wrong market being offered will be taken by management. Management will consider all actual facts and decision taken will be full in final.</li><li>Any bets which are deemed of being suspicious, including bets which have been placed from the stadium or from a source at the stadium maybe voided at anytime. The decision of whether to void the particular bet in question or to void the entire market will remain at the discretion of Company. The final decision of whether bets are suspicious will be taken by Company and that decision will be full and final.</li><li>Any sort of cheating bet , any sort of Matching (Passing of funds), Court Siding (Ghaobaazi on commentary), Sharpening, Commission making is not allowed in Company, If any company User is caught in any of such act then all the funds belonging that account would be seized and confiscated. No argument or claim in that context would be entertained and the decision made by company management will stand as final authority.</li><li>Fluke hunting/Seeking is prohibited in Company , All the fluke bets will be reversed. Cricket commentary is just an additional feature and facility for company user but company is not responsible for any delay or mistake in commentary.</li><li>Valid for only 1st inning.<ul>• Highest Inning Run :- This fancy is valid only for first inning of the match.</ul><ul>• Lowest Inning Run :- This fancy is valid only for first inning of the match.</ul></li><li>If any fancy value gets passed, we will settle that market after that match gets over. For example :- If any market value is ( 22-24 ) and incase the result is 23 than that market will be continued, but if the result is 24 or above then we will settle that market. This rule is for the following market.<ul>• Total Sixes In Single Match</ul><ul>• Total Fours In Single Match</ul><ul>• Highest Inning Run</ul><ul>• Highest Over Run In Single Match</ul><ul>• Highest Individual Score By Batsman</ul><ul>• Highest Individual Wickets By Bowler</ul></li><li>If any fancy value gets passed, we will settle that market after that match gets over. For example :- If any market value is ( 22-24 ) and incase the result is 23 than that market will be continued, but if the result is 22 or below then we will settle that market. This rule is for the following market.<ul>• Lowest Inning Run</ul><ul>• Fastest Fifty</ul><ul>• Fastest Century</ul></li><li>If any case wrong rate has been given in fancy ,that particular bets will be cancelled (Wrong Commentary).</li><li>In case customer make bets in wrong fancy we are not liable to delete, no changes will be made and bets will be considered as confirm bet.</li><li>Dot Ball Market Rules<ul>Wides Ball - Not Count</ul><ul>No Ball - Not Count</ul><ul>Leg Bye - Not Count as A Dot Ball</ul><ul>Bye Run - Not Count as A Dot Ball</ul><ul>Run Out - On 1st Run Count as A Dot Ball</ul><ul>Run Out - On 2nd n 3rd Run Not Count as a Dot Ball</ul><ul>Out - Catch Out, Bowled, Stumped n LBW Count as A Dot Ball</ul></li><li>Bookmaker Rules<ul>• Due to any reason any team will be getting advantage or disadvantage we are not concerned.</ul><ul>• We will simply compare both teams 25 overs score higher score team will be declared winner in ODI.</ul><ul>• We will simply compare both teams 10 overs higher score team will be declared winner in T20 matches.</ul></li><li>Penalty Runs - Any Penalty Runs Awarded in the Match (In Any Running Fancy or ADV Fancy) Will Not be Counted While Settling in our Exchange.</li><li>LIVE STREAMING OF ALL VIRTUAL CRICKET MATCHES IS AVAILABLE HERE https://www.youtube.com/channel/UCd837ZyyiO5KAPDXibynq_Q/featured</li><li>CHECK SCORE OF VIRTUAL CRICKET ON https://sportcenter.sir.sportradar.com/simulated-reality/cricket</li><li>Comparison Market<ul>In Comparison Market We Don't Consider Tie or Equal Runs on Both the Innings While Settling . Second Batting Team Must need to Surpass 1st Batting's team Total to win otherwise on Equal Score or Below We declare 1st Batting Team as Winner .</ul></li><li>Player Boundaries Fancy:- We will only consider Direct Fours and Sixes hit by BAT.</li><li>BOWLER RUN SESSION RULE :-<ul>IF BOWLER BOWL 1.1 OVER,THEN VALID ( FOR BOWLER 2 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 2.1 OVER,THEN VALID ( FOR BOWLER 3 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 3.1 OVER,THEN VALID ( FOR BOWLER 4 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 4.1 OVER,THEN VALID ( FOR BOWLER 5 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 9.1 OVER,THEN VALID ( FOR BOWLER 10 OVER RUNS SESSION )</ul></li><li>Total Match Playing Over ADV :- We Will Settle this Market after Whole Match gets Completed<ul>Criteria :- We Will Count Only Round- Off Over For Both the Innings While Settling (For Ex :- If 1st Batting team gets all out at 17.3 , 18.4 or 19.5 we Will Count Such Overs as 17, 18 and 19 Respectively and if Match gets Ended at 17.2 , 18.3 or 19.3 Overs then we will Count that as 17 , 18 and 19 Over Respectively... and this Will Remain Same For Both the Innings ..</ul><ul>In Case Of Rain or if Over gets Reduced then this Market will get Voided</ul></li><li>3 WKT OR MORE BY BOWLER IN MATCH ADV :-<ul>We Will Settle this Market after Whole Match gets Completed .</ul><ul>In Case Of Rain or if Over Gets Reduced then this Market Will get Voided</ul></li><li>KHADDA :-<ul>ADV Khadda Fancy is Valid Only for First Innings of the Match</ul><ul>In Case of Rain or If Over Gets Reduced then this Market Will get Voided</ul><ul>Incomplete Session Bet will be Cancelled but Complete Session Will be Settled</ul></li><li>LOTTERY :-<ul>In Case of Rain or If Over Gets Reduced then this Market Will get Voided</ul><ul>Incomplete Session Bet will be Cancelled but Complete Session Will be Settled</ul><ul>Criteria :- We will Only Count Last Digit of Sessions Total while settling ..For Example if in 6 Overs Market the Score is 37 ...so we will Settle the Market for 6 Over Lottery @ 7</ul></li><li>BIG BASH LEAGUE 2020-21 RULES :-<ul>If Over Reduced in Match, We will not count the actual scores of the Over Reduced Matches instead we will count the Market’s Average Scores .</ul><ul>If Match is Abandoned , We will not count the actual scores of the Abandoned Matches instead we will count the Market’s Average Scores .</ul><ul>NOTE :- . These rules are for the following Markets of ENTIRE BBL 2020-21  :-</ul><ul>Total Fours :- Average 24 Fours will be given if the match is abandoned or over reduced.</ul><ul>Total Sixes :- Average 10 Sixes will be given if the match is abandoned or over reduced.</ul><ul>Total Caught &amp; Bowled Out :- Average 0 Caught &amp; Bowled Out will be given if the match is abandoned or over reduced.</ul><ul>Total Wide :- Average 8 Wides will be given if the match is abandoned or over reduced.</ul><ul>Total Extra :- Average 14 Extras will be given if the match is abandoned or over reduced.</ul><ul>Total No Ball :- Average 1 No Ball will be given if the match is abandoned or over reduced.</ul><ul>Total duck :- Average 1 Duck will be given if the match is abandoned or over reduced.</ul><ul>Total Fifties :- Average 2 Fifties will be given if the match is abandoned or over reduced.</ul><ul>Total Century :-Average 0 Century will be given if the match is abandoned or over reduced.</ul><ul>Total Run Out :- Average 1 Run Out will be given if the match is abandoned or over reduced.</ul><ul>Total Caught out :- Average 8 Caught Out will be given if the match is abandoned or over reduced</ul><ul>Total Stump Out :- Average 0 Stump Out will be given if the match is abandoned or over reduced.</ul><ul>Total Maiden Over :- Average 0 Maiden Over will be given if the match is abandoned or over reduced.</ul><ul>Total LBW :- Average 1 LBW will be given if the match is abandoned or over reduced.</ul><ul>Total Bowled :- Average 2 Bowled will be given if the match is abandoned or over reduced.</ul><ul>• In case BBL Matches Gets Stopped Or Interrupted Due to "COVID-19" or Any "ACT OF GOD" Reasons, Under 45 Matches then All BBL 2020-21 Tournament Fancy Markets will be Voided, But if 45 or Above Matches are Being Played then we will Settle all the Fancy Markets and  Also If there are NON Played Matches Above 45 then we will settle the markets as per our Markets Average.</ul></li></ol>
    <ol id="electionRules" style={{display:'none'}}>
        <li>Election result declared by Election Commission of India will be valid in our Exchange.</li>
        <li>Accidental issues in Election will Not Be counted in our Exchange.</li>
    </ol>
</div>
<ul class="btn-wrap break">
    <li><a class="btn" onclick="javascript: $j('[id^=fancyBetRulesWrap]').fadeOut();">OK</a></li>
</ul>
</div>

    <div id="sportsBookRulesWrap_1" class="rules-wrap" style={{display:'none'}}>

<h3 id="owRulesTitle">Rules of Premium Tennis</h3>
<div class="rules-content">
    <ol id="owTennisRulesContent" style={{display:'none'}}>
<li>Handicap
    <ul>
        <li>Set Handicap betting are settle based on the Sets</li>
        <li>For Tennis Set hdp betting, the player you wager on must cover/beat the set Spread. This means that the favored player must win by more than the outlined number of sets or the underdog will receive that number of sets as a head start. In the above exmaple, If you wager on Andreas Seppi +1.5, he would need to win the match by any score or alternately lose by 1 set. If you wager on Daniil Medvedec -1.5, he would need to win by 2 set .</li>
        <li>If the scheduled number of sets required to win a match is changed from that originally scheduled then all bets will be void, except for those that have been unconditionally determined.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Over/Under
    <ul>
        <li>Game Total settle based on the total number of Games played of the match.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Money Line
    <ul>
        <li>Money line markets refer to the winner of the match or specified set.</li>
        <li>If a player does not start a tournament or match , disqualified, retires during the match, then all bets on that player will be void.</li>
        <li>If a match is postponed or suspended then all bets are still considered valid if the match is completed.</li>
        <li>All bets will still be considered valid regardless of any change of venue or court surface (including moving matches from outdoor to indoor courts or vice versa).</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Game Handicap (Tennis)
    <ul>
        <li>Game Hdandicap betting are settled based on Games.</li>
        <li>For Tennis Game Hdp betting , the player you wager on must cover/beat the game spread. This means that the favored player must win by more than the outlined number of games or the underdog will receive that number of games as a head start. In the above example, if you wager on Andreas Seppi +3.5, he would need to win the match by any score or alternately lose by 3 games or less. If you wager on Daniil Medvedev -3.5, he would need to win by 4 games or more.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Set x Winner (Tennis)
    <ul>
        <li>Set X  Winner  refers to the result of the specified set. All bets will be considered void if the specified set is not completed.</li>
    </ul>
</li>
<li>Set x Total Game O/U (Tennis)
    <ul>
        <li>Set X  Total Game O/U  refers to total Game of the specified set. All bets will be considered void if the specified set is not completed.</li>
    </ul>
</li>
</ol>
    <ol id="owSoccerRulesContent" style={{display:'none'}}>
<li>FT.1X2:1X2 means betting in any one of three possible winning outcomes for an Event. 1 refers to the team that is named first (usually the home team); X refers to the game resulting in a draw or tie; 2 refers to the team that is named second (usually the away team).</li>
<li>1H 1X2:1st Half 1X2 means betting in any one of three possible winning outcomes of the first half for an Event. 1 refers to the team that is named first (usually the home team); X refers to the game resulting in a draw or tie; 2 refers to the team that is named second (usually the away team).</li>
<li>Over/Under: Over/Under means betting that is determined by the total number of points (goals, games etc) in the final result of an Event. If the total is more than the Over/Under pre-designated line then the winning result is Over; if the total is less than the Over/Under pre-designated line then the winning result is Under.</li>
<li>1H Over/Under: 1st Half Over/Under means betting that is determined by the total number of points in the result of the first half of an Event. If the total is more than the Over/Under pre-designated line then the winning result is Over; if the total is less than the Over/Under pre-designated line then the winning result is Under.</li>
<li>
    Over/Under Guideline:
    <ul style={{listStyleType: 'lower-roman'}}>
        <li>Goal line under 2
            <div>
                Bets win if there is either 0 or 1 goal scored in the match. If there are two goals exactly then the stake is returned. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>

        <li>Goal line over 2
            <div>
                Bets win if there are three or more goals scored in the match. If there are two goals exactly the stake is returned. Bets lose if there is 0 or 1 goal scored in the match.
            </div>
        </li>

        <li>Goal line under 2.25
            <div>
                Bets win if there is either 0 or 1 goal scored in the match. If there are two goals exactly half the stake will win and half will be returned. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.25
            <div>
                Bets win if there are three or more goals scored in the match. If there are two goals exactly half the stake will be returned and half will be lost. Bets lose if there is 0 or 1 goal scored in the match.
            </div>
        </li>
        <li>Goal line under 2.5
            <div>
                Bets win if there are 0, 1 or 2 goals scored in the match. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.5
            <div>
                Bets win if there are three or more goals scored in the match. Bets lose if there are 0, 1 or 2 goals scored in the match.
            </div>
        </li>
        <li>Goal line under 2.75
            <div>
                Bets win if there are 0, 1 or 2 goals scored in the match. If there are three goals exactly half the stake will be returned and half will be lost. Bets lose if there are four or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.75
            <div>
                Bets win if there are four or more goals scored in the match. If there are three goals exactly half the stake will win and half will be returned. Bets lose if there are 0, 1 or 2 goals scored in the match.
            </div>
        </li>

    </ul>
</li>

<li>Double Chance: The following options are available:
    <ul>
        <li>1 or X - If the result is either a home or draw then bets on this option are winners.</li>
        <li>X or 2 - If the result is either a draw or away then bets on this option are winners.</li>
        <li>1 or 2 - If the result is either a home or away then bets on this option are winners.</li>
        <li>If a match is played at a neutral venue the team listed first is deemed the home team for betting purposes.</li>
    </ul>
</li>
<li>Odd/Even: Odd/Even means betting that is determined by whether the total number of points (goals, games etc) in the final result of an Event is Odd or Even.</li>
<li>1H Odd/Even: 1st Half Odd/Even means betting that is determined by whether the total number of points at the end of the first half of an Event is Odd or Even. 1st half bets will be void if an Event is abandoned before the end of the first half. But if an Event is abandoned after the end of the first half, all 1st half bets will be valid.</li>
<li>Handicap: Handicap means betting when one competitor or team receives a virtual head start (effectively leading by that head start before the Event begins). The winner is the competitor or team with the better score after adding the given handicap to the result. Remaining Handicap rules are set out in the Specific Event Betting Rules.</li>
<li>1H Handicap: 1st Half Handicap means betting on the team with the better score after adding the given handicap to the result of the first half of an Event.</li>
<li>Correct Score (AOS)	:
    <ul>
        <li>Correct Score means betting to predict the final score at the end of full-time.</li>
        <li>First Half Correct Score means betting to predict the final score at the end of First Half.</li>
        <li>Correct Score to win "AOS" means the selected team must win to a score not listed in the selection.</li>
        <li>Example:
            <ul>
                <li>Result for 5-0UP - 5:1, 6:2 and etc (Lose) / 5:0, 6:1 and etc (Win)</li>
                <li>Result for 0-5UP - 1:5, 2:6 and etc (Lose) / 0:5, 1:6 and etc (Win)</li>
            </ul>
        </li>
    </ul>
</li>
<li>E-Soccer bets whenever applicable, are governed by the same rules for bets placed on real sporting events. The Company provides information (e.g. neutral ground, Red card, timer, statistical information, dates, commencement, etc) as a service and accepts no liability whatsoever. The timer and red card notices are given for reference purposes only. </li>
<li>In case there is a technical issue or malfunction in a match, all placed bets will be voided and refunded in accordance with our general betting rules and regulations.</li>
<li>The Company reserves its right to void any bet when it deems necessary under the circumstances. The decision of the Company with respect to any bet is final.</li>
</ol>
</div>
<ul class="btn-wrap break">
    <li><a onclick="$j('[id^=sportsBookRulesWrap_1]').fadeOut()" class="btn" href="#">OK</a></li>
</ul>
</div>

    <a id="openStreaming" class="open-tv-wrap" style={{display:'none'}}>Live</a>	

    <dl class="game-matched" style={{display:'block'}}>
        <dt id="gameMatchedName">Matched</dt>
        <dd id="gameMatched">USD $--.00</dd>
    </dl>
</div>
</div>
    <div id="overWrap" class="over-wrap live-match" style={{height: 'calc(100% - 0px)'}}>
        <div id="liveMatchGameHead" class="game-head">
        
            
            <div id="matchTrackerWrap" class="match-tracker-wrap">
                
                <ul id="liveMatchTrackerBtn" class="match-btn">
                    <li><a id="liveMultiMarketPin" style={{cursor:'pointer'}} name="gameHeadPin" class="btn-pin" title="Add to Multi Markets" eventtype="4" eventid="30194778" marketid="1.177132011"></a></li>
                    <li><a style={{cursor:'pointer'}} class="btn-refresh" onclick="$j('#loading').show();setTimeout(function(){$j('#loading').hide()}, 1000);"></a></li>
                </ul>
            </div>

            {/* <!-- Game Scroes Event --> */}
            <div id="scoresEvent" class="match-odds">Match Odds<img src={Transparent}/></div>
            
            
<div id="fancyBetRulesWrap" class="rules-wrap" style={{display:'none'}}>
<h3 id="fancyBetHeader">Rules of Fancy Bets</h3>
<h3 id="electionHeader" style={{display:'none'}}>Rules of Election Fancy Bets</h3>
<div class="rules-content">
    <ol id="fancyBetRules" name="fancyBetRules"><li>Once all session/fancy bets are completed and settled there will be no reversal even if the Match is Tied or is Abandoned.</li><li>Advance Session or Player Runs and all Fancy Bets are only valid for 20/50 overs full match each side. (Please Note this condition is applied only in case of Advance Fancy Bets only).</li><li>All advance fancy bets market will be suspended 60 mins prior to match and will be settled.</li><li>Under the rules of Session/Fancy Bets if a market gets Suspended for any reason whatsoever and does not resume then all previous Bets will remain Valid and become HAAR/JEET bets.</li><li>Incomplete Session/Fancy Bet will be cancelled but Complete Session will be settled.</li><li>In the case of Running Match getting Cancelled/ No Result/ Abandoned but the session is complete it will still be settled. Player runs / fall of wicket will be also settled at the figures where match gets stopped due to rain for the inning (D/L) , cancelled , abandoned , no result.</li><li>If a player gets Retired Hurt and one ball is completed after you place your bets then all the betting till then is and will remain valid.</li><li>Should a Technical Glitch in Software occur, we will not be held responsible for any losses.</li><li>Should there be a power failure or a problem with the Internet connection at our end and session/fancy market does not get suspended then our decision on the outcome is final.</li><li>All decisions relating to settlement of wrong market being offered will be taken by management. Management will consider all actual facts and decision taken will be full in final.</li><li>Any bets which are deemed of being suspicious, including bets which have been placed from the stadium or from a source at the stadium maybe voided at anytime. The decision of whether to void the particular bet in question or to void the entire market will remain at the discretion of Company. The final decision of whether bets are suspicious will be taken by Company and that decision will be full and final.</li><li>Any sort of cheating bet , any sort of Matching (Passing of funds), Court Siding (Ghaobaazi on commentary), Sharpening, Commission making is not allowed in Company, If any company User is caught in any of such act then all the funds belonging that account would be seized and confiscated. No argument or claim in that context would be entertained and the decision made by company management will stand as final authority.</li><li>Fluke hunting/Seeking is prohibited in Company , All the fluke bets will be reversed. Cricket commentary is just an additional feature and facility for company user but company is not responsible for any delay or mistake in commentary.</li><li>Valid for only 1st inning.<ul>• Highest Inning Run :- This fancy is valid only for first inning of the match.</ul><ul>• Lowest Inning Run :- This fancy is valid only for first inning of the match.</ul></li><li>If any fancy value gets passed, we will settle that market after that match gets over. For example :- If any market value is ( 22-24 ) and incase the result is 23 than that market will be continued, but if the result is 24 or above then we will settle that market. This rule is for the following market.<ul>• Total Sixes In Single Match</ul><ul>• Total Fours In Single Match</ul><ul>• Highest Inning Run</ul><ul>• Highest Over Run In Single Match</ul><ul>• Highest Individual Score By Batsman</ul><ul>• Highest Individual Wickets By Bowler</ul></li><li>If any fancy value gets passed, we will settle that market after that match gets over. For example :- If any market value is ( 22-24 ) and incase the result is 23 than that market will be continued, but if the result is 22 or below then we will settle that market. This rule is for the following market.<ul>• Lowest Inning Run</ul><ul>• Fastest Fifty</ul><ul>• Fastest Century</ul></li><li>If any case wrong rate has been given in fancy ,that particular bets will be cancelled (Wrong Commentary).</li><li>In case customer make bets in wrong fancy we are not liable to delete, no changes will be made and bets will be considered as confirm bet.</li><li>Dot Ball Market Rules<ul>Wides Ball - Not Count</ul><ul>No Ball - Not Count</ul><ul>Leg Bye - Not Count as A Dot Ball</ul><ul>Bye Run - Not Count as A Dot Ball</ul><ul>Run Out - On 1st Run Count as A Dot Ball</ul><ul>Run Out - On 2nd n 3rd Run Not Count as a Dot Ball</ul><ul>Out - Catch Out, Bowled, Stumped n LBW Count as A Dot Ball</ul></li><li>Bookmaker Rules<ul>• Due to any reason any team will be getting advantage or disadvantage we are not concerned.</ul><ul>• We will simply compare both teams 25 overs score higher score team will be declared winner in ODI.</ul><ul>• We will simply compare both teams 10 overs higher score team will be declared winner in T20 matches.</ul></li><li>Penalty Runs - Any Penalty Runs Awarded in the Match (In Any Running Fancy or ADV Fancy) Will Not be Counted While Settling in our Exchange.</li><li>LIVE STREAMING OF ALL VIRTUAL CRICKET MATCHES IS AVAILABLE HERE https://www.youtube.com/channel/UCd837ZyyiO5KAPDXibynq_Q/featured</li><li>CHECK SCORE OF VIRTUAL CRICKET ON https://sportcenter.sir.sportradar.com/simulated-reality/cricket</li><li>Comparison Market<ul>In Comparison Market We Don't Consider Tie or Equal Runs on Both the Innings While Settling . Second Batting Team Must need to Surpass 1st Batting's team Total to win otherwise on Equal Score or Below We declare 1st Batting Team as Winner .</ul></li><li>Player Boundaries Fancy:- We will only consider Direct Fours and Sixes hit by BAT.</li><li>BOWLER RUN SESSION RULE :-<ul>IF BOWLER BOWL 1.1 OVER,THEN VALID ( FOR BOWLER 2 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 2.1 OVER,THEN VALID ( FOR BOWLER 3 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 3.1 OVER,THEN VALID ( FOR BOWLER 4 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 4.1 OVER,THEN VALID ( FOR BOWLER 5 OVER RUNS SESSION )</ul><ul>IF BOWLER BOWL 9.1 OVER,THEN VALID ( FOR BOWLER 10 OVER RUNS SESSION )</ul></li><li>Total Match Playing Over ADV :- We Will Settle this Market after Whole Match gets Completed<ul>Criteria :- We Will Count Only Round- Off Over For Both the Innings While Settling (For Ex :- If 1st Batting team gets all out at 17.3 , 18.4 or 19.5 we Will Count Such Overs as 17, 18 and 19 Respectively and if Match gets Ended at 17.2 , 18.3 or 19.3 Overs then we will Count that as 17 , 18 and 19 Over Respectively... and this Will Remain Same For Both the Innings ..</ul><ul>In Case Of Rain or if Over gets Reduced then this Market will get Voided</ul></li><li>3 WKT OR MORE BY BOWLER IN MATCH ADV :-<ul>We Will Settle this Market after Whole Match gets Completed .</ul><ul>In Case Of Rain or if Over Gets Reduced then this Market Will get Voided</ul></li><li>KHADDA :-<ul>ADV Khadda Fancy is Valid Only for First Innings of the Match</ul><ul>In Case of Rain or If Over Gets Reduced then this Market Will get Voided</ul><ul>Incomplete Session Bet will be Cancelled but Complete Session Will be Settled</ul></li><li>LOTTERY :-<ul>In Case of Rain or If Over Gets Reduced then this Market Will get Voided</ul><ul>Incomplete Session Bet will be Cancelled but Complete Session Will be Settled</ul><ul>Criteria :- We will Only Count Last Digit of Sessions Total while settling ..For Example if in 6 Overs Market the Score is 37 ...so we will Settle the Market for 6 Over Lottery @ 7</ul></li><li>BIG BASH LEAGUE 2020-21 RULES :-<ul>If Over Reduced in Match, We will not count the actual scores of the Over Reduced Matches instead we will count the Market’s Average Scores .</ul><ul>If Match is Abandoned , We will not count the actual scores of the Abandoned Matches instead we will count the Market’s Average Scores .</ul><ul>NOTE :- . These rules are for the following Markets of ENTIRE BBL 2020-21  :-</ul><ul>Total Fours :- Average 24 Fours will be given if the match is abandoned or over reduced.</ul><ul>Total Sixes :- Average 10 Sixes will be given if the match is abandoned or over reduced.</ul><ul>Total Caught &amp; Bowled Out :- Average 0 Caught &amp; Bowled Out will be given if the match is abandoned or over reduced.</ul><ul>Total Wide :- Average 8 Wides will be given if the match is abandoned or over reduced.</ul><ul>Total Extra :- Average 14 Extras will be given if the match is abandoned or over reduced.</ul><ul>Total No Ball :- Average 1 No Ball will be given if the match is abandoned or over reduced.</ul><ul>Total duck :- Average 1 Duck will be given if the match is abandoned or over reduced.</ul><ul>Total Fifties :- Average 2 Fifties will be given if the match is abandoned or over reduced.</ul><ul>Total Century :-Average 0 Century will be given if the match is abandoned or over reduced.</ul><ul>Total Run Out :- Average 1 Run Out will be given if the match is abandoned or over reduced.</ul><ul>Total Caught out :- Average 8 Caught Out will be given if the match is abandoned or over reduced</ul><ul>Total Stump Out :- Average 0 Stump Out will be given if the match is abandoned or over reduced.</ul><ul>Total Maiden Over :- Average 0 Maiden Over will be given if the match is abandoned or over reduced.</ul><ul>Total LBW :- Average 1 LBW will be given if the match is abandoned or over reduced.</ul><ul>Total Bowled :- Average 2 Bowled will be given if the match is abandoned or over reduced.</ul><ul>• In case BBL Matches Gets Stopped Or Interrupted Due to "COVID-19" or Any "ACT OF GOD" Reasons, Under 45 Matches then All BBL 2020-21 Tournament Fancy Markets will be Voided, But if 45 or Above Matches are Being Played then we will Settle all the Fancy Markets and  Also If there are NON Played Matches Above 45 then we will settle the markets as per our Markets Average.</ul></li></ol>
    <ol id="electionRules" style={{display:'none'}}>
        <li>Election result declared by Election Commission of India will be valid in our Exchange.</li>
        <li>Accidental issues in Election will Not Be counted in our Exchange.</li>
    </ol>
</div>
<ul class="btn-wrap break">
    <li><a class="btn" onclick="javascript: $j('[id^=fancyBetRulesWrap]').fadeOut();">OK</a></li>
</ul>
</div>

            <div id="sportsBookRulesWrap_1" class="rules-wrap" style={{display:'none'}}>

<h3 id="owRulesTitle">Rules of Premium Tennis</h3>
<div class="rules-content">
    <ol id="owTennisRulesContent" style={{display:'none'}}>
<li>Handicap
    <ul>
        <li>Set Handicap betting are settle based on the Sets</li>
        <li>For Tennis Set hdp betting, the player you wager on must cover/beat the set Spread. This means that the favored player must win by more than the outlined number of sets or the underdog will receive that number of sets as a head start. In the above exmaple, If you wager on Andreas Seppi +1.5, he would need to win the match by any score or alternately lose by 1 set. If you wager on Daniil Medvedec -1.5, he would need to win by 2 set .</li>
        <li>If the scheduled number of sets required to win a match is changed from that originally scheduled then all bets will be void, except for those that have been unconditionally determined.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Over/Under
    <ul>
        <li>Game Total settle based on the total number of Games played of the match.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Money Line
    <ul>
        <li>Money line markets refer to the winner of the match or specified set.</li>
        <li>If a player does not start a tournament or match , disqualified, retires during the match, then all bets on that player will be void.</li>
        <li>If a match is postponed or suspended then all bets are still considered valid if the match is completed.</li>
        <li>All bets will still be considered valid regardless of any change of venue or court surface (including moving matches from outdoor to indoor courts or vice versa).</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Game Handicap (Tennis)
    <ul>
        <li>Game Hdandicap betting are settled based on Games.</li>
        <li>For Tennis Game Hdp betting , the player you wager on must cover/beat the game spread. This means that the favored player must win by more than the outlined number of games or the underdog will receive that number of games as a head start. In the above example, if you wager on Andreas Seppi +3.5, he would need to win the match by any score or alternately lose by 3 games or less. If you wager on Daniil Medvedev -3.5, he would need to win by 4 games or more.</li>
        <li>All bets will be consider void if the match is not completed.</li>
    </ul>
</li>
<li>Set x Winner (Tennis)
    <ul>
        <li>Set X  Winner  refers to the result of the specified set. All bets will be considered void if the specified set is not completed.</li>
    </ul>
</li>
<li>Set x Total Game O/U (Tennis)
    <ul>
        <li>Set X  Total Game O/U  refers to total Game of the specified set. All bets will be considered void if the specified set is not completed.</li>
    </ul>
</li>
</ol>
    <ol id="owSoccerRulesContent" style={{display:'none'}}>
<li>FT.1X2:1X2 means betting in any one of three possible winning outcomes for an Event. 1 refers to the team that is named first (usually the home team); X refers to the game resulting in a draw or tie; 2 refers to the team that is named second (usually the away team).</li>
<li>1H 1X2:1st Half 1X2 means betting in any one of three possible winning outcomes of the first half for an Event. 1 refers to the team that is named first (usually the home team); X refers to the game resulting in a draw or tie; 2 refers to the team that is named second (usually the away team).</li>
<li>Over/Under: Over/Under means betting that is determined by the total number of points (goals, games etc) in the final result of an Event. If the total is more than the Over/Under pre-designated line then the winning result is Over; if the total is less than the Over/Under pre-designated line then the winning result is Under.</li>
<li>1H Over/Under: 1st Half Over/Under means betting that is determined by the total number of points in the result of the first half of an Event. If the total is more than the Over/Under pre-designated line then the winning result is Over; if the total is less than the Over/Under pre-designated line then the winning result is Under.</li>
<li>
    Over/Under Guideline:
    <ul style={{listStyleType:'lower-roman'}}>
        <li>Goal line under 2
            <div>
                Bets win if there is either 0 or 1 goal scored in the match. If there are two goals exactly then the stake is returned. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>

        <li>Goal line over 2
            <div>
                Bets win if there are three or more goals scored in the match. If there are two goals exactly the stake is returned. Bets lose if there is 0 or 1 goal scored in the match.
            </div>
        </li>

        <li>Goal line under 2.25
            <div>
                Bets win if there is either 0 or 1 goal scored in the match. If there are two goals exactly half the stake will win and half will be returned. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.25
            <div>
                Bets win if there are three or more goals scored in the match. If there are two goals exactly half the stake will be returned and half will be lost. Bets lose if there is 0 or 1 goal scored in the match.
            </div>
        </li>
        <li>Goal line under 2.5
            <div>
                Bets win if there are 0, 1 or 2 goals scored in the match. Bets lose if there are three or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.5
            <div>
                Bets win if there are three or more goals scored in the match. Bets lose if there are 0, 1 or 2 goals scored in the match.
            </div>
        </li>
        <li>Goal line under 2.75
            <div>
                Bets win if there are 0, 1 or 2 goals scored in the match. If there are three goals exactly half the stake will be returned and half will be lost. Bets lose if there are four or more goals scored in the match.
            </div>
        </li>
        <li>Goal line over 2.75
            <div>
                Bets win if there are four or more goals scored in the match. If there are three goals exactly half the stake will win and half will be returned. Bets lose if there are 0, 1 or 2 goals scored in the match.
            </div>
        </li>

    </ul>
</li>

<li>Double Chance: The following options are available:
    <ul>
        <li>1 or X - If the result is either a home or draw then bets on this option are winners.</li>
        <li>X or 2 - If the result is either a draw or away then bets on this option are winners.</li>
        <li>1 or 2 - If the result is either a home or away then bets on this option are winners.</li>
        <li>If a match is played at a neutral venue the team listed first is deemed the home team for betting purposes.</li>
    </ul>
</li>
<li>Odd/Even: Odd/Even means betting that is determined by whether the total number of points (goals, games etc) in the final result of an Event is Odd or Even.</li>
<li>1H Odd/Even: 1st Half Odd/Even means betting that is determined by whether the total number of points at the end of the first half of an Event is Odd or Even. 1st half bets will be void if an Event is abandoned before the end of the first half. But if an Event is abandoned after the end of the first half, all 1st half bets will be valid.</li>
<li>Handicap: Handicap means betting when one competitor or team receives a virtual head start (effectively leading by that head start before the Event begins). The winner is the competitor or team with the better score after adding the given handicap to the result. Remaining Handicap rules are set out in the Specific Event Betting Rules.</li>
<li>1H Handicap: 1st Half Handicap means betting on the team with the better score after adding the given handicap to the result of the first half of an Event.</li>
<li>Correct Score (AOS)	:
    <ul>
        <li>Correct Score means betting to predict the final score at the end of full-time.</li>
        <li>First Half Correct Score means betting to predict the final score at the end of First Half.</li>
        <li>Correct Score to win "AOS" means the selected team must win to a score not listed in the selection.</li>
        <li>Example:
            <ul>
                <li>Result for 5-0UP - 5:1, 6:2 and etc (Lose) / 5:0, 6:1 and etc (Win)</li>
                <li>Result for 0-5UP - 1:5, 2:6 and etc (Lose) / 0:5, 1:6 and etc (Win)</li>
            </ul>
        </li>
    </ul>
</li>
<li>E-Soccer bets whenever applicable, are governed by the same rules for bets placed on real sporting events. The Company provides information (e.g. neutral ground, Red card, timer, statistical information, dates, commencement, etc) as a service and accepts no liability whatsoever. The timer and red card notices are given for reference purposes only. </li>
<li>In case there is a technical issue or malfunction in a match, all placed bets will be voided and refunded in accordance with our general betting rules and regulations.</li>
<li>The Company reserves its right to void any bet when it deems necessary under the circumstances. The decision of the Company with respect to any bet is final.</li>
</ol>
</div>
<ul class="btn-wrap break">
    <li><a onclick="$j('[id^=sportsBookRulesWrap_1]').fadeOut()" class="btn" href="#">OK</a></li>
</ul>
</div>

            {/* <!-- Game Information --> */}
            <ul class="game-info" style={{display:'block'}}>
                <li id="gameInfoDate" class=""><img class="icon-time" src={Transparent}/> Tue 22 Dec, 11:30</li>
                <li><span id="lowLiquidityTag" class="game-low_liq" style={{display:'none'}}>Low Liquidity</span></li>
            </ul>

            <a id="lmtOpenStreaming" class="open-tv-wrap" style={{display:'none'}}>Live</a>

            <dl class="game-matched" style={{display:'block'}}>
                <dt>Matched</dt>
                <dd id="liveGameMatched">PTE 38,293</dd>
            </dl>
            <dl id="minMaxBox" class="fancy-info" >
                <dt id="minMaxDt" style={{display:'none'}}>Min/Max</dt>
                <dt id="maxDt" >Max</dt>
                <dd id="minMaxInfo">20000</dd>
            </dl>
        </div>

        
        <div id="tv-wrap" class="game-streaming-wrap" style={{display:'none'}}>
            <div id="tv" class="tv">
                <ul class="tv-control">
                    <li><a class="close" id="closeStreamingBox">Close</a></li>
                </ul>

                <ul class="tv-control">
                    <li>
                        {/* <!-- btn-volume_on btn-volume_off --> */}
                        <a class="btn-volume_off" id="mute">volume</a>
                    </li>
                    <li>
                        <a class="btn-line" id="changeLineBtn"><span id="tvLine">1</span></a>
                    </li>
                </ul>
                
                {/* <video autoplay="" preload="" playsinline="" id="video" poster="/images/cover-live.png" style="background-color:#000000; width: 100%; height: 100%"></video> */}
            </div>
        </div>
        

        <div class="kv-wrap" style={{display:'none'}}>
            <img src="/images/kv/KV.jpg" alt=""/>
        </div>

        {/* <!-- Horse Coming Up Start --> */}
        <div class="upcome-wrap" id="upcomingHorseRace" style={{display:'none'}}>
            <dl class="upcome-head" id="next">
                <dt id="nextHeader">Next Horse Race
                </dt>
            </dl>

            <dl class="upcome" id="upcoming">
                <dt id="upcomeHeader">Coming Up
                </dt>
            </dl>
        </div>
        <dl id="upcomingRaceTempLate" style={{display:'none'}}>
            <dd>
                <a href="#"></a>
                <span></span>
            </dd>
        </dl>
        {/* <!-- Horse Coming Up End --> */}

        
<div id="marketTemplate" class="game-wrap" style={{display:'none'}}>
<h3>
    <a id="multiMarketPin" class="add-pin" style={{cursor:'pointer'}} title="Add to Multi Markets"></a>
    {/* <a id="marketName" class="to-expand" style={{cursor:'pointer'}}>{market_name}</a> */}
</h3>

<ul class="slip-head">
    <li class="col-game" id="matched">
        <span id="lowLiquidityTag" class="game-low_liq" style={{display:'none'}}>Low Liquidity</span>
        Matched: 
    </li>
    <li class="col-home"><span>Back</span> <span>Lay</span></li>
</ul>
<div id="marketGameList" class="game-list">

    {/* <!-- Game Suspend --> */}
    <div id="suspend" class="suspend" style={{display:'none'}}>
        <span>Suspend</span>
    </div>
    
    {/* <!-- Game Closed --> */}
    <div id="closed" class="suspend" style={{display:'none'}}>
        <span>Closed</span>
    </div>
    
    <dl id="selectionTemplate" class="game-list-col" style={{display:'none'}}>
        <span id="vsName" vsinfo="" style={{display:'none'}}></span>
        <dt id="runner">
            <span id="withoutBet" class="win" style={{display:'none'}}></span>
            <span id="lossWithoutBet" class="win" style={{display:'none'}}></span>
            <span id="withBet" class="win" style={{display:'none'}}></span>
            <span id="lossWithBet" class="win" style={{display:'none'}}></span>
        </dt>
        <dd class="col-home">
            <div id="selectionSuspend" class="suspend" style={{display:'none'}}>
                <span>Suspend</span>
            </div>
            <a class="btn-back" side="Back">--</a>
            <a class="btn-lay" side="Lay">--</a>
        </dd>
    </dl>
    <a id="moreLink" class="more" style={{cursor:'pointer'}}>View Full Market</a>
</div>
</div>

{/* <!-- Left Event Wrap --> */}
<div id="eventLeft" class="event-left" style={{display:'none'}}></div>

{/* <!-- Right Event Wrap --> */}
<div id="eventRight" class="event-right" style={{display:'none'}}></div>


        {/* <!-- Markets Closed Wrap --> */}
        <div id="marketClosedWrap" class="closed-wrap" style={{display:'none'}}>
            <div class="closed-next">
                <h2>This race has ended
                </h2>
                
            </div>
        </div>

        {/* <!-- Game Bets Table --> */}
         <div id="bookMakerWrap" class="bets-wrap  bookmaker_bet" >

<table id="bookMakerMarketList" class="bets bets-bookmaker" >
<colgroup>
    <col span="1" width="280"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
</colgroup>
<tbody id="bookMakerMarket_30194778_66628" style={{display: 'table-row-group'}}>
    
    <tr class="bet-all">
        <td colspan="3"></td>
        {/* <!-- <td class="refer-bet"></td> --> */}
        <td>Back</td>
        <td>Lay</td>
        {/* <td class="refer-book" colspan="2"></td> */}
    </tr>
    <tr id="bookMakerSuspend_30194778_66628_197444" class="fancy-suspend-tr"  marketid="66628">
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">New Zealand</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="bookMakerSuspend_30194778_66628_197445" class="fancy-suspend-tr"  marketid="66628">
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr><tr id="bookMakerSelection_30194778_66628_197445" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">Pakistan </p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr></tbody></table><table id="bookMakerTempTable" style={{display:'none'}}>

    <tbody id="bookMakerMarketTemplate">
    <tr id="bookMakerSpecialBet" class="special_bet">
        <td colspan="7">
            <h3>
            <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
            Bookmaker Market
            <p>| Zero Commission</p>
            </h3>
            <dl class="fancy-info">
                <dt><span>Min</span></dt>
                <dd id="min">100.00</dd>
                <dt><span>Max</span></dt>
                <dd id="max">10000.00</dd>
                <dt id="rebateName"><span>Rebate</span></dt>
                <dd id="rebate"></dd>
            </dl>
        </td>
    </tr>
    <tr class="bet-all">
        <td colspan="3"></td>
        {/* <!-- <td class="refer-bet"></td> --> */}
        <td>Back</td>
        <td>Lay</td>
        {/* <td class="refer-book" colspan="2"></td> */}
    </tr>
    </tbody>

    <tbody><tr id="bookMakerSelectionTemplate" style={{display:'none'}}>
        <th class="predict">
            <p id="runnerName"></p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="back_1" style={{cursor:'pointer'}}><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}}><a></a></dd>
                <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd>
            </dl>
        </td>
    </tr>

    <tr id="suspendTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr>

    <tr id="delayTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
        <th></th>
        <td colspan="2"></td>
        <td class="fancy-suspend-td" colspan="2">
            <div class="fancy-suspend"><span id="info">Delay Betting</span></div>
        </td>
        <td colspan="2"></td>
    </tr>

    <tr id="bookMakerBetTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl id="classWrap" class="quick_bet-wrap slip-back">
                <dt id="bookMakerBetHeader" class="">
                    
                    <span id="bookMakerBetAcceptCheck" class="bet-check">
                        <input id="bookMakerBetAcceptAnyOdds" type="checkbox"/>
                        <label for="bookMakerBetAcceptAnyOdds">Accept Any Odds</label>
                    </span>
                    
                </dt>
                <dd class="col-btn"><a id="cancel" class="btn" style={{cursor:'pointer'}}>Cancel
                </a></dd>
                <dd id="oddsHeader" class="col-odd">
                    <ul class="quick-bet-confirm">
                        <li id="odds"></li>
                    </ul>
                </dd>
                <dd class="col-stake">
                    <input id="inputStake" type="text" value=""/>
                </dd>
                <dd class="col-send">
                    <a id="placeBet" class="btn-send disable" style={{cursor:'pointer'}}>Place Bets
                    </a>
                </dd>
            </dl>
        </td>
    </tr>

    <tr id="bookMakerBetBarTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl class="quick_bet-wrap quick_bet-progress">
                <dd id="progressBar" class="progress-bar" style={{width: '0%'}}></dd>
                <dd class="progress-bar-txt">Placing your bets, Please wait <span id="secRemain">0 sec remaining…</span>
                </dd>
            </dl>
        </td>
    </tr>

    <tr id="bookMakerBetMessageTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl id="classWrap" class="quick_bet-wrap quick_bet-message success">
                <dd id="info">
                    <strong id="header">Bet Matched</strong>
                    USD$ at odds Profit:
                    <a id="close" class="btn-close" style={{cursor:'pointer'}}>Close</a>
                </dd>
            </dl>
        </td>
    </tr>
</tbody></table>



</div>
        
        
        <div id="bookMakerWrap" class="bets-wrap  bookmaker_bet" >

<table id="bookMakerMarketList" class="bets bets-bookmaker" >
<colgroup>
    <col span="1" width="280"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
    <col span="1" width="70"/>
</colgroup>
<tbody id="bookMakerMarket_30194778_66628" style={{display: 'table-row-group'}}>
    <tr id="bookMakerSpecialBet" class="special_bet">
        <td colspan="7">
            <h3>
            <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
            Bookmaker Market
            <p>| Zero Commission</p>
            </h3>
            <dl class="fancy-info">
                <dt><span>Min</span></dt>
                <dd id="min"> 1.00</dd>
                <dt><span>Max</span></dt>
                <dd id="max"> 800.00</dd>
                <dt id="rebateName" style={{display:'none'}}><span>Rebate</span></dt>
                <dd id="rebate" style={{display:'none'}}></dd>
            </dl>
        </td>
    </tr>
    <tr class="bet-all">
        <td colspan="3"></td>
        {/* <!-- <td class="refer-bet"></td> --> */}
        <td>Back</td>
        <td>Lay</td>
        {/* <td class="refer-book" colspan="2"></td> */}
    </tr>
    <tr id="bookMakerSuspend_30194778_66628_197444" class="fancy-suspend-tr"  marketid="66628">
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">New Zealand</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="bookMakerSuspend_30194778_66628_197445" class="fancy-suspend-tr"  marketid="66628">
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr><tr id="bookMakerSelection_30194778_66628_197445" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">Pakistan </p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr></tbody></table><table id="bookMakerTempTable" style={{display:'none'}}>

    <tbody id="bookMakerMarketTemplate">
    <tr id="bookMakerSpecialBet" class="special_bet">
        <td colspan="7">
            <h3>
            <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
            Bookmaker Market
            <p>| Zero Commission</p>
            </h3>
            <dl class="fancy-info">
                <dt><span>Min</span></dt>
                <dd id="min">100.00</dd>
                <dt><span>Max</span></dt>
                <dd id="max">10000.00</dd>
                <dt id="rebateName"><span>Rebate</span></dt>
                <dd id="rebate"></dd>
            </dl>
        </td>
    </tr>
    <tr class="bet-all">
        <td colspan="3"></td>
        {/* <!-- <td class="refer-bet"></td> --> */}
        <td>Back</td>
        <td>Lay</td>
        {/* <td class="refer-book" colspan="2"></td> */}
    </tr>
    </tbody>

    <tbody><tr id="bookMakerSelectionTemplate" style={{display:'none'}}>
        <th class="predict">
            <p id="runnerName"></p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="back_1" style={{cursor:'pointer'}}><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}}><a></a></dd>
                <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd>
                <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd>
            </dl>
        </td>
    </tr>

    <tr id="suspendTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
        <th colspan=""></th>
        <td class="fancy-suspend-td" colspan="6">
            {/* <div id="suspendClass" class="fancy-suspend"><span id="info">Suspend</span></div> */}
        </td>
    </tr>

    <tr id="delayTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
        <th></th>
        <td colspan="2"></td>
        <td class="fancy-suspend-td" colspan="2">
            <div class="fancy-suspend"><span id="info">Delay Betting</span></div>
        </td>
        <td colspan="2"></td>
    </tr>

    <tr id="bookMakerBetTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl id="classWrap" class="quick_bet-wrap slip-back">
                <dt id="bookMakerBetHeader" class="">
                    
                    <span id="bookMakerBetAcceptCheck" class="bet-check">
                        <input id="bookMakerBetAcceptAnyOdds" type="checkbox"/>
                        <label for="bookMakerBetAcceptAnyOdds">Accept Any Odds</label>
                    </span>
                    
                </dt>
                <dd class="col-btn"><a id="cancel" class="btn" style={{cursor:'pointer'}}>Cancel
                </a></dd>
                <dd id="oddsHeader" class="col-odd">
                    <ul class="quick-bet-confirm">
                        <li id="odds"></li>
                    </ul>
                </dd>
                <dd class="col-stake">
                    <input id="inputStake" type="text" value=""/>
                </dd>
                <dd class="col-send">
                    <a id="placeBet" class="btn-send disable" style={{cursor:'pointer'}}>Place Bets
                    </a>
                </dd>
            </dl>
        </td>
    </tr>

    <tr id="bookMakerBetBarTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl class="quick_bet-wrap quick_bet-progress">
                <dd id="progressBar" class="progress-bar" style={{width: '0%'}}></dd>
                <dd class="progress-bar-txt">Placing your bets, Please wait <span id="secRemain">0 sec remaining…</span>
                </dd>
            </dl>
        </td>
    </tr>

    <tr id="bookMakerBetMessageTemplate" class="fancy-quick-tr" style={{display:'none'}}>
        <td colspan="7">
            <dl id="classWrap" class="quick_bet-wrap quick_bet-message success">
                <dd id="info">
                    <strong id="header">Bet Matched</strong>
                    USD$ at odds Profit:
                    <a id="close" class="btn-close" style={{cursor:'pointer'}}>Close</a>
                </dd>
            </dl>
        </td>
    </tr>
</tbody></table>



</div>	
        
        <div id="fancyBetPosition" style={{display:'none'}}></div><div id="fancyBetTable_30194778" class="bets-wrap fancy_bet"  name="multiMarketItem">


<div id="fancyBetHead" class="fancy-head">
    <h4 class="in-play">
        {/* <!-- a id="multiMarketPin" class="add-pin" name="te" style={{cursor:'pointer'}} title="Add to Multi Markets"></a--> */}
        <span id="headerName">Fancy Bet</span>

        
            <a class="btn-fancybet_rules" onclick="javascript: $j('[id^=fancyBetRulesWrap]').fadeIn()"></a>
        
    </h4>
    <a id="showSportsBookBtn" class="other-tab" onclick="javascript: SportsBookEventHandler.activeSportsBook();" style={{display:'none'}}>
        <span class="tag-new">New</span>
        Premium Cricket
    </a>
</div>

<p id="fancyBetNoBet" class="no_bet" style={{display:'none'}}>has no markets</p>

<table id="fancyBetMarketList" class="bets" >
    <colgroup>
        <col span="1" width="280"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
    </colgroup>
    <tbody>
       <tr id="fancyBetSpecialBet" class="special_bet">
            <td colspan="7">
                <h3>
                <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
                Fancy Bet
                </h3>
            </td>
       </tr>
       <tr class="bet-all"><td colspan="3"></td><td>No</td><td>Yes</td></tr> 
        <tr id="suspendTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class="fancy-suspend"><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr>
        
        <tr id="delayTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div class="fancy-suspend"><span id="info">Delay Betting</span></div>
            </td>
            <td colspan="2"></td>
        </tr>
        
        
        <tr id="fancyBetMarketTemplate" style={{display:'none'}}>
             <th colspan="3">
                <dl class="fancy-th-layout">
                    <dt>
                        <p id="marketName"></p>
                        <span id="before" class="win" style={{display:'none'}}></span>
                        <span id="after" class="to-lose" style={{display:'none'}}></span>
                    </dt>
                    <dd class="dd-tips">
                        <ul class="fancy-tips">
                            <li id="remarkFirstRow" style={{display:'none'}}></li>
                            <li id="remarkSecondRow" style={{display:'none'}}></li>
                        </ul>
                        <a id="fancyBetBookBtn" class="btn-book" style={{display:'none'}}>Book</a>
                    </dd>
                </dl>
            </th>
            <td id="lay_1" class="lay-1">
                <a id="runsInfo" style={{cursor:'pointer'}}><span></span></a>	
            </td>
            <td id="back_1" class="back-1">
                <a id="runsInfo" style={{cursor:'pointer'}}><span></span></a>	
            </td>
            
        </tr>

        
        <tr id="fancyBetSingleBetMarketTemplate" style={{display:'none'}}>
            <th colspan="3">
                <dl class="fancy-th-layout">
                    <dt>
                        <p id="marketName"></p>
                        <span id="before" class="win" style={{display:'none'}}></span>
                        <span id="after" class="to-lose" style={{display:'none'}}></span>
                    </dt>
                    <dd class="dd-tips">
                        <ul class="fancy-tips">
                            <li id="remarkFirstRow" style={{display:'none'}}></li>
                            <li id="remarkSecondRow" style={{display:'none'}}></li>
                        </ul>
                        <a id="fancyBetBookBtn" class="btn-book" style={{display:'none'}}>Book</a>
                    </dd>
                </dl>
            </th>
            <td id="clickToBet" class="back-1 single-bet" colspan="2">
                <a id="oddsInfo" href="#">
                    <span>odds</span>
                </a>	
            </td>
           
        </tr>
    <tr id="suspend_199349" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class=""><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">NZ Will Win The Toss Bhav</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="suspend_199350" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class=""><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">Match 1st Over Runs Adv</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="suspend_199351" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class=""><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">NZ 10 Over Runs Adv</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="suspend_199352" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class=""><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr><tr id="bookMakerSelection_30194778_66628_197444" style={{display: 'table-row'}}>
        <th class="predict">
            <p id="runnerName">NZ 20 Over Runs Adv</p>
            <span id="before" class="win" style={{display:'none'}}></span>
            <span id="after" class="to-lose" style={{display:'none'}}></span>
        </th>
        <td class="" colspan="3">
            <dl class="back-gradient">
                {/* <dd id="back_3" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="back_2" style={{cursor:'pointer'}}><p></p></dd> */}
                <dd id="back_1" style={{cursor:'pointer'}} class=""><a></a></dd>
            </dl>
        </td>
        <td class="" colspan="3">
            <dl class="lay-gradient">
                <dd id="lay_1" style={{cursor:'pointer'}} class=""><a></a></dd>
                {/* <dd id="lay_2" style={{cursor:'pointer'}}><p></p></dd> */}
                {/* <dd id="lay_3" style={{cursor:'pointer'}}><p></p></dd> */}
            </dl>
        </td>
    </tr><tr id="suspend_199353" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class=""><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr></tbody>
</table>
</div>
        
        
<div id="fancyBetTableTemplate" class="bets-wrap fancy_bet" style={{display:'none'}}>


<div id="fancyBetHead" class="fancy-head">
    <h4>
        {/* <!-- a id="multiMarketPin" class="add-pin" name="te" style={{cursor:'pointer'}} title="Add to Multi Markets"></a--> */}
        <span id="headerName">Fancy Bet</span>

        
            <a class="btn-fancybet_rules" onclick="javascript: $j('[id^=fancyBetRulesWrap]').fadeIn()"></a>
        
    </h4>
    <a id="showSportsBookBtn" class="other-tab" onclick="javascript: SportsBookEventHandler.activeSportsBook();" style={{display:'none'}}>
        <span class="tag-new">New</span>
        Premium Cricket
    </a>
</div>

<p id="fancyBetNoBet" class="no_bet" style={{display:'none'}}>has no markets</p>

<table id="fancyBetMarketList" class="bets" style={{display:'none'}}>
    <colgroup>
        <col span="1" width="280"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
    </colgroup>
    <tbody>
       <tr id="fancyBetSpecialBet" class="special_bet">
            <td colspan="7">
                <h3>
                <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
                Fancy Bet
                </h3>
            </td>
       </tr>
        <tr class="bet-all">
            <td></td>
            <td class="refer-bet" colspan="2"></td>
            <td>No</td>
            <td>Yes</td>
            {/* <td class="refer-book" colspan="2"></td> */}
        </tr>
        
        
        <tr id="suspendTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class="fancy-suspend"><span id="info">Ball Running</span></div>
            </td>
            <td colspan="2"></td>
        </tr>
        
        <tr id="delayTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
            <th></th>
            <td colspan="2"></td>
            <td class="fancy-suspend-td" colspan="2">
                <div class="fancy-suspend"><span id="info">Delay Betting</span></div>
            </td>
            <td colspan="2"></td>
        </tr>
        
        
        <tr id="fancyBetMarketTemplate" style={{display:'none'}}>
             <th colspan="3">
                <dl class="fancy-th-layout">
                    <dt>
                        <p id="marketName"></p>
                        <span id="before" class="win" style={{display:'none'}}></span>
                        <span id="after" class="to-lose" style={{display:'none'}}></span>
                    </dt>
                    <dd class="dd-tips">
                        <ul class="fancy-tips">
                            <li id="remarkFirstRow" style={{display:'none'}}></li>
                            <li id="remarkSecondRow" style={{display:'none'}}></li>
                        </ul>
                        <a id="fancyBetBookBtn" class="btn-book" style={{display:'none'}}>Book</a>
                    </dd>
                </dl>
            </th>
            <td id="lay_1" class="lay-1">
                <a id="runsInfo" style={{cursor:'pointer'}}><span></span></a>	
            </td>
            <td id="back_1" class="back-1">
                <a id="runsInfo" style={{cursor:'pointer'}}><span></span></a>	
            </td>
        
        </tr>

        
        <tr id="fancyBetSingleBetMarketTemplate" style={{display:'none'}}>
            <th colspan="3">
                <dl class="fancy-th-layout">
                    <dt>
                        <p id="marketName"></p>
                        <span id="before" class="win" style={{display:'none'}}></span>
                        <span id="after" class="to-lose" style={{display:'none'}}></span>
                    </dt>
                    <dd class="dd-tips">
                        <ul class="fancy-tips">
                            <li id="remarkFirstRow" style={{display:'none'}}></li>
                            <li id="remarkSecondRow" style={{display:'none'}}></li>
                        </ul>
                        <a id="fancyBetBookBtn" class="btn-book" style={{display:'none'}}>Book</a>
                    </dd>
                </dl>
            </th>
            <td id="clickToBet" class="back-1 single-bet" colspan="2">
                <a id="oddsInfo" href="#">
                    <span>odds</span>
                </a>	
            </td>
       
        </tr>
    </tbody>
</table>
</div>

<table id="tempTable" style={{display:'none'}}>
<tbody>

<tr id="fancyBetTemplate" class="fancy-quick-tr" style={{display:'none'}}>
    <td colspan="7">
        <dl id="classWrap" class="quick_bet-wrap slip-back">
            <dt id="fancyBetHeader" class="">
                
                <span id="fancyBetAcceptCheck" class="bet-check">
                    <input id="fancyBetAcceptAnyOdds" type="checkbox"/>
                    <label for="fancyBetAcceptAnyOdds">Accept Any Odds</label>
                </span>
                
            </dt>
            <dd class="col-btn"><a id="cancel" class="btn" style={{cursor:'pointer'}}>Cancel</a></dd>
            <dd id="oddsHeader" class="col-odd">
                <ul class="quick-bet-confirm">
                    <li id="runs"></li>
                    <li id="odds" class="quick-bet-confirm-title"></li>
                </ul>
            </dd>
            <dd class="col-stake">
                <input id="inputStake" type="text" value=""/>
            </dd>
            <dd class="col-send">
                <a id="placeBet" class="btn-send disable" style={{cursor:'pointer'}}>Place Bets</a>
            </dd>
        </dl>
    </td>
</tr>


<tr id="fancyBetBarTemplate" class="fancy-quick-tr" style={{display:'none'}}>
    <td colspan="7">
        <dl class="quick_bet-wrap quick_bet-progress">
            <dd id="progressBar" class="progress-bar" style={{width: '0%'}}></dd>
            <dd class="progress-bar-txt">Placing your bets, Please wait <span id="secRemain">0 sec remaining…</span></dd>
        </dl>
    </td>
</tr>


<tr id="fancyBetMessageTemplate" class="fancy-quick-tr" style={{display:'none'}}>
    <td colspan="7">
        <dl id="classWrap" class="quick_bet-wrap quick_bet-message success">
            <dd id="info">
                <strong id="header">Bet Matched</strong>
                USD$ at odds Profit:
                <a id="close" class="btn-close" style={{cursor:'pointer'}}>Close</a>
            </dd>
        </dl>
    </td>
</tr>


{/* <!-- lottery Fancy bet quick--> */}
<tr id="fancyBetLotteryTemplate" class="fancy-quick-tr bet-lottery" style={{display:'none'}}>
    <td colspan="7">
        {/* <!-- Quick Bet Wrap --> */}
        <dl class="quick_bet-wrap slip-back">
            <dt></dt>
            <dd class="col-btn"><a id="cancel" class="btn" style={{cursor:'pointer'}}>Cancel</a></dd>
            <dd id="lotteryBall" class="lottery-ball">
                <a id="lotteryNo_0">0</a>
                <a id="lotteryNo_1">1</a>
                <a id="lotteryNo_2">2</a>
                <a id="lotteryNo_3">3</a>
                <a id="lotteryNo_4">4</a>
                <a id="lotteryNo_5">5</a>
                <a id="lotteryNo_6">6</a>
                <a id="lotteryNo_7">7</a>
                <a id="lotteryNo_8">8</a>
                <a id="lotteryNo_9">9</a>
            </dd>
            <dd class="col-stake">
                <input id="inputStake" type="text" value=""/>
            </dd>
            <dd class="col-send">
                <a id="placeBet" class="btn-send disable" style={{cursor:'pointer'}}>Place Bets</a>
            </dd>
        </dl>
        {/* <!-- Quick Bet Wrap End --> */}
    </td>
</tr>
{/* <!-- lottery end --> */}

{/* <!-- khadda Fancy bet quick--> */}
<tr id="fancyBetKhaddaTemplate" class="fancy-quick-tr bet-khadda">
    <td colspan="7">
        {/* <!-- Quick Bet Wrap --> */}
        <dl class="quick_bet-wrap slip-back">
            <dt></dt>
            <dd class="col-btn"><a id="cancel" class="btn" style={{cursor:'pointer'}}>Cancel</a></dd>
            {/* <!-- Runs --> */}
            <dd class="col-stake">
                <input id="inputRuns" type="text" maxlength="3"/>
            </dd>
            <dd class="col-odd">
                <ul class="quick-bet-confirm">
                    <li id="extendedRuns"></li>
                </ul>
            </dd>
            <dd class="col-runs">
                Runs
            </dd>

            <dd class="col-stake">
                <input id="inputStake" type="text" value=""/>
            </dd>
            <dd class="col-send">
                <a id="placeBet" class="btn-send disable" style={{cursor:'pointer'}}>Place Bets</a>
            </dd>
        </dl>
        {/* <!-- Quick Bet Wrap End --> */}
    </td>
</tr>
{/* <!-- Khadda end --> */}
</tbody>
</table>

        
        <div id="sportsBookWrap" class="bets-wrap sportsbook_bet" style={{display:'none'}}>

{/* <!-- Sportsbook bet head start --> */}
<div id="sportsBookHead" class="sportsbook-head">
    <h4>
        <span id="sportsBookName">Premium Cricket</span>
        <a id="sportsBookRules" class="btn-sportsbook_rules">Rules</a>
    </h4>
    <a id="showFancyBetBtn" class="other-tab" >Fancy Bet</a>
    <div id="sportsBookRulesWrap_4" class="rules-wrap">
        <h3>Rules of Premium Cricket</h3>
        <div class="rules-content">
            <dl class="download-list">
                <dt class="icon-pdf"><a href="javascript: void(window.open('https://drive.google.com/open?id=1rkKwnG8Sv09iANXNYriOXOm0e0wjoQqf', '_blank', config = 'location=no'));">Pre Match Market Details</a></dt>
                <dd><a href="javascript: void(window.open('https://drive.google.com/open?id=1rkKwnG8Sv09iANXNYriOXOm0e0wjoQqf', '_blank', config = 'location=no'));">download</a></dd>
            </dl>
            <dl class="download-list">
                <dt class="icon-pdf"><a href="javascript: void(window.open('https://drive.google.com/open?id=13rBX3LjmSfNNKPbCyCxkqnvHZPdmIgLf', '_blank', config = 'location=no'));">In Play Market Details</a></dt>
                <dd><a href="javascript: void(window.open('https://drive.google.com/open?id=13rBX3LjmSfNNKPbCyCxkqnvHZPdmIgLf', '_blank', config = 'location=no'));">download</a></dd>
            </dl>
        </div>
        <ul class="btn-wrap break">
            <li><a onclick="$j('#sportsBookRulesWrap_4').fadeOut()" class="btn" href="#">OK</a></li>
        </ul>
    </div>
    <dl id="minMaxWrap_1" class="fancy-info" style={{display:'none'}}>
        <dt><span>Min/Max</span></dt>
        <dd id="minMaxInfo_1">0</dd>
        <dt id="rebateName_1">Rebate</dt>
        <dd id="rebateRatio_1">0.00%</dd>
    </dl>
    <dl id="minMaxWrap_2" class="fancy-info" style={{display:'none'}}>
        <dt><span>Min</span></dt>
        <dd id="minMaxInfo_2">0</dd>
        <dt id="rebateName_2">Rebate</dt>
        <dd id="rebateRatio_2">0.00%</dd>
    </dl>
</div>

<div id="sportsBookTab_2" class="special_bets-tab-wrap" style={{display:'none'}}>
    <ul class="special_bets-tab">
        <li><a id="tab_All">All</a></li>
        <li><a id="tab_Popular">Popular</a></li>
        <li><a id="tab_Match">Match</a></li>
        <li><a id="tab_Innings">Innings</a></li>
        <li><a id="tab_Over">Over</a></li>
        <li class="tab_more_drop">
            <a id="moreDropBtn">More</a>
            <ul id="moreDropList" class="more_drop-list">
                <li><a id="tab_Batsman">Batsman</a></li>
                <li><a id="tab_Partnership">Partnership</a></li>
                <li><a id="tab_Group">Group</a></li>
                <li><a id="tab_Range">Range</a></li>
                <li><a id="tab_HeadtoHead">Head-to-Head</a></li>
                <li><a id="tab_Player">Player</a></li>
            </ul>
        </li>
    </ul>
</div>

<div id="sportsBookTab_1" class="special_bets-tab-wrap" style={{display:'none'}}>
    <ul class="special_bets-tab"></ul>
</div>

{/* <!-- Sportsbook bet head end --> */}
<p id="sportsBookNoBet" class="no_bet" style={{display:'none'}}>has no Sports Book market </p>

<table id="sportsBookMarketTemplate" class="bets" style={{display:'none'}}>
    <colgroup>
        <col span="1" width="280"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
        <col span="1" width="70"/>
    </colgroup>
    <tbody>
        <tr class="special_bet">
            <td colspan="7">
                <h3 id="marketHeader">
                    <a id="multiMarketPin" class="add-pin" title="Add to Multi Markets">Add Pin</a>
                    <a id="marketName" class="to-expand">Total sixes</a>
                </h3>
            </td>
        </tr>
    </tbody>
</table>

<table id="sportsBookTemplateTable" class="bets" style={{display:'none'}}>
    <tbody>
        <tr id="sportsBookSelectionTemplate" style={{display:'none'}}>
            <th class="" colspan="3">
                <dl class="fancy-th-layout">
                    <dt>
                        <p id="selectionName"></p>
                        <span id="before" class="win" style={{display:'none'}}></span>
                        <span id="after" class="to-lose" style={{display:'none'}}></span>
                    </dt>
                </dl>
            </th>
            <td id="back_1" class="back-1 no-liq" colspan="2">
                <a id="info"></a>
            </td>
            <td class="refer-book" colspan="2"></td>
        </tr>

        {/* <!-- Sportsbook bet quick--> */}
        <tr id="sportsBookBetTemplate" class="fancy-quick-tr" style={{display:'none'}}>
            <td colspan="7">
                {/* <!-- Quick Bet Wrap --> */}
                <dl class="quick_bet-wrap slip-book">
                    <dt id="sportsBookBetHeader" class="">
                        
                        <span id="sportsBookAcceptCheck" class="bet-check">
                            <input id="sportsBookAcceptAnyOdds" type="checkbox"/>
                            <label for="sportsBookAcceptAnyOdds">Accept Any Odds</label>
                        </span>
                        
                        <span id="sportsBookMaxStake" class="max-bet"><a id="getSportsBookMaxStakeBtn" href="#">Max</a></span>
                    </dt>
                    <dd class="col-btn"><a id="cancel" class="btn">Cancel</a></dd>
                    <dd id="oddsHeader" class="col-odd">
                        <ul class="quick-bet-confirm">
                            <li id="odds"></li>
                            <li class="quick-bet-confirm-title">odds</li>
                        </ul>
                    </dd>
                    <dd class="col-stake">
                        <input id="inputStake" type="text"/>
                    </dd>
                    <dd class="col-send">
                        <a id="placeBet" class="btn-send">Place Bets</a>
                    </dd>
                </dl>
                {/* <!-- Quick Bet Wrap End --> */}
            </td>
        </tr>

        {/* <!-- Sportsbook bet quick bet mode--> */}
        <tr id="sportsBookBetBarTemplate" class="fancy-quick-tr" style={{display:'none'}}>
            <td colspan="7">
                {/* <!-- Quick Bet Wrap Progress --> */}
                <dl class="quick_bet-wrap quick_bet-progress">
                    <dd id="progressBar" class="progress-bar" style={{width: '0%'}}></dd>
                    <dd class="progress-bar-txt">Placing your bets, Please wait <span id="secRemain">0 sec remaining…</span></dd>
                </dl>
                {/* <!-- Quick Bet Wrap End --> */}
            </td>
        </tr>

        {/* <!-- Sportsbook bet pause status--> */}
        <tr id="sportsBookSuspendTemplate" class="fancy-suspend-tr" style={{display:'none'}}>
            <th colspan="3"></th>
            <td class="fancy-suspend-td" colspan="2">
                <div id="suspendClass" class="fancy-suspend-white"><span>Suspend</span></div>
            </td>
            <td colspan="2"></td>
        </tr>

        {/* <!-- Sportsbook bet quick bet mode--> */}
        <tr id="sportsBookBetMessageTemplate" class="fancy-quick-tr" style={{display:'none'}}>
            <td colspan="7">
                {/* <!-- Quick Bet Wrap Message --> */}
                <dl id="classWrap" class="quick_bet-wrap quick_bet-message">
                    <dd id="info">
                        <strong id="header">Bet Matched</strong>
                        USD$1,000 at odds 1.27 Profit: $5,800.00
                        <a id="close" class="btn-close">Close</a>
                    </dd>
                </dl>
                {/* <!-- Quick Bet Wrap End --> */}
            </td>
        </tr>
    </tbody>
</table>

</div>

        
        <ul id="popularMarkets" class="tab-markets" style={{display:'none'}}></ul>
        <li id="popularMarketTemplate" style={{display:'none'}}><a class="" style={{cursor:'pointer'}}></a></li>

        
        <div id="lineMarketWrap" class="game-wrap" style={{display:'none'}}>
<h3>
    <a class="to-expand" style={{cursor:'pointer'}}>Line Markets</a>
</h3>

<div class="bets-wrap">
    {/* <!-- loading wrap --> */}
    <div class="loading-wrap multi-load" style={{display:'none'}}>
        <ul class="loading">
            <li><img src="/images/loading40.gif"/></li>
            <li>Loading...</li>
        </ul>
    </div>

    <span class="refer_only"></span>

    <table class="bets">
        <tbody id="lineMarketList">
            <tr class="bet-all">
                <td></td>
                <td class="refer-bet" colspan="2"></td>
                <td>
                    <a id="backAll" style={{cursor:'pointer'}} class="back-all"><img src={Transparent}/><span>Back/Yes</span></a>
                </td>
                <td>
                    <a id="layAll" style={{cursor:'pointer'}} class="lay-all"><img src={Transparent}/><span>Lay/No</span></a>
                </td>
                <td class="refer-book" colspan="2"></td>
            </tr>
            
            
            <tr id="lineMarketTemplate" style={{display:'none'}}>
                <th id="marketHeader" class="predict">
                    <a id="lineMarketBookBtn" onclick="" class="btn-book" style={{display:'none'}}>Book</a>
                    <p id="marketName">
                        <a onclick=""><img class="icon-predict" src={Transparent}/></a>
                    </p>
                    <span class=""></span><span class=""></span>
                    <span id="withoutBet" class="win" style={{display:'none'}}></span>
                    <span id="lossWithoutBet" class="win" style={{display:'none'}}></span>
                    <span id="withBet" class="win" style={{display:'none'}}></span>
                    <span id="lossWithBet" class="win" style={{display:'none'}}></span>
                </th>
                <td id="back_3" class="back-3" side="Back">
                    <a style={{cursor:'pointer'}}><span></span></a>	
                </td>
                <td id="back_2" class="back-2" side="Back">
                    <a style={{cursor:'pointer'}}><span></span></a>	
                </td>
                <td id="back_1" class="back-1" side="Back">
                    <a style={{cursor:'pointer'}}><span></span></a>
                </td>
                <td id="lay_1" class="lay-1" side="Lay">
                    <a style={{cursor:'pointer'}}><span></span></a>	
                </td>
                <td id="lay_2" class="lay-2" side="Lay">
                    <a style={{cursor:'pointer'}}><span></span></a>	
                </td>
                <td id="lay_3" class="lay-3" side="Lay">
                    <a style={{cursor:'pointer'}}><span></span></a>	
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</div>

        
        <div id="fullMarketEventLeft" class="event-left" style={{display:'block'}}></div>

        
        <div id="fullMarketEventRight" class="event-right" style={{display:'block'}}></div>

    </div>

    
    <div class="one_click-wrap">

<div class="overlay" name="oneClickBetDialog" style={{display:'none'}}></div>


<div id="oneClickBetDialog" class="dialog-wrap" name="oneClickBetDialog" style={{display:'none'}}>
    <h4>One Click Bet ON</h4>
    <div class="dialog-content">
        <p>Stake selected will be placed immediately once you click on the market odds.
<br/><span class="attention">
Attention: Back/Lay at your own risk</span></p>
    </div>
    <ul class="btn-wrap break">
        
        <li><a id="ok" class="btn-send" style={{cursor:'pointer'}}>OK</a></li>
    </ul>
    <img class="arrow-dialog" src={Transparent}/>
</div>


<div id="oneClickBetStakeBox" class="one_click-setting" name="oneClickBetStakeBox" style={{display:'none'}}>
    <h4>One Click Bet Stake</h4>
    <ul class="one_click-stake">
        <li><a class="btn select" name="betStake" index="0" style={{cursor:'pointer'}}>4</a></li>
        <li><a class="btn" name="betStake" index="1" style={{cursor:'pointer'}}>30</a></li>
        <li><a class="btn" name="betStake" index="2" style={{cursor:'pointer'}}>50</a></li>
        <li><a class="btn" name="betStake" index="3" style={{cursor:'pointer'}}>100</a></li>
    </ul>
    <a id="edit" class="a-edit" style={{cursor:'pointer'}}>Edit<img src={Transparent}/></a>
</div>


<div id="editOneClickBetStakeBox" class="one_click-setting" name="oneClickBetStakeBox" style={{display:'none'}}>
    <h4>Edit One Click Bet Stake</h4>
    <ul class="one_click-stake">
        <li><input type="text" name="editBetStake" index="0" value=""/></li>
        <li><input type="text" name="editBetStake" index="1" value=""/></li>
        <li><input type="text" name="editBetStake" index="2" value=""/></li>
        <li><input type="text" name="editBetStake" index="3" value=""/></li>
    </ul>
    <a id="save" class="btn-send" style={{cursor:'pointer'}}>Save</a>
</div>
</div>
    

</div>

{/* <!-- index end --> */}

{/* <!-- Right Column --> */}
<div class="col-right">

    










<div class="slip-wrap no-open-bet_slip">



<ul id="loadingMsg" class="loading" style={{display:'none'}}>
    <li><img src="/images/loading40.gif"/></li>
    <li id="countDownTime">Place Bets</li>
</ul>



<div class="message-bet">
    <h4 id="errorMsg" class="error" style={{display:'none'}}></h4>
    <p id="betMsg" class="warning" style={{display:'none'}}></p>
</div>

    




<div id="betSlipBoard" class="bet_slip" style={{display:'none'}}>
    
    
        <div id="betList" class="slip-list" style={{maxHeight:' calc(100% - 86px)'}}>				
    
    
    
    
    <dd id="stakePopupList" class="col-stake_list" stakepopuplisttype="template" style={{display:'none'}}>
        <ul>
            <li><a class="btn" id="selectStake_1" stake="4" style={{cursor:'pointer'}}>4</a></li>
            <li><a class="btn" id="selectStake_2" stake="30" style={{cursor:'pointer'}}>30</a></li>
            <li><a class="btn" id="selectStake_3" stake="50" style={{cursor:'pointer'}}>50</a></li>
            <li><a class="btn" id="selectStake_4" stake="200" style={{cursor:'pointer'}}>200</a></li>
            <li><a class="btn" id="selectStake_5" stake="500" style={{cursor:'pointer'}}>500</a></li>
            <li><a class="btn" id="selectStake_6" stake="1000" style={{cursor:'pointer'}}>1000</a></li>
        </ul>
        <p id="totalStakeP" style={{display:'none'}}>Total Stake: <strong id="totalStake"></strong></p>
    </dd>
    
    
    
    <div id="oddsTipsPopup" class="tips-popup" style={{display:'none'}}>min 1.01</div>
    
    
    <div id="stakeTipsPopup" class="tips-popup" style={{display:'none'}}>Min 4.00</div>

    <ul id="backSlipHeader" class="slip-head" name="slipHeader" style={{display:'none'}}>
        <li class="col-bet">Back (Bet For)</li>
        <li id="oddsHeader" class="col-odd">Odds</li>
        <li id="runsHeader" class="col-odd" style={{display:'none'}}>Unit:Runs</li>
        <li class="col-stake">Stake</li>
        <li class="col-profit">Profit</li>
    </ul>

    <ul id="laySlipHeader" class="slip-head" name="slipHeader" style={{display:'none'}}>
        <li class="col-bet">Lay (Bet Against)</li>
        <li id="oddsHeader" class="col-odd">Odds</li>
        <li id="runsHeader" class="col-odd" style={{display:'none'}}>Unit:Runs</li>
        <li class="col-stake">Stake</li>
        <li class="col-profit">Liability</li>
    </ul>

        
        <div id="headerTemplate" style={{display:'none'}}>
            <h4>
                <img class="icon-in_play" src={Transparent}/>Team a v Team b
            </h4>
        </div>
        
        
        
        <dl id="betTemplate" class="slip-back" style={{display:'none'}} marketid="" selectionid="">
            <dt>
                <a id="delete" class="delete" style={{cursor:'pointer'}}>delete</a> 
                <span id="marketName">Match Odds</span>
            </dt>
            <dd class="col-odd">
                <input id="odds" type="text" maxlength="6"/>

                <ul class="odd-add">
                    <li><a id="oddsUp" class="up" style={{cursor:'pointer'}}>up</a></li>
                    <li><a id="oddsDown" class="down" style={{cursor:'pointer'}}>down</a></li>
                </ul>
                
                <ul id="oddsTipsPoint"></ul>

            </dd>
            <dd class="col-stake">
                <input id="inputStake" type="text" value="" maxlength="7"/>
                <ul id="listPoint"></ul>
            </dd>
            <dd id="profitLiability" class="col-profit"></dd>
            {/* <!-- dynamic min bet for match odds --> */}
            <dd class="keep-option">
                <p class="dynamic-min-bet">Min Bet: <strong id="dynamicMinBet"></strong></p>
            </dd>
            
            <dd id="inningsRuns" class="inn_runs" style={{display:'none'}}>
                <dl>
                    <dt id="ifRuns"></dt>
                    <dd><span id="runsPL" class="green"></span></dd>
                    <dt id="ifLess"></dt>
                    <dd><span id="lessPL" class="green"></span></dd>
                </dl>
            </dd>
            
            
        </dl>
        
    </div>
    
    <div id="betSlipFullBtn" class="full_btn">
        <dl class="sum">
            <dt>Liability</dt>
            <dd>
                <span id="total" class="red"></span>
            </dd>
        </dl>

        <ul class="btn-wrap">
            <li><a id="cancelAll" class="btn" style={{cursor:'pointer'}} tabindex="0">Cancel All</a></li>
            <li><a id="placeBets" class="btn-send" style={{cursor:'pointer'}} tabindex="0">Place Bets</a></li>
        </ul>

        <ul class="slip-option">
            <li><input id="comfirmBets" type="checkbox"/><label for="comfirmBets">Please confirm your bets.</label></li>
        </ul>
    </div>

</div>


<div id="confirmBetList" class="slip-list" style={{maxHeight: 'calc(100% - 96px)', display:'none'}}>
    
    <div class="message-bet">
        <h4 class="warning">Please confirm your bets.</h4>
        <p>A commission is charged on your net profit from each market.</p>
    </div>
    
    <ul id="backSlipHeader" class="slip-head" style={{display:'none'}}>
        <li class="col-bet">Back (Bet For)</li>
        <li class="col-odd">Odds</li>
        <li class="col-stake">Stake</li>
        <li class="col-profit">Profit</li>
    </ul>

    <ul id="laySlipHeader" class="slip-head" style={{display:'none'}}>
        <li class="col-bet">Lay (Bet Against)</li>
        <li class="col-odd">Odds</li>
        <li class="col-stake">Stake</li>
        <li class="col-profit">Liability</li>
    </ul>
    
    
    <div id="confirmHeader" style={{display:'none'}}>
        <h4>
            <img class="icon-in_play" src={Transparent}/>
        </h4>
    </div>
    

    
    <dl id="confirmBetTemplate" class="slip-back" style={{display:'none'}}>
        <dt>
            <span id="slipType" class="slip-type">--</span> 
            <span id="selectionName">--</span> 
            <span id="marketName">--</span>
        </dt>
        <dd id="price" class="col-odd">--</dd>
        <dd id="size" class="col-stake">--</dd>
        <dd id="profitLiability" class="col-profit">--</dd>
    </dl>
    
    
</div>

<div id="confirmBetFullBtn" class="full_btn" style={{display:'none'}}>
    <dl class="sum">
        <dt></dt>
        <dd>
            <span></span>
        </dd>
    </dl>
    
    <ul class="btn-wrap">
        <li><a id="editBets" class="btn" style={{cursor:'pointer'}}>Edit Bets</a></li>
        <li><a id="submitBets" class="btn-send" style={{cursor:'pointer'}}>Confirm Bets</a></li>
    </ul>
    
    <ul class="slip-option">
        <li><input id="comfirmBets" type="checkbox" checked="checked"/><label>Confirm bets before placing</label></li>
    </ul>
</div>
    
</div>


    




<div class="matched-wrap" style={{display: 'none', height:' calc(100% - 301px)'}}>

<h3>
    <a id="openBetsRefresh" class="slip_refresh" style={{cursor:'pointer'}}>Refresh</a>
    <a class="to-expand" style={{cursor:'pointer'}}>Open Bets</a>
</h3>


<div class="message-bet">
    <h4 id="oneClickMsg" class="" style={{display:'none'}}></h4>
</div>


<div id="oneClickLoadingWrap" class="one_click-loading" style={{display:'none'}}>
    <div id="loadPending" class="load-pending" style={{display:'none'}}>
        <strong id="pendingNum"></strong>
        pending...
    </div>
    <ul class="loading">
        <li><img src="/images/loading40.gif"/></li>
        <li id="oneClickTime">Place Bets</li>
    </ul>
</div>


<div class="message-bet">
    <h4 id="editErrorMsg" class="error" style={{display:'none'}}></h4>
    <p id="editBetMsg" class="warning" style={{display:'none'}}></p>
</div>



<ul id="processingImg" class="loading" style={{display:'none'}}>
    <li><img src="/images/loading40.gif"/></li>
    <li>Processing...</li>
</ul>


<div id="matchSection" style={{height: 'calc(100% - 25px)'}}>

    
    <div id="openBetSelectionBox" class="slip-sort">

        <select id="selectMenu" name="">
        <option id="option0" value="" eventid="0" marketid="0" style={{display:'block'}} eventtype="0" date="-1"> -- Select -- </option></select>

        
        <option id="optionTemplate" value="" eventid="" marketid="" style={{display:'none'}}></option>
        

    </div>
    
    
    <div id="openBetSlip" class="bet_slip over-wrap" style={{height: 'calc(100% - 35px)', display:'none'}}>
    
        
        <ul id="unMatchTicketHead" class="slip-head" style={{display:'none'}}>
            <li class="col-bet"><strong id="headerInfo">Unmatched</strong></li>
            
        </ul>

        
        
        <div id="unMatchTicketList" class="slip-list" style={{display:'none'}}>
        
            <ul id="backSlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Back (Bet For)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Profit</li>
            </ul>
        
            <ul id="laySlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Lay (Bet Against)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Liability</li>
            </ul>

            

            
            <dl id="unMatchTicketTemplate" class="slip-lay" style={{display:'none'}}>
                <dd id="betInfo" class="refer" style={{display:'none'}}>
                    <span id="betId">Ref: --</span> 
                    <span id="placeDate">xx-xx-2016 --:--</span>
                </dd>
                <dt id="marketNameDt">
                    <a id="delete" class="delete" style={{cursor:'pointer'}}>delete</a> 
                    <span id="slipType" class="slip-type">--</span> 
                    <span id="marketName">--</span>
                </dt>
                <dd id="price" class="col-odd">--</dd>
                <dd id="size" class="col-stake">--</dd>
                <dd id="profitLiability" class="col-profit">--</dd>
                
                
                <dd id="inningsRuns" class="inn_runs" style={{display:'none'}}>
                    <dl>
                        <dt id="ifRuns"></dt>
                        <dd><span id="runsPL" class="green">$0.00</span></dd>
                        <dt id="ifLess"></dt>
                        <dd><span id="lessPL" class="green">$0.00</span></dd>
                    </dl>
                </dd>
                
                
                <dd id="keepOption" class="keep-option" style={{display:'none'}}>
                    At In-Play, this unmatched bet will be 
                    <span id="editKeepOption" class="edit">
                </span></dd>
            </dl>
            
            
        </div>
        
        
        <div id="unMatchFullBtn" class="full_btn" style={{display:'none'}}>
            <dl class="sum">
                
            </dl>

            <ul class="btn-wrap">
                <li><a id="cancelAllUnMatch" class="btn" style={{cursor:'pointer'}} tabindex="0">Cancel All</a></li>
                <li><a id="editAllBets" class="btn-send" style={{cursor:'pointer'}} tabindex="0">Edit Bets</a></li>
            </ul>
        </div>
        
        
        
        
        <ul id="stakePopupList" class="stake-popup" stakepopuplisttype="template" style={{display:'none'}}>
            <li><a id="selectStake_1" stake="4" style={{cursor:'pointer'}}>4</a></li>
            <li><a id="selectStake_2" stake="30" style={{cursor:'pointer'}}>30</a></li>
            <li><a id="selectStake_3" stake="50" style={{cursor:'pointer'}}>50</a></li>
            <li><a id="selectStake_4" stake="200" style={{cursor:'pointer'}}>200</a></li>
            <li><a id="selectStake_5" stake="500" style={{cursor:'pointer'}}>500</a></li>
            <li><a id="selectStake_6" stake="1000" style={{cursor:'pointer'}}>1000</a></li>
        </ul>
        
        
        <div id="oddsTipsPopup" class="tips-popup" style={{display:'none'}}>min 1.01</div>
        
        
        <div id="stakeTipsPopup" class="tips-popup" style={{display:'none'}}>Min 4.00</div>
        
        <div id="editUnMatchedList" class="slip-list" style={{display:'none'}}>
        
            
            
            <dd id="stakePopupList" class="col-stake_list" stakepopuplisttype="template" style={{display:'none'}}>
                <ul>
                    <li><a class="btn" id="selectStake_1" stake="4" style={{cursor:'pointer'}}>4</a></li>
                    <li><a class="btn" id="selectStake_2" stake="30" style={{cursor:'pointer'}}>30</a></li>
                    <li><a class="btn" id="selectStake_3" stake="50" style={{cursor:'pointer'}}>50</a></li>
                    <li><a class="btn" id="selectStake_4" stake="200" style={{cursor:'pointer'}}>200</a></li>
                    <li><a class="btn" id="selectStake_5" stake="500" style={{cursor:'pointer'}}>500</a></li>
                    <li><a class="btn" id="selectStake_6" stake="1000" style={{cursor:'pointer'}}>1000</a></li>
                </ul>
            </dd>
            
        
            <ul id="backSlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Back (Bet For)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Profit</li>
            </ul>
        
            <ul id="laySlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Lay (Bet Against)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Liability</li>
            </ul>

            
            <dl id="editUnMatchedTemplate" class="slip-lay" style={{display:'none'}}>
                <dd id="betInfo" class="refer" style={{display:'none'}}>
                    <span id="betId">Ref: --</span> 
                    <span id="placeDate">xx-xx-2016 --:--</span>
                </dd>
                <dt id="marketNameDt">
                    <a id="delete" class="delete" style={{cursor:'pointer'}}>delete</a> 
                    <span id="slipType" class="slip-type">--</span> 
                    <span id="marketName">--</span>
                </dt>
                <dd id="price" class="col-odd">
                    <input id="odds" type="text" maxlength="6"/>
                    <ul class="odd-add">
                        <li><a id="oddsUp" class="up" style={{cursor:'pointer'}}>up</a></li>
                        <li><a id="oddsDown" class="down" style={{cursor:'pointer'}}>down</a></li>
                    </ul>
                    <ul id="oddsTipsPoint"></ul>
                    
                </dd>
                <dd id="size" class="col-stake">
                    <input id="inputStake" type="text" value="" maxlength="10"/>
                    <ul id="listPoint"></ul>
                    
                </dd>
                <dd id="profitLiability" class="col-profit">--</dd>
                
                
                <dd id="inningsRuns" class="inn_runs" style={{display:'none'}}>
                    <dl>
                        <dt id="ifRuns"></dt>
                        <dd><span id="runsPL" class="green">$0.00</span></dd>
                        <dt id="ifLess"></dt>
                        <dd><span id="lessPL" class="green">$0.00</span></dd>
                    </dl>
                </dd>
                
                
                <dd id="keepOptionBox" class="keep-option" style={{display:'none'}}>
                    At In-Play 
                    <input name="keepOption" id="cancel" type="checkbox"/><label for="cancel">cancel</label> 
                    <input name="keepOption" id="keep" type="checkbox"/><label for="keep">keep</label>
                    <p class="dynamic-min-bet">Min Bet: <strong id="dynamicMinBet"></strong></p>
                </dd>
            </dl>
            
            
        </div>
        
        
        <div id="editUnMatchFullBtn" class="full_btn" style={{display:'none'}}>
            <dl class="sum">
                
            </dl>

            <ul class="btn-wrap">
                <li>
                    <a id="cancelAllUnMatch" class="btn" style={{cursor:'pointer'}} tabindex="0">Cancel All Bets</a>
                </li>
                <li class="edit-function">
                    <a id="okBtn" class="btn-send" style={{cursor:'pointer'}} tabindex="0">OK</a>
                    <a id="resetBtn" class="btn" style={{cursor:'pointer'}} tabindex="0">Reset</a>
                </li>
            </ul>
        </div>
        
        
        <ul id="txnHead" class="slip-head" style={{display:'none'}}>
            <li class="col-bet"><strong>Matched</strong></li>
            
        </ul>

        
        
        <div id="txnList" class="slip-list" name="txn" style={{display:'none'}}>
        
            <ul id="backSlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Back (Bet For)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Profit</li>
            </ul>

            <ul id="laySlipHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">Lay (Bet Against)</li>
                <li class="col-odd">Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Liability</li>
            </ul>
            
            <ul id="fancyYesHeader" class="matched-head" style={{display:'none'}}>
                <li id="colBet" class="col-bet">Yes</li>
                <li id="runsOdds" class="col-odd">Runs/Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Profit</li>
            </ul>

            <ul id="fancyNoHeader" class="matched-head" style={{display:'none'}}>
                <li class="col-bet">No</li>
                <li id="runsOdds" class="col-odd">Runs/Odds</li>
                <li class="col-stake">Stake</li>
                <li class="col-profit">Liability</li>
            </ul>

            

            
            <dl id="txnTemplate" class="slip-back" style={{display:'none'}}>
                <dd id="betInfo" class="refer" style={{display:'none'}}>
                    <span id="betId">Ref: --</span> 
                    <span id="placeDate">xx-xx-2016 --:--</span>
                </dd>
                <dt>
                    <span id="slipType" class="slip-type">--</span> 
                    <span id="marketName">--</span>
                </dt>
                <dd id="price" class="col-odd">--</dd>
                <dd id="size" class="col-stake">--</dd>
                <dd id="profitLiability" class="col-profit">--</dd>
            </dl>
            

        </div>
        
        
        <div class="full_btn">
            <ul class="slip-option">
                <li><input id="showBetInfo" type="checkbox" name="openOption"/><label for="showBetInfo">Bet Info</label></li>
                <li name="txnOption"><input id="consolidate" type="checkbox" name="openOption"/><label for="consolidate">Consolidate</label></li>
                <li name="txnOption"><input id="averageOdds" type="checkbox" name="openOption"/><label for="averageOdds">Average Odds</label></li>
            </ul>
        </div>

    </div>
</div>
</div>


</div>

</div>
        </React.Fragment>
    )
}
