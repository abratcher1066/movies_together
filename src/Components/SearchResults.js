import React from 'react';

// Define route in App.js (or wherever) with a wildcard for the id
// React router use wildcards
// On the page itself, get the wildcard entered (google React router get wildcard value)
// Once you have that value, make your api call to get the data
// Populate state with that data
// Flow the data onto the page

function SearchResults(props) {
  //console.log(props.movies);
  return (
    <ul>
      {props.movies.map(movie => (
        <li>
          {console.log(movie)}

          {movie.locations.map(loc => (
            <div>
                <a href={`/Details/${movie.name}/${loc.display_name}`}> 
                    <p>{movie.name}</p>
                    <img alt="streamingService" src={loc.icon} />
                </a>
            </div>
          ))}
        </li>
      ))}
    </ul>
  )
}

export default SearchResults;