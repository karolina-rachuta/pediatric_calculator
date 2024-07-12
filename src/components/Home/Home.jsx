import NavBar from "../NavBar/NavBar";
import ChildrenNav from "../ChildrenNav/ChildrenNav";
import SearchMeds from "../SearchMeds/SearchMeds";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-box">
        <ChildrenNav />
        <SearchMeds />
      </div>
    </>
  );
}

export default Home;
