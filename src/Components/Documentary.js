import { useEffect, useState } from 'react'

function Documentary() {
  const [documentaries, setDocumentaries] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU1MzA4YmU4ZDQ2ZGM1ZTI1N2IxNmUwYmRiNWE4YyIsInN1YiI6IjY1M2FmNjlhY2M5NjgzMDEwYjNkOGFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q9zv634RHX5zOKg8jWrIeTkscVdFGdyXj1RjwRYe68'
    }
  };
      const fetchDocumentary =() => {

      
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99', options)
    .then(response => response.json())
    .then(response => {
      // console.log(response.results)
      setDocumentaries(response.results)
    })
    .catch(err => console.error(err));
      }

      useEffect(() => {
        fetchDocumentary()
      },[])
      console.log(documentaries)
  return (
    <div> //can put grid here
      {documentaries.map((documentary) => (
        <div key={documentary.id}>
          <img src={`https://image.tmdb.org/t/p/w500${documentary.poster_path}`} alt={documentary.title}/>
      
          <h2>
            {documentary.title}
          </h2>
          <p>
            {documentary.overview}
          </p>
        </div>
      ))}
    </div>
  )
}


export default Documentary