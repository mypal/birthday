import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Group from './sudoku/Group';
import { navSquare } from '../actions/navigation';

class Sudoku extends Component {
    render() {
        let sudoku = [0, 1, 2].map(i => {
            let sudokuRow = [0, 1, 2].map(j => {
                let value = {
                    i, j
                };
                return (<Group key={'grp'+i+j} value={value} />)
            });
            return (<div key={'grpln'+i} className="grp-ln">{sudokuRow}</div>);
        });

        var button = '';
        if (!!this.props.sudoku.win) {
            button = (<div className="btn-con"><button className="btn" onClick={this.props.navSquare}>Click to Crack</button></div>);
        }
        return (
            <section className="sudoku">
                <div className="bg"></div>
                <div className="main">
                    {sudoku}
                </div>
                {button}
            </section>
        );
    }
}

Sudoku.propTypes = {
    sudoku: PropTypes.object.isRequired,
    navSquare: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
        sudoku: state.sudoku
    };
}

export default connect(mapStateToProps, { navSquare })(Sudoku);
