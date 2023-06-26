// TODO: answer here
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div align="center">
      {/* TODO: answer here */}
      <h1 style={{ fontSize: "30px" }}>404 | Not Found</h1>
      <Button
        colorScheme="blue"
        data-testid="back"
        onClick={() => navigate(-1)}
      >
        Take Me Back
      </Button>
    </div>
  );
};

export default NotFound;
