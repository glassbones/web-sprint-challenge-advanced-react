import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form header renders", () => {
    render(<CheckoutForm />)
    //find the thing
    const header = screen.getByText(/checkout form/i)
    //check if the thing was found
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    //find the things
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    //was getting multiple elements here with getByText 
    //we aren't allowed to change the code and add an test ids so just grabbed both
    const checkoutButton = screen.getAllByText(/checkout/i)
    //check if the things were found
    expect(firstName).toBeVisible()
    expect(lastName).toBeVisible()
    expect(address).toBeVisible()
    expect(city).toBeVisible()
    expect(state).toBeVisible()
    expect(zip).toBeVisible()
    //input the things in the things that were there
    fireEvent.change(firstName, { target: { value: 'Batman' } })
    fireEvent.change(lastName, { target: { value: 'Superman' } })
    fireEvent.change(address, { target: { value: '2222 Fake Street' } })
    fireEvent.change(city, { target: { value: 'Gotham' } })
    fireEvent.change(state, { target: { value: 'Chicago' } })
    fireEvent.change(zip, { target: { value: '222222' } })
    //click the button
    fireEvent.click(checkoutButton[1])
    //find the things
    const name = screen.getByText(/batman/i)
    const successMsg = screen.getByTestId('successMessage')
    //check if the things were found
    expect(name).toBeVisible()
    expect(successMsg).toBeVisible()
});

