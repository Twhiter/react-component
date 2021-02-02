import {getCSSPropertiesFromProps, mergeCSSProperties} from "../lib/BaseTool";
import {CSSProperties} from "react";

test('getCSSPropertiesFromProps', () => {


    let propsToCSSName = {
        direction: 'flexDirection',
        wrap: 'wrap',
        colors:['backgroundColor','color'],
        test:[]
    }

    let props = {
        name: '123',
        direction: 'row',
        wrap: 'nowrap',
        colors: '123'
    }
    console.log(getCSSPropertiesFromProps(propsToCSSName, props));

    expect(getCSSPropertiesFromProps(propsToCSSName, props)).toStrictEqual({
        flexDirection: 'row', wrap: 'nowrap',backgroundColor:'123',color:'123'})
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
