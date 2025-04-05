import React, { PureComponent } from 'react'
import loading from './loading.gif'
const spinner =()=>  {
  
    return (
      <div>
        <img className="my-2" src={loading} alt="loding..." />
      </div> 
    )
  }

export default spinner
