import React from "react";
import ReactDOM from "react-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'



// css
import '../styles/first.sass';
import '../styles/review.sass';


class Reviews extends React.Component {
  render() {
    return(
      <div className="reviews-container" id="reviews">
        <h1 className="reviews-header"> Reviews </h1>


        <div className="reviews-flex">

          <div className="reviews">
            <div className="reviews-each">
                  <div className="reviews-icon">
                      <img src='https://regularshowwiki.weebly.com/uploads/7/4/1/1/7411048/4804645_orig.png' className="reviews-each-icon-img"></img>
                  </div>
                  <div className="reviews-each-texts">
                    <div className="reviews-each-texts-title">
                        These Hot Dogs Are Evil
                    </div><br />
                    <div className="reviews-each-texts-body">
                    They're just like normal hot dogs, only they were alive and desired to eat other living creatures who consumed hot dogs. The hot dogs are incredibly strong as they can punch through anything and grab and physically subdue living beings much bigger than they are.                    </div>
                  </div>
            </div>


            <div className="reviews-each">
                  <div className="reviews-icon">
                      <img src='https://regularshowwiki.weebly.com/uploads/7/4/1/1/7411048/4804645_orig.png' className="reviews-each-icon-img"></img>
                  </div>
                  <div className="reviews-each-texts">
                    <div className="reviews-each-texts-title">
                        Title
                    </div><br />
                    <div className="reviews-each-texts-body">
                        Body
                    </div>
                  </div>
            </div>
          </div>

        </div>


      </div>
    )

  }
}

export default Reviews;

