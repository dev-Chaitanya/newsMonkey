import React, { Component } from 'react'
import EverythingItem from './EverythingItem';
import Spinner from './Spinner';
// import Navbar from './Navbar';
// import SearchBtn from './SearchBtn';
// import PropTypes from 'prop-types'
export class Everything extends Component {
    
    // static defaultProps={
    //     query:"news"
    //    };
    //    static propTypes={
    //    query: PropTypes.string,
    //    };
    constructor(props){
        super(props);
        this.state={
            Query:"Breaking-news",
            articles:[],
            page:1,
            pageSize:5,
            loading:false,
            isUpdate:false,
        }
    
    }
    fetchData= async()=>{
        var urlNews=`https://newsapi.org/v2/everything?q=${this.state.Query}&apiKey=8eca2f831cdb410480475e65794fabeb&page=${this.state.page}&pageSize=5`;
        let data= await fetch(urlNews,{header:{
            Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
            'Content-Type': 'application/json'
                    }});
        this.setState({loading:true})
        let parseData= await data.json();
        this.setState({loading:true})
        this.setState({
            articles:parseData.articles,
            loading:false,
        })
        if(this.state.isUpdate===true){
            this.componentDidMount();
            setTimeout(()=>{
                this.setState({isUpdate:false})
            },10)
        }
        else{

        }
    }
    handelMount=()=>{
        let data=this.props.query;
        this.setState({Query:data})
        this.componentDidMount();
    }
     componentDidMount(){
    this.fetchData();
    }
    componentDidUpdate(prevProps){

    if(prevProps.query!==this.props.query){
            // console.log("Update ",this.state.Query," to " ,this.props.query)
            this.handelMount();
            this.setState({isUpdate:true})
            return true
        }
    }
   

    handelPrev= async()=>{
        var urlNews=`https://newsapi.org/v2/everything?q=${this.state.Query}&apiKey=8eca2f831cdb410480475e65794fabeb&page=${this.state.page-1}&pageSize=5`;
        this.setState({loading:true})
        let data= await fetch(urlNews,{header:{
            Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
            'Content-Type': 'application/json'
                    }});
            let parseData= await data.json();
            this.setState({loading:true})
               this.setState({
                Query:this.props.query,
                articles:parseData.articles,
                page:this.state.page - 1,
            loading:false,
               })
        }
        handelNext= async()=>{
            var urlNews=`https://newsapi.org/v2/everything?q=${this.state.Query}&apiKey=8eca2f831cdb410480475e65794fabeb&page=${this.state.page+1}&pageSize=5`;
            this.setState({loading:true})
            let data= await fetch(urlNews,    {header:{
                Authorization:"Bearer 8eca2f831cdb410480475e65794fabeb",
                'Content-Type': 'application/json'
                        }});
            let parseData= await data.json();
            this.setState({loading:true})
               this.setState({
                Query:this.props.query,
                articles:parseData.articles,
                page:this.state.page + 1,
                loading:false,
               })
        }
 
        render() {
        let {searchCompo}=this.props
        return (
            <div className='container'>
               
<h1 className='text-dark my-5 d-flex  justify-content-evenly'>"{this.state.Query}"{this.state.loading&&<Spinner/>} {searchCompo} </h1>
 
<div className="row">
    {
     !this.state.loading && this.state.articles.map((element,index)=>{
return   <div className="col-md-4" key={index}>
            <EverythingItem author={element.author} title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} source={element.source.name} date={element.publishedAt} />
        </div>
        })
    }
</div>
<div className="container d-flex align-items-center justify-content-between my-3 ">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark pagebtn border-none" onClick={this.handelPrev}>&larr; Previous</button>
                    <button disabled className="btn btn-dark text-light fs-5">Page-{this.state.page}</button>
                    <button disabled={this.state.page+1>(Math.ceil(this.state.totalResult/this.props.pageSize))} type="button" className="btn btn-dark pagebtn border-none" onClick={this.handelNext}>Next &rarr;</button>
                    </div>
   </div>
    )
  }
}

export default Everything
