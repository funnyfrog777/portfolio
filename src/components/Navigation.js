import '../App.css';
import { Link } from "react-router-dom";

export default function Navigation(props) {
    return (
        <div className='App App-navigation'>
            <Link to="/" className='link'><b>Funnyfrog777</b></Link>
        </div>
    )
}