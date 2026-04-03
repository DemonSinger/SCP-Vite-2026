import {Link} from 'react-router'
import {scps} from './Data'

export default function NavMenu()
{
    return (
        <nav className="mt-3 mb-3">
            <Link to="/" className="btn btn-dark">Home</Link>
            {
                scps.map(
                    scp=> (
                        <Link key={scp.item} to={`/scp/${scp.item}`} className="btn btn-dark">{scp.item}</Link>
                    )
                )
            }
        </nav>
    )
}
