import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';


    const mockItemCounter = vi.fn((props: unknown)=>{
        return <div data-testid="ItemCounter"/>;
    })
    //mocker es importante para pruebas unitarias

    vi.mock('./shopping-cart/ItemCounter',()=>({
        ItemCounter: (props: unknown) => mockItemCounter(props),
    }))


    // vi.mock('./shopping-cart/ItemCounter',()=>({
    //     ItemCounter: (props: unknown)=>(
    //         <div 
    //             data-testid="ItemCounter"
    //             name={props.name}
    //             quantity={props.quantity}
    //         />
    //     ), 
    // }));

describe('FirstStepsApp',()=>{

    afterEach(()=>{
        vi.clearAllMocks();
    })

    test('should maatch snapshot', ()=>{
        const { container } = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', ()=>{
        render(<FirstStepsApp/>); // Renderiza el componente (que es un html) FirstStepsApp en un DOM virtual

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(3);

        screen.debug(); // Imprime en consola el HTML renderizado (útil para debugging)
    });

    test('should render ItemCounter with correct props', ()=>{
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
             name: "Nintendo Swtich 2",
             quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
             name: "Pro Controller",
             quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
             name: "Super Smash",
             quantity: 5,
        });

    })
});