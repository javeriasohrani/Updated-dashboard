import React from 'react'
import "./Table.css";

export default function Table() {
    return (
        <div className="Tableset">
            <table>
            <caption className="title">Transaction history</caption>
                <tr>
                    <th>Reciever</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Tesco Market</td>
                    <td>Shopping</td>
                    <td>13 Dec 2020</td>
                    <td>$75.67</td>
                   
                </tr>
                </table>
            
        </div>
    )
}
