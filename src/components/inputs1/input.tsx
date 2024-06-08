// Input1.tsx
import React from "react";

interface Input1Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input1: React.FC<Input1Props> = ({ onChange }) => {
    return (
        <div className="Filteres">
            <input
                className="Countries"
                type="text"
                placeholder="Search For a Country"
                onChange={onChange}
            />
            <input className="Regions" type="text" placeholder="filter By Region" />
        </div>
    );
};

export default Input1;
