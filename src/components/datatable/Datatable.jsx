import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatableSource";
import "./datatable.scss";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTittle" style={{ marginBottom: 20 }}>
        <Link
          className="add"
          to="/users/new"
          style={{
            textDecoration: "none",
            borderRadius: 5,
            padding: 5,
            marginLeft: 5,
          }}
        >
          Add New User
        </Link>
        <Link
          className="add"
          to="/products/new"
          style={{
            textDecoration: "none",
            borderRadius: 5,
            padding: 5,
            marginLeft: 5,
          }}
        >
          Add New Products
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
