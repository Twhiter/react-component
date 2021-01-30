import {render} from "@testing-library/react";
import {FlexContainer, GridContainer} from "../lib/component/Container";
import React from "react";


test('flexContainer test',() => {


    const flexContainer = render(
        <FlexContainer alignment={"left"} wrap={"nowrap"} direction={"column"} data-testid={"flex-container"}/>
    )



    expect(flexContainer.getByTestId('')).toHaveStyle({})
})


test('gridContainer test',() => {




    const gridContainer = render(
        <GridContainer
            row={{number:2,size:{1:2,2:1}}}
            column={{number:3,size:{1:2,3:4}}}>
        </GridContainer>
    )

    expect(gridContainer.getByTestId('')).toHaveStyle({})





});