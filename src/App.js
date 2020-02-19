import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

const App = (props) => {
    const [buildingData, setBuildingData] = useState(props.data)
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);


    const filterUpdate = (value) => {
        setFilterText(value);
    };

    const selectedUpdate = (id) => {
        setSelectedBuilding(id);
    };

    const deleteBuilding = (id) => {
        setBuildingData(buildingData.filter(el => el.id !== id));
        setSelectedBuilding(0);
    }

    const addBuilding = (evt) => {
        evt.preventDefaut();
        console.log(evt);
    }


    return (
        <div className="bg">
            <div className="row">
                <h1>UF Directory App</h1>
            </div>

            <Search filterText={filterText} filterUpdate={filterUpdate}/>
            <main>
                <div className="row">
                    <div className="column1">
                        <div className="tableWrapper">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>
                                        <b>Code Building</b>
                                    </td>
                                </tr>
                                <BuildingList
                                    data={buildingData}
                                    selectedUpdate={selectedUpdate}
                                    selectedBuilding={selectedBuilding}
                                    filterText={filterText}
                                />
                            </table>
                        </div>
                    </div>
                    <div className="column2">
                        <ViewBuilding
                            data={props.data}
                            selectedBuilding={selectedBuilding}
                            deleteBuilding={deleteBuilding}
                        />
                    </div>
                </div>
                <Credit/>
            </main>
        </div>
    );
};


export default App;
