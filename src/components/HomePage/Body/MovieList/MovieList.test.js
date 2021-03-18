import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import MovieList, { array as movies } from "./MovieList.js"
import renderer from 'react-test-renderer'
import HomePage from '../../HomePage.js';

it ("calls onClick when clicking on the movie", () => {
    const onClick = jest.fn();

    render(<MovieList onClick={onClick}/>);

    for (const movie of movies) {
        screen.getByText(movie.title);
    }

    const secondMovie = movies[1];
    fireEvent.click(screen.getByText(secondMovie.title));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(secondMovie);
});

//jest --updateSnapshot

it("render correctly MovieList component", () => {
    const MovieListComponent = renderer.create(<MovieList/>).toJSON()
    expect(MovieListComponent).toMatchSnapshot()
});

it("render correctly HomePage component", () => {
    const MovieListComponent = renderer.create(<HomePage/>).toJSON()
    expect(MovieListComponent).toMatchSnapshot()
});
