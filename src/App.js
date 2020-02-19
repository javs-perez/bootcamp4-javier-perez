import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);


    const filterUpdate = (value) => {
        //Here you can set the filterText property of state to the value passed into this function
    };

    const selectedUpdate = (id) => {
        setSelectedBuilding(id);
        console.log(id);
    };




    return (
        <div className="bg">
            <div className="row">
                <h1>UF Directory App</h1>
            </div>

            <Search/>
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
                                />
                            </table>
                        </div>
                    </div>
                    <div className="column2">
                        <ViewBuilding/>
                    </div>
                </div>
                <Credit/>
            </main>
        </div>
    );
};


export default App;
