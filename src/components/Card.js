import '../App.css';
import { Link } from "react-router-dom";

export default function Card(props) {
    const fp = process.env.PUBLIC_URL + props.img

    return (
        <div className='Card'>
            <h2>{props.title}</h2>
            <Link to={props.page}><img src={fp}/></Link>
        </div>
    )
}