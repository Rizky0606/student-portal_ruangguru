// TODO: answer here
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/student">
          <Button
            variant="outline"
            colorScheme="teal"
            data-testid="student-btn"
            color="white"
            fontSize="3xl"
            _hover={{ bg: "teal" }}
          >
            All Student
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  ); // TODO: replace this
};

export default Home;
