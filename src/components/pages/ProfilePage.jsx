import React, { Component, useRef } from "react";

import dbService from "../../services/dbService";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBLink,
  MDBInputGroup,
  MDBBtn,
  MDBAlert,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
import ReactToPrint from "react-to-print";
import PrintPage from "./PrintPage";
import { useReactToPrint } from "react-to-print";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddengem: false,
      activeItemPills: "1",
      modal: false,
      // id: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: "",
      q11: "",
      q12: "",
      q13: "",
      q14: "",
      q15: "",
      q16: "",
      q17: "",
      q18: "",
      q19: "",
      q20: "",
      q21: "",
      q22: "",
      q23: "",
      q24: "",
      q25: "",
      q26: "",
      pasienIbu: "",
      pasienSuami: "",
      rekomendasi: "",
      alamat: "",
      submitted: false,
      iniRek: [
        {
          id: 1,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan dan mengkonsumsi Protein Hewani (Ayam, Ikan, Daging, Telur dll)",
        },
        {
          id: 12,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan mengkonsumsi Protein Hewani (Ayam, Ikan, Daging, Telur dll)",
        },
        {
          id: 13,
          rekomendasi:
            "Disarankan untuk meningkatkan dan mengkonsumsi Protein Hewani (Ayam, Ikan, Daging, Telur dll)",
        },
        {
          id: 14,
          rekomendasi:
            "Disarankan untuk mempertahankan mengkonsumsi Protein Hewani (Ayam, Ikan, Daging, Telur dll)",
        },
        {
          id: 2,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan dan mengonsumsi makanan dengan kandungan zat besi tinggi, seperti biji-bijian, daging merah, kacang-kacangan, sayuran hijau, dan hati",
        },
        {
          id: 22,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan mengonsumsi makanan dengan kandungan zat besi tinggi, seperti biji-bijian, daging merah, kacang-kacangan, sayuran hijau, dan hati",
        },
        {
          id: 23,
          rekomendasi:
            "Disarankan untuk meningkatkan mengonsumsi makanan dengan kandungan zat besi tinggi, seperti biji-bijian, daging merah, kacang-kacangan, sayuran hijau, dan hati",
        },
        {
          id: 24,
          rekomendasi:
            "Disarankan untuk mempertahankan mengonsumsi makanan dengan kandungan zat besi tinggi, seperti biji-bijian, daging merah, kacang-kacangan, sayuran hijau, dan hati",
        },
        {
          id: 3,
          rekomendasi:
            "Disarankan untuk mempertahankan Indeks Massa Tubuh (IMT) Normal",
        },
        {
          id: 32,
          rekomendasi:
            "Anda Overweight / Underweight. Disarankan untuk Indeks Massa Tubuh (IMT) Normal",
        },
        {
          id: 4,
          rekomendasi: "Disarankan untuk mempertahankan kadar (HB) Normal",
        },
        {
          id: 42,
          rekomendasi:
            "Anda Over HB / Under HB. Disarankan untuk mempertahankan kadar (HB) Normal",
        },
        {
          id: 5,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan dan mengonsumsi susu",
        },
        {
          id: 52,
          rekomendasi: "Disarankan untuk lebih meningkatkan mengonsumsi susu",
        },
        {
          id: 53,
          rekomendasi: "Disarankan untuk meningkatkan mengonsumsi susu",
        },
        {
          id: 54,
          rekomendasi: "Disarankan untuk mempertahankan dan mengonsumsi susu",
        },
        {
          id: 6,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan dan mengonsumsi Protein Nabati (Tahu, Tempe dll)",
        },
        {
          id: 62,
          rekomendasi:
            "Disarankan untuk lebih meningkatkan mengonsumsi Protein Nabati (Tahu, Tempe dll)",
        },
        {
          id: 63,
          rekomendasi:
            "Disarankan untuk meningkatkan mengonsumsi Protein Nabati (Tahu, Tempe dll)",
        },
        {
          id: 64,
          rekomendasi:
            "Disarankan untuk mempertahankan mengonsumsi Protein Nabati (Tahu, Tempe dll)",
        },
        {
          id: 7,
          rekomendasi: "Disarankan Suami mempertahankan untuk tidak merokok",
        },
        {
          id: 72,
          rekomendasi: "Disarankan Suami untuk tidak merokok",
        },
        {
          id: 8,
          rekomendasi: "Tidak ada riwayat penyakit pernafasan dari Suami",
        },
        {
          id: 82,
          rekomendasi: "Ada riwayat penyakit pernafasan dari Suami",
        },
      ],
      hasilRek: [],
    };
  }

  addEvent = () => {
    let data1 = ((this.state.q6 * 0.000465)+(this.state.q8 * 0.001395)+(this.state.q15*0.243143)+(this.state.q18 * 0.242678)+(this.state.q21 * 0.244538)+(this.state.q22 * 0.003254)+(this.state.q23 * 0.245467)+(this.state.q24 * 0.019061));
    let hasil = "";
    if(data1 <= 2.8){
      hasil = "Risiko Stunting";
    }else{
      hasil = "Normal";
    }

    let data = {
      q1: this.state.q1,
      q2: this.state.q2,
      q3: this.state.q3,
      q4: this.state.q4,
      q5: this.state.q5,
      q6: this.state.q6,
      q7: this.state.q7,
      q8: this.state.q8,
      q9: this.state.q9,
      q10: this.state.q10,
      q11: this.state.q11,
      q12: this.state.q12,
      q13: this.state.q13,
      q14: this.state.q14,
      q15: this.state.q15,
      q16: this.state.q16,
      q17: this.state.q17,
      q18: this.state.q18,
      q19: this.state.q19,
      q20: this.state.q20,
      q21: this.state.q21,
      q22: this.state.q22,
      q23: this.state.q23,
      q24: this.state.q24,
      q25: this.state.q25,
      q26: this.state.q26,
      pasienIbu: this.state.pasienIbu,
      pasienSuami: this.state.pasienSuami,
      alamat: this.state.alamat,
      rekomendasi: hasil,
    };
    dbService
      .create(data)
      .then(() => {
        console.log("Berhasil tambah data!");
        this.setState({
          submitted: true,
          modal: true,
          hiddengem: true,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          modal: true,
          submitted: false,
          hiddengem: false,
        });
      });
  };

  handleInputChange = (inputName) => (value) => {
    const nextValue = value;
      this.setState({
        [inputName]: nextValue,
      });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  togglePills = (tab) => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab,
      });
    }
  };

  changeHandler = (event) => {
    // const value = event.target.value;
    // if(value === "foo"){
    //   this.activeItemPills += 1;
    //   this.togglePills(this.activeItemPills);
    // }
    // return this.changeHandler() 
  };

  tampilHasil = () => {
    let data = ((this.state.q6 * 0.000465)+(this.state.q8 * 0.001395)+(this.state.q15*0.243143)+(this.state.q18 * 0.242678)+(this.state.q21 * 0.244538)+(this.state.q22 * 0.003254)+(this.state.q23 * 0.245467)+(this.state.q24 * 0.019061));
    let hasil = "";
    if(data <= 2.8){
      hasil = "Risiko Stunting";
    }else{
      hasil = "Normal";
    }
    this.setState({
      rekomendasi: hasil
    })
    return this.state.rekomendasi;
  }

  tambahData = (event) => {
    event.preventDefault();
    this.tampilHasil();
    // console.log(this.state.rekomendasi)
    this.addEvent();
    this.tampilRekomendasi();
    // this.bersihkan();
  };

  tampilRekomendasi = () => {
    let ANCOK = [];
    this.state.iniRek.forEach((data) => {
      if (data.id === 8) {
        if (this.state.q6 === "1") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 82) {
        if (this.state.q6 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 7) {
        if (this.state.q7 === "1") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 72) {
        if (this.state.q7 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 3) {
        if (this.state.q15 === "1") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 32) {
        if (this.state.q15 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 4) {
        if (this.state.q18 === "1") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 42) {
        if (this.state.q18 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 2) {
        if (this.state.q21 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 22) {
        if (this.state.q21 === "3") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 23) {
        if (this.state.q21 === "4") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 24) {
        if (this.state.q21 === "5") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 6) {
        if (this.state.q22 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 62) {
        if (this.state.q22 === "3") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 63) {
        if (this.state.q22 === "4") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 64) {
        if (this.state.q22 === "5") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 1) {
        if (this.state.q23 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 12) {
        if (this.state.q23 === "3") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 13) {
        if (this.state.q23 === "4") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 14) {
        if (this.state.q23 === "5") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 5) {
        if (this.state.q24 === "2") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 52) {
        if (this.state.q24 === "3") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 53) {
        if (this.state.q24 === "4") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      } else if (data.id === 54) {
        if (this.state.q24 === "5") {
          ANCOK.push({ rekomendasi: data.rekomendasi });
        }
      }
    });
    this.setState({
      hasilRek: ANCOK,
    });
  };

  
  cobaPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    return handlePrint;
  };

  cobaHandle = () =>{
    this.setState(
      this.activeItemPills += 1,
      this.togglePills(this.activeItemPills),
    )
  }

  render() {
    const { activeItemPills } = this.state;

    return (
      <MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <section header="Basic example">
                <form onSubmit={this.tambahData}>
                  <MDBTabContent activeItem={activeItemPills}>
                    <MDBTabPane tabId="1">
                      <MDBInputGroup
                        material
                        containerClassName="mb-3 mt-0"
                        label="Nama Pasien"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="text"
                              hint="Nama Ibu"
                              name="pasienIbu"
                              getValue={this.handleInputChange("pasienIbu")}
                              required
                              onChange={this.changeHandler}
                            />
                            <MDBInput
                              noTag
                              type="text"
                              hint="Nama Suami"
                              name="pasienSuami"
                              getValue={this.handleInputChange("pasienSuami")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        material
                        containerClassName="mb-3 mt-0"
                        label="Alamat"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="text"
                              hint="Alamat"
                              name="alamat"
                              getValue={this.handleInputChange("alamat")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Tensi Ibu Sebelum Hamil"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q1"
                              getValue={this.handleInputChange("q1")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Penyakit diabet Ibu Sebelum Hamil"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q2"
                              getValue={this.handleInputChange("q2")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Postur Ibu"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q3"
                              getValue={this.handleInputChange("q3")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Tensi Suami"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q4"
                              getValue={this.handleInputChange("q4")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Penyakit diabet Suami"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q5"
                              getValue={this.handleInputChange("q5")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBInputGroup
                        label="Penyakit pernafasan Suami"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q6"
                              getValue={this.handleInputChange("q6")}
                              required
                              onChange={this.changeHandler}
                              // value={this.state.q6}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Suami Perokok"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q7"
                              getValue={this.handleInputChange("q7")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Postur Suami"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q8"
                              getValue={this.handleInputChange("q8")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Penghasilan Keluarga"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q9"
                              getValue={this.handleInputChange("q9")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Sumber Air"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q10"
                              getValue={this.handleInputChange("q10")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Lantai Rumah"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q11"
                              getValue={this.handleInputChange("q11")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="MCK"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q12"
                              getValue={this.handleInputChange("q12")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <MDBInputGroup
                        label="Frekuensi Periksa selama hamil"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-4"
                              name="q13"
                              getValue={this.handleInputChange("q13")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Perkembangan berat badan"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-4"
                              name="q14"
                              getValue={this.handleInputChange("q14")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="IMT"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q15"
                              getValue={this.handleInputChange("q15")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="LILA"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-4"
                              name="q16"
                              getValue={this.handleInputChange("q16")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Tensi Ibu saat hamil"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q17"
                              getValue={this.handleInputChange("q17")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Kadar HB Ibu saat hamil"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q18"
                              getValue={this.handleInputChange("q18")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Protein Urin"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q19"
                              getValue={this.handleInputChange("q19")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                    </MDBTabPane>
                    <MDBTabPane tabId="4">
                      <MDBInputGroup
                        label="Usia Lahir"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-2"
                              name="q20"
                              getValue={this.handleInputChange("q20")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Fe"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-5"
                              name="q21"
                              getValue={this.handleInputChange("q21")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Protenin Nabati"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-5"
                              name="q22"
                              getValue={this.handleInputChange("q22")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Protein Hewani"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-5"
                              name="q23"
                              getValue={this.handleInputChange("q23")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Susu"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-5"
                              name="q24"
                              getValue={this.handleInputChange("q24")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Vitamin"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-4"
                              name="q25"
                              getValue={this.handleInputChange("q25")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                      <MDBInputGroup
                        label="Konsumsi Mie/Bakso"
                        material
                        containerClassName="mb-3 mt-0"
                        inputs={
                          <>
                            <MDBInput
                              noTag
                              type="number"
                              hint="1-5"
                              name="q26"
                              getValue={this.handleInputChange("q26")}
                              required
                              onChange={this.changeHandler}
                            />
                          </>
                        }
                      />
                    </MDBTabPane>
                  </MDBTabContent>
                  <MDBNav className="nav-pills justify-content-center">
                    <MDBNavItem>
                      <MDBLink
                        to="#"
                        active={activeItemPills === "1"}
                        onClick={this.togglePills("1")}
                        link
                      >
                        1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink
                        to="#"
                        active={activeItemPills === "2"}
                        onClick={this.togglePills("2")}
                        link
                      >
                        2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink
                        to="#"
                        active={activeItemPills === "3"}
                        onClick={this.togglePills("3")}
                        link
                      >
                        3
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink
                        to="#"
                        active={activeItemPills === "4"}
                        onClick={this.togglePills("4")}
                        link
                      >
                        4
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBBtn color="primary" type="submit">
                    Submit
                  </MDBBtn>
                </form>
                {this.state.submitted ? (
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
                    <MDBContainer className="container-fluid">
                      <>
                        <PrintPage
                          pasienSuami={this.state.pasienSuami}
                          pasienIbu={this.state.pasienIbu}
                          alamat={this.state.alamat}
                          hasilRek={this.state.hasilRek}
                          rekomendasi = {this.state.rekomendasi}
                          ref={(el) => (this.componentRef = el)}
                        />
                      </>
                      {console.log(this.state.hasilRek)}
                    </MDBContainer>
                    <MDBModalFooter>
                      {" "}
                      <ReactToPrint
                        trigger={() => {
                          return <MDBBtn color="primary"> Print</MDBBtn>;
                        }}
                        content={() => this.componentRef}
                      />
                    </MDBModalFooter>
                  </MDBModal>
                ) : (
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>
                      Informasi
                    </MDBModalHeader>
                    <MDBModalBody>
                      <MDBAlert color="danger">Data Belum Lengkap!</MDBAlert>
                    </MDBModalBody>
                  </MDBModal>
                )}
              </section>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default ProfilePage;
