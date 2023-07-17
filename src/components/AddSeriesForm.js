import { useState } from "react"

const AddSeriesForm = () =>{
    const options = ["Watching", "Plan to watch", "Complete","Rewatching","Pause","Dropped"];
    const [title,setTitle] = useState('')
    const [season,setSeason] = useState('')
    const [status, setStatus] = useState(options[0])
    const [error,setError] = useState(null)

    const handleSubmit = async(e) => {
        //e.preventDefault()

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
            <br></br>
            <label>Season </label>
            <input
                type = "text"
                onChange ={(e) =>setSeason(e.target.value)}
                value={season}
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
            <button> Submit </button>
            {error && <div className="error">{error} </div>}

        </form>
    )
}
export default AddSeriesForm