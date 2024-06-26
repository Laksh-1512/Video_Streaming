import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chacheResults } from '../utils/SearchSlice';

const SearchOptions = ({ search }) => {
    const dispatch = useDispatch();
    const [searchArray, setSearchArray] = useState([]);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchCache[search]) {
                setSearchArray(searchCache[search]);
                // console.log("cache hit");
            } else {
                getSearchOptions();
            }
        }, 200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [search, searchCache]);

    const getSearchOptions = async () => {
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + search);
        const json = await data.json();
        setSearchArray(json[1]);
        console.log("api call");
        dispatch(chacheResults({
            [search]: json[1],
        }));
    };

    return (
        <div className='w-[32rem] mx-1 bg-white border border-gray-400 p-2 absolute opacity-95 rounded-md '>
            <ul>
                {searchArray.map((e, index) => (
                    <li key={index} className='p-1 shadow-sm font-semibold hover:bg-slate-200 rounded-md'>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchOptions;
