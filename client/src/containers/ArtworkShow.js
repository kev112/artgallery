import React, { Component } from 'react';

export default class ArtworkShow extends Component {
    render() { 
        // debugger
        return (
            <div className='ArtworkShow'>
                <h3>ArtworkShow</h3>
                <h3>{this.props.match.params.id}</h3>
                {/* <p>{this.props.artworks[1].description}</p> */}
            </div>
        )
    }
}