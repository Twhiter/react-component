import {FC} from "react";
import {BasePropsInterface, getCSSPropertiesFromProps, mergeCSSProperties} from "../BaseTool";
import style from "../style/loading.module.scss"
import {Property} from "csstype";


interface LoadingProp extends BasePropsInterface{
    size?:"small"|"medium"|"large",
    loadingColor?:Property.Color,
    loadingBgColor?:Property.Color
}

const propsToCSSForLoading:Record<string, string | string[]> = {
    loadingColor:"borderTopColor",
    loadingBgColor:['borderBottomColor','borderLeftColor','borderRightColor']
}

export const Loading:FC<LoadingProp> = (props) => {

    let className = `${style.spin} ${style[props.size]} ${props.className}`.trim();

    let _style = getCSSPropertiesFromProps(propsToCSSForLoading,props);
    _style = mergeCSSProperties(props.style,_style);

    return (
        <div className={className} style={_style}>
        </div>
    )

};

Loading.defaultProps = {
    size:"medium",
    className:"",
    style:{},
};
