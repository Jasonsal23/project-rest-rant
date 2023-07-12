const React=require('react')
const Def=require('../default')

function show(data){
    return(
        <Def>
            <main> 
                <div className ="row">
                <div className ="col-sm-12">
                <h1>{data.place.name}</h1>
                <img src ={data.place.pic} alt={data.place.name}/>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                </div>
                <div className='col-sm-12'>
                <h2>Rating</h2>
                <h4>Not rated</h4>
                <h2>Description</h2>
                <h4>{data.place.showEstablished()}</h4>
                <h4>Serving {data.place.cuisines}</h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    </form>
                </div>
                <hr/>
                <div className="col-sm-12">
                <h2>Comments?</h2>
                <h4>No comments yet.</h4>
                </div>
            </main>
        </Def>
    )
}

module.exports=show