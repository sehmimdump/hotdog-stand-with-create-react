import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class StepFour extends Component {
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
      const StepFourChange = () => {
        this.props.StepFourChange(this.state.show)
      }
      const BackStepToThree = () => {
        this.props.BackStepToThree(this.state.show)
      }

      const condiments = [
        { bunType: 'Ketchup', src: 'https://cdn0.woolworths.media/content/wowproductimages/large/083563.jpg' },
        { bunType: 'Mustard', src: 'https://img.tesco.com/Groceries/pi/689/5052319969689/IDShot_540x540.jpg' },
        { bunType: 'Relish', src: 'https://cdn.shopify.com/s/files/1/0188/0032/products/sauce-goddess-roasted-jalapeno-onion-relish-default-condiment-heat-level-02-condiments-gourmet-chilly-chiles-largest-selection-of-hot-in-canada-chutney_867_2048x.jpg?v=1527310222' },
        { bunType: 'Jalapinio', src: 'https://www.britishcornershop.co.uk/img/large/QWOP2116.jpg' },
        { bunType: 'Olives', src: 'https://cdn.shopify.com/s/files/1/1519/8146/products/151_BenR_170130.jpg?v=1491927594' },
        { bunType: 'Pappers', src: 'https://i1.wp.com/smartstrides.co.za/wp-content/uploads/2017/10/mixed-varities-of-red-peppers.png?resize=324%2C324&ssl=1' }
      ]
    return (
      <div className="">
        <h2>STEP 4</h2>
        <h5> Pick Condiments </h5>
        <div>
        <div className="condiments">
          {
            condiments.map(( item, index ) => {
              return(
                
                  <div key={index} className="condiments-each">

                    <Button onClick={handleClick} color="primary">
                    <img src={ item.src } className="hotdog-size-img"></img>
                    </Button>
                     <Button onClick={handleClick} color="primary">{ item.bunType }</Button>      



                  </div>
              )
            })
          }
          </div>  
        </div>
        <div>
            <Button onClick={BackStepToThree}  > Previous Step </Button>
            <Button onClick={StepFourChange} > Set Order </Button>
        </div>
      </div>
    );
  }
}

export default StepFour;
