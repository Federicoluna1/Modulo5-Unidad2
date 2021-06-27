import '../App.css';

const PrimerComponente = (props) => {
const {url, tittle, description} = props
    const element = 
        <div className='container'> 
            <img src={url}></img>
                <div>
                    <h2 className = 'container-tittle'>{tittle}</h2>
                    <p className = 'container-description'>{description}</p>
                </div>
        </div>;
    return (element)
}

export default PrimerComponente

