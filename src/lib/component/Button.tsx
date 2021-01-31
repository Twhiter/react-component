import React from "react";
import {Component, MouseEventHandler} from "react";
import {BasePropsInterface} from "../BaseTool";
import style from '../style/button.module.styl'


interface ButtonProps extends BasePropsInterface{

    type?:"success"|"primary"|"danger"|"warning"|"text"|"link"|"default"
    size?:"small"|"medium"|"large"
    onClick?:MouseEventHandler<HTMLButtonElement>
    disabled?:boolean
    loading?:boolean
    shape?:"circle"|"round"
    btnType?:'submit' | 'reset' | 'button';
}

export class Button extends Component<ButtonProps>{


    // eslint-disable-next-line
    constructor(props:ButtonProps) {
        super(props);
    }

    static defaultProps = {
        type:'default',
        size:'medium',
        onClick:event => {},
        disabled:false,
        loading:false,
        style:{},
        className:'',
        btnType:'button',
        shape:'round'

    }

    render() {

        const type = "btn" + this.props.type.substring(0,1).toUpperCase() + this.props.type.substring(1);
        //获取type对应的css class
        let className = style[type];

        //拼接size对应的css class
        className +=" " + style[this.props.size];

        //拼接shape对应的css class
        if (this.props.shape !== 'round')
            className += " " + style[this.props.shape];

        //最后拼接className
        className += " " + this.props.className;

        className = className.trim();

        return (
            <button
                onClick={this.props.onClick}
                style={this.props.style}
                disabled={this.props.disabled}
                type={this.props.btnType}
                className={className}
            >
                {this.props.children}
            </button>
        )
    }


}