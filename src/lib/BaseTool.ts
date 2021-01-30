import {CSSProperties} from "react";
import {deepCopy} from "./DeepCopy";


export interface BasePropsInterface {
    style?: CSSProperties
    className?: string
}
/**
 *
 * @param one
 * @param other
 *
 * 将one和other的属性取并集，如果存在相同属性，用other中的属性的值覆盖
 *
 * eg.<pre>
 *     one:{
 *         display:'block',
 *         marginTop:'10px'
 *     }
 *
 *     other:{
 *      display:'flex',
 *      marginBottom:'10px;
 *     }
 *
 *
 *    return {
 *         display:'flex',
 *         marginTop:'10px',
 *         marginBottom:'10px'
 *     }
 *
 *
 *
 * </pre>
 *
 *
 */
export function mergeCSSProperties(one: CSSProperties, other: CSSProperties): CSSProperties {

    let result = deepCopy(one);
    for (const cssProperty in other)
        result[cssProperty] = other[cssProperty]

    return result;
}


/**
 *
 * @param propsToCSSName 属性与CSSName 对应的哈希表
 * @param props 属性
 * 根据propsToCSSName 在props提取出css属性,并返回
 *
 *  *  eg.<pre>
 *      parameters:
 *
 *          propsToCSSName:{
 *              direction:'flexDirection',
 *              wrap:'wrap',
 *          },
 *
 *          props:{
 *              name:'123',
 *              direction:'row',
 *              wrap:'nowrap'
 *          }
 *
 *         returns:
 *          {
 *              flexDirection:'row',
 *              wrap:'nowrap'
 *          }
 *
 *
 *  </pre>
 *
 *
 */
export function getCSSPropertiesFromProps(propsToCSSName: { [key: string]: string }, props): CSSProperties {

    let cssProperties: CSSProperties = {}
    for (const prop in propsToCSSName)
        if (props.hasOwnProperty(prop))
            cssProperties[propsToCSSName[prop]] = props[prop]

    return cssProperties;
}
