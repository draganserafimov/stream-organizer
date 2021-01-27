import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <Toolbar></Toolbar>
                <div className={classes.Layout}>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

export default Layout;