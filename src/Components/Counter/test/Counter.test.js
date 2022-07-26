import React from "react";
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from "../Counter";

test("Header render with correct text", () => {
    render(<Counter />);
    const headerEl = screen.getByTestId('header');

    expect(headerEl.textContent).toBe('My Counter');
})

test("counter initially start with text of 0", () => {
    render(<Counter />)
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0");
})

test("input contains initial value of 1", () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button renders with +", () => {
    render(<Counter />)
    const addEl = screen.getByTestId("add-btn");

    expect(addEl.textContent).toBe("+");
})

test("substract button renders with -", () => {
    render(<Counter />)
    const subEl = screen.getByTestId("sub-btn");

    expect(subEl.textContent).toBe("-");
})

test("change value of input works correctly", () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    expect(inputEl.value).toBe("5");
})

test("click on plus btn adds 1 to counter", () => {
    render(<Counter />);
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");
})

test("click on sub btn subtract 1 to from counter", () => {
    render(<Counter />);
    const subBtnEl = screen.getByTestId("sub-btn");
    const counterEl = screen.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("-1");
})

test("changing input value then clicking on add btn works cor rectly", () => {
    render(<Counter />);
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5");
})


test("changing input value then clicking on sub btn works correctly", () => {
    render(<Counter />);
    const subBtnEl = screen.getByTestId("sub-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("-5");
})

test("adding and then subtracting leads to the correct counter number", () => {
    render(<Counter />);
    const subBtnEl = screen.getByTestId("sub-btn");
    const addBtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");


    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });
    // expect(inputEl.textContent).toBe('10')

    expect(inputEl.value).toBe('10')
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("20");

    // fireEvent.change(inputEl, {
    //     target: {
    //         value: "10"
    //     }
    // });

    fireEvent.click(addBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    // expect(counterEl.textContent).toBe("15");

    expect(counterEl.textContent).toBe("10");

})

test("counter contains correct className", () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("counter");
    const subBtnEl = screen.getByTestId("sub-btn");
    const addBtnEl = screen.getByTestId("add-btn");
    const inputEl = screen.getByTestId("input");

    // expect(counterEl).toHaveClass("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    });

    fireEvent.click(addBtnEl)

    expect(counterEl.textContent).toBe("50");

    fireEvent.click(addBtnEl)

    expect(counterEl).toHaveClass('green')
    // expect(counterEl).toHaveStyle({ "color": "green" })

    //expect(counterEl.textContent).toBe("green");

    // fireEvent.click(addBtnEl)

    // expect(counterEl.textContent).toBe("green");

    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)

    // expect(counterEl).toHaveStyle({ 'color': 'red' })

    expect(counterEl).toHaveClass("red");
})