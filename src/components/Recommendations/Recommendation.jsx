import React, { Fragment } from "react";
import { restaurantData } from "../../restaurantData";
import Place from "../Reusable/Place";
import classes from "./Recommendation.module.scss";

const Recommendation = () => {
    console.log(restaurantData);
    return (
        <Fragment>
            <div className={classes.recommendationContent}>
                {restaurantData.map((place) => (
                    <Place key={place.id} {...place} />
                ))}
            </div>
        </Fragment>
    );
};

export default Recommendation;
