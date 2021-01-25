import React from 'react';
import MovieList from "./MovieList.js"
import renderer from 'react-test-renderer'
import HomePage from '../../HomePage.js';
import DescriptionPage from '../../../DescriptionPage/DescriptionPage.js';

const array = [
    {
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Top Gun',
        ganre: 'Action',
        id: 1
    },
    {
        img: '../../../../../images/terminator.jpg',
        age: 1984,
        title: 'Terminator',
        name: 'Terminator',
        ganre: 'Science fiction/Action',
        id: 2
    },
    {
        img: '../../../../../images/Blue_Velvet.jpg',
        age: 1986,
        title: 'Blue Velvet',
        name: 'Blue Velvet',
        ganre: 'Detective film/Thriller',
        id: 3
    },
    {
        img: '../../../../../images/Vanishing_Point.jfif',
        age: 1971,
        title: 'Vanishing Point',
        name: 'Vanishing Point',
        ganre: 'Action / Cult Movie',
        id: 4
    },
    {
        img: '../../../../../images/Death_Proof.jpg',
        age: 2007,
        title: 'Death Proof',
        name: 'Death Proof',
        ganre: 'Action/Horror',
        id: 5
    },
    {
        img: '../../../../../images/Lincoln_Lawyer.jpg',
        age: 2011,
        title: 'Lincoln Lawyer',
        name: 'Lincoln Lawyer',
        ganre: 'Thriller/Crime',
        id: 6
    },

]


test('the page have obj Lincoln Lawyer', () => {
    expect(array[5]).toMatchObject({
        img: '../../../../../images/Lincoln_Lawyer.jpg',
        age: 2011,
        title: 'Lincoln Lawyer',
        name: 'Lincoln Lawyer',
        ganre: 'Thriller/Crime',
        id: 6
    })
})

test('first element page - Top Gun', () => {
    expect(array[0]).toMatchObject({
        img: '../../../../../images/topgun.jpg',
        age: 1994,
        title: 'Top Gun',
        name: 'Top Gun',
        ganre: 'Action',
        id: 1
    })
})

//jest --updateSnapshot

it("render correctly MovieList component", () => {
    const MovieListComponent = renderer.create(<MovieList/>).toJSON()
    expect(MovieListComponent).toMatchSnapshot()
});

it("render correctly HomePage component", () => {
    const MovieListComponent = renderer.create(<HomePage/>).toJSON()
    expect(MovieListComponent).toMatchSnapshot()
});
