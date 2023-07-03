import React, { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from './Checkbox.tsx';
import './App.css';
import './index.css'
import './DropdownMenu.css';



interface DropdownMenuProps {
  label: string;
  children?: React.ReactNode;
  isSelected: boolean;
  isOpen: boolean;
  onChange: () => void;
  onToggle: () => void;
}


const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, children, isSelected, isOpen, onChange, onToggle }) => {
  const [rotateAngle, setRotateAngle] = useState(270);

  const toggleMenu = () => {
    onToggle();
    setRotateAngle(!isOpen ? 0 : 270);
  };


  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <div className="dropdown-menu">
      <button className={`dropdown-button`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faAngleDown} className={`rotate-icon`} style={{ transform: `rotate(${rotateAngle}deg)` }} />
      </button>
      <Checkbox checked={isSelected} onChange={() => handleCheckboxChange()} />
      <span style={{ marginRight: '0.5em' }}> <FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolder} className={'folder-icon'}/></span>
      {label}
      {isOpen && <ul className="dropdown-list">{children}</ul>}
    </div>

  );
};

export default DropdownMenu;


