import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
export const getMovie = async (id : string) => {
    console.log(`Fetching movie : ${Date.now()}`)
    // await new Promise((resolve)=> setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id : string}) {
    //async func은 Promise 객체를 반납하므로 꼭 await을 붙여야 실제 데이터를 받을 수 있다. 
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
          <img
            src={movie.poster_path}
            className={styles.poster}
            alt={movie.title}
          />
          <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>⭐️ {movie.vote_average.toFixed()}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>
              Homepage &rarr;
            </a>
          </div>
        </div>
      );
}