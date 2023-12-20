import React from 'react';
import Card from './Card';

const CardList= ({data}) => {
    return (
        <div>
            {
                data.map((user,i) => {
                    return (
                        <Card 
                        key={i}
                        id={data[i].id} 
                        name={data[i].name} 
                        username={data[i].username} 
                        email={data[i].email}
                        />
                    );
                    
                })
            }
        </div>
    );
}

export default CardList;