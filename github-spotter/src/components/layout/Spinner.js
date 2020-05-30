import React, {Fragment}from 'react'

/*____Import FroM Custom Files______*/
import spinner from './spinner.gif';

const Spinner = () =>{
    return (
        <Fragment>
           <img 
                src = {spinner} 
                alt = 'Loading ...'
                style={{
                    width : '200px', 
                    margin:'auto', 
                    display:'block'
                }}
            />    
        </Fragment>
    )
}

export default Spinner
