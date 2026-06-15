import { useState } from "react";

function ApplicationTable({

  applications,

  onStatusUpdate

}) {

  const [selectedApplication,
    setSelectedApplication] =
    useState(null);

  return (

    <>
      <div className="table-responsive">
        <table className="table table-hover table-striped align-middle">
          <thead>

            <tr>

              <th>Name</th>
              <th>Mobile</th>
              <th>Loan Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Documents</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>
            {
              applications.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center text-muted py-4"
                  >
                    No Applications Found
                  </td>

                </tr>

              )
            }
            {
              applications.map((item) => (

                <tr key={item._id}>

                  <td>{item.fullName}</td>

                  <td>{item.mobileNumber}</td>

                  <td>{item.loanType}</td>

                  <td>
                    ₹ {item.loanAmount?.toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`badge ${item.status === "Approved"
                          ? "bg-success"
                          : item.status === "Rejected"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>

                    <div className="d-flex flex-column gap-1">

                      {item.aadhaarUrl && (
                        <a
                          href={`http://localhost:5000/${item.aadhaarUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-primary me-1"
                        >
                          Aadhaar
                        </a>
                      )}

                      {item.panUrl && (
                        <a
                          href={`http://localhost:5000/${item.panUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-success"
                        >
                          PAN
                        </a>
                      )}

                      {item.salarySlipUrl && (
                        <a
                          href={`http://localhost:5000/${item.salarySlipUrl}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Salary Slip
                        </a>
                      )}

                      {item.bankStatementUrl && (
                        <a
                          href={`http://localhost:5000/${item.bankStatementUrl}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Bank Statement
                        </a>
                      )}

                    </div>

                  </td>

                  <td>

                    <button
                      className="btn btn-info btn-sm mb-2"
                      onClick={() =>
                        setSelectedApplication(item)
                      }
                    >
                      View
                    </button>

                    <select

                      className="form-select"

                      value={item.status}

                      onChange={(e) => {

                        const status =
                          e.target.value;

                        const confirmChange =
                          window.confirm(
                            `Change status to ${status}?`
                          );

                        if (confirmChange) {

                          onStatusUpdate(
                            item._id,
                            status
                          );

                        }

                      }}

                    >

                     

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
      </div>

      {selectedApplication && (

        <div
          className="modal d-block"
          tabIndex="-1"
        >

          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-header">

                <h5 className="modal-title">

                  Application Details

                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() =>
                    setSelectedApplication(null)
                  }
                />

              </div>

              <div className="modal-body">

                <p>
                  <strong>Name:</strong>{" "}
                  {selectedApplication.fullName}
                </p>

                <p>
                  <strong>Mobile:</strong>{" "}
                  {selectedApplication.mobileNumber}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {selectedApplication.email}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {selectedApplication.city}
                </p>

                <p>
                  <strong>Loan Type:</strong>{" "}
                  {selectedApplication.loanType}
                </p>

                <p>
                  <strong>Loan Amount:</strong>{" "}
                  ₹ {selectedApplication.loanAmount}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedApplication.status}
                </p>

                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(
                    selectedApplication.createdAt
                  ).toLocaleString()}
                </p>

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    setSelectedApplication(null)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>

  );
}

export default ApplicationTable;