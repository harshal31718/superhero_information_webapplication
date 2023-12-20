import React from 'react';
import './Card.css';

const Card = ({id,name,username,email}) => {
    return (
        // <>
            <div className='tc bg-light-red dib br3 pa3 ma3 grow bw2 shadow-5 div-card'>
                <img src={`https://robohash.org/${id}?50x200`} alt=''/>
                <div>
                    <h2>{name}</h2>
                    <h3>{username}</h3>
                    <p>{email}</p>
                </div>
            </div>
            // {
            //   "response": "success",
            //   "id": "70",
            //   "name": "Batman",
            //   "full-name": "Bruce Wayne",
            //   "alter-egos": "No alter egos found.",
            //   "aliases": [
            //     "Insider",
            //     "Matches Malone"
            //   ],
            //   "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
            //   "first-appearance": "Detective Comics #27",
            //   "publisher": "DC Comics",
            //   "alignment": "good"
            // }
        // </> 
    );
}

export default Card;