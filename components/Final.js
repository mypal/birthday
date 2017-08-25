import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { navSudoku, navIndex } from '../actions/navigation';

class Cover extends Component {
    render() {
        return (
            <section className="final">
                <div className="bg"></div>
                <div className="main">
                    <h1 className="cong">Congratulations!</h1>
                    <h1 className="tit">The final key is:</h1>
                    <div className="answer">
                        <i className="square" />
                        <i className="sudoku" />
                        <i className="letter" />
                    </div>
                </div>
                <div className="attach">
                    <span className="text">
                        {this.props.time}
                    </span>
                </div>
                <div className="btn-con"><button className="btn" onClick={this.props.navSudoku}>Go Back</button></div>
            </section>
        );
    }
}

Cover.propTypes = {
    navSudoku: PropTypes.func.isRequired,
    navIndex: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        time: state.time
    };
}

export default connect(mapStateToProps, { navSudoku, navIndex })(Cover);
