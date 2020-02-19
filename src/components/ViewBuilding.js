import React, {useState, useEffect} from 'react';

function NoBuildingText() {
    return <div><p><i>Click on a name to view more information</i></p></div>
}

function BuildingInfo(building) {
    console.log(building.building.name)
    if (building.building.coordinates) {
        return <div className="row">
            <h2>{building.building.name} | ID: {building.building.id}</h2>
            <h3>Address </h3>
            <p>{building.building.address}</p>
            <h3>Code</h3>
            <p>{building.building.code}</p>
            <h3>Coordinates</h3>
            <p>Latitude: {building.building.coordinates.latitude}</p>
            <p>Longitude: {building.building.coordinates.longitude}</p>
        </div>
    }
    return <div className="row">
        <h2>{building.building.name} | ID: {building.building.id}</h2>
        <h3>Address </h3>
        <p>{building.building.address}</p>
        <h3>Code</h3>
        <p>{building.building.code}</p>
    </div>
}

const ViewBuilding = (props) => {
    const [buildingId, setBuildingId] = useState(props.selectedBuilding);
    // This will launch only if props.seletedBuilding value has chaged.
    useEffect(() => { setBuildingId(props.selectedBuilding) }, [props.selectedBuilding]);
    const building = props.data.find((e) => e.id === buildingId)

    if (building) {
        return <BuildingInfo building={building}/>;
    }
    return <NoBuildingText />;
};

export default ViewBuilding;
