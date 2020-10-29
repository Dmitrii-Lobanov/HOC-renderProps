import React from 'react';
import { withTranslation } from 'react-i18next';

function ArrivalsTable({ data, t }) {
    //console.log('ArrivalsTable data: ', data)
    return (
        <div className="table-container">
                    <table>
                        <thead>
                            <tr className="table-row">
                            <th>{t('DepartureTable.flight')}</th>
                                <th>{t('DepartureTable.airport')}</th>
                                <th>{t('ArrivalTable.time')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.flight} className="table-row">
                                        <td>{item.flight}</td>
                                        <td>{item.airport}</td>
                                        <td>{item.arrivalTime}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
    )
}

export default withTranslation()(ArrivalsTable);