import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
} from "mdbreact";
// import ProfilePage from "./ProfilePage";

const PrintPage = React.forwardRef((props, ref) => {
  const data = {
    columns: [
      {
        label: "Rekomendasi",
        field: "rekomendasi",
        sort: "asc",
      },
    ],
    rows: props.hasilRek,
  };

  return (
    <MDBContainer className="container-fluid">
      <>
        <div ref={ref}>
          <MDBCard style={{ width: "100%", marginTop: "1rem"}}>
            <MDBCardHeader color="mdb-color lighten-3" style={{ width: "100%", height: "8rem"}}>
              <MDBRow>
              <MDBCol md="3" style={{position: "fixed", marginLeft: 0}}><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp" className="rounded float-left" alt="aligment" /></MDBCol>
              <MDBCol md="6" style={{position: "relative", textAlign: "center", marginTop: "2.7rem", marginLeft: "7rem", marginRight: "6rem"}}> <strong><center>NUR SUKMA PANDAWA  </center></strong></MDBCol>
              <MDBCol md="3" style={{position: "fixed", marginRight: 0}}><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.webp" className="rounded float-right" alt="aligment" /></MDBCol>
              </MDBRow>
            </MDBCardHeader>
          </MDBCard>
          <div style={{ marginTop: "2rem" }}>
            <MDBTable borderless>
              <tr>
                <th color="primary-color">Nama Suami</th>
                <th> {props.pasienSuami} </th>
              </tr>
              <tr>
                <th color="primary-color">Nama Ibu</th>
                <th>{props.pasienIbu}</th>
              </tr>
              <tr>
                <th color="primary-color">Alamat</th>
                <th>{props.alamat}</th>
              </tr>
            </MDBTable>
            <MDBTable
              striped
            >
              <MDBTableBody rows={data.rows} ></MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </>
      {console.log(props.hasilRek)}
    </MDBContainer>
  );
});

export default PrintPage;
