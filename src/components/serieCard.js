

const SeriesCard = ({serie}) => {

    const handleDelete = async() =>{
        const response = await fetch('/api/series/'+serie._id,{
            method:'DELETE'
        })
        const json = await response.json()
       
        if(response.ok){
            window.location.reload(false);
        }
    }
    // const handleDelete = asych () => {
    //     //const response = await fetch('/api/series'+serie._id)

    // }


    return (
        <div className="serie-detail">
            <h4>{serie.title}</h4>
            <p><strong>Seasons:  </strong>{serie.season} </p>
            <p>Status:  {serie.status} </p>
            <button onClick={handleDelete}>Delete</button>
            
            {/* <button>Mark As Dropped</button>
            <button>Mark As Completed</button> */}
        </div>
    );

}

export default SeriesCard