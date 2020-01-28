import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api';
jest.setTimeout(30000)

const fakeData = {
    previous: null,
    next: "next",
    results:[{name: 'name1', url: 'url1'},
     {name: 'name2', url: 'url2'}, 
     {name: 'name3', url: 'url3'}]
};

const fakeData2 = {
    previous: 'https://swapi.co/api/people',
    next: "next",
    results:[{name: 'name4', url: 'url4'},
     {name: 'name5', url: 'url5'}, 
     {name: 'name6', url: 'url6'}]
};

jest.mock("../api");

mockGetData.mockResolvedValue(fakeData);

test('api works!', async () => {
    //mockGetData is 
    
    const {getByText} = render(<StarWarsCharacters />)

    await wait(() => getByText(/name1/i));
    getByText(/name1/i);

    expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');
    expect(mockGetData).toHaveBeenCalledTimes(1)
    

});


test('page renders, next button exists and works', async () => {
    mockGetData.mockResolvedValue(fakeData);
    const { getByTestId } = render(<StarWarsCharacters />)
    const nextButton = await getByTestId(/nextButton/i);
    // const previousButton = getByTestId(/previousButton/i);

    await wait (() => {
        fireEvent.click(nextButton);
        expect(mockGetData).toHaveBeenCalledTimes(3);
        expect(mockGetData).toHaveBeenCalledWith('next');

    })
    
    

});

test('page renders, previous button exists and works', async () => {
    mockGetData.mockResolvedValue(fakeData2)
    const {getByTestId} = render(<StarWarsCharacters />)
    const previousButton = await getByTestId(/previousButton/i);

    //I'm waiting for firEvent to complete before returning anything to test checking the assertions (expected)
    await wait (() => {
        fireEvent.click(previousButton);
        expect(mockGetData).toHaveBeenCalledTimes(4);
        expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');
    })

})


