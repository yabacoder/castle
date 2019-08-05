import React from 'react';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display
        };
        console.log(props)
    }

    render() {
        const {state,props} = this;

        return (
            <div className="alert alert-success">
                {props.message}
            </div>
        );

    }
}

export default Alert;
