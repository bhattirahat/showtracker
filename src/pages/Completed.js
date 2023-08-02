import { useEffect,useState } from "react";
import CompletedSeriesCard from "../components/CompleteSeries";



const CompletedSeries = ()=>{
    const[series,setSerie] = useState(null) // initally null value
    
    useEffect( () =>{
            const fetchCompleteSeries = async() =>{
            const response = await fetch('api/series/complete')
            const json = await response.json()
            
            if(response.ok){
                setSerie(json)
            }
        }
        fetchCompleteSeries()
       
    },[])

    return(
        <div className="home">
          
            <div className="series">

            {series && series.length > 0 ? (
                series.map((serie) => <CompletedSeriesCard key={serie._id} serie={serie} />)
                ) : (
                <p>No Completed </p>
                )}
            </div>
            
        </div>
     );   

}

export default CompletedSeries