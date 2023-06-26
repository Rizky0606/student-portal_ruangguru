// TODO: answer here
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Select } from "@chakra-ui/react";

const EditStudent = () => {
  // TODO: answer here
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [date, setDate] = useState();
  const [gender, setGender] = useState("Male");
  const [prody, setPrody] = useState("Ekonomi");
  let faculty = "";

  if (prody === "Ekonomi" || prody === "Manajemen" || prody === "Akuntansi") {
    faculty = "Fakultas Ekonomi";
  } else if (
    prody === "Administrasi Publik" ||
    prody === "Administrasi Bisnis" ||
    prody === "Hubungan Internasional"
  ) {
    faculty = "Fakultas Ilmu Sosial dan Politik";
  } else if (prody === "Teknik Sipil" || prody === "Arsitektur") {
    faculty = "Fakultas Teknik";
  } else {
    faculty = "Fakultas Teknologi Informasi dan Sains";
  }

  let student = {
    fullname: name,
    address: address,
    phoneNumber: phoneNumber,
    birthDate: date,
    gender: gender,
    faculty: faculty,
    programStudy: prody,
  };

  fetch(`http://localhost:3001/student/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setLoading(false);
    });

  const editData = () => {
    fetch(`http://localhost:3001/student/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then(() => {
        setLoading(false);
        navigate("/student");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* TODO: answer here */}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="edit-student">
          <Navbar />
          <img
            style={{ borderRadius: "50%", boxSize: "150px", margin: "auto" }}
            src={data.profilePicture}
            alt={data.fullname}
          />
          <form action="" id="form-student">
            <label>
              Fullname
              <Input
                type="text"
                data-testid="name"
                value={data.fullname}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Address
              <Input
                type="text"
                value={data.address}
                data-testid="address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number
              <Input
                type="text"
                value={data.phoneNumber}
                data-testid="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Birth Date
              <Input
                type="date"
                value={data.birthDate}
                data-testid="date"
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <br />
            </label>

            <label>
              Gender
              <Select
                id="input-gender"
                value={data.gender}
                data-testid="gender"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
              <br />
            </label>

            <label>
              Program Study
              <Select
                id="input-prody"
                value={data.programStudy}
                data-testid="prody"
                onChange={(e) => setPrody(e.target.value)}
                required
              >
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </Select>
            </label>
            <br />
            <Button
              colorScheme="blue"
              type="submit"
              data-testid="edit-btn"
              value="Edit student"
              id="add-btn"
              onClick={editData}
            >
              Edit student
            </Button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EditStudent;
