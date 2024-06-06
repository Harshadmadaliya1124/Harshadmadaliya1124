import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let { title, description,imageUrl, newsUrl,author , date , source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
              <div style={{display: 'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger ">
              {source}
            </span>
              </div>
            <img src={imageUrl?imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/iphone-15-20251631-16x9.jpg?VersionId=heEbRhJr5B3E2Ibg5UJkhtmqbq8zNC9q"} alt="..."/>
            
            <div className="card-body">
                <h5 className="card-title">{title}...<span className="badge text-bg-success">New</span></h5>
                
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} {date}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
