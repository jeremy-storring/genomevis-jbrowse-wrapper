/*global $*/
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import sourceList from '../sourceList';
import _ from 'lodash';
import { hashHistory } from 'react-router';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { source = 'brassica-napus' } = this.props;

        const modifiedSourceList = _.map(sourceList, (d, sourceKey) => ({ 'label': d.name, 'value': sourceKey, 'commonName': d.commonName }));
        const activeSource = _.find(modifiedSourceList, (entry) => entry.value == source);

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse ">
                        <ul className='nav navbar-nav'>
                            <li className='navbar-banner'>
                                GenomeVIS Jbrowse - {activeSource.label + ' (' + activeSource.commonName + ")"}
                            </li>
                        </ul>

                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <div className="input-group source-select">
                                    <span className='inner-span'>Source</span>
                                    <ReactSelect
                                        className='select-box'
                                        value={_.find(modifiedSourceList, (entry) => entry.value == source)}
                                        options={modifiedSourceList}
                                        styles={{ option: (styles) => ({ ...styles, color: 'black', textAlign: 'left' }) }}
                                        onChange={(source) => {
                                            hashHistory.push('/' + source.value);
                                        }} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
