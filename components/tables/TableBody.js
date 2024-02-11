import { flexRender } from "@tanstack/react-table";

export const TableBody = ({ rows }) => {
    if (rows && rows.length > 0) {
        return rows.map((row) => (
            <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                    </td>
                ))}
            </tr>
        ));
    }
    return null;
};
