import React, { Component } from 'react';

export default class JbrowseWraper extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { source = 'brassica-napus' } = this.props;

        const width = 0.975 * window.innerWidth, height = 0.90 * window.innerHeight;

        return (
            <div className="page-wrapper">
                <div className='frame-container'>
                    <iframe style={{ width, height }} id='jbrowse-custom-wrapper' src={"https://genomevis.usask.ca/jbrowse-library?data=data/" + source}>
                    </iframe>
                </div>
            </div>
        );
    }
}
