import {getCSSPropertiesFromProps, mergeCSSProperties} from "../lib/BaseTool";
import {CSSProperties} from "react";

test('getCSSPropertiesFromProps', () => {


    let propsToCSSName = {
        direction: 'flexDirection',
        wrap: 'wrap',
    }

    let props = {
        name: '123',
        direction: 'row',
        wrap: 'nowrap'
    }
    console.log(getCSSPropertiesFromProps(propsToCSSName, props));

    expect(getCSSPropertiesFromProps(propsToCSSName, props)).toStrictEqual({flexDirection: 'row', wrap: 'nowrap'})
})

test('mergeCSSProperties',() => {

    let one:CSSProperties = {
        display:'block',
        marginTop:'10px'
    }

    let other:CSSProperties = {
        display: 'flex',
        marginBottom:'10px'
    }

    let result:CSSProperties = {
        display:'flex',
        marginTop:'10px',
        marginBottom:'10px'
    }

    console.log(mergeCSSProperties(one,other))
    expect(mergeCSSProperties(one,other)).toStrictEqual(result)


})