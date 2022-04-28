import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userColumns } from "../../datatableSource";
import "./datatable.scss";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let list = [];
    // try {
    //   const fetchData = async () => {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   };
    //   fetchData();
    // } catch (err) {
    //   console.log(err);
    // }

    //LISTEN REALTIME
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );

    //clean func
    return () => {
      unsub();
    };
  }, []);

  // console.log(data);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
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
