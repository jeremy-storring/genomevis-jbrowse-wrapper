import React, { Component } from 'react';
import NavBar from './Navbar';
import JbrowseWraper from './JbrowseWrapper';

export default class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { source = 'brassica-napus' } = this.props.params;

        return (
            <div id='app-container'>
                <NavBar source={source} />
                <JbrowseWraper source={source} />
                <footer className="footer w-full m-t">
                    <div className="container-fluid">
                        <div className='w-md footer-inner'>
                            <span className="left text-xs-left">
                                <a className="footer-link" href="mailto:venkat.bandi@usask.ca?subject=MCSCANX Synteny Tool&amp;body=Please%20Fill%20">Contact Us</a>
                            </span>
                        </div>
                        <div className='w-md footer-inner text-xs-right'>
                            <a className="footer-link right" href="http://hci.usask.ca/"> <img src="assets/img/interaction_lab.gif" height="30" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}