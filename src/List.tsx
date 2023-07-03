import React from 'react';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from './Checkbox.tsx';
import './App.css';
import './index.css'
import './DropdownMenu.css';



interface ListProps {
    label: string;
    isSelected: boolean;
    onChange: () => void;
}


const List: React.FC<ListProps> = ({ label, isSelected, onChange }) => {
    const handleCheckboxChange = () => {
        onChange();
    };

    return (
        <div className="list">
            <Checkbox checked={isSelected} onChange={() => handleCheckboxChange()} />
            <span style={{ marginLeft: '0.5em' }}></span>
            <span style={{ marginRight: '0.5em' }}><FontAwesomeIcon icon={faFile} className={'folder-icon'} /></span>
            {label}
        </div>

    );
};

export default List;