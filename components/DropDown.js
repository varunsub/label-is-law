const DropDown = ({ column, uniqueValues, isDisabled }) => {
    return (
        <select
            className={`select select-bordered w-full max-w-52 ${isDisabled ? 'select-disabled' : ''}`}
            value={column.getFilterValue() || 'all'}
            onChange={(e) => {
                if (e.target.value === 'all') column.setFilterValue();
                else column.setFilterValue(e.target.value);
            }}
            disabled={isDisabled}
        >
            {uniqueValues.map((value) => (
                <option
                    key={value + '_' + column.getFilterValue()}
                    value={
                        value === 'all' ? 'all' : value === null ? 'N/A' : value
                    }
                >
                    {value === 'all' ? 'All' : value === null ? 'N/A' : value}
                </option>
            ))}
        </select>
    );
};

export default DropDown;
