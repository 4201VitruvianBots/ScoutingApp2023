import React from "react";
import { ButtonInput, NumberInput } from "./Form";

function ScorePage() {
    return (
        <div>
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
        </div>
    );
}

// Couldn't figure out how to color just the bottom row using CSS so here is my scuffed method
function BottomRow() {
    return (
        <div className="BottomRow">
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
            <div className="ScoreRows">
                <ButtonInput />
                <ButtonInput />
                <ButtonInput />
            </div>
        </div>
    );
}

function ScoringNumbers() {
    return(
        <div className="ScorePage">
            <p>Auto Docked Robots</p>
            <NumberInput /> 
            <p>Auto Balanced Robots</p>
            <NumberInput />
            <p>Number of Mobility Robots</p>
            <NumberInput />
            <p>TeleOp Docked Robots</p>
            <NumberInput />
            <p>TeleOp Balanced Robots</p>
            <NumberInput />
            <p>Number of Parked Robots</p>
            <NumberInput />
        </div>
    );
}

export { ScorePage, BottomRow, ScoringNumbers }
