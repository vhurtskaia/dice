/** @jsxImportSource @emotion/react */
'use client'

import {css} from "@emotion/react";
import {Button, FormControl, FormControlLabel, Radio, RadioGroup, Slider, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {setStatus, resetGame, playGame, setNumber} from "./diceSlice";
import {useEffect} from "react";

export const DiceGame = () => {
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
            gap: '16px'
        }),

        box: css({
            width: '320px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }),

        result: css({
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            backgroundColor: '#F5F5F5',
        }),

        radioGroup: css({
            justifyContent: 'center',
        }),

        slider: css({
            margin: '24px 0 20px',
        }),
    }

    const DEFAULT_NUMBER = 50;
    const dispatch = useAppDispatch();

    const number = useAppSelector((state) => state.dice.number);
    const status = useAppSelector((state) => state.dice.status);
    const bigNumber = useAppSelector((state) => state.dice.history[0]?.result);

    const marks = [
        {value: 1, label: '1'},
        {value: 20},
        {value: 40},
        {value: 60},
        {value: 80},
        {value: 100, label: '100'},
    ];

    const handleSliderChange = (event: Event, value: number | number[]) => {
        dispatch(setNumber(value as number))
    };

    const handlePlay = () => {
        dispatch(playGame());
    };

    useEffect(() => {
        dispatch(resetGame());
    }, [number, status, dispatch]);

    return (
        <div css={stylesCss.box}>
            <Typography variant="h1" css={stylesCss.result}>
                {bigNumber ? bigNumber : DEFAULT_NUMBER }
            </Typography>

            <FormControl>
                <RadioGroup
                    row
                    css={stylesCss.radioGroup}
                    defaultValue="under"
                    name="radio-buttons-group"
                    onChange={(e) => dispatch(setStatus(e.target.value as 'under' | 'over'))}
                >
                    <FormControlLabel
                        labelPlacement={'start'}
                        value="under"
                        control={<Radio color={'secondary'}/>}
                        label="Under"
                    />

                    <FormControlLabel
                        labelPlacement={'start'}
                        value="over"
                        control={<Radio color={'secondary'}/>}
                        label="Over"
                    />
                </RadioGroup>
            </FormControl>

            <Slider
                aria-label="Range"
                defaultValue={DEFAULT_NUMBER}
                css={stylesCss.slider}
                color={'secondary'}
                valueLabelDisplay="on"
                marks={marks}
                min={1}
                max={100}
                onChange={handleSliderChange}
            />

            <Button
                size={'large'}
                variant="contained"
                fullWidth
                color={'secondary'}
                onClick={handlePlay}
            >
                Play
            </Button>
        </div>
    )
}