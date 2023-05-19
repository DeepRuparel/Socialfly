import React from 'react';
export default function Profile({Leaderboard }) {
    return (
        <div id="profile">
            {item(Leaderboard)}
        </div>
    );
}

function item(data) {
    return (
        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} />
                            <div className="info">
                                <h3 className="name text-dark">{value.name}</h3>
                                <span>{value.location } </span>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.score }</span>
                        </div>

                    </div>
                ))
            }
        </>
        
       
        );

}