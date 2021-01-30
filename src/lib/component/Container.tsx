import React, {CSSProperties, FC} from "react";
import {BasePropsInterface, getCSSPropertiesFromProps, mergeCSSProperties} from "../BaseTool";
import style from "../style/container.module.css"


export const Container: FC<BasePropsInterface> = (props) => {

    let className = style.container + " " + (props.className ? props.className : '')
    return (
        <div className={className} style={props.style}>
            {props.children}
        </div>
    )
}


interface FlexContainerProps extends BasePropsInterface {
    direction?: "column" | "column-reverse" | "row" | "row-reverse"
    wrap?: "nowrap" | "wrap-reverse"
    alignment?: "left" | "right"
}


const propsToCSSForFlexContainer = {
    direction: "flexDirection",
    wrap: "flexWrap",
    alignment: "justifyContent"
}

export const FlexContainer: FC<FlexContainerProps> = (props) => {

    let _style = getCSSPropertiesFromProps(propsToCSSForFlexContainer, props)

    if (props.style !== undefined)
        _style = mergeCSSProperties(props.style, _style)

    let className = style.flexContainer + " " + (props.className ? props.className : '')
    return (
        <div className={className} style={_style}>
            {props.children}
        </div>
    )
}


interface GridContainerProps extends BasePropsInterface {

    //对应 css  grid-template-rows
    row?: {
        number: number,
        size?: Record<number, number>
    }
    //对应 css grid-template-columns
    column?: {
        number: number,
        size?: Record<number, number>
    }
}


export const GridContainer: FC<GridContainerProps> = (props) => {

    let _style: CSSProperties = {}

    //获取对应格式的 grid-template-rows,grid-template-columns的匿名函数
    let f = (obj: { number: number, size?: Record<number, number> }) => {

        if (obj === undefined|| obj.number <= 0)
            return null;

        let arr: string[] = []
        for (let i = 0; i < obj.number; i++)
            arr.push(' 1fr')

        for (const it in obj.size)
            arr[Number(it) - 1] = ` ${obj.size[it]}fr`;

        return arr.join('').trim();
    }


    _style.gridTemplateRows = f(props.row);
    _style.gridTemplateColumns = f(props.column);

    if (props.style !== undefined)
        _style = mergeCSSProperties(props.style,_style);

    let className = style.gridContainer + " " + (props.className ? props.className : '')
    return (
        <div className={className} style={_style}>
            {props.children}
        </div>
    )
}


export const FlexItem: FC<BasePropsInterface> = (props) => {
    let className = style.flexItem + " " + (props.className ? props.className : '')
    let _style = (props.style?props.style:{})
    return (
        <div className={className} style={_style}>
            {props.children}
        </div>
    )
}