import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import "../../styles/size.sass";
class StepOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: '',
            show: true
        }
    }
  render() {
      const handleClick = (event) => {
          this.props.PickSize(event.currentTarget.textContent)
      }
      const StepOneChange = () => {
        this.props.StepOneChange(this.state.show)
      }


    return (

        
      <div className="">
        <h4>STEP 1</h4>
        <h5> Pick a Size </h5>
        <div className="hotdog-size">
            <div className="hotdog-size-each">
                <Button onClick={handleClick} color="primary">
                <img src="http://www.dvo.com/recipe_pages/rhodesbread/Bite_Size_Hot_Dogs.jpg" 
                className="hotdog-size-img"></img>
                </Button>
                <Button onClick={handleClick} color="primary">Small</Button>             
            </div>
            <div className="hotdog-size-each">
                <Button onClick={handleClick} color="primary">
                <img src="https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock_000006788713_small.jpg?itok=ZJAV7qdS"
                className="hotdog-size-img"></img>
                </Button>
                <Button onClick={handleClick} color="primary">Medium</Button>             

            </div>
            <div className="hotdog-size-each">
                <Button >
                    <img src="https://media.istockphoto.com/photos/two-tasty-hot-dogs-picture-id905001220?k=6&m=905001220&s=612x612&w=0&h=9PD1PyB3u2fk53i5LR8Hs49ouhwVXtO_8JgO5IAATqE="
                    className="hotdog-size-img"></img>
                </Button>
                <Button onClick={handleClick} color="primary">Large</Button>             

            </div>
        </div>
        <div>
            <Button onClick={StepOneChange} > Next Step </Button>
        </div>
      </div>
    );
  }
}

export default StepOne;
