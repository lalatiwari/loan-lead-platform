import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ApplicationTable from "../components/ApplicationTable";

import API from "../services/api";
import { getToken } from "../utils/auth";

function Dashboard() {

  const [stats, setStats] = useState({});

  const [applications, setApplications] = useState([]);

  const [mobile, setMobile] = useState("");

  const [loanType, setLoanType] = useState("");

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

      fetchApplications();

      fetchStats();

    } catch (error) {

      console.log(error);

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

    } catch (error) {

      console.log(error);

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

    } catch (error) {

      console.log(error);

    }

  };

  const resetData = () => {

    setMobile("");

    setLoanType("");

    fetchApplications();

  };

  return (

    <div className="d-flex">

      <Sidebar />

      <div className="container-fluid p-4">

        <h2>
          Dashboard
        </h2>

        <div className="row mt-4">

          <div className="col-md-3">

            <DashboardCard
              title="Total"
              value={stats.totalApplications}
            />

          </div>

          <div className="col-md-3">

            <DashboardCard
              title="Approved"
              value={stats.approved}
            />

          </div>

          <div className="col-md-3">

            <DashboardCard
              title="Rejected"
              value={stats.rejected}
            />

          </div>

          <div className="col-md-3">

            <DashboardCard
              title="Pending"
              value={stats.pending}
            />

          </div>

        </div>

        <div className="row mt-5">

          <div className="col-md-3">

            <input
              type="text"
              placeholder="Search Mobile"
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

          <div className="col-md-3">

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

          <div className="col-md-4">

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

        <div className="mt-5">

          <h4>

            Applications

          </h4>

          <ApplicationTable

            applications={
              applications
            }

            onStatusUpdate={
              updateStatus
            }

          />

        </div>

      </div>

    </div>

  );
}

export default Dashboard;