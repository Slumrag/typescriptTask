import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [filter, setFilter] = useState<VehicleFilter>(initialFilter);

    function handleFiler(filter: VehicleFilter | null) {
        if (filter !== null) {
            setFilter(f => ({ ...f, ...filter }));
        }
        else {
            setFilter(initialFilter);
        }
    }
    useEffect(() => {
        const data = VehicleApi.search(filter);
        setVehicles(data);
    }, [filter]);

    return (
        <>
            <Filter filter={filter} onFilterChange={handleFiler} />
            <Table vehicles={vehicles} />
        </>
    );
}
