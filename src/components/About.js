import './About.css'

export const About = (props) => {

    const { name, rollNo, id } = props

    return <div className="card">
        <div class="card-header">
            {id}
        </div>
        <div className='card-body'>
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{rollNo}</p>
        </div>
    </div>
}