import React from "react";
import '../App.css';
import '../styles/CVS.css'
import '../Color.css';
import { Link } from "react-router-dom";

import Screen from '../components/Screen.js'
  
const CVS = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <Link to="/portfolio#UserResearch" className="go-back-link small-font"><i>&#8592; go back to home page</i></Link>
        <h1>CVS Self-Checkout</h1>
        <img className="img-display" src={process.env.PUBLIC_URL+"/images/cvs-project.svg"}/>
      </header>
      <body className='App-body'>
        <div className="body left-align">
          <div className="Project-Overview">
            <h2>Project Overview</h2>
            <p>
              This is a case study of the user experience of CVS self-checkout machines. In this webpage, I do a deep-dive on the design of the CVS self-checkout machines and how customers interact with the design.
              <br/><br/>
              The purpose of this project is to get experience going through the process of gaining user research, creating personas, and creating a final storyboard that documents how a user may interact with the product.
            </p>
          </div>
          <br/>
          <h2>Background</h2>
          <p>CVS customers have the option to purchase their items themselves at self-checkout kiosks. The interface of the kiosk is designed for this purpose, and its key components are documented in the section below.</p>
          <br/>
          <h2>The User Interface</h2>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Overview.png'} title="Overview"
            desc="The kiosk contains the necessary hardware components and instructions for a user to scan and purchase their item(s)."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/First_Screen.png'} title="Home Screen"
            desc="Indicates to the user to scan an item to begin the self-checkout process."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Second_Screen.png'} title="Item Scanner View"
            desc="Allows the user to see what items have been scanned and provides accessibility button options."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Third_Screen.png'} title="Coupon View"
            desc="Allows the user to scan coupons and view the discount applied to their total."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Fourth_Screen.png'} title="Payment View"
            desc="Allows the user to select their payment option."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Fifth_Screen.png'} title="Receipt View"
            desc="Gives the user the option to print a receipt of their purchases."/>
          <Screen img={process.env.PUBLIC_URL+'/images/cvs/Fifth_Screen.png'} title="End of Purchase View"
            desc="Indicates the user is done with the self-checkout process. Gives the option to request help if needed."/>
          <p><b>Problem: </b>Customers often have to wait in line at the cash register to purchase their goods.</p>
          <p><b>Solution: </b>The self-checkout kiosk provides a way for the customer to quickly purchase their items themselves without needing an employee to do it for them. </p>
          <ul>
            <li>The kiosks contain the minimal components needed to complete the transaction, such as the item scanners and card reader for getting the price of the items and for purchasing the items.</li>
            <li>During the process, a monitor visualizes the customer's self-checkout progress and provides step-by-step instructions of how to complete the entire transaction.</li>
            <li>Buttons are provided on each view for all options the customer may want.</li>
          </ul>
          <br/>
          <h2>Observations</h2>
          <ul>
            <li>Users spent several seconds looking at each view before they slowly pressed a button to make a decision.</li>
            <li>Some users were able to scan their items, select buttons, and pay very quickly. There's a several minute time difference between the experienced users and the unexperienced users.</li>
            <li>The employees would often have to help customers choose the right options they needed.</li>
          </ul>
          <br/>
          <h2>Interviews</h2>
          <ul>
            <li>Customers got confused because they didn't know that the machine would prompt them to do so many things. They thought they could just scan their items and then pay.</li>
            <li>Employees often have to tell the customer to place their items bagging area because otherwise the machine would complain and prevent further items from being scanned.</li>
            <li>Each view had too many UI elements that made it difficult for the customer to know what button to push.</li>
            <li>The area to place their items at the kiosk was too small which made it difficult for customers to use self-checkout if they had many items.</li>
          </ul>
          <br/>
          <h2>Personas</h2>
          <p>I constructed a couple personas that represent what I learned from my observations and interviews to better understand the type of people who may use the self-checkout machines.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/cvs/personas.png"}/>
          <br/>
          <h2>Storyboard</h2>
          <p>Storyboards are a great way of detailing the goals of a persona and the steps they take to achieve their goal. Below is a storyboard of the persona, Busy Billy.</p>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/cvs/storyboard-p1.png"}/>
          <img className="general-image" src={process.env.PUBLIC_URL+"/images/cvs/storyboard-p2.png"}/>
          <br/>
          <h2>Conclusion</h2>
          <p>Clearly, there's more work that needs to be done to the interface of the CVS self-checkout machines. However, these are my final conclusions after having observed and interviewed people using the machines:</p>
          <ul>
            <li>Customers come in thinking that the self-checkout will be easier and more convenient, but in the end many find the complete opposite— it's more complicated and less convenient than the cashiers.</li>
            <li>The steps required for the interface and the steps the customers try to take do not align.</li>
            <li>The self-checkout machines do not clearly set the expectations nor instructions of the self-checkout process.</li>
          </ul>
        </div>
      </body>
      <footer className='App-footer'>
        
      </footer>
    </div>
  );
};
  
export default CVS;