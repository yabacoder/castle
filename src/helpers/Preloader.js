import React from 'react';

class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display:"none"
        }
    }

    display=()=>{
        if (this.state.display === "none"){
            this.setState({display:"block"})
        } else{
            this.setState({display:"none"})
        }
    };

    render() {
        return (
            <div>
                <div id="preloader" className="w3-modal w3-white" style={{display:"none"}}>
                    <div className="w3-modal-content w3-display-middle" style={{maxWidth:600}}>
                        <div className="w3-container w3-center">
                            <span style={{color:"#616161"}}><i style={{fontSize:30}} className="la la-spinner la-spin"/> Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const Preload =(type)=>{
        const element = document.getElementById('preloader');
    if (type === false){
        element.style.display= "none";
    } else{
        element.style.display = "block";
    }
};

export default Preloader;
