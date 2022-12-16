import '../styles/CVS.css'

export default function Card(props) {
    return (
        <div className='Screen'>
            <img src={props.img}/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}