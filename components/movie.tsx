"use client"
// onClick 이벤트를 작동시킬 때에는 client-side에서!

import Link from "next/link";
import styles from '../styles/movie.module.css'
import { useRouter } from "next/navigation";
interface IMovieProps {
    title : string;
    poster_path : string;
    id : string;
}
export default function Movie({poster_path, title, id} : IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}