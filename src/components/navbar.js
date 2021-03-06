
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/conge">Conge</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/authorisation">Authorisation</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;