'use client';
import { DropDown } from '@/components/DropDown';
import { useReactTableWrapper } from '@/hooks/useReactTableWrapper';
import { SearchBar } from '@/components/SearchBar';
import TableContainer from '@/components/tables/TableContainer';
import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import apiService from '@/lib/ApiService';
import FilterHandler from './filters/FilterHandler';
import { useDebounce } from '@uidotdev/usehooks';

export default function MainPage() {
    const [searchTerm, setSearchTerm] = useState('');
    // const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const [sorting, setSorting] = useState([]);
    const [filter, setFilter] = useState([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ['search', searchTerm],
        queryFn: async ({ queryKey }) => {
            return queryKey[1] == '' ? null : apiService(queryKey[1], {});
        },
        retry: false,
        staleTime: 1000 * 60 * 10,
    });

    const syncedData = useMemo(() => {
        if (data && data.items) return data.items;
        else return [];
    }, [data]);

    const table = useReactTableWrapper(
        syncedData,
        sorting,
        setSorting,
        filter,
        setFilter,
    );
    const dataExists = useMemo(() => {
        return syncedData.length > 0;
    }, [data]);

    return (
        <main className='w-auto h-80'>
            <div className='container flex flex-col justify-center items-center content-center relative'>
                <div className='flex flex-row pb-8'>
                    <SearchBar onSearch={setSearchTerm} />
                </div>
                {isLoading ? (
                    Array(10)
                        .fill()
                        .map((_, index) => (
                            <div
                                className='skeleton h-4  mb-5 px-10  w-[200%]'
                                key={`skeleton_${index}`}
                            />
                        ))
                ) : error ? (
                    <div className='w-100'>
                        Oops, something went wrong! Please reload the page and
                        try again!
                        <br />
                        This could happen if the text you entered is too short.
                    </div>
                ) : dataExists ? (
                    <>
                        <FilterHandler
                            table={table}
                            data={data}
                            filter={filter}
                            setFilter={setFilter}
                        />
                        <TableContainer table={table} />
                    </>
                ) : (
                    <div>
                        {searchTerm === ''
                            ? 'Start typing to see results'
                            : 'No results found. Try another ingredient!'}
                    </div>
                )}
            </div>
        </main>
    );
}
