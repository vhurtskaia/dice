import { combineReducers } from '@reduxjs/toolkit'
import diceReducer from "@/components/DiceGame/diceSlice";

export const rootReducer = combineReducers({
    dice: diceReducer
})