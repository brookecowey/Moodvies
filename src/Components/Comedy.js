import { useEffect, useState } from 'react'

function Comedy() {
  const [comedies, setComedies] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU1MzA4YmU4ZDQ2ZGM1ZTI1N2IxNmUwYmRiNWE4YyIsInN1YiI6IjY1M2FmNjlhY2M5NjgzMDEwYjNkOGFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q9zv634RHX5zOKg8jWrIeTkscVdFGdyXj1RjwRYe68'
    }
  };
      const fetchComedy =() => {

      
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
    .then(response => response.json())
    .then(response => {
      // console.log(response.results)
      setComedies(response.results)
    })
    .catch(err => console.error(err));
      }

      useEffect(() => {
        fetchComedy()
      },[])
      console.log(comedies)
  return (
    <div> //can put grid here
      {comedies.map((comedy) => (
        <div key={comedy.id}>
          <img src={`https://image.tmdb.org/t/p/w500${comedy.poster_path}`} alt={comedy.title}/>
      
          <h2>
            {comedy.title}
          </h2>
          <p>
            {comedy.overview}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Comedy