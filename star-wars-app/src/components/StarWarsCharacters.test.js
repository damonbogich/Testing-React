import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api';


jest.mock('../api');


const fakeData = {
    previous: null,
    next: "string",
    results:[{name: 'Bob', url: 'www.bob.com'},
     {name: '2', url: '2'}, 
     {name: '3', url: '3'}]
};

// test('page renders', async () => {
//     // mockGetData.mockResolvedValue
//     render(<StarWarsCharacters />)
    
// });

// test('buttons exist', async () => {
//     const { getByText, getByTestId } = render(<StarWarsCharacters />)
//     const nextButton = getByTestId("nextButton");
//     getByText(/previous/i);

//     // click event: 
//     fireEvent.click(nextButton);
// });

test('api works!', async () => {
    mockGetData.mockResolvedValue(fakeData)
    const {getByText} = render(<StarWarsCharacters />)

    await wait(() => {getByText(/bob/i)},{timeout: 1000});
    getByText(/bob/i);
    
    // expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');


});





