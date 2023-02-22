import React, { Component } from 'react'
import monkey from './monkey.png'
export class Home extends Component {
  render() {
    return (
      <div className='container position-relative homeContainer fs-1' style={{overflow:"hidden",width:"max-content"}}>
        <div className='container border my-5 position-relative top-2' style={{width:"60%"}}>
        <div className="container border" style={{width:"max-content",borderRadius:"50%",boxShadow:"0px 2px 3px 1px black"}}>
        <img className='img-fluid monkey' src={monkey} alt="sadf" />
       </div>
            <p className='fs-4 lh-2 p-3 fw-lighter text-muted overflow-wrap'>
  
  Welcome to newsMonkey, your go-to source for the latest and most relevant news stories. At newsMonkey, we understand the importance of staying informed in today's fast-paced world, which is why we've created a platform that provides you with the most recent and comprehensive news stories from around the globe.

<br/>
  
Our website utilizes advanced APIs to fetch news from multiple sources, which means you can access a wide variety of news stories, no matter where you are. Whether you're looking for breaking news, local stories, or international events, you'll find it all here on newsMonkey.
    

<br/>
  
One of the great features of newsMonkey is our simple and user-friendly design, making it easy for anyone to navigate the site and find the news that interests them. Our website is designed to cater to all types of readers, whether you're a news junkie or someone who just wants to stay informed on the latest developments.

<br/>
  
At newsMonkey, we understand that you're busy and might not have time to sift through countless news sources to find the stories that matter to you. That's why we've streamlined the process and made it easy to find news on the topics that interest you the most. Our site also provides customizable options, allowing you to personalize your news feed and receive notifications on topics you care about.
    
<br/>
  
We pride ourselves on providing accurate, unbiased news reporting. Our team of experienced journalists and editors work hard to ensure that the news we provide is of the highest quality and adheres to the principles of responsible journalism. We value transparency and objectivity and strive to present news in a way that is informative and balanced.
    
<br/>
  
  So, whether you're interested in politics, sports, technology, entertainment, or breaking news stories, newsMonkey has you covered. Join our community today and never miss a beat when it comes to staying informed on the latest news and events.
</p>
</div>
</div>
    )
  }
}
export default Home
