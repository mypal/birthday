import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { letInputOnChange } from '../actions/letter';
import { navResult } from '../actions/navigation';
import $ from 'jquery';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.onInputHandle = this.onInputHandle.bind(this);
    }

    render() {
        var letter = this.props.letter;
        var wrong = letter.wrong ? ' wrong' : '';
        var winClass = letter.win ? ' win' : '';
        var button = '';
        var disabled = !!letter.win;
        if (!!letter.win) {
            button = (<div className="btn-con"><button className="btn" onClick={this.props.navResult}>Click to Crack</button></div>);
        }
        return (
            <section className="letter">
                <div className="bg"></div>
                <div className="main">
                    <p className="con">
                        15.14.5+6.9.22.5-19.9.24=<input type="tel" ref="input0" className={"grid"+wrong+winClass} name="0" value={letter['0'] || ''} onChange={this.onInputHandle} disabled={disabled} placeholder="?" />
                    </p>
                    <p className="con">
                        19.5.22.5.14-20.8.18.5.5=<input type="tel" ref="input1" className={"grid"+wrong} name="1" value={letter['1'] || ''} onChange={this.onInputHandle} disabled={disabled} placeholder="?" />
                    </p>
                </div>
                {button}
            </section>
        );
    }

    onInputHandle(evt) {
        this.props.letInputOnChange(evt.target.name, evt.target.value);
    }

    componentWillReceiveProps(nextState) {
        if (nextState.letter.win) {
            $(this.refs.input0).trigger('blur');
            $(this.refs.input1).trigger('blur');
        }
    }
}

Letter.propTypes = {
    letter: PropTypes.object.isRequired,
    letInputOnChange: PropTypes.func.isRequired,
    navResult: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        letter: state.letter
    };
}

export default connect(mapStateToProps, { letInputOnChange, navResult })(Letter);
