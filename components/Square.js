import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { sqrInputOnChange } from '../actions/square';
import { navLetter } from '../actions/navigation';
import $ from 'jquery';

class Square extends Component {
    constructor(props) {
        super(props);
        this.onInputHandle = this.onInputHandle.bind(this);
    }

    render() {
        var square = this.props.square;
        var wrong = square.wrong ? ' wrong' : '';
        var winClass = square.win ? ' win' : '';
        var button = '';
        var disabled = !!square.win;
        if (!!square.win) {
            button = (<div className="btn-con"><button className="btn" onClick={this.props.navLetter}>Click to Crack</button></div>);
        }
        return (
            <section className="square">
                <div className="bg"></div>
                <div className="main">
                    <div className="row">
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="2" disabled/>
                        <input type="tel" className="grid" value="1" disabled/>
                    </div>
                    <div className="row">
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="3" disabled/>
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" ref="input0" className={"grid"+wrong} name="0" value={square['0'] || ''} onChange={this.onInputHandle} disabled={disabled} />
                        <input type="tel" className="grid" value="9" disabled/>
                    </div>
                    <div className="row">
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="0" disabled/>
                        <input type="tel" ref="input1" className={"grid"+wrong} name="1" value={square['1'] || ''} onChange={this.onInputHandle} disabled={disabled} />
                        <input type="tel" className="grid" value="0" disabled/>
                        <input type="tel" className="grid" value="0" disabled/>
                    </div>
                    <div className="row">
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" ref="input2" className={"grid"+wrong+winClass} name="2" value={square['2'] || ''} onChange={this.onInputHandle} disabled={disabled} />
                        <input type="tel" className="grid" value="2" disabled/>
                        <input type="tel" className="grid" value="2" disabled/>
                        <input type="tel" className="grid" value="5" disabled/>
                    </div>
                    <div className="row">
                        <input type="tel" className="grid" value="1" disabled/>
                        <input type="tel" className="grid" value="6" disabled/>
                        <input type="tel" className="grid" value="2" disabled/>
                        <input type="tel" className="grid" value="5" disabled/>
                        <input type="tel" className="grid" value="6" disabled/>
                    </div>
                </div>
                {button}
            </section>
        );
    }

    onInputHandle(evt) {
        this.props.sqrInputOnChange(evt.target.name, evt.target.value);
    }

    componentWillReceiveProps(nextState) {
        if (nextState.square.win) {
            $(this.refs.input0).trigger('blur');
            $(this.refs.input1).trigger('blur');
            $(this.refs.input2).trigger('blur');
        }
    }
}

Square.propTypes = {
    square: PropTypes.object.isRequired,
    sqrInputOnChange: PropTypes.func.isRequired,
    navLetter: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        square: state.square
    };
}

export default connect(mapStateToProps, { sqrInputOnChange, navLetter })(Square);
