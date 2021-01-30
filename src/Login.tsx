import React, {CSSProperties} from "react";
import {FlexContainer, FlexItem} from "./lib/component/Container";

interface LoginProps {
    className?:string
    style?:CSSProperties
}

export const Login:React.FC<LoginProps> = (prop) => {
    return (
        <FlexContainer style={{justifyContent:"left"}}>
            <FlexItem>
                <p>你妈</p>
            </FlexItem>

            <FlexItem>
                <label>你爸</label>
            </FlexItem>
        </FlexContainer>
    )
}


