import React, { Fragment } from "react";
import Img from "../shared/Img";
import { v4 } from "uuid";
import classes from "./Place.module.scss";

const Place = (props) => {
    console.log(props);
    return (
        <Fragment>
            <div className={classes.imageContainer}>
                {/* {props.img.map((img) => (
                    <Img name={props.name} img={img[0]} key={v4()} />
                ))} */}
                <Img name={props.name} img={props.img[0]} />
                <h1>{props.name}</h1>
            </div>
        </Fragment>
    );
};

export default Place;
