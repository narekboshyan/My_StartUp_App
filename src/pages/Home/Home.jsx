import React, { Fragment } from "react";
import Recommendation from "../../components/Recommendations/Recommendation";

const Home = () => {
    navigator.geolocation.getCurrentPosition(
        (success) => console.log(success),
        (err) => console.log(err),
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );

    return (
        <Fragment>
            <Recommendation />
        </Fragment>
    );
};

export default Home;
