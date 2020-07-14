import React from "react";
import "../App.css";
import "../css/Button.scss";


function BFinfo() {
  return (
    <div>
      <div class="bf-image">
    <div class="gyminfo-text">
    <h1>
      <img src="../img/bf/logo.png" alt=""/>
    </h1>
    <p>Cities across India send in their Elite Teams of 7 Fierce PvP'ers to fight it out<br/>
    and claim the Title of PvP Champion City in India!<br/>
    Season 2 sees 18 Teams battle it out in the Prelims, for a spot in the Top 8 Knockout stage.<br/> 
    Pick a side and place your bets, cause the War for Frontier has just started!</p>

    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join Discord</a></div>

      </div>
    </div>
    <h1 className="heading">⌘ LEADERBOARD </h1>
    <div>
    <p className="side">The Leaderboard for Battle Frontier Season 2 (Group Stages) will be updated here.
       This is just the LB of Top 5 Contenders at the moment. 
       To view the full leaderboard, kindly visit <a href="https://www.pvphq.in/frontier/lb">Frontier Leaderboard</a>. This list is ranked
       according to the Matches Won and the score shows "NumberOfWins/MatchesPlayed"<br/></p>
    <div class="leaderboard">
        <h1>
            <svg className="ico-cup">
            <use href="#cup"></use>
            </svg> Frontier Top 5
        </h1>
  <ol>
  <li>
      <mark>Mumbaidos</mark>
      <small>32/54</small>
    </li>
    <li>
      <mark>Bengaluru Big Barrels</mark>
      <small>29/42</small>
    </li>
    <li>
      <mark>Chennaizards</mark>
      <small>29/42</small>
    </li>
    <li>
      <mark>Psystrikers Pondy</mark>
      <small>22/51</small>
    </li>
    <li>
      <mark>Toge-pilani</mark>
      <small>20/39</small>
    </li>
    </ol>
</div>
<svg>
  <symbol id="cup" x="0px" y="0px"
	 width="25px" height="26px" viewBox="0 0 25 26" enable-background="new 0 0 25 26">
<path fill="#F26856" d="M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69
	C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148
	C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563
	c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303
	c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191
	c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525
	c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257
	c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31
	c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865
	c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148
	C25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99
	c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883
	L18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686
	c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033
	C13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273
	C17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06
	c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z"/>
      </symbol>
</svg>
    </div>
    
    </div>
  );
}

export default BFinfo;
