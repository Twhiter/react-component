import 'react'
import {Component, LegacyRef, MouseEventHandler} from "react";
import {BasePropsInterface} from "../BaseTool";


interface ButtonProps extends BasePropsInterface{

    type?:"success"|"primary"|"danger"|"warning"|"text"|"link"|"default"
    size?:"small"|"medium"|"large"
    onClick?:MouseEventHandler<HTMLButtonElement>
    disabled?:boolean
    loading?:boolean
}

export class Button extends Component<ButtonProps>{


    constructor(props:ButtonProps) {
        super(props);
    }

    static defaultProps = {
        type:'default',
        size:'medium',
        onClick:event => {},
        disabled:false,
        loading:false
    }


    render() {
        return (
            <button>

            </button>
        )
    }


}