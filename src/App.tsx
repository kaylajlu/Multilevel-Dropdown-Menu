import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import List from './List';
import './App.css';
import './index.css'
import './DropdownMenu.css';


interface Area {
    label: string;
    subitems: LineType[];
    isSelected: boolean;
    isOpen: boolean;

}

interface LineType {
    label: string;
    subitems: Location[];
    isSelected: boolean;
    isOpen: boolean;
}

interface Location {
    label: string;
    isSelected: boolean;
}



const App: React.FC = () => {


    const initialMenuData: Area[] = [{
        label: 'Brazil',
        subitems: [],
        isSelected: false,
        isOpen: false
    },
    {
        label: 'CMH',
        subitems: [
            {
                label: 'Adkins',
                subitems: [
                    {
                        label: 'Adkins to Beatty Primary',
                        isSelected: false
                    },
                    {
                        label: 'Adkins to Beatty Secondary',
                        isSelected: false
                    },
                    {
                        label: 'GE UR D60',
                        isSelected: false
                    },
                    {
                        label: 'SEL -351S',
                        isSelected: false
                    },
                    {
                        label: 'SEL -421',
                        isSelected: false
                    }
                ],
                isSelected: false,
                isOpen: false
            },
            {
                label: 'Beatty',
                subitems: [
                    {
                        label: 'Option One',
                        isSelected: false
                    },
                    {
                        label: 'Option Two',
                        isSelected: false
                    }
                ],
                isSelected: false,
                isOpen: false
            },
            {
                label: 'Bixby',
                subitems: [
                    {
                        label: 'Option One',
                        isSelected: false
                    },
                    {
                        label: 'Option Two',
                        isSelected: false
                    }
                ],
                isSelected: false,
                isOpen: false
            },
            {
                label: 'Circleville',
                subitems: [
                    {
                        label: 'Option One',
                        isSelected: false
                    },
                    {
                        label: 'Option Two',
                        isSelected: false
                    }
                ],
                isSelected: false,
                isOpen: false
            }
        ],
        isSelected: false,
        isOpen: false
    }
    ];

    const [menuData, setData] = useState(initialMenuData);

    const renderDropdownMenuArea = (data: Area, updateMenuData: (content: Area[]) => void) => {
        const handleCheckboxChange = () => {
            const updatedMenuData = [...menuData];
            const areaIndex = updatedMenuData.findIndex((area) => area.label === data.label);
            updatedMenuData[areaIndex].isSelected = !updatedMenuData[areaIndex].isSelected;
            if (updatedMenuData[areaIndex].isSelected) {
                updatedMenuData[areaIndex].subitems.forEach((lineType) => {
                    lineType.isSelected = true;
                });
                updatedMenuData[areaIndex].subitems.forEach((lineType) => {
                    lineType.subitems.forEach((location) => {
                        location.isSelected = true;
                    })
                });
            } else if (!updatedMenuData[areaIndex].isSelected && !updatedMenuData[areaIndex].isOpen) {
                updatedMenuData[areaIndex].subitems.forEach((lineType) => {
                    lineType.isSelected = false;
                });
                updatedMenuData[areaIndex].subitems.forEach((lineType) => {
                    lineType.subitems.forEach((location) => {
                        location.isSelected = false;
                    })
                });
            }
            updateMenuData(updatedMenuData);
        };
        const toggleMenu = () => {
            const updatedMenuData = [...menuData];
            const areaIndex = updatedMenuData.findIndex((area) => area.label === data.label);
            updatedMenuData[areaIndex].isOpen = !updatedMenuData[areaIndex].isOpen;
            if (!updatedMenuData[areaIndex].isOpen) {
                updatedMenuData[areaIndex].subitems.forEach((lineType) => {
                    lineType.isOpen = false;
                });
            }
            updateMenuData(updatedMenuData);
        }
        return (
            <DropdownMenu label={data.label} isSelected={data.isSelected} isOpen={data.isOpen} onChange={handleCheckboxChange} onToggle={toggleMenu}>
                {data.subitems.map((subitem, index) => (
                    <React.Fragment key={index}> {renderDropdownMenuLineType(subitem, updateMenuData, data)} </React.Fragment>
                ))}
            </DropdownMenu>

        );
    };

    const renderDropdownMenuLineType = (data: LineType, updateMenuData: (content: Area[]) => void, areaData: Area) => {
        const handleCheckboxChange = () => {
            const updatedMenuData = [...menuData];
            const areaIndex = updatedMenuData.findIndex((area) => area.label === areaData.label);
            const lineTypeIndex = updatedMenuData[areaIndex].subitems.findIndex((lineType) => lineType.label === data.label);
            updatedMenuData[areaIndex].subitems[lineTypeIndex].isSelected = !updatedMenuData[areaIndex].subitems[lineTypeIndex].isSelected;

            if (updatedMenuData[areaIndex].subitems[lineTypeIndex].isSelected) {
                updatedMenuData[areaIndex].subitems[lineTypeIndex].subitems.forEach((location) => {
                    location.isSelected = true;
                });
            } else if (!updatedMenuData[areaIndex].subitems[lineTypeIndex].isSelected && !updatedMenuData[areaIndex].subitems[lineTypeIndex].isOpen) {
                updatedMenuData[areaIndex].subitems[lineTypeIndex].subitems.forEach((location) => {
                    location.isSelected = false;
                });
            }
            updateMenuData(updatedMenuData);
        };

        const toggleMenu = () => {
            const updatedMenuData = [...menuData];
            const areaIndex = updatedMenuData.findIndex((area) => area.label === areaData.label);
            const lineTypeIndex = updatedMenuData[areaIndex].subitems.findIndex((lineType) => lineType.label === data.label);
            updatedMenuData[areaIndex].subitems[lineTypeIndex].isOpen = !updatedMenuData[areaIndex].subitems[lineTypeIndex].isOpen;
            updateMenuData(updatedMenuData);
        };
        return (
            <DropdownMenu label={data.label} isSelected={data.isSelected} isOpen={data.isOpen} onChange={handleCheckboxChange} onToggle={toggleMenu}>
                {data.subitems.map((subitem, index) => (
                    <React.Fragment key={index}>{renderDropdownMenuLocation(subitem, updateMenuData, areaData, data)}</React.Fragment>
                ))}
            </DropdownMenu>
        );
    };


    const renderDropdownMenuLocation = (data: Location, updateMenuData: (content: Area[]) => void, areaData: Area, lineTypeData: LineType) => {

        const handleCheckboxChange = () => {
            const updatedMenuData = [...menuData];
            const areaIndex = updatedMenuData.findIndex((area) => area.label === areaData.label);
            const lineTypeIndex = updatedMenuData[areaIndex].subitems.findIndex((lineType) => lineType.label === lineTypeData.label);
            const locationIndex = updatedMenuData[areaIndex].subitems[lineTypeIndex].subitems.findIndex((location) => location.label === data.label);
            updatedMenuData[areaIndex].subitems[lineTypeIndex].subitems[locationIndex].isSelected
                = !updatedMenuData[areaIndex].subitems[lineTypeIndex].subitems[locationIndex].isSelected;
            updateMenuData(updatedMenuData);
        };

        return (
            <div>
                <List label={data.label} isSelected={data.isSelected} onChange={handleCheckboxChange}></List>
            </div>
        );
    };




    const updateMenuData = (content: Area[]) => {
        setData(content);
    }

    return (
        <div>
            <div className="title">Device Selection</div>
            {menuData.map((menu, index) => (
                <React.Fragment key={index}>{renderDropdownMenuArea(menu, updateMenuData)}</React.Fragment>
            ))}
        </div>
    );
};

export default App;








