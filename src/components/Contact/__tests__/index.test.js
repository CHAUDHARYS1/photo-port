import React from "react";
import {
    render,
    cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);


describe('Contact component is rendering', () => {
    // baseline test
    it('renders', () => {
        render(<Contact></Contact>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact></Contact>);
        //assert value comparison 
        expect(asFragment()).toMatchSnapshot();
    });

});