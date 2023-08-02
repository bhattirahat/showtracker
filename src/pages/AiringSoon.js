import { useEffect, useState } from "react"




const AiringSoon = () =>{

    const [show,setShow] = useState([])

    const fetchCurrentAnime = async() =>{
        const response = await fetch("https://api.jikan.moe/v4/seasons/upcoming")
        const data = await response.json()
        console.log(data)

        if (data && data.data) {
            setShow(data.data);
            // console.log(data.data)
        }


    }

    useEffect(() => {
        fetchCurrentAnime()
    },[])


    return(
        <div>
           <h1>Airing Next Seasons</h1>  
            {show && show.map((shows)=>(
                <div className="serie-detail"  key = {shows.mal_id}>
                    <h2>{shows.title}</h2>
                    <h4>episodes : {shows.episodes}</h4>
                    <p>
                    {shows.synopsis}
                    </p>
                    <h4>season: {shows.season}</h4>
                    {/* <h4>{shows.aired}</h4> */} 
                    <h4>{shows.type}</h4>

                </div>
            ))
            }
        </div>
    )
}

export default AiringSoon