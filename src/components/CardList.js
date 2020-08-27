import React from 'react';
import Card from './Card';

const CardList = ({friends}) => {
    return (
        <div>
            {
                friends.map((user, i)=> {
                return <Card 
                    key = {friends[i].id}
                    id={friends[i].id} 
                    name={friends[i].name} 
                    email={friends[i].email}/>
            })
        }
        </div>
    );
};

export default CardList;