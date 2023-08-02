import { useState } from "react"

const AddSeriesForm = () =>{
    const media = ["Manga","Manhua","Anime","Tv show","Movie","Seasonal Anime"] 
    const options = ["Watching", "Plan to watch", "Complete","Rewatching","Pause","Dropped","Announced"];
    const [title,setTitle] = useState('')
    const [season,setSeason] = useState('')
    const [episode,setEpisode] = useState('')
    const [status, setStatus] = useState(options[0])
    const [error,setError] = useState(null)
    const [type,setType] = useState(media[0])
    // const [releasedate,setReleasedDate] = 
 
    const handleSubmit = async(e) => {
        e.preventDefault()
        const serie = {title,season,status}
        
        const response = await fetch('/api/series',{
            method : 'POST',
            body: JSON.stringify(serie),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setSeason('')
            setStatus(options[0])
            setTitle('')
            setError(null)
            console.log('new serie added',json)
        }

    }

    
    return(
        <form className="AddForm" onSubmit={handleSubmit}>
            <label>Title </label>
            <input
                type = "text"
                onChange ={(e) =>setTitle(e.target.value)}
                value={title}
            ></input>
            <br/>
           
            
            <label>Status  </label>
            <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}>
                {options.map((value) => (
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
            </select>

            <br/>

            <label>Type  </label>
            
            <select 
                value={type} 
                onChange={(e) => setType(e.target.value)}>
                {media.map((value) => (
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
            </select>
            {
               (type === media[0] || type === media[1]) && (
                <div>
                    <label>Chapter </label>
                    <input type="number" ></input>
                </div>    
                )
            }
            {
                (type === media[3] || type === media[5]) && (
                    <div>
                 <label>Season </label>
                 <input
                     type = "text"
                     onChange ={(e) =>setSeason(e.target.value)}
                     value={season}>   
                 </input>
                 
                    <label>Episode </label>
                    <input type="number" ></input>
                
                
                 </div>)
            }

        
            <button> Submit </button>
            {error && <div className="error">{error} </div>}


        </form>
    )
}
export default AddSeriesForm