import React, {useState} from 'react'

const Search = ({searchMovies = Function.prototype}) => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')


  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type)
    }
  }

  const handleFilter = (e) => {
    setType(e.target.dataset.type)
    searchMovies(search, e.target.dataset.type)
  }

    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch( e.target.value )}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn" onClick=
            {() => searchMovies(search, type)}>
            Search
          </button>
        </div>

        <div>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Serials</span>
          </label>
        </div>
      </div>
    )
}

export { Search }
