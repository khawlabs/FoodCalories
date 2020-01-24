import React from 'react';

const Food = function (props) {
    return <div className="col-3 mb-4">
        <div className="card">
  
       {props.image !==null   ?           
        <img src={props.image} className="card-img-top" alt="..." />
       : null }
       
        <div className="card-body">
         <p className="card-text"> Label: {props.label}</p>  
         {props.brand !=null ?  <p className="card-text">Brand:{props.brand}</p> :null}
        <p className="card-text">CategoryLabel: {props.categoryLabel}</p>
         <p className="card-text">Category:{props.category}</p> 
         

         <p className="card-text"> Nutrients: </p>
         <p className="card-text"> ENERC_KCAL :{props.ENERC_KCAL}</p> 
         <p className="card-text">CHOCDF:{props.CHOCDF}</p> 
         <p className="card-text">PROCNT:{props.PROCNT}</p> 
         <p className="card-text">FIBTG:{props.FIBTG}</p> 


            </div>
        </div>
    </div>
}

export default Food;