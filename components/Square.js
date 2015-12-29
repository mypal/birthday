import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

class Square extends Component {
    render() {
        return (
            <section className="square">
                <div className="bg"></div>
                <h1>hello!!!</h1>
            </section>
        );
    }
}

Square.propTypes = {
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, {  })(Square);
