import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params : {id : string}
}

export async function generateMetadata({params : {id}} : IParams) {
    const movie = await getMovie(id)
    return {
        title : movie.title
    }
}

export default async function MovieDetails({
    params : {id}
}: IParams) {
    // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)])
    return (
        <div>
            <Suspense fallback={<h6>Loading Movie info...</h6>}>
            <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h6>Loading Movie info...</h6>}>
            <MovieVideos id={id}/>
            </Suspense>
        </div>

    )
}