import React, { Component } from 'react';
import './Artworks.css';
import ArtworkCard from "../components/ArtworkCard";
import { connect } from 'react-redux';
import { getArtworks } from '../actions/artworks';

class Artworks extends Component {
    componentDidMount() {
        this.props.getArtworks();
    }

    render() {
        return (
            <div>

                <div className='ArtworksContainer'>
                    <h3>Artworks</h3>
                    {this.props.artworks.map((artwork) => (
                        <ArtworkCard artwork={artwork} />
                        )
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworks: state.artworks.artworks
})

const mapDispatchToProps = ({
    getArtworks
})

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);