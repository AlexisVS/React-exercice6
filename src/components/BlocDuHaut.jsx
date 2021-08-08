import React, { Component } from 'react';

class BlocDuHaut extends Component {
    navbar = 0;
    home = 0;
    link = 0;
    
    handleClick = e => {
        if (e.target.innerHTML == "Navbar") {
            this.navbar++
            console.log(`${e.target.innerHTML} Vous avez cliquez ${this.navbar} fois sur l'element NavBar`);
        } else if (e.target.innerHTML == "Home") {
            this.home++
            console.log(`${e.target.innerHTML} Vous avez cliquez ${this.home} fois sur l'element Home`);
        } else if (e.target.innerHTML == "Link") {
            this.link++
            console.log(`${e.target.innerHTML} Vous avez cliquez ${this.link} fois sur l'element Link`);
        }
    }
    render () {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a onClick={(e) => this.handleClick(e)} className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a onClick={(e) => this.handleClick(e)} className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={(e) => this.handleClick(e)} className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default BlocDuHaut;