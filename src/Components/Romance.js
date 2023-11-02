import { useEffect, useState } from 'react'

function Romance() {
  const [romances, setRomances] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU1MzA4YmU4ZDQ2ZGM1ZTI1N2IxNmUwYmRiNWE4YyIsInN1YiI6IjY1M2FmNjlhY2M5NjgzMDEwYjNkOGFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q9zv634RHX5zOKg8jWrIeTkscVdFGdyXj1RjwRYe68'
    }
  };
      const fetchRomance =() => {

      
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749', options)
        .then(response => response.json())
        .then(response => {
          // console.log(response.results)
          setRomances(response.results)
        })
    .catch(err => console.error(err));
      }

      useEffect(() => {
        fetchRomance()
      },[])
      console.log(romances)
  return (
    <div> //can put grid here
      {romances.map((romance) => (
        <div key={romance.id}>
          <img src={`https://image.tmdb.org/t/p/w500${romance.poster_path}`} alt={romance.title}/>
      
          <h2>
            {romance.title}
          </h2>
          <p>
            {romance.overview}
          </p>
        </div>
      ))}
    </div>
  )
}


export default Romance