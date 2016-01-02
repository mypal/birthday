import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { navSudoku } from '../actions/navigation';

class Cover extends Component {
    render() {
        return (
            <section className="cover">
                <div className="bg"></div>
                <div className="title-con">
                    <div className="title-wrap">
                        <h1 className="typewriter firstln">Purelf,</h1>
                        <h1 className="typewriter secondln">Happy birthday!</h1>
                        <h1 className="typewriter hideln">Happy birthday!</h1>
                    </div>
                </div>
                <div className="btn-con"><button className="btn" onClick={this.props.navSudoku}>Click to Crack</button></div>
                <div className="attach">
                    <span className="text">
                        Happy new year!
                    </span>
                </div>
            </section>
        );
    }
}

Cover.propTypes = {
    navSudoku: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, { navSudoku })(Cover);
