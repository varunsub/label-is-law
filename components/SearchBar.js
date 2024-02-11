import _ from 'lodash';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { FaCircleQuestion } from 'react-icons/fa6';
export const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const debouncedSearch = useCallback(
        _.debounce((nextTerm) => onSearch(nextTerm), 500),
        [onSearch],
    );

    useEffect(() => {
        debouncedSearch(term);
        return () => debouncedSearch.cancel();
    }, [term, debouncedSearch]);

    return (
        <>
            <label className='form-control w-full flex flex-col items-center justify-center'>
                <div className='w-100 justify-center flex flex-col items-center pt-10 text-center'>
                    <h1 className='font-serif text-6xl text-white pb-4'>
                        Check your Label
                    </h1>
                    <h2 className='text-primary text-md pb-6'>
                        Enter a pesticide to check which household products
                        contain it
                    </h2>
                </div>
                <div className='w-100 flex flex-row items-center pt-3 justify-center container ml-8'>
                    <input
                        type='text'
                        placeholder='Enter ingredient here'
                        className='input input-primary w-full   max-w-xl w-xl '
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <div className='pl-4'>
                        <div
                            className='tooltip-right tooltip'
                            data-tip='Search the EPA database for pesticides'
                        >
                            <FaCircleQuestion />
                        </div>
                    </div>
                </div>
            </label>
        </>
    );
};
