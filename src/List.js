import React from 'react';


const List = ({ users }) => {

    return (
        <>
            {
                users.map((user) => {
                    const { id, name, age, image } = user;
                    return (
                        <div key={id} className='person'>
                            <img src={image} alt={name}/>
                            <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                            </div>
                            <button className='rm-btn'>
                                remove
                            </button>
                        </div>
                    );
                })
            }
        </>
    );
};

export default List;