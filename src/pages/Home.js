import { useEffect,useState } from "react";
import SeriesCard from "../components/serieCard";


const Home  = () =>{
    const[series,setSerie] = useState(null) // initally null value

useEffect(()=>{
    const fetchSeries = async () => {
        const response = await fetch('api/series')
        const json = await response.json()

        if(response.ok){
            setSerie(json)
        }
    }
        fetchSeries()
    },[])

 return(
    <div className="home">
        <div className="series">
            {series && series.map( (serie)=>(
                <SeriesCard key = {serie._id} serie = {serie}/>
                // <p key = {serie._id}>
                //     {serie.title}: {serie.season}
                // </p>
            ))}
        </div>
    </div>
 );   
}

export default Home