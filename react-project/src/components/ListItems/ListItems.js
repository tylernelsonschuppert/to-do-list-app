import React from 'react'
import './ListItems.css'

  

function ListItems({ listitems }) {
    function deleteUser() {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch('/tasks/' + arguments[0], requestOptions).then((response) => {
            
            return response.json();
        }).then((result) => {
            // do what you want with the response here
        });
    }

    function testInput() {
        console.log(arguments[0]);
    }

    return (
        <div className="list-item-container">
        {listitems.map((item) => (
            <div className="list-item-row-bgoverlay">
                <div className="list-item-row">
                    <div className="list-item-id">{item.id}</div>
                    <div className="list-item-username">{item.username}</div>
                    <div className="list-item-details">{item.details}</div>

                    <div className="list-item-editbutton-container">
                        <button className="list-item-editbutton" onClick={() => {testInput(item.id)}}>Edit</button>
                    </div>
                    <div className="list-item-deletebutton-container">
                        <button className="list-item-deletebutton" onClick={() => {deleteUser(item.id);}}>Delete</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
};


    /*
    const requestOptions = {
        method: 'DELETE'
    };
    
    // Note: I'm using arrow functions inside the `.fetch()` method.
    // This makes it so you don't have to bind component functions like `setState`
    // to the component.
    fetch("192.168.5.21:3000/tasks/" + props, requestOptions).then((response) => {
        return response.json();
    }).then((result) => {
        // do what you want with the response here
    });
    
}*/

export default ListItems