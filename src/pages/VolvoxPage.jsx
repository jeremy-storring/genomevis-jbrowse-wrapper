import React, { Component } from 'react';

export default class VolvoxPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pageContainer">
                <h1 className='centerText'>Volvox JBrowse Instance</h1>
                <div className='frameContainer'>
                    <iframe id='volvox'
                        src="https://genomevis.usask.ca/jbrowse/?data=sample_data%2Fjson%2Fvolvox&loc=ctgA%3A1..50001&tracks=DNA%2Cvolvox-paired_bam%2Cvolvox-long_reads%2Cvolvox-sorted_bam_coverage&highlight="
                    >
                    </iframe>
                </div>
            </div>
        );
    }
}
