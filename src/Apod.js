import React from "react";

const ApodComponent = (props) => {

    const {apodData} = props;
    console.log(apodData)
    return (
            <div className="Apod">
                <h1>{apodData.title}</h1>
                <h1>{apodData.date}</h1>
                <img className="img" src={apodData.url}/>
                <p>{apodData.explanation}</p>
            </div>
        );
    }

    export default ApodComponent;