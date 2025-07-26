/** @jsxImportSource @emotion/react */
'use client'

import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {css} from "@emotion/react";
import {JSX} from "react";
import {useAppSelector} from "@/app/store/hooks";

export const TableWithResults = (): JSX.Element => {
    const history = useAppSelector((state) => state.dice.history);

    const tableCss = {
        tableHead: css({
            height: '56px'
        }),

        tableCell: css({
            width: '200px',
            boxSizing: 'border-box',
        }),
        tableCellWin: css({
            color: '#1B5E20',
        }),
        tableCellLose: css({
            color: '#C62828',
        })
    }

    return (
        <Table aria-label="simple table" size={'small'}>
            <TableHead css={tableCss.tableHead}>
                <TableRow>
                    <TableCell css={tableCss.tableCell}>Time</TableCell>
                    <TableCell css={tableCss.tableCell}>Guess</TableCell>
                    <TableCell css={tableCss.tableCell}>Result</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {history.map((row, index) => (
                    <TableRow key={`game-${index}-${row.timestamp}`}>
                        <TableCell>{row.timestamp}</TableCell>
                        <TableCell>{row.status === 'under' ? 'Under' : 'Over'} {row.result}</TableCell>

                        <TableCell css={row.win ? tableCss.tableCellWin :  tableCss.tableCellLose}>
                            {row.result}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}