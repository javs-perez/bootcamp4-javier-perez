import React, {useState, useEffect} from 'react';

const BuildingList = (props) => {
    const buildingList = props.data.map(directory => {
        return (
                <tr className={props.selectedBuilding == directory.id ? "blue-bg" : ""} key={directory.id} onClick={props.selectedUpdate.bind(null, directory.id)}>
                    <td>{directory.code} </td>
                    <td> {directory.name} </td>
                </tr>
        );
    });

    return <div>{buildingList}</div>;
};

export default BuildingList;
