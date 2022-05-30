import classes from "../component/Datatable.module.css";

export const userColumns = [
  // ini untuk kolom
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nama",
    headerName: "Nama",
    width: 230,
    renderCell: (params) => {
      return (
        <div className={classes.cellWithImg}>
          <img className={classes.cellImg} src={params.row.img} alt="avatar" />
          {params.row.nama}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "umur",
    headerName: "Umur",
    width: 100,
  },
  {
    field: "noTelp",
    headerName: "No Telepon",
    width: 160,
  
  },
];

// ini untuk rows
