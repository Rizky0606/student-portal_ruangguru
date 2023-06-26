// TODO: answer here
import { Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    // TODO: answer here
    <div className="navbar"> 
      <Link href="/">
        <h1 data-testid="home-page">Student Portal</h1>
      </Link>
      <Link href="/student" data-testid="student-page">
        All Student
      </Link>
      <Link href="/add" data-testid="add-page">
        Add Student
      </Link>
    </div>
  );
};

export default NavBar;
