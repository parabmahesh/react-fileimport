import React, { Component } from 'react';

class FileImporter extends Component {
    constructor(props){
        super(props);
        this.state = {
            fileContent: null
        }

        this.onImportButtonClick = this.onImportButtonClick.bind(this);
    }

    onImportButtonClick(params) {
        console.log('on button clicked');
    } 

    render() {
        return (
            <div className="fileImporter">
                <input type="text"></input>
                <input id="fileImporter" style={{'display':'none'}} name="fileImporter" type="file" placeholder="Upload file"></input>
                <button onClick={this.onImportButtonClick}>Import File</button>
            </div>
        );
    };
}

export default FileImporter;