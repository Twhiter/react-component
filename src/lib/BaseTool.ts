import {CSSProperties} from "react";
import {deepCopy} from "./DeepCopy";


export interface BasePropsInterface {
    style?: CSSProperties
    className?: string
}
/**
 *
 * @param one
 * @param base
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
export function mergeCSSProperties(one: CSSProperties, base: CSSProperties): CSSProperties {

    let result = deepCopy(one);
    for (const cssProperty in base)
        result[cssProperty] = base[cssProperty]

    return result;
}


/**
 *
 * @param propsToCSSNames 属性与CSSName 对应的哈希表
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
export function getCSSPropertiesFromProps(propsToCSSNames: Record<string, string | string[]>, props): CSSProperties {

    let cssProperties: CSSProperties = {}
    for (const prop in propsToCSSNames)
        if (props.hasOwnProperty(prop)) {

            let cssNames = propsToCSSNames[prop];
            let value = props[prop];

            if (typeof cssNames === 'string')
                cssProperties[cssNames] = value;
            else
                cssNames.forEach(cssName => cssProperties[cssName] = value)

        }

    return cssProperties;
}
