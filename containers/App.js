import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../less/style';
import React, { Component, PropTypes } from 'react';
import Cover from '../components/Cover';
import Sudoku from '../components/Sudoku';
import Square from '../components/Square';
import Letter from '../components/Letter';
import Final from '../components/Final';

class App extends Component {
    render() {
        let container;
        switch (this.props.page) {
            case 'sudoku':
                container = <Sudoku />;
                break;
            case 'square':
                container = <Square />;
                break;
            case 'letter':
                container = <Letter />;
                break;
            case 'result':
                container = <Final />;
                break;
            case 'index':
            default:
                container = <Cover />;
        }
        return (
            <div name="app">{container}</div>
        );
    }
}

App.propTypes = {
    page: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        page: state.page
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
