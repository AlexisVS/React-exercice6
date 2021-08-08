import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="container">
                <div className="col">
                    <div className="row-4"></div>
                    <p>Colonne 1</p>
                    <div className="row-4"></div>
                    <p>Colonne 2</p>
                    <div className="row-4"></div>
                    <p>Colonne 3</p>
                </div>
            </div>
        );
    }
}

export default Section;