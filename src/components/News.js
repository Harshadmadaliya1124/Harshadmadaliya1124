import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8 
        
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number
    }
    constructor(){
        super();
        console.log("Heloooooo");
        this.state = {
            articles: [],
            loading: false,
            page: 1
    }}

    async componentDidMount(){
      
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e44d2be2279a46c8a886533fa31be663&page=1`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({articles:parsedData.articles})
    }

    handleNextClick = async() =>{
        this.setState({page: this.state.page + 1})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=14e275c8933c4a8797bf6975666af0f1`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({articles:parsedData.articles})
    }
    handlePrevClick = async() =>{
        this.setState({page: this.state.page - 1})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}category=${this.props.category}&apiKey=14e275c8933c4a8797bf6975666af0f1`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
        <h2 style={{marginTop: "90px", textAlign: 'center'}}>NewsMonkey - Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown":element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />

        </div>})}
        </div>
        <div className="container my-5 d-flex justify-content-between">
            {/* console.log(this.page.state) */}
        {/* <button type="button" className="btn btn-dark mx-3 "onClick={this.handlePrevClick}>&lArr;	 Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rArr;</button> */}
        </div>
      </div>
    )
  }

    }

export default News
