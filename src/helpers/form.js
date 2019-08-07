import React from 'react';

export const Input =(props)=>{
    return (
        <span>
            <label htmlFor="">{props.label}</label>
            <input type={props.type?props.type:"text"}
                   required={props.required} name={props.name}
                   className={(props.error? "form-control invalid" : "form-control")}
                   onChange={props.onChange} value={props.value} placeholder={props.placeholder}/>
            {
                props.error?
                <div className="invalid-feedback">{props.error}</div>:""
            }

        </span>
    );
};

export const Button =(props)=>{
    return (
        <button className={props.class} disabled={props.loading} onClick={props.onClick}>
            {props.loading?<i className="la la-spinner la-spin"/>:<i className={props.icon}/>} {props.title}
        </button>
    );
};

export const Textarea =(props)=>{
    return (
        <span>
            <label htmlFor="">{props.label}</label>
            <textarea rows={7} name={props.name}
                  required={props.required}
                  className={(props.error? "form-control invalid" : "form-control")}
                  onChange={props.onChange} value={props.value}/>
            {
                props.error?
                    <div className="invalid-feedback">{props.error}</div>:""
            }
        </span>
    );
};

export const Select =(props)=>{
    return (
        <span>
            <label htmlFor="">{props.label}</label>
            <select onChange={props.onChange} name={props.name}
                    className={(props.error? "form-control invalid" : "form-control")}
            >
                <option disabled selected={!props.selected}>Select</option>
                {props.options.map(option=>(
                    <option selected={props.selected-0 === (option.id?option.id-0:option-0)} value={option.id?option.id:option}>{option.name?option.name:option}</option>
                ))}
            </select>
            {
                props.error?
                    <div className="invalid-feedback">{props.error}</div>:""
            }
        </span>

    );
};
