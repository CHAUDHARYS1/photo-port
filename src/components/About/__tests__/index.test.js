import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    // TODO: first test
    it('renders', () =>{
        render(<About></About>);
    })

    // TODO: second test
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<About></About>);
        expect(asFragment()).toMatchSnapshot();
    });
})
