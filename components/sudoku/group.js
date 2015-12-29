import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import SudokuInput from './SudokuInput';

class Group extends Component {
    render() {
        let g = this.props.value;
        let sudoku = this.props.sudoku;
        let win = !!sudoku.win;
        let group = [0, 1, 2].map(i => {
            let row = [0, 1, 2].map(j => {
                let pos = (g.i*3+i)*9+g.j*3+j;
                let val = sudoku[pos] || {};
                return (<SudokuInput key={'ipt'+i+j} position={pos} val={val} win={win} />)
            });
            return (<div key={'row'+i} className="row" key={i}>
                {row}
            </div>)
        });
        return (
            <div className="group">
                {group}
            </div>
        );
    }
}

Group.propTypes = {
    sudoku: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        sudoku: state.sudoku
    };
}

export default connect(mapStateToProps, {})(Group);
