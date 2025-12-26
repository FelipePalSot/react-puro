//el debug imprimi en consola el html
//el snapshot no permite obtener de alguna forma el html

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', ()=>{
    test('should render firstName and lastName',() =>{
        const { container } = render(<MyAwesomeApp/>);

        // screen.debug(); // aca sale bien definido en la consola

        // console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        console.log(h1?.innerHTML);
        expect(h1?.innerHTML).toContain('Felipe'); // toContain en lugar de toBe


        const h3 = container.querySelector('h3');
        console.log(h3?.innerHTML);
        expect(h3?.innerHTML).toContain('Palomino');
    });


    test('should render firstName and lastName',() =>{
        render(<MyAwesomeApp/>);
        screen.debug();

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Felipe');

    });


    test('should match snapshot', ()=>{
        const { container } = render(<MyAwesomeApp/>);

        expect(container).toMatchSnapshot();
    })
});