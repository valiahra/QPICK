import { Outlet } from "react-router-dom";
import Navbar from "./widgets/Navbar/Navbar";

export default function Root({ items, setItems }) {
  return (
    <>
      <Navbar items={items} setItems={setItems} />
      <div style={{ marginTop: "70px", marginBottom:'100px'}}>
        <Outlet />
      </div>
    </>
  );
}
