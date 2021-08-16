import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GameDay from './GameDay';

function GameDays() {
    const [games] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [gameQuantity, setGameQuantity] = React.useState(1);

    const gameItems = games.map((game) =>
        <option key={game} value={game}>{game}</option>
    );

    const gameLineups = () => {
        return Array.from({ length: gameQuantity }, (item, index) =>
            <GameDay key={index} />
        )
    };

    return (
        <div class="container shadow-sm bg-black rounded">
            < div className="row" >
                <div className="col-sm" >
                    <div className="form-group">
                        <h4>Number Of Games To Display</h4>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={event => setGameQuantity(event.target.value)}>
                            {gameItems}
                        </select>
                    </div>
                </div>
            </div >
            {gameLineups()}
        </div >
    );
}

export default GameDays;
