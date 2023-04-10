import React from 'react'
import { Movies } from '../components/Movies'

class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e009805b&s=matrix')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        this.setState({movies: data.Search})
      })
      .catch((error) => {
        console.error('There was an error:', error)
      })
  }

  render() {
    const { movies } = this.state

    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h3>Loading...</h3>
        )}
      </main>
    )
  }
}

export { Main }
