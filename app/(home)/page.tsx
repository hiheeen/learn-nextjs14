import styles from '../../styles/home.module.css'
import Movie from "../../components/movie";

export const metadata = {
    title: "Home"
  }

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

const getMovies = async () => {
    // console.log('im fetching')
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
const HomePage = async () => {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie : any) => <Movie key={movie.id} title={movie.title} poster_path={movie.poster_path} id={movie.id}/>)}
        </div>
    )
}
export default HomePage;