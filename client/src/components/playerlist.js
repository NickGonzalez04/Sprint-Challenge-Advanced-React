import React from 'react';

function PlayerList({players}){


    return(
    <div className="Player-Card">
        <h1>{players.name}</h1>
        <h3>Country - {players.country}</h3>
        <p>Number Of Searches: [{players.searches}]</p>

</div>
    )

}

export default PlayerList;