import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    console.log(process.env)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e009805b&s=batman`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((err) => {
        console.error(err)
      })
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e009805b&s=${str}`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search }))
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    const { movies } = this.state
    return (
      <main className="container content">
        <Search  searchMovies={this.searchMovies}/>
        {movies.length > 0 ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    )
  }
}

export { Main }
