import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import { getData } from "../api";
import "./star-wars-characters.css";

export default function StarWarsCharacters() {
  const [url, setUrl] = useState("https://swapi.co/api/people");
  //this is the api address
  const [previous, setPrevious] = useState();
  //state of previous url
  const [next, setNext] = useState();
  //state of next url
  const [isLoading, setIsLoading] = useState(false);
  //state of whether the data is loading
  const [characters, setCharacters] = useState([]);
  //state of the list of characters
  useEffect(() => {
    setIsLoading(true);
    //setting loading state to true
    const getCharacters = async () => {
      const characters = await getData(url);
      //setting state of characters to the array returned by url (res.data)
      console.log(characters);
      setNext(characters.next);
      //setting state of next to the next url
      setPrevious(characters.previous);
      //setting state of previous to the previous url
      setCharacters(characters.results);
      //setting characters to the results of variable characters 
      setIsLoading(false);
      //is loading will then be false because they're loaded
    };
    getCharacters();
  }, [url]);
//ask izzy about this last part

  const goToNext = e => {
    console.log(e);
    e.preventDefault();
    setUrl(next);
    //this sets url to the value in setNext then runs getCharacters
    //runs when next button is pressed
  };

  const goToPrevious = e => {
    e.preventDefault();
    setUrl(previous);
    //sets url to the value of setprevious then runs getCharacters
    //runs when previous button is pressed
  };

  return (
    <div>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#FFC402"
          height={30}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <>
          {characters.map(character => (
            <div key={character.url}>{character.name}</div>
          ))}
        </>
      )}
      <div className="buttons">
        <button data-testid="previousButton" onClick={goToPrevious} disabled={!previous}>
          Previous
        </button>
        <button data-testid="nextButton" onClick={goToNext} disabled={!next}>
          Next
        </button>
      </div>
    </div>
  );
}
