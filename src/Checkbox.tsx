import React, { ChangeEvent } from 'react';
import './DropdownMenu.css';
import './index.css'

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
          <input
            type="checkbox"
            className="checkbox-input"
            checked={checked}
            onChange={handleCheckboxChange}
          />
    );
};

export default Checkbox;

