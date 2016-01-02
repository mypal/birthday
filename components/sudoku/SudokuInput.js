import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { sdkInputOnChange } from '../../actions/sudoku';
import $ from 'jquery';

class SudokuInput extends Component {
    constructor(props) {
        super(props);
        this.onInputHandle = this.onInputHandle.bind(this);
    }

    render() {
        var pos = this.props.position;
        var ele = this.props.val || {};
        var val = ele.value || '';
        var readonly = !!ele.readonly;
        var win = this.props.win;
        var className = 'grid'+(ele.same ? ' red' : '')+(readonly ? ' disabled' : '')+(win && pos == 40 ? ' win' : '');
        return (
            <input
                className={className}
                ref="input"
                key={pos}
                onInput={this.onInputHandle}
                value={val}
                type="tel"
                maxLength="1"
                disabled={readonly || win}
            />
        );
    }

    onInputHandle(evt) {
        var pos = this.props.position;
        this.props.sdkInputOnChange(pos, evt.target.value);
    }

    componentWillReceiveProps(nextState) {
        if (nextState.win) {
            var input = $(this.refs.input);
            if (input.is(":focus")) {
                input.trigger('blur');
            }
        }
    }
}

SudokuInput.propTypes = {
    sdkInputOnChange: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired,
    val: PropTypes.object,
    win: PropTypes.bool
};


function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, {sdkInputOnChange})(SudokuInput);
