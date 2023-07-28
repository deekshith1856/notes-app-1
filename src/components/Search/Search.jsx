import React from 'react';

function SearchTable({ handleSearchTerm }) {


    return (
        <div className='searchBox' >
            <input
                type="text"
                className='searchBox'
                onChange={e => handleSearchTerm(e.target.value)}
                placeholder="Search by title"

            />

        </div>
    );
}

export default SearchTable;