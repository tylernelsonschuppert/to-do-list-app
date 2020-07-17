import React, { Component } from 'react';
import './ListHeader.css';

class ListHeader extends Component {
    render() {
        return (
            <div className="list-header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default ListHeader;