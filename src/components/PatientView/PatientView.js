import React from "react";
import {useParams} from "react-router";
import {Jutsu} from "react-jutsu";

const PatientView = () => {
    const {roomName} = useParams();
    return <Jutsu roomName={`opengp-appointments-${roomName}`}/>
};

export default PatientView;