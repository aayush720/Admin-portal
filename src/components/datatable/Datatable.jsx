import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);


  //yha filter kia ki id same he to usse na show kre baaki sb show ho jaye
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">Add New User</div>
      <div style={{ height: 620, width: "100%", padding: 20 }}>
        <Link to="/user/new" style={{ textDecoration: "none" }}>
          Add New
        </Link>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
