import React from 'react';
import {store} from '../../index';
import {connect} from "react-redux";
class SessionAlert extends React.Component {

    componentDidMount(){
        this.alert();
    }

    alert=()=>{
        const alert = document.getElementById('alert');
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === alert) {
                store.dispatch({
                    type: "close",
                    payload: "none",
                });
            }
        };
    };

    onClose=()=>{
        this.props.close()
    };

    render() {
        const state = this.props.gState.alertReducer;
        return (
            <div>
                <div id="alert" className="w3-modal" style={{display:state.display}}>
                    <div className="w3-modal-content w3-display-topright w3-transparent" style={{maxWidth:600, marginTop:120}}>
                        <div className="w3-container">
                            <div className={"alert "+(state.alert === "danger"?"alert-danger":"alert-success")}>
                                <a className="close"  onClick={this.onClose} >&times;</a>
                                {state.message}
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export const Alerts=(type,message)=>{
    store.dispatch({
        type: 'flash',
        message: message,
        alert: type,
        display: 'block',
    });
};

const mapStateToProps = state => {
    return {
        gState: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        close: () => {
            dispatch({
                type: "close",
                payload: "none",
            });
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SessionAlert);

