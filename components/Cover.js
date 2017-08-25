import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { navSudoku } from '../actions/navigation';

class Cover extends Component {
    constructor() {
      super();
    }

    render() {
        return (
            <section className="cover">
                <div className="bg" />
                <div className="title-con">
                    <div className="title-wrap">
                        <h1 className="typewriter firstln">Happy</h1>
                        <h1 className="typewriter secondln">Valentine's Day!</h1>
                        <h1 className="typewriter hideln">Valentine's Day!</h1>
                    </div>
                </div>
                <div className="btn-con"><button className="btn" onClick={this.props.navSudoku}>Click to Crack</button></div>
            </section>
        );
    }
}

Cover.propTypes = {
    navSudoku: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        time: state.time
    };
}

export default connect(mapStateToProps, { navSudoku })(Cover);
