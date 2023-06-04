import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter');

describe('pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasHerror: null
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeDefined();
        expect(screen.getByText('Breaking Bad Quotes')).toBeDefined();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasHerror: null
        })

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeDefined();
        expect(screen.getByText('Fernando')).toBeDefined();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();
    })

    test('debe de llamar la función de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasHerror: null
        });


        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })
})