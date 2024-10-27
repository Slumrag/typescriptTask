
import './Filter.css';

import React from "react";
import { VehicleTypeSelect, } from "../VehicleTypeSelect";
import { VehicleFilter } from "../../data/vehicles/contracts";
export interface FilterProps {
    filter: VehicleFilter;
    onFilterChange: (value: VehicleFilter | null) => void;
}
export const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
    return (
        <div className="Filter">
            <input className='FilterInput' type="search" maxLength={25} placeholder="введите марку автомобиля..."
                onChange={(e) => {
                    const title = e.target.value;
                    onFilterChange({ title } as VehicleFilter);
                }

                } />
            <VehicleTypeSelect value={filter?.type} onChange={(type) => {
                onFilterChange({ type } as VehicleFilter)
            }} />
        </div>
    )
}
