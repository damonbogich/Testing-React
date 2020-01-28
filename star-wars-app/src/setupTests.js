// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// import React from 'react';
// import { render, fireEvent, wait } from "@testing-library/react";
// import StarWarsCharacters from './StarWarsCharacters';
// import { getData as mockGetData } from '../api';


// jest.mock('../api');


// const fakeData = {
//     previous: null,
//     next: "next",
//     results:[{name: 'Bob', url: 'www.bob.com'},
//      {name: '2', url: '2'}, 
//      {name: '3', url: '3'}]
// };

// const nextFakeData = {
//     previous: "previous",
//     next: "next",
//     results:[{name: 'Jill', url: 'www.jill.com'},
//      {name: '4', url: '4'}, 
//      {name: '5', url: '5'}]
// }

// // test('page renders', async () => {
// //     // mockGetData.mockResolvedValue
// //     render(<StarWarsCharacters />)
    
// // });

// // test('buttons exist', async () => {
// //     const { getByText, getByTestId } = render(<StarWarsCharacters />)
// //     const nextButton = getByTestId("nextButton");
// //     getByText(/previous/i);

// //     // click event: 
// //     fireEvent.click(nextButton);
// // });


// // //FAKE DATA:
// test('api works!', async () => {
//     //mockGetData is 
//     mockGetData.mockResolvedValue(fakeData)
//     const {getByText} = render(<StarWarsCharacters />)

//     await wait(() => {getByText(/bob/i)},{timeout: 1000});
//     getByText(/bob/i);
    
//     // expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');
    

// });
