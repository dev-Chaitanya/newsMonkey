import React, { Component} from 'react'
// import Navbar from './Navbar';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps={
    country: "in",
    pageSize:8,
    category:"general",
   };
   static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
   
   };

    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
        }
        document.title=`${this.props.category}-newsMonkey`
    }
    
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8eca2f831cdb410480475e65794fabeb&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url,{
            header:{
    Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
    'Content-Type': 'application/json'
            }
        });
        let parseData=await data.json();
        console.log(parseData)
        this.setState({loading:false});
        this.setState({articles:parseData.articles, 
            totalResult: parseData.totalResults,
            loading:false,
        })
    }

handelPrev= async ()=>{
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8eca2f831cdb410480475e65794fabeb&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url,    {header:{
        Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
        'Content-Type': 'application/json'
                }});
    let parseData=await data.json();
    this.setState({loading:false});

    this.setState({
        page:this.state.page - 1,
        articles:parseData.articles,
        loading:false,
    })
   
}
handelNext= async ()=>{
   
    if(!(this.state.page+1>(Math.ceil(this.state.totalResult/this.props.pageSize)))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8eca2f831cdb410480475e65794fabeb&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url,    {header:{
            Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
            'Content-Type': 'application/json'
                    }});
        let parseData=await data.json();
        this.setState({loading:false});
        this.setState({
            page:this.state.page + 1,
            articles:parseData.articles,
            loading:false,
        })
    }
}
    render() {
        return (
            <div className='container my-5'>
                <h1 className=' text-center'>NewsMonkey Top "{this.props.category.toUpperCase()+" News"}" Headlines Are -   {this.state.loading&&<Spinner/>} </h1>
                <div className="row d-flex flex-wrap">
                    {
                     !this.state.loading && this.state.articles.map((element,index)=>{
                            return  <div className="col-md-4" key={index}>
                            <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} sourceName={element.source.name} author={element.author} time={element.publishedAt}/>
                         
                        </div>
                        })
                    }
                </div>
                    <div className="container d-flex align-items-center justify-content-between my-3 ">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark pagebtn border-none" onClick={this.handelPrev}>&larr; Previous</button>
                    <button disabled className="btn btn-dark text-primary fs-5">Page-{this.state.page}</button>
                    <button disabled={this.state.page+1>(Math.ceil(this.state.totalResult/this.props.pageSize))} type="button" className="btn btn-dark pagebtn border-none" onClick={this.handelNext}>Next &rarr;</button>
                    </div>
            </div>
        )
    }
}

export default News
