import React, { Component } from 'react'
export class Newsitems extends Component {
    render() {
        let {title, description, imageUrl, newsUrl,author,date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://cdn.images.express.co.uk/img/dynamic/78/750x445/1543002.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} On  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newsitems