/** @jsxImportSource @emotion/react */
'use client'

import {Alert, AlertTitle} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {css} from '@emotion/react'
import {DiceGame, TableWithResults} from "@/components";
import {useAppSelector} from "@/app/store/hooks";

export default function Home() {
    const gameResult = useAppSelector((state) => state.dice.gameResult);

    const stylesCss = {
        main: css({
            height: '100%',
            minHeight: '100vh',
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            padding: '114px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative'
        }),

        alert: css({
            position: 'absolute',
            top: '16px',
            left: '0',
            right: '0',
        })
    }

    return (
        <main css={stylesCss.main}>
            {gameResult === 'win' && (
                <Alert
                    css={stylesCss.alert}
                    variant="filled"
                    severity="success"
                    icon={<CheckCircleOutlineIcon fontSize="inherit"/>}
                >
                    You won
                </Alert>
            )}

            {gameResult === 'lose' && (
                <Alert
                    css={stylesCss.alert}
                    variant="filled"
                    severity="error"
                >
                    <AlertTitle>You lost</AlertTitle>
                    Number was higher
                </Alert>
            )}

            <DiceGame/>

            <TableWithResults/>
        </main>
    );
}