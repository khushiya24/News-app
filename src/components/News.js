
// import React, { Component } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   constructor() {
//     super();
//     this.state = {
//       allArticles: [],
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//   }

//   async componentDidMount() {
//     const url = `https://newsdata.io/api/1/latest?apikey=pub_bd2d2926bfd44f0599d077dbdb71b560&language=en`;
//     this.setState({ loading: true });

//     try {
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log("✅ Full response:", parsedData);

//       const allArticles = parsedData.results || [];

//       this.setState({
//         allArticles: allArticles,
//         articles: allArticles.slice(0, this.props.pageSize),
//         loading: false,
//       });
//     } catch (error) {
//       console.error("❌ Fetch Error:", error);
//       this.setState({ loading: false });
//     }
//   }

//   updateArticlesForPage = (page) => {
//     const { pageSize } = this.props;
//     const start = (page - 1) * pageSize;
//     const end = start + pageSize;
//     const pageArticles = this.state.allArticles.slice(start, end);

//     this.setState({
//       articles: pageArticles,
//       page: page,
//     });
//   };

//   handlePrevClick = () => {
//     const newPage = this.state.page - 1;
//     if (newPage >= 1) {
//       this.updateArticlesForPage(newPage);
//     }
//   };

//   handleNextClick = () => {
//     const newPage = this.state.page + 1;
//     const { pageSize } = this.props;
//     const totalPages = Math.ceil(this.state.allArticles.length / pageSize);

//     if (newPage <= totalPages) {
//       this.updateArticlesForPage(newPage);
//     }
//   };

//   render() {
//     const { articles, loading, page, allArticles } = this.state;
//     const { pageSize } = this.props;

//     const totalPages = Math.ceil(allArticles.length / pageSize);

//     return (
//       <div className="container my-3">
//         <h1 className="text-center">News App - Top Headlines</h1>
//         {loading && <Spinner />}

//         <div className="row">
//           {!loading &&
//             articles.map((element, index) => {
//               return (
//                 <div className="col-md-4" key={element.link || index}>
//                   <NewsItems
//                     title={element.title ? element.title.slice(0, 35) : ""}
//                     description={
//                       element.description
//                         ? element.description.slice(0, 70)
//                         : ""
//                     }
//                     imageUrl={
//                       element.image_url || "https://via.placeholder.com/150"
//                     }
//                     newsUrl={element.link}
//                   />
//                 </div>
//               );
//             })}
//         </div>

//         <div className="container d-flex justify-content-between my-3">
//           <button
//             disabled={page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={page >= totalPages}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;





import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      allArticles: [],
      articles: [],
      loading: false,
      page: 1,
    };
  }
  

  async componentDidMount() {
    const url = `https://newsdata.io/api/1/latest?apikey=pub_5c78f09d9f43474f95723fdcfa2552f9&language=en`;
    
    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("✅ Full response:", parsedData);

      const allArticles = parsedData.results || [];

      this.setState({
        allArticles: allArticles,
        articles: allArticles.slice(0, this.props.pageSize),
        loading: false,
      });
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      this.setState({ loading: false });
    }
  }

  updateArticlesForPage = (page) => {
    const { pageSize } = this.props;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pageArticles = this.state.allArticles.slice(start, end);

    this.setState({
      articles: pageArticles,
      page: page,
    });
  };

  handlePrevClick = () => {
    const newPage = this.state.page - 1;
    if (newPage >= 1) {
      this.updateArticlesForPage(newPage);
    }
  };

  handleNextClick = () => {
    const newPage = this.state.page + 1;
    const { pageSize } = this.props;
    const totalPages = Math.ceil(this.state.allArticles.length / pageSize);

    if (newPage <= totalPages) {
      this.updateArticlesForPage(newPage);
    }
  };

  render() {
    const { articles, loading, page, allArticles } = this.state;
    const { pageSize } = this.props;

    const totalPages = Math.ceil(allArticles.length / pageSize);

    return (
      <div className="container my-3">
        <h1 className="text-center">News App - Top Headlines</h1>
        {loading && <Spinner />}

        <div className="row">
          {!loading &&
            articles.map((element, index) => {
              return (
                <div className="col-md-4" key={element.link || index}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 35) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={
                      element.image_url || "https://via.placeholder.com/150"
                    }
                    newsUrl={element.link} author={element.author} date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= totalPages}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
