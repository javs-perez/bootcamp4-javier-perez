import React from 'react';

const Search = (props) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Type to Filter"
                value={props.filterText}
                onChange={e => props.filterUpdate(e.target.value)}
            />
        </form>
    );

};

export default Search;
