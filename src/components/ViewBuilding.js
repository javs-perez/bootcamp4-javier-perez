import React, {useState, useEffect} from 'react';

function NoBuildingText() {
    return <div><p><i>Click on a name to view more information</i></p></div>
}

function BuildingInfo(props) {
    if (props.building.coordinates) {
        return <div>
            <div className="row">
                <h2>{props.building.name} | ID: {props.building.id}</h2>
                <h3>Address </h3>
                <p>{props.building.address}</p>
                <h3>Code</h3>
                <p>{props.building.code}</p>
                <h3>Coordinates</h3>
                <p>Latitude: {props.building.coordinates.latitude}</p>
                <p>Longitude: {props.building.coordinates.longitude}</p>
            </div>
            <div className="row">
                <button onClick={props.deleteBuilding.bind(null, props.building.id)}>Delete Building</button>
            </div>
        </div>
    }
    return <div>
        <div className="row">
            <h2>{props.building.name} | ID: {props.building.id}</h2>
            <h3>Address </h3>
            <p>{props.building.address}</p>
            <h3>Code</h3>
            <p>{props.building.code}</p>
        </div>
        <div className="row">
            <button onClick={props.deleteBuilding.bind(null, props.building.id)}>Delete Building</button>
        </div>
    </div>
}

const ViewBuilding = (props) => {
    const [buildingId, setBuildingId] = useState(props.selectedBuilding);
    // This will launch only if props.seletedBuilding value has chaged.
    useEffect(() => { setBuildingId(props.selectedBuilding) }, [props.selectedBuilding]);
    const building = props.data.find((e) => e.id === buildingId);

    if (building) {
        return <BuildingInfo  building={building} deleteBuilding={props.deleteBuilding}/>;
    }
    return <NoBuildingText />;
};

export default ViewBuilding;
