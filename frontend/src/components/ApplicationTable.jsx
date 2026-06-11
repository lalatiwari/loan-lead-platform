function ApplicationTable({

  applications,

  onStatusUpdate

}) {

  return (

    <table className="table table-bordered">

      <thead>

        <tr>

          <th>Name</th>
          <th>Mobile</th>
          <th>Loan Type</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {
          applications.map((item)=>(

            <tr key={item._id}>

              <td>{item.fullName}</td>

              <td>{item.mobileNumber}</td>

              <td>{item.loanType}</td>

              <td>{item.loanAmount}</td>

              <td>{item.status}</td>

              <td>

                <select

                  className="form-select"

                  onChange={(e)=>

                    onStatusUpdate(

                      item._id,

                      e.target.value

                    )

                  }

                  defaultValue=""

                >

                  <option value="">
                    Change Status
                  </option>

                  <option value="Approved">
                    Approved
                  </option>

                  <option value="Rejected">
                    Rejected
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                </select>

              </td>

            </tr>

          ))
        }

      </tbody>

    </table>

  );
}

export default ApplicationTable;