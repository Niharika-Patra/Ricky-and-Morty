import React, { Component } from "react";

import { getCharacters } from "../../api/api";

import { Filters } from "../Filters";

import { Character } from "../Character/";

import { Pagination } from "../Pagination";

import { Loader } from "../Loader";

import "./Characters.css";

class Characters extends Component {
  state = {
    name: "",
    characters: [],
    page: 1,
    isLoaded: false,
    sortById: ""
  };

  async componentDidMount() {
    const list = await getCharacters();

    this.setState({
      characters: list.results,
      pages: list.info.pages,
      isLoaded: true
    });
  }

  handlePaginationClick = event => {
    const clickedPageNumber = +event.target.textContent;

    this.setState(
      {
        isLoaded: false,
        page: clickedPageNumber
      },
      async () => {
        const list = await this.fetchCharacters();

        this.setState({
          characters: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSelectChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        isLoaded: false,
        page: 1
      },
      async () => {
        const list = await this.fetchCharacters();

        this.setState({
          characters: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  fetchCharacters = () =>
    getCharacters({
      name: this.state.name,
      page: this.state.page
    });

    dateDiff = (dateold, datenew) => {
      var ynew = datenew.getFullYear();
      var mnew = datenew.getMonth();
      var dnew = datenew.getDate();
      var yold = dateold.getFullYear();
      var mold = dateold.getMonth();
      var dold = dateold.getDate();
      var diff = ynew - yold;
      if(mold > mnew) diff--;
      else
      {
        if(mold == mnew)
        {
          if(dold > dnew) diff--;
        }
      }
      return diff;
    }

  getAge = (created) => {
    let today = new Date();
    let olday = new Date(created);
    return this.dateDiff(olday, today);
  }

  render() {
    const {
      characters,
      isLoaded,
      name,
      page,
      pages,
      sortById
    } = this.state;

    return (
      <div>
        <Loader isLoaded={isLoaded}>
          <Filters
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleInputChange}
            handleSelectChange={this.handleSelectChange}
            searchValue={name}
            sortById={sortById}
          />
          <div className="characters characters-background">
            {characters.map(character => (
              <Character
                key={character.id}
                imageSrc={character.image}
                name={character.name}
                species={character.species}
                gender={character.gender}
                status={character.status}
                origin={character.origin.name}
                location={character.location.name}
                id={character.id}
                age={this.getAge(character.created)}
              />
            ))}
          </div>
          <Pagination
            handleClick={this.handlePaginationClick}
            currentPage={page}
            pages={pages}
          />
        </Loader>
      </div>
    );
  }
}

export default Characters;
