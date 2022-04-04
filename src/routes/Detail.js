import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    useEffect(async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            
    }, [])
    return <h1>Detaileeeee</h1>
}

export default Detail;