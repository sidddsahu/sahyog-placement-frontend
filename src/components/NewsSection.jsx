// import React from 'react';
// import './NewsSection.css'; // Import any necessary CSS file

const NewsSection = () => {
  const newsItems = [
    {
      imgSrc: '/src/assets/images/news/news-1.jpg',
      date: '21<br />May',
      category: 'Human Resource',
      title: '5 Effective Ways to Hire More Workers',
      author: 'Harley Reuban',
      comments: '3 Cmnts',
      delay: '00ms',
    },
    {
      imgSrc: '/src/assets/images/news/news-2.jpg',
      date: '20<br />May',
      category: 'Techiques',
      title: 'Does My Business Need a Director of Training?',
      author: 'Harley Reuban',
      comments: '5 Cmnts',
      delay: '300ms',
    },
    {
      imgSrc: '/src/assets/images/news/news-3.jpg',
      date: '19<br />May',
      category: 'Recruitment',
      title: 'What are the 2020 Staffing Trends in USA',
      author: 'Harley Reuban',
      comments: '4 Cmnts',
      delay: '600ms',
    },
  ];

  return (
    <section className="news-section">
      <div className="auto-container">
        <div className="sec-title centred">
          <span className="top-title">News & Updates</span>
          <h2>Featured News and Updates</h2>
          <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
        </div>
        <div className="row clearfix">
          {newsItems.map((news, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 news-block" key={index}>
              <div
                className="news-block-one wow fadeInUp animated animated"
                data-wow-delay={news.delay}
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <a href="blog-details.html">
                      <img src={news.imgSrc} alt="" />
                    </a>
                    <span className="post-date" dangerouslySetInnerHTML={{ __html: news.date }}></span>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="category">
                        <i className="flaticon-note"></i>
                        <p>{news.category}</p>
                      </div>
                      <h3>
                        <a href="blog-details.html">{news.title}</a>
                      </h3>
                      <ul className="post-info clearfix">
                        <li>
                          <i className="far fa-user"></i>
                          <a href="index.html">{news.author}</a>
                        </li>
                        <li>
                          <i className="far fa-comment"></i>
                          <a href="index.html">{news.comments}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
