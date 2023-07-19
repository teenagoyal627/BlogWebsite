import React from 'react'

const BlogNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light" >
        <div class="container-fluid" 
        style={{backgroundColor:"skyblue"}}
        >
          <a style={{fontSize:"1.5rem"}} class="navbar-brand" href="/">Blog Website</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" style={{ marginLeft: "3rem",fontSize:"1.2rem"}}>Home</a>
              </li>

              <li class="nav-item dropdown">
                <div class="dropdown" style={{marginLeft:"2rem"}}>
                  <a style={{fontSize:"1.2rem"}} class="btn btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Update on upcoming events  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://www.collinsdictionary.com/dictionary/english/upcoming-event" target="_blank" rel="noreferrer" >Events</a></li>
                    <li><a class="dropdown-item" href="https://www.museion.it/artclub/?lang=en&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K3qzcNY2ZCqnO7La48N8sjGn7TUsXWV6i_DGVZzZPPU7zvCFLjZ-aMaApBiEALw_wcB" target="_blank" rel="noreferrer"> Museion Art Club</a></li>
                    <li><a class="dropdown-item" href="https://guide.mlh.io/general-information/hacker-experience/how-to-brainstorm-events" target="_blank" rel="noreferrer">Hackathon Upcoming Events</a></li>
                    <li><a class="dropdown-item" href="https://mediablog.prnewswire.com/upcoming-media-events/" target="_blank" rel="noreferrer">Journalist and Bloggers</a></li>
                    <li><a class="dropdown-item" href="https://developers.google.com/events" target="_blank" rel="noreferrer"> Upcoming Develper Events</a></li>
                  </ul>
                </div>
              </li>

              <li class="nav-item dropdown">
                <div class="dropdown" style={{marginLeft:"2rem"}}>
                  <a style={{fontSize:"1.2rem"}} class="btn btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jobs  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://economictimes.indiatimes.com/jobs" target="_blank" rel="noreferrer">OSTS</a></li>
                    <li><a class="dropdown-item" href="https://www.naukri.com/web-developer-fresher-jobs" target="_blank" rel="noreferrer">Web Developement</a></li>
                    <li><a class="dropdown-item" href="https://in.linkedin.com/jobs/web-developer-jobs?position=1&pageNum=0" target="_blank" rel="noreferrer">Linkedin</a></li>
                    <li><a class="dropdown-item" href="https://internshala.com/fresher-jobs/web-development-jobs/" target="_blank" rel="noreferrer">Internshala</a></li>
                    <li><a class="dropdown-item" href="https://www.glassdoor.co.in/Job/india-python-fresher-jobs-SRCH_IL.0,5_IN115_KO6,20.htm" target="_blank" rel="noreferrer">Glassdoor</a></li>
                  </ul>
                </div>
              </li>

              <li class="nav-item dropdown">
                <div class="dropdown" style={{marginLeft:"2rem"}}>
                  <a style={{fontSize:"1.2rem"}} class="btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Newsfeeds </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://thesentry.org/news/?gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2kDR3cwxl5tvcYRsJCgirDl8R7w2IFxWcWw5HflrktvhdqG-HOtpwaAiGuEALw_wcB" target="_blank" rel="noreferrer">Global Newsfeed</a></li>
                    <li><a class="dropdown-item" href="https://www.collinsdictionary.com/dictionary/english/shout-loud" target="_blank" rel="noreferrer">shout loud</a></li>
                    <li><a class="dropdown-item" href="https://feedly.com/" target="_blank" rel="noreferrer">News aggregation website</a></li>
                    <li><a class="dropdown-item" href="https://www.androidauthority.com/best-rss-reader-apps-for-android-2-174770/" target="_blank" rel="noreferrer">Web-based feed readers</a></li>
                    <li><a class="dropdown-item" href="https://zapier.com/blog/best-rss-feed-reader-apps/" target="_blank" rel="noreferrer">Feeds reader applications</a></li>
                    <li><a class="dropdown-item" href="https://news.un.org/en/?gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2iQNUXFbgO5FaA47MjUpcmxKm7SyLzrGyoTvFeKiL448IUQ3c9Ja0aAkl_EALw_wcB" target="_blank" rel="noreferrer">Social News aggregation</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BlogNav
