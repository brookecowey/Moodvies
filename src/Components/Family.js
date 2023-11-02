import { useEffect, useState } from 'react'

function Family() {
  const [families, setFamilies] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU1MzA4YmU4ZDQ2ZGM1ZTI1N2IxNmUwYmRiNWE4YyIsInN1YiI6IjY1M2FmNjlhY2M5NjgzMDEwYjNkOGFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q9zv634RHX5zOKg8jWrIeTkscVdFGdyXj1RjwRYe68'
    }
  };
      const fetchFamily =() => {

      
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10751', options)
    .then(response => response.json())
    .then(response => {
      // console.log(response.results)
      setFamilies(response.results)
    })
    .catch(err => console.error(err));
      }

      useEffect(() => {
        fetchFamily()
      },[])
      console.log(families)
  return (
    <div> //can put grid here
      {families.map((family) => (
        <div key={family.id}>
          <img src={`https://image.tmdb.org/t/p/w500${family.poster_path}`} alt={family.title}/>
      
          <h2>
            {family.title}
          </h2>
          <p>
            {family.overview}
          </p>
        </div>
      ))}
    </div>
  )
}


export default Family