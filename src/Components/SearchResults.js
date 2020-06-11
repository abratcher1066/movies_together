import React from 'react';

function SearchResults(props){
    //console.log(props.movies);
    return(
        <ul>
            {props.movies.map(movie => (
                <li>
                    {console.log(movie)}
                    
                    {movie.locations.map(loc => (
                        <div>
                        <p>{movie.name}</p>
                        <img alt="streamingService" src={loc.icon}/>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    )
}

export default SearchResults;