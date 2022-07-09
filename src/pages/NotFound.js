const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center m-auto">
      <h3 className="mb-3">Page Not Found :(</h3>
      <div className="d-flex justify-cntent-between">
        <a href="/" className="btn btn-info me-5">
          View Products
        </a>
        <a href="/addproduct" className="btn btn-success">
          Add Products
        </a>
      </div>
    </div>
  );
};
export default NotFound;
