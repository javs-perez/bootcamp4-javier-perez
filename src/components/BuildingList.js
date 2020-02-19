import React from 'react';

const BuildingList = (props) => {
    let buildings = props.filterText ? props.data.filter((e) => e.name.toLowerCase().indexOf(props.filterText.toLowerCase()) !== -1) : props.data

    const buildingList = buildings.map(directory => {
        return (
                <tr className={props.selectedBuilding === directory.id ? "blue-bg" : ""} key={directory.id} onClick={props.selectedUpdate.bind(null, directory.id)}>
                    <td>{directory.code}</td>
                    <td>{directory.name}</td>
                </tr>
        );
    });

    return <div>{buildingList}</div>;
};

export default BuildingList;
