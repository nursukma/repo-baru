import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import dbService from "../../services/dbService";

class TablesPage extends Component {
  constructor(props) {
    super(props);

    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      ANCOK: [],
    };
  }

  componentDidMount() {
    dbService.getAll().on("value", this.onDataChange);
  }

  onDataChange(items) {
    let ANCOK = [];
    items.forEach((item) => {
      let key = item.key;
      let isi = item.val();
      ANCOK.push({
        key: key,
        pasienIbu: isi.pasienIbu,
        pasienSuami: isi.pasienSuami,
        alamat: isi.alamat,
        rekomendasi: isi.rekomendasi,
      });
    });
    this.setState({
      ANCOK: ANCOK,
    });
  }

  render() {
    const data = {
      columns: [
        {
          label: "Nama Ibu",
          field: "pasienIbu",
          sort: "asc",
          width: 160,
        },
        {
          label: "Nama Suami",
          field: "pasienSuami",
          sort: "asc",
          width: 160,
        },
        {
          label: "Alamat",
          field: "alamat",
          sort: "asc",
          width: 280,
        },
        {
          label: "Prediksi",
          field: "rekomendasi",
          sort: "asc",
          width: 280,
        },
      ],
      rows: this.state.ANCOK,
    };

    return <MDBDataTable striped bordered small data={data} />;
  }
}

export default TablesPage;
