import {render} from "@testing-library/react";
import {Button} from "../lib/component/Button";
import React from "react";

test('button test',() => {


    const button = render(
        <Button
            disabled
            onClick={event => console.log('123')}
            type={"text"}
            shape={"circle"}
        >

        </Button>
    )

    expect(button.getByTestId('')).toHaveStyle({})



})