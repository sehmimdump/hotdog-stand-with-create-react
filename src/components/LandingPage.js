import React from "react";
import ReactDOM from "react-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'



// css
import '../styles/first.sass';
import '../styles/card.sass';
import '../styles/hamburger.sass';

class LandingPage extends React.Component {

  state = {
    pop : "dick"
  }

  render() {
    const NavData = [
      { title: 'Menu' , href: '#menu' },
      { title: 'Location' , href: '#location' },
      { title: 'About Us' , href: '#about' },
      { title: 'Reviews' , href: '#reviews' }
    ]

    const SideNavData = [
      { title: 'FACEBOOK' , href: 'https://www.instagram.com/' },
      { title: 'INSTAGRAM' , href: 'https://www.instagram.com/' }    ]
    return(
      <div className="container">
        <div className="flex-container" >
          <div className="flex-components">
            <div className="flex-navbar-container">
              <a href="/" className="flex-navbar-logo"> LOGO </a>
                
                <div className="flex-navbar-items">
                  <ul className="flex-navbar-ul">
                    {
                      NavData.map((item, index) => {
                        return (
                          <li key={index} className="flex-navbar-item-each">
                            
                            <AnchorLink href={item.href} >     
                              <a  href={item.href} className="flex-navbar-ancor">
                                { item.title }
                              </a>
                            </AnchorLink> 
                          </li>
                        )
                      })
                    }
                  </ul> 
                </div> 
            
            </div>


            <div className="body">
              <a href="#"className="body-header">
                THE RESTURENT
              </a>

                <div className="body-sub-header">
                    We Cook, You Eat...
                </div>
                <div className="body">

                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <a className="card_side card_side--front" href="#">
                          <img className="card-img" src="https://www.ballparkbrand.com/sites/default/files/Hero_Dog_0.png"></img>
                        </a>
                        <div className="card_side card_side--back">
                            <h1 className="header-item"> Hot Dogs </h1>
                            <p className="body-item"> Beef Suasage with Your Choice of Whole or White Buns </p>                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


            <div className="flex-navbar-hamburger-container">
              <div className="navigation" >
                <input type="checkbox" className="navigation_checkbox" id="nav_toggle"></input>
                
                <label htmlFor="nav_toggle" className="navigation_button" >
                
                <img className="ham" src="https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-fast-food-hamburger-flat-icon-by-vexels.png"></img>
                
                </label>
                <div className="navigation_background" >{'\u00A0'}</div>

                <nav className="navigation_nav">
                    <ul className="navigation_list">
                      <h1 className="navigation_header"> Check Us Out On </h1>
                      {
                        SideNavData.map((item, index) => {
                          return (
                            <li key={index} className="navigation_item">
                              <a href={ item.href } className="navigation_link"> { item.title } </a>
                            </li>
                            )
                        })
                      }
                    </ul>
                </nav>

              </div> 
            
            </div>

          </div>
        </div>

        <div className="order-ball" >
          <div className="order-ball-body">
              <a className="order-ball-link" href="order" >
                <img className="order-ball-img"  src="https://melbournechapter.net/images/spatula-clipart-transparent-background-5.png"></img>
              </a>
          </div>
        </div>     
      </div>
    )

  }
}

export default LandingPage;

