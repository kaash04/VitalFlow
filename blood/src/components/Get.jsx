import React, { useState } from 'react';

function Get() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/search?blood_group=${searchValue}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className="sc">
                <div className="searchcontainer">
                    <input
                        type="text"
                        name='search'
                        required
                        className='searchbox'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='Enter Blood Group'
                    />
                    <button className='searchbtn' onClick={handleSearch}>SEARCH</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((result, index) => (
                            
                            <tr key={index}>
                                <td>{result.name}</td>
                                <td>{result.age}</td>
                                <td>{result.blood_group}</td>
                                <td>{result.contact_number}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Get;
