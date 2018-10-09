import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import "../../styles/size.sass";

class StepTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            size: '',
            show: true
        }
    }
  render() {
      const handleClick = (event) => {
          this.props.PickDrink(event.currentTarget.textContent)
      }
      const StepTwoChange = () => {
        this.props.StepTwoChange(this.state.show)
      }
      const BackStepToOne = () => {
        this.props.BackStepToOne(this.state.show)
      }

    const buns = [
        { bunType: 'Whole Wheat', src: 'https://www.theflavorbender.com/wp-content/uploads/2015/07/Hot-dog-Buns-Featured-480x270.jpg' },
        { bunType: 'White Wheat', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQC5Up9sScFXhtEK0mZzzO1aS-9Yy6EhPx6v-gM7oWIK5NdE0C' },
        { bunType: 'Gluten Free', src: 'https://img.thrfun.com/img/081/644/hot_dog_buns_l1.jpg' },
    ]


    return (
      <div className="">
        <h2>STEP 2</h2>
        <h5> Pick a Drink </h5>

          <div className="hotdog-size">
          {
            buns.map(( item, index ) => {
              return(
                
                  <div className="hotdog-size-each">
                    
                    <Button onClick={handleClick} color="primary">
                    <img src={ item.src } className="hotdog-size-img"></img>
                    </Button>
                     <Button onClick={handleClick} color="primary">{ item.bunType }</Button>      


                  
                  </div>
              )
            })
          }
          </div>
        
          <div>
              <Button onClick={BackStepToOne}> Previous Step </Button>
              <Button  onClick={StepTwoChange} > Next Step </Button>
          </div>
      </div>
    );
  }
}

export default StepTwo;
