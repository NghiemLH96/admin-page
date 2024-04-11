import Login from "@/pages/auth/Login";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/sign-in" element={<Login/>}/>
        </Routes>
    </div>
  )
}
