import React, { Fragment } from "react";

const Img = (props) => {
    return (
        <Fragment>
            <img
                src={props.img}
                alt={props.name}
                {...props}
                style={{ width: "100%" }}
            />
        </Fragment>
    );
};

export default Img;
