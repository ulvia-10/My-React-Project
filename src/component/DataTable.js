import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import style from "../component/Datatable.module.css";
import { userColumns } from "../component/Datatablesource";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  console.log(props.List);
  // create column action
  const actionColumn = [
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          [
              <>
              <div className={style.cellAction}>
                <Link to={`/ListPatient/${params.row.id}`} className={style.viewbtn}>
                  View
                </Link>
                <button
                  onClick={() => props.onDeletePasien(params.row.id)}
                  className={style.deletebtn}>
                  Delete
                </button>
              </div>
              </>
          ]
            )
        
      },
    },
  ];

  // console.log(props)

  //kalau mapping, jangan pakai array!! (map-> bikin array)

  const userRows = props.List?.map(
    (user) => (
      console.log(user.nama),
      {
        key: user.id,
        id: user.id,
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        nama: user.nama,
        noTelp: user.noTelp,
        email: user.email,
        umur: user.umur,
      }
    )
  );

  return (
    <div className={style.datatable}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
