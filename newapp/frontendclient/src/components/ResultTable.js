import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
            <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>

            </thead>
            <tbody>
            <tr className='table-body'>
                            <td>Jos</td>
                            <td>05</td>
                            <td>20</td>
                            <td>passed</td>
                        </tr>

            </tbody>
        </table>
    </div>
  )
}
