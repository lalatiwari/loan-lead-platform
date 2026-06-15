import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ApplicationTable from "../components/ApplicationTable";
import Papa from "papaparse";
import StatusChart from "../components/StatusChart";


import API from "../services/api";
import { getToken } from "../utils/auth";

function Dashboard() {

  const [stats, setStats] = useState({});

  const [applications, setApplications] = useState([]);

  const [mobile, setMobile] = useState("");

  const [loanType, setLoanType] = useState("");
  
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

const recordsPerPage = 10;


  useEffect(() => {

    fetchStats();

    fetchApplications();

  }, []);

  const fetchStats = async () => {

    try {

      const response = await API.get(

        "/admin/stats",

        {
          headers: {
            Authorization: getToken()
          }
        }
      );

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const fetchApplications = async () => {

  setLoading(true);

  try {

    const response = await API.get(

      "/admin/applications",

      {
        headers: {
          Authorization: getToken()
        }
      }

    );

    setApplications(
      response.data.data
    );

  } catch (error) {

    console.log(error);

    toast.error(
      "Failed To Load Applications"
    );

  } finally {

    setLoading(false);

  }

};


  const updateStatus = async (id, status) => {

  try {

    await API.put(

      `/admin/applications/${id}`,

      {
        status
      },

      {
        headers: {
          Authorization: getToken()
        }
      }

    );

    toast.success(
      "Status Updated Successfully"
    );

    fetchApplications();

    fetchStats();

  } catch (error) {

    console.log(error);

    toast.error(
      "Status Update Failed"
    );

  }

};

const searchApplication = async () => {

  try {

    const response = await API.get(

      `/admin/search?mobile=${mobile}`,

      {
        headers: {
          Authorization: getToken()
        }
      }

    );

    setApplications(
      response.data.data
      
    );
    setCurrentPage(1);

  } catch (error) {

    console.log(error);

    toast.error(
      "Search Failed"
    );

  }

};



  const filterApplication = async () => {

    try {

      const response = await API.get(

        `/admin/filter?loanType=${loanType}`,

        {
          headers: {
            Authorization: getToken()
          }
        }

      );

      setApplications(
        response.data.data
      );

      setCurrentPage(1);

    }catch (error) {

  console.log(error);

  toast.error(
    "Filter Failed"
  );

}

  };

  const resetData = () => {

    setCurrentPage(1);

    setMobile("");

    setLoanType("");

    fetchApplications();

  };

  const exportToCSV = () => {

  const csvData = applications.map(
    (item) => ({

      Name: item.fullName,

      Mobile: item.mobileNumber,

      Email: item.email,

      City: item.city,

      LoanType: item.loanType,

      LoanAmount: item.loanAmount,

      Status: item.status,

      CreatedAt: new Date(
        item.createdAt
      ).toLocaleString()

    })
  );

  const csv =
  Papa.unparse(csvData);

  const blob =
  new Blob(
    [csv],
    {
      type: "text/csv"
    }
  );

  const url =
  window.URL.createObjectURL(blob);

  const a =
  document.createElement("a");

  a.href = url;

  a.download =
  "loan-applications.csv";

  a.click();

};



const lastIndex =
currentPage * recordsPerPage;

const firstIndex =
lastIndex - recordsPerPage;

const currentApplications =
applications.slice(
  firstIndex,
  lastIndex
);

const totalPages =
Math.max(
  1,
  Math.ceil(
    applications.length /
    recordsPerPage
  )
);


  return (

    <div className="d-flex">

      <Sidebar />

      <div className="container-fluid p-4">

        <h2 className="mb-4">
          Dashboard
        </h2>

        {/* Stats Cards */}

        <div className="row">

          <div className="col-md-3 mb-3">

            <DashboardCard
              title="Total"
              value={stats.totalApplications || 0}
            />

          </div>

          <div className="col-md-3 mb-3">

            <DashboardCard
              title="Approved"
              value={stats.approved || 0}
            />

          </div>

          <div className="col-md-3 mb-3">

            <DashboardCard
              title="Rejected"
              value={stats.rejected || 0}
            />

          </div>

          <div className="col-md-3 mb-3">

            <DashboardCard
              title="Pending"
              value={stats.pending || 0}
            />

          </div>

        </div>

<div className="card shadow-sm mt-4">

  <div className="card-body">

    <h4 className="mb-3">
      Loan Status Analytics
    </h4>

    <StatusChart
      stats={stats}
    />

  </div>

</div>


        {/* Search & Filter */}

        <div className="card shadow-sm mt-3">

          <div className="card-body">

            <h5 className="mb-3">
              Search & Filter
            </h5>

            <div className="row">

              <div className="col-md-4">

                <input
                  type="text"
                  placeholder="Search Mobile Number"
                  className="form-control"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="col-md-2">

                <button
                  className="btn btn-primary w-100"
                  onClick={searchApplication}
                >
                  Search
                </button>

              </div>

              <div className="col-md-4">

                <input
                  type="text"
                  placeholder="Loan Type"
                  className="form-control"
                  value={loanType}
                  onChange={(e) =>
                    setLoanType(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="col-md-2">

                <button
                  className="btn btn-success me-2"
                  onClick={filterApplication}
                >
                  Filter
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={resetData}
                >
                  Reset
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Applications */}

        <div className="card shadow-sm mt-4">

          <div className="card-body">
<div className="d-flex justify-content-between align-items-center mb-3">

  <h4>
    Applications ({applications.length})
  </h4>

  <button
    className="btn btn-success"
    onClick={exportToCSV}
  >
    Export CSV
  </button>

</div>

{
  loading ? (

    <div className="text-center py-5">

      <div
        className="spinner-border text-primary"
        role="status"
      >
      </div>

      <p className="mt-3">
        Loading Applications...
      </p>

    </div>

  ) : (

   <ApplicationTable

  applications={
    currentApplications
  }

  onStatusUpdate={
    updateStatus
  }

/>

  )
}

<div className="d-flex justify-content-center mt-4">

  <button

    className="btn btn-outline-primary me-2"

    disabled={currentPage === 1}

    onClick={() =>
      setCurrentPage(
        currentPage - 1
      )
    }

  >

    Previous

  </button>

  <span className="align-self-center">

    Page {currentPage} of {totalPages}

  </span>

  <button

    className="btn btn-outline-primary ms-2"

    disabled={
      currentPage === totalPages
    }

    onClick={() =>
      setCurrentPage(
        currentPage + 1
      )
    }

  >

    Next

  </button>

</div>


          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;