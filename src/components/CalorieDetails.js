import React from 'react';

const CalorieDetails = function (props) {
    return <div className="col-3 mb-4">
    
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Water</th>
            <th scope="col">Protein</th>
            <th scope="col">Calcium</th>
            <th scope="col">Potasium</th>
            <th scope="col">Magnesium</th>
            <th scope="col">Sodium</th>
            <th scope="col">Lipid</th>
            <th scope="col">Sugar</th>

          </tr>
        </thead>
        <tbody>
       { props.calories.map((cal, index) =>
          <tr>

            <td>{cal.shrt_desc}</td>
            <td>{cal.water}</td>
            <td>{cal.protein}</td>
            <td>{cal.calcium}</td>
            <td>{cal.potassium}</td>
            <td>{cal.magnesium}</td>
            <td>{cal.sodium}</td>
            <td>{cal.lipid_tot}</td>
            <td>{cal.sugar_tot}</td>

          </tr>
       )}
        </tbody>
      </table>

    </div>
}

export default CalorieDetails;