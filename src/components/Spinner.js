import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-warning my-4" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spinner