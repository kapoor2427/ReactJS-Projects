import React from 'react';
import './productcard.css';
import img from './cod.jpg';


class Product extends React.Component{
    render(){
        return(
                <div className="card">
                    <img src={img}/>
                    <h3>Call of Duty</h3>
                    <p>$20.00</p>
                    <p>Some Text: hbhj bbfhvb jhbjv hfbjdhbdv jhfbhvj bhjdfv jhfvbhjb hjbfjhvbdj fvbhjfdbvhj bhdfbvh jbfhdvbjd</p>
                    <button>Add to Cart</button>
                </div>
        )
    }
}

export default Product;