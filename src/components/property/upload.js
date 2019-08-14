import React from 'react';
import {API, LiveAPI, LiveToken, Token} from "../../config";
import request from "superagent";
import Layout from "../layout";
import {Get} from "../../helpers/services";

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formClass: "",
            data: []
        };
        this.id = this.props.match.params.id
    }

    componentDidMount(){
        window.scroll(0,0);
        this.fetch();
        this.listen();
    }

    fetch=()=>{
        Get(`/admin/properties/${this.id}/pictures`).then((result)=>{
            if(result.status === 1){
                this.setState({data:result.data});
            }
        })
    };

    listen=()=>{
        const form = document.getElementById("form");
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            form.addEventListener(eventName,this.action,false);
        });
    };


    action=(e)=>{
        e.preventDefault();
        e.stopPropagation();

        switch (e.type) {
            case "dragover" || "dragenter":
                this.setState({formClass:"is-dragover"});
                break;
            case 'dragleave':
                this.setState({formClass:""});
                break;
            case "drop":
                this.setState({formClass:""});
                this.formHandler(e.dataTransfer.files);
                break;
            default:
                console.log("Nothing");
        }

    };


    /*formHandler=(files)=>{
        this.setState({formClass:"is-uploading"});
        // set request
        let req = request.post(`${API}/admin/properties/${this.id}/upload`);
        req.set('Authorization', `Bearer ${Token}`);
        Object.keys(files).forEach(key => {
            req.attach("images[]", files[key]);
        });
        //get response
        req.end((err,res)=>{
            if (err){
                this.setState({formClass:"is-error"});
            } else if (res.body && res.body.status === 1) {
                this.setState({formClass:"is-success"});
                this.fetch();
            }
        });
    };*/

    formHandler=(files)=>{
        this.setState({formClass:"is-uploading"});
        // set request

        let formData = new FormData();

        Object.keys(files).forEach( key=> {
            formData.append('images[]', files[key]);
        });

        fetch(`${API}/admin/properties/${this.id}/upload`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            body: formData
        }).then((response) => response.json())
            .then((res) => {
                if (res.status === 1) {
                    this.setState({formClass:"is-success"});
                    this.fetch();
                }else {
                    this.setState({formClass:"is-error"});

                }
            })
            .catch((error) => {
                this.setState({formClass:"is-error"});
                console.log(error);
            });
    };

    render() {
        const {state} = this;
        return (
            <Layout title="Property Images">
                <div className="container mt-3">
                    <form id="form" className={`box has-advanced-upload ${state.formClass}`}>
                        <div className="box__input">
                            <svg className="box__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">
                                <path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path>
                            </svg>
                            <input type="file" id="file" onChange={(e)=>{this.formHandler(e.target.files)}} className="box__file" multiple/>
                            <label htmlFor="file"><strong>Choose an image</strong><span className="box__dragndrop"> or drag it here</span>.</label>
                        </div>
                        <div className="box__uploading">Uploading&hellip;</div>
                        <div className="box__success links">
                            Success! &nbsp;
                            <a  className="box__restart" onClick={()=>this.setState({formClass:""})}>Upload more?</a>
                        </div>
                        <div className="box__error links">
                            Error! <span></span>.
                            <a  className="box__restart" onClick={()=>this.setState({formClass:""})}>Try again?</a>
                        </div>
                    </form>

                    <div className="pdt" style={{height: 100, overflow: "scroll"}}>
                        {state.data.map((data)=>(
                            <span className="pdr">
                                <img src={data.image} style={{width:"10%"}} height={100} />
                            </span>
                        ))}
                    </div>
                </div>

                {/*<input type="file" multiple={true} onChange={this.formHandler}/>*/}
            </Layout>
        );
    }
}

export default Upload;
