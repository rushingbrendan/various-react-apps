import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function GameDay() {
    const [players] = React.useState([
        "Longquebbies",
        "TwoToke21",
        "Mgiroux",
        "FreshNewSlacks",
        "xAVERAGEatBESTx",
        "Jiajji",
        "HiImNewToNHL",
        "Gingermagic91",
        "Nat3dawg_07",
        "Loosemoose14",
        "thebadguy855",
        "GhostKiller",
        "LostInLeSauce"
    ]);

    const [teams] = React.useState(["ANA",
        "ARI",
        "BOS",
        "BUF",
        "CAR",
        "CGY",
        "CHI",
        "CBJ",
        "COL",
        "DAL",
        "DET",
        "EDM",
        "LAK",
        "MIN",
        "MTL",
        "NSH",
        "NJD",
        "NYI",
        "NYR",
        "OTT",
        "PHI",
        "PHX",
        "PIT",
        "SJS",
        "STL",
        "TBL",
        "TOR",
        "VAN",
        "VGK",
        "WPG",
        "WSH"]);

    const [opponent, setOpponent] = React.useState(teams[0]);
    const [center, setCenter] = React.useState(players[0]);
    const [winger, setWinger] = React.useState(players[0]);
    const [defence, setDefence] = React.useState(players[0]);
    const [goalie, setGoalie] = React.useState(players[0]);
    const [gameTime, setGameTime] = React.useState(Date);
    const [weAreHome, setWeAreHome] = React.useState(1);

    const playerItems = players.map((player) =>
        <option key={player} value={player}
        > {player}</option >
    );

    const teamItems = teams.map((team) =>
        <option key={team} value={team}>{team}</option>
    );

    const copyLineup = () => {
        return (`GameTime: ${gameTime}
Versus: ${opponent}
Code: ${gameCode()}    
\r\
Center: ${center}\r\
Winger: ${winger}\r\
Defence: ${defence}\r\
Goalie: ${goalie}\r\
    `
        );
    }

    const gameCode = () => {
        let returnValue = "";
        if (weAreHome === 1) {
            returnValue = `3SFLA`;
        }
        else {
            returnValue = `3S${opponent}`;
        }
        return returnValue;
    }

    var dates = [];
    var currentDate = new Date();

    for (var x = 0; x < 15; x++) {
        currentDate.setHours(21);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        dates.push(currentDate.toString());
        currentDate.setHours(22);
        dates.push(currentDate.toString());
        currentDate.setDate(currentDate.getDate() + 1);
    }
    const dateItems = dates.map((date) =>
        <option key={date} value={date}>{date}</option>
    );

    return (
        <div class="">
            <br />
            <hr />
            < div className="row" >
                < div className="col-sm" >
                    <div className="form-group">
                        <h4>Center</h4>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={event => setCenter(event.target.value)}>
                            {playerItems}
                        </select>
                        <br />
                        <h4>Wing</h4>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={event => setWinger(event.target.value)}>
                            {playerItems}
                        </select>
                        <br />
                        <h4>Defence</h4>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={event => setDefence(event.target.value)}>
                            {playerItems}
                        </select>
                        <br />
                        <h4>Goalie</h4>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={event => setGoalie(event.target.value)}>
                            {playerItems}
                        </select>
                        <br />
                    </div>
                </div >
                <div className="col-sm">
                    <h4>Game Date</h4>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={e => setGameTime(e.target.value)}>
                        {dateItems}
                    </select>
                    <br />
                    <h4>Opposing Team </h4>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={e => setOpponent(e.target.value)}>
                        {teamItems}
                    </select>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={e => setWeAreHome(e.target.value)}>
                        <option value={1}>We are home team</option>
                        <option value={0}>We are away team</option>
                    </select>
                    <br />
                    <CopyToClipboard text={copyLineup()}>
                        <button type="button" class="btn btn-outline-primary" onClick={copyLineup}>Copy Lineup To Clipboard</button>
                    </CopyToClipboard>
                    <br />
                    <div className="container border border-primary">
                        <p>GameTime: {gameTime}</p>
                        <p>Game Code: {gameCode()}</p>
                        <p></p>
                        <p>Center: {center}</p>
                        <p>Winger: {winger}</p>
                        <p>Defence: {defence}</p>
                        <p>Goalie: {goalie}</p>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default GameDay;
