import '../App.css';
import React from 'react';

const PrimerComponente = (props) => {
const {url, title, description} = props
    const element = 
        <div className='container'> 
            <img src={url} alt=''></img>
                <div>
                    <h2 className = 'container-title'>{title}</h2>
                    <p className = 'container-description'>{description}</p>
                </div>
        </div>;
    return (element)
}

export default PrimerComponente

