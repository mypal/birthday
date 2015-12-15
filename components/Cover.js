import React, { Component, PropTypes } from 'react';

class Cover extends Component {
    render() {
        //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
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
                <div className="btn-con"><button className="btn">click me</button></div>
            </section>
        );
    }
}

export default Cover;
