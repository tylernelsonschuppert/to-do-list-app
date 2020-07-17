import React, { Component } from 'react';
import './ListContainer.css';

class ListContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="list">
                    {this.props.header}
                    {this.props.listitems}
                </div>
            </div>
        )
    }
}

export default ListContainer;