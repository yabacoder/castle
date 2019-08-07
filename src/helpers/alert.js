import React from 'react';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        console.log(props)
    }

    onChange=(e)=>{
        this.setState({display:true});
        setTimeout(()=>{
            this.setState({display:false});
        },1000 * 2)
    };

    render() {
        const {state,props} = this;

        return (
            <div className="modal fade show" id="myModal" style={{display: state.display?"block":"none"}}>
                <div className="modal-dialog w3-display-topright" style={{minWidth:400}}>
                    <button id="show" onClick={this.onChange} className="close"/>
                    <div id="alert" className="alert alert-success"/>
                </div>
            </div>
        );

    }
}

export default Alert;


export const showAlert =(text)=>{
    const alert = document.getElementById("alert");
    const show = document.getElementById("show");
    alert.innerText = text;
    show.click();
};

