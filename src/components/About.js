import React from "react";
import ReactDOM from "react-dom";

// css
import '../styles/about.sass';
import '../styles/mixins.sass';


export default class About extends React.Component {
  render() {

    return(
      <div className="about-container" id="about">

        <h1 className="about-header" > ABOUT </h1>
        
        <div className="about-wrapper">
            <p className="about-text">

                When you know the things that can make your IBS symptoms flare up, called triggers, you can make a plan to avoid them. That way, you can work on keeping problems with constipation, diarrhea, belly pain, and bloating to a minimum.

                IBS is different for everyone, but it may help to keep track of how you react to the most common symptom triggers and learn to prevent them.

            </p>

            <img className="about-img-1" src="https://www.eventsfactor.co.uk/wp-content/uploads/hot-dog-cart-large-FI-857x440.jpg" ></img>

            <p className="about-text">

              When you know the things that can make your IBS symptoms flare up, called triggers, you can make a plan to avoid them. That way, you can work on keeping problems with constipation, diarrhea, belly pain, and bloating to a minimum.

              IBS is different for everyone, but it may help to keep track of how you react to the most common symptom triggers and learn to prevent them.

            </p>
        </div>

      </div>
    )
  }
}
