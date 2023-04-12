import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }
   
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e009805b&s=batman`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err)
      })
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=e009805b&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const { movies, loading } = this.state
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    )
  }
}

export { Main }
