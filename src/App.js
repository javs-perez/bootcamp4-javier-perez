import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);


    const filterUpdate = (value) => {
        setFilterText(value);
    };

    const selectedUpdate = (id) => {
        setSelectedBuilding(id);
    };




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
                                    data={props.data}
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
                        />
                    </div>
                </div>
                <Credit/>
            </main>
        </div>
    );
};


export default App;
