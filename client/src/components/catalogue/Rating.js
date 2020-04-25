import React, { Component } from 'react';

const starFull='../../../images/icons/starfull.png'
const starHalf='../../../images/icons/starhalf.png'
const starEmpty='../../../images/icons/starempty.png'

const Rating = (props) => {
    return(
        <div className="center rating">
        {props.children <0.3 ? <img  src={starEmpty} alt="star1"/> : ""}
        {props.children >=0.3 && props.children <0.7 ? <img src={starHalf} alt="star1"/> : ""}
        {props.children >=0.7 ? <img src={starFull} alt="star1"/> : ""}

        {props.children <1.3 ? <img src={starEmpty} alt="star2"/> : ""}
        {props.children >=1.3 && props.children <1.7 ? <img src={starHalf} alt="star2"/> : ""}
        {props.children >=1.7 ? <img src={starFull} alt="star2"/> : ""}

        {props.children <2.3 ? <img src={starEmpty} alt="star3"/> : ""}
        {props.children >=2.3 && props.children <2.7 ? <img src={starHalf} alt="star3"/> : ""}
        {props.children >=2.7 ? <img src={starFull} alt="star3"/> : ""}

        {props.children <3.3 ? <img src={starEmpty} alt="star4"/> : ""}
        {props.children >=3.3 && props.children < 3.7 ? <img src={starHalf} alt="star4"/> : ""}
        {props.children >=3.7 ? <img src={starFull} alt="star4"/> : ""}

        {props.children <4.3 ? <img src={starEmpty} alt="star5"/> : ""}
        {props.children >=4.3 && props.children <4.7? <img src={starHalf} alt="star5"/> : ""}
        {props.children >=4.7 ? <img src={starFull} alt="star5"/> : ""}
     </div>
    )

}

export default Rating