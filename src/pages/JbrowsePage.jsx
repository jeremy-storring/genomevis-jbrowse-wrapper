import React, { Component } from 'react';

export default class JbrowsePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { sourceID = 'bnapus' } = this.props;

        const width = 0.975 * window.innerWidth, height = 0.90 * window.innerHeight;

        return (
            <div className="pageContainer">
                <h1 className='centerText'>University of Saskatchewan - JBrowse Instance</h1>
                <div className='frameContainer'>
                    <iframe style={{ width, height }} id='#jbrowse-custom-wrapper' src={"https://genomevis.usask.ca/jbrowse-library/" + sourceID}>
                    </iframe>
                </div>
            </div>
        );
    }
}
