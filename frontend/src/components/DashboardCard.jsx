function DashboardCard({

  title,

  value

}) {

  const getCardClass = () => {

    switch (title) {

      case "Total":
        return "bg-primary text-white";

      case "Approved":
        return "bg-success text-white";

      case "Rejected":
        return "bg-danger text-white";

      case "Pending":
        return "bg-warning text-dark";

      default:
        return "bg-secondary text-white";

    }

  };

  return (

    <div
      className={`card shadow-sm border-0 ${getCardClass()}`}
    >

      <div className="card-body text-center">

        <h5 className="mb-2">
          {title}
        </h5>

        <h1 className="fw-bold">
          {value}
        </h1>

      </div>

    </div>

  );
}

export default DashboardCard;