import '../App.css';
import { Link } from "react-router-dom";

export default function Card(props) {
    const fp = process.env.PUBLIC_URL + props.img

    return (
        // <div id={props.id} className='Card'>
        //     <h2>{props.title}</h2>
        //     <Link to={props.page}><img src={fp}/></Link>
        // </div>

        <div id={props.id} className={'Card ' + props.color}>
            <div>
                <h2>{props.title}</h2>
                <p>
                    {props.p1}
                    <br/><br/>
                    <u><b>Experience Gained</b></u>: {props.p2}
                </p>
            </div>
            <Link to={props.page}><img src={fp}/></Link>
        </div>
    )
}