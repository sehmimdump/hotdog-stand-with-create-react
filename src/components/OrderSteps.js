import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import StepOne from "./order/StepOne";
import StepTwo from "./order/StepTwo";
import StepThree from "./order/StepThree";
import StepFour from "./order/StepFour";


import {  } from "../styles/order.sass";

class OrderSteps extends Component {
    state = {
        size: '',
        bun: '',
        susage: '',
        Condiments: '',
        StepNumber: '0',
        final : false
    }
    handleSize = (data) => {
        this.setState({
            size : data
        })
    }
    
    PickDrink = (data) => {
        this.setState({
            bun : data
        })
    }

    PickMilk = (data) => {
        this.setState({
            susage : data
        })
    }

    PickSyrup = (data) => {
        this.setState({
            Condiments : data
        })
    }


    StepOneChange = () => {
        if (this.state.size === '') {
            alert('Pick A Size')
        }
        else if (this.state.size != '') {
            this.setState({
                StepNumber : '1'
            }) 
        }
    }

    StepTwoChange = () => {
        if (this.state.bun === '') {
            alert('Pick A Bun')
        }
        else if (this.state.size != '') {
            this.setState({
                StepNumber : '2'
            })
        }

    }

    StepThreeChange = () => {
        this.setState({
            StepNumber : '3'
        })
    }

    StepFourChange = () => {
        this.setState({
            StepNumber : '4'
        })     
    }

    // BACK STEPS
    BackStepToOne = () => {
        this.setState({
            StepNumber : '0'
        })  
        }
    BackStepToTwo = () => {
        this.setState({
            StepNumber : '1'
        })   
    }
    BackStepToThree = () => {
        this.setState({
            StepNumber : '2'
        })   
    }
    BackStepToFour = () => {
        this.setState({
            StepNumber : '3'
        })   
    }

    render() {



    return (
      <div className="">

      { 
          this.state.StepNumber === '4' ? 
            null
          :
          <div className="cover">
            <h2 className="header-main"> Let's Order Some HotDogs </h2>
          <h3 className="header-sub"> Order </h3>
            <div className="conttent-body">
                <div className="conttent-each"> Size : <span className="content-inside">{ this.state.size } </span> </div>
                <div className="conttent-each"> Bun Type : <span className="content-inside"> { this.state.bun } </span> </div>
                <div className="conttent-each"> Susage : <span className="content-inside"> { this.state.susage }  </span></div>
                <div className="conttent-each"> Condiments : <span className="content-inside"> { this.state.Condiments }  </span> </div>     
            </div>
          </div>
      }

        <div>
            {

            this.state.StepNumber === '0' ? 
            <StepOne PickSize={this.handleSize} StepOneChange = {this.StepOneChange} />
            :
            this.state.StepNumber === '1' ? 
            <StepTwo PickDrink = { this.PickDrink } StepTwoChange = {this.StepTwoChange } BackStepToOne = {this.BackStepToOne} ></StepTwo>
            :
            this.state.StepNumber === '2' ? 
            <StepThree PickDrink = { this.PickMilk } StepThreeChange = {this.StepThreeChange  } BackStepToTwo = {this.BackStepToTwo}></StepThree>
            :
            this.state.StepNumber === '3' ? 
            <StepFour PickDrink = { this.PickSyrup } StepFourChange = {this.StepFourChange } BackStepToThree = {this.BackStepToThree}></StepFour>
            :
            <div className="cover">
                <h1 className="header-main"> Order Overview</h1>
                <h5 className="header-sub"> Your Getting A </h5>
                <p className="conttent-each">
                    <span className="size-bold"> { this.state.size } </span>
                    <span className="size-sub">  Sized HotDog. </span> <br />
                    <span className="size-bold"> { this.state.bun }</span>
                    <span className="size-sub">  Bun. </span> <br /> 
                    <span className="size-sub">  With </span> <br /> 
                    <span className="size-bold">  { this.state.susage } </span>
                    <span className="size-sub"> Susage And </span>
                    <span className="size-bold">   { this.state.Condiments } </span>
                </p>

                <button className="change-button" onClick={ this.BackStepToFour } > Change Something </button>
            </div>
            }
        </div>    
      </div>
    );
  }
}

export default OrderSteps;
