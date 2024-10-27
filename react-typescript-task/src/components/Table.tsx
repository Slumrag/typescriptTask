import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, VehicleType, vehicleTypeTitles } from "../data/vehicles/contracts";
interface TableItemProps {
    vehicle: Vehicle;
    number: number;
    type: VehicleType;
}
export interface TableProps {
    vehicles: Vehicle[];
}

const TableItem: React.FC<TableItemProps> = ({ vehicle, number, type }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[type]}</td>
        </tr>
    );
};

export const Table: React.FC<TableProps> = ({ vehicles }) => {
    const tableBody = vehicles.map((x, i) => (
        <TableItem key={x.id} number={i + 1} vehicle={x} type={x.type} />
    ))
    return (
        <>
            {vehicles.length > 0 ? <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Цена, ₽</th>
                        <th>Тип ТС</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
                : <p>Автомобили не найдены</p>}

        </>
    );
};