import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, newURL, imageURL, author, date, source } = this.props
        return (
            <div>
                <div className="card">

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0,                        
                    }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={imageURL} className="" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <p className="card-text">{description}</p>
                        <a href={newURL} target="_blank" className="btn btn-warning">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem