import {FC} from "react";
import {BasePropsInterface} from "../BaseTool";


interface LoadingProp extends BasePropsInterface{
    size?:"small"|"medium"|"large"
}

export const Loading:FC<LoadingProp> = (props) => {


    return (
        <div>

        </div>
    )

}

Loading.defaultProps = {
    size:"small",
    className:"",
    style:{}
};
