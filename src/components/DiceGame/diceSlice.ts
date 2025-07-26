import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GameHistory {
    timestamp: string;
    status: 'under' | 'over';
    threshold: number;
    result: number;
    win: boolean;
}

interface DiceState {
    number: number;
    status: 'under' | 'over';
    result: number | null;
    gameResult: 'win' | 'lose' | null;
    history: GameHistory[];
}

const initialState: DiceState = {
    number: 50,
    status: 'under',
    result: null,
    gameResult: null,
    history: [],
}

const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
        setNumber: (state, action: PayloadAction<number>) => {
            state.number = action.payload;
        },
        setStatus: (state, action: PayloadAction<'under' | 'over'>) => {
            state.status = action.payload;
        },
        playGame: (state) => {
            const diceResult = Math.floor(Math.random() * 100) + 1;
            state.result = diceResult;

            const isWin = state.status === 'under'
                ? diceResult < state.number
                : diceResult > state.number;

            state.gameResult = isWin ? 'win' : 'lose';

            const now = new Date();
            const timestamp = now.toTimeString().split(' ')[0];

            const historyEntry: GameHistory = {
                timestamp: timestamp,
                status: state.status,
                threshold: state.number,
                result: diceResult,
                win: isWin
            };


            state.history.unshift(historyEntry);

            if (state.history.length > 10) {
                state.history.pop();
            }
        },

        resetGame: (state) => {
            state.result = null;
            state.gameResult = null;
        }
    }
})

export const {
    setNumber,
    setStatus,
    playGame,
    resetGame
} = diceSlice.actions

export default diceSlice.reducer