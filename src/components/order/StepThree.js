import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class StepThree extends Component {
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
      const StepThreeChange = () => {
        this.props.StepThreeChange(this.state.show)
      }
      const BackStepToTwo = () => {
        this.props.BackStepToTwo(this.state.show)
      }

      const susage = [
        { bunType: 'Regualr', src: 'https://images-na.ssl-images-amazon.com/images/I/4119PbO1iaL.jpg' },
        { bunType: 'Halal', src: 'http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2013/11/vegan-gluten-free-italian-sausage.jpg' },
        { bunType: 'Vegie', src: 'http://21gourmetstreet.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/t/u/turkey_sausages_3.jpg' },
    ]

    return (
      <div className="">
        <h2>STEP 3</h2>
        <h5> Pick Susage Type </h5>
        <div>

          <div className="hotdog-size">
          {
            susage.map(( item, index ) => {
              return(
                
                  <div key={index} className="hotdog-size-each">
                    
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
            <Button  onClick={BackStepToTwo} > Previous Step </Button>
            <Button onClick={StepThreeChange} > Next Step </Button>
        </div>
      </div>
    );
  }
}

export default StepThree;
