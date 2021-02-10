import {ChangeEventHandler, FC, LegacyRef, ReactNode} from "react";
import {BasePropsInterface} from "../BaseTool";
import style from "../style/input.module.scss"

interface InputProps extends BasePropsInterface{
    value?:string
    prefix?:ReactNode | string
    suffix?:ReactNode | string
    inputRef?:LegacyRef<HTMLInputElement>
    onChange?:ChangeEventHandler<HTMLInputElement>
    type?:"default" | "danger" | "warning" | "success" | "primary"
    size?:"small" | "medium" | "large"
    block?:boolean
    readonly?:boolean
    name?:string
    placeholder?:string
}


export const Input:FC<InputProps> = (props) => {


    let className = style.componentWrapper + " " + style[props.size]
    className += " " + props.className;
    if (props.block)
        className += " " + style.block;

    let typeClassName = "input" + props.type.substr(0,1).toUpperCase() + props.type.substring(1);
    className += " " + style[typeClassName];

    return(
        <div className={className} style={props.style}>
            <div className={style.prefix}>
                <span>{props.prefix}</span>
            </div>
            <div className={style.inputWrapper}>
                <input
                    ref={props.inputRef}
                    onChange={props.onChange}
                    readOnly={props.readonly || (!!props.value)}
                    name={props.name}
                    type={"text"}
                    placeholder={props.placeholder}
                    value={props.value}
                />
            </div>
            <div className={style.suffix}>
                <span>{props.suffix}</span>
            </div>
        </div>
    )
}


Input.defaultProps = {
    prefix:"",
    suffix:"",
    style:{},
    className:"",
    inputRef:input => {},
    onChange:event => {},
    type:'default',
    block:false,
    size:'medium',
    readonly:false,
    name:"",
    placeholder:'',
    value:null
}
