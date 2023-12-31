// TODO: answer here
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Student = () => {
  // TODO: answer here
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState("All");

  const loadPage = async () => {
    const response = await fetch("http://localhost:3001/student");
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    loadPage();
  }, []);

  const handleCLickDeleteButton = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        loadPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeFaculty = (e) => {
    setFilterData(e.target.value);
  };

  const filteredData = data?.filter((item) =>
    item.faculty.includes(filterData)
  );

  return (
    <>
      {/* TODO: answer here */}
      <Navbar />
      <div className="head-student">
        <h2>All Student</h2>

        <Select
          w="50%"
          display="block"
          align="right"
          variant="filled"
          data-testid="filter"
          onChange={handleChangeFaculty}
          value={filterData}
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
          <Table variant="simple" id="table-student">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterData === "All"
                ? data?.map((datas) => {
                    return (
                      <Tr key={datas.id} className="student-data-row">
                        <Td>{datas.id}</Td>
                        <Td>
                          <Link to={`/student/${datas.id}`}>
                            {datas.fullname}
                          </Link>
                        </Td>
                        <Td>{datas.faculty}</Td>
                        <Td>{datas.programStudy}</Td>
                        <Td>
                          <button
                            type="button"
                            className="delete-btn"
                            data-testid={`delete-${datas.id}`}
                            onClick={() => handleCLickDeleteButton(datas.id)}
                          >
                            Delete
                          </button>
                        </Td>
                      </Tr>
                    );
                  })
                : filteredData.map((datas) => {
                    return (
                      <tr key={datas.id} className="student-data-row">
                        <Td>{datas.id}</Td>
                        <Td>
                          <Link to={`/student/${datas.id}`}>
                            {datas.fullname}
                          </Link>
                        </Td>
                        <Td>{datas.faculty}</Td>
                        <Td>{datas.programStudy}</Td>
                        <Td>
                          <button
                            type="button"
                            className="delete-btn"
                            data-testid={`delete-${datas.id}`}
                            onClick={() => handleCLickDeleteButton(datas.id)}
                          >
                            Delete
                          </button>
                        </Td>
                      </tr>
                    );
                  })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Footer />
    </>
  );
};

export default Student;
