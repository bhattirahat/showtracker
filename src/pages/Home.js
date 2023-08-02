import { useEffect,useState } from "react";
import SeriesCard from "../components/serieCard";


const Home  = () =>{
    const[series,setSerie] = useState(null) // initally null value
    const[watch,setWatched] = useState('')
    const[plan , setPlan] = useState('')


    const fetchWatched = async()=>{
        const response =  await fetch('api/series/totalwatched')
        const json = await response.json()
      
        if(response.ok){
            setWatched(json)
        }
    }

    const fetchPlantowatch = async()=>{
        const response =  await fetch('api/series/totalPlan')
        const json = await response.json()
      
        if(response.ok){
            setPlan(json)
        }
    }


    const fetchSeries = async () => {
        const response = await fetch('api/series')
        const json = await response.json()

        if(response.ok){
            setSerie(json)
        }
    }


    useEffect(() => {
        fetchSeries()
        fetchWatched()
        fetchPlantowatch()
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
        {watch && plan && (
        <div>
           Total watched =  {watch[0].count}
           <br/>
           
           Total plan to watch =  {plan[0].count}
        </div>)
        }
    
        
    </div>
 );   
}

export default Home