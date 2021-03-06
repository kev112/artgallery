import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateArtworkFormData, resetArtworkForm } from '../actions/artworkForm'
import { createArtwork } from '../actions/artworks'

class ArtworkForm extends Component {

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const updatedData = Object.assign({}, this.props.artworkFormData, { [name]: value });
        this.props.updateArtworkFormData(updatedData);
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.createArtwork(this.props.artworkFormData);
        this.props.resetArtworkForm();
    }

    render() {
        return (
            <div className='submit-artwork-form'>
                <h3>Submit a new artwork</h3>

                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <p>Title:</p>
                        <textarea 
                            type='text'
                            name='title' 
                            value={this.props.artworkFormData.title}
                            onChange={this.handleOnChange}
                            cols={40}
                            rows={1}  />
                    </div>
                    <div>
                        <p>Description: </p>
                       
                        <textarea 
                            type='textarea'
                            name='description' 
                            value={this.props.artworkFormData.description}
                            onChange={this.handleOnChange}
                            cols={40}
                            rows={10}  />
                    </div>
                    <div>
                        <p>Image URL:  </p>
                        <textarea 
                            type='text'
                            name='url' 
                            value={this.props.artworkFormData.url}
                            onChange={this.handleOnChange}
                            cols={40}
                            rows={2}  />
                    </div>
                    <div>
                        <input type='submit' value='Submit' />
                    </div>
                    <br />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artworkFormData: state.artworkFormData
})

export default connect(mapStateToProps, 
    { 
        updateArtworkFormData, 
        createArtwork, 
        resetArtworkForm 
    })
    (ArtworkForm)
