import { Link } from 'react-router-dom'
import './custom.css'
function NotFound(){
    return (
        <div className="notfound">
            <div></div>
            <h1>404 Not Found</h1>
            <h3>Go back to dashboard: </h3>
            <Link to={'/'} className='btn404'>Click Here</Link>
            <div></div>
        </div>
    )
}

export default NotFound