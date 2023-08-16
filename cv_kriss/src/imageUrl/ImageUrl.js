import React, {Component} from 'react';

class ImageUrl extends Component {
    render() {
        return (
            <div style={{margin: '10px'}}>
                <img src={this.props.imageUrl} alt={this.props.titre}
                     style={{ height:"100px", borderRadius: '10%'}}/>
            </div>
        );
    }
}

export default ImageUrl;