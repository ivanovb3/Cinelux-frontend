import React, { Component } from 'react'
import { FixedSizeGrid as Grid } from 'react-window';
import MovieService from '../services/MovieService';
import '../styles/NowInCinema.css'
import { Link, withRouter } from 'react-router-dom'



let movieListArray = [[{ name: "" }]];

 class NowInCinema extends Component {

    constructor() {
        super()
        this.state = {
            moviesList: [{ name: "" }]
        }


    }

    componentDidMount() {
        let movies = MovieService.getAllMovies()

        movies.then(movie => {
            /* const name = movie.data[0].name; */
            this.setState({ moviesList: movie.data })
            console.log(this.state.moviesList)
           // console.log(this.state.moviesList[0].name)
        })
    }

    render() {
        /* let moviesToSplit = this.state.moviesList;
        function splittedMovies() {

            var chunkarr = [],
                i = 0,
                n = moviesToSplit.length;

            while (i < n) {
                chunkarr.push(moviesToSplit.slice(i, i += 4));
            }

            return chunkarr;
        }

        let splittedMoviesArray = splittedMovies();
        movieListArray = splittedMoviesArray;
        console.log(movieListArray)
         let counter = 0; */

        let moviesListItem = this.state.moviesList.map((d) => {
            /*           if (counter >= 3) {
                          counter = 0 */
            return (
                <div className="movieWrapper">
                    <Link
                        to={{
                            pathname: 'film/' + d.name,
                            state: {
                                movie: d
                            }
                        }}
                            >
                            <div>
                                <img src={process.env.PUBLIC_URL + '/movies/default.jpg'} className="imageNow" />
                                <p className="movieName">{d.name}</p>
                            </div>
                    </Link>
                </div>

            )
            /*     }
                else {
                    counter++
                    return (
                        <div className="movieWrapper">
                            <h1>{d.name}</h1>
                            <img src={process.env.PUBLIC_URL + '/movies/default.jpg'} className="image" />
                        </div>
                    )
                } */
        });


        return (
            <div className="wrapper">
                {moviesListItem}
                {/* {this.separateElement()} */}
                {/*    <Grid
                    className="Grid"
                    columnCount={5}
                    columnWidth={100}
                    height={150}
                    rowCount={4}
                    rowHeight={35}
                    width={300}
                >
                    {Cell}
                </Grid> */}
            </div>
        )
    }
}
const Cell = ({ columnIndex, rowIndex, style }) => (
    <div
        className={
            columnIndex % 2
                ? rowIndex % 2 === 0
                    ? 'GridItemOdd'
                    : 'GridItemEven'
                : rowIndex % 2
                    ? 'GridItemOdd'
                    : 'GridItemEven'
        }
        style={style}
    >
        {/* {movieListArray[rowIndex][columnIndex].name}  */}
        {movieListArray[0][0].name}
        {/* {console.log(movieListArray)} */}
    </div>
);

export default withRouter(NowInCinema)
