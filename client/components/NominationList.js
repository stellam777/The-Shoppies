import React from 'react'
import SingleMovie from './SingleMovie'

const NominationList = ({nominationList, setNominationList}) => {
  const clearSearch = () => {
    localStorage.setItem('Nominated Movies', JSON.stringify([]))
    setNominationList([])
  }

  return (
    <div className="col-lg-5 nom-list-container">
      <div className="d-flex justify-content-between">
        <div>
          <h4>
            Nominations:<span>
              {' '}
              {nominationList.length
                ? nominationList.length
                : 'Nothing currently nominated'}
            </span>
          </h4>
        </div>
        <div>
          {nominationList.length > 0 && (
            <button
              onClick={clearSearch}
              type="button"
              className="btn btn-sm btn-secondary"
            >
              Clear Nominations
            </button>
          )}
        </div>
      </div>
      {nominationList.map(movie => {
        return (
          <SingleMovie
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            key={movie.id}
            id={movie.id}
            setNominationList={setNominationList}
            nominationList={nominationList}
            fromNomList={true}
          />
        )
      })}
    </div>
  )
}

export default NominationList
