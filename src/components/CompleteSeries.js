
// TODO implement custom hook

const CompletedSeriesCard = ({serie}) => {

    // const markCompleted = async() => {
        
    //     const response = await fetch ('/api/series/'+serie._id,{
    //         method: 'PATCH',
    //         body:JSON.stringify({
    //             status:"Complete"
    //         }),
    //         headers:{
    //             'Content-Type':'application/json'

    //         } }
    //     )
        
    //     const json = await response.json()
    //     console.log(json)
    //    if (response.ok){
    //     window.location.reload()
    //    }
    // }



    const handleDelete = async() =>{
        const response = await fetch('/api/series/'+serie._id,{
            method:'DELETE'
        })
        
        const json = await response.json()
        console.log(json)

        if(response.ok){
            window.location.reload(false);
        }
    }
 


    return (
        <div className="serie-detail">
            <h4>{serie.title}</h4>
            {/* <p><strong>Seasons:  </strong>{serie.season} </p> */}
            <p>Status:  {serie.status} </p>
            <br/>
            <button style={{marginRight:'5px'}} onClick={handleDelete}>Delete</button>
           
            {/* <button onClick={markCompleted} >Mark Complete</button> */}
            {/* <button>Mark As Dropped</button>
            <button>Mark As Completed</button> */}
        </div>
    );

}

export default CompletedSeriesCard