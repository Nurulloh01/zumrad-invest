import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import Publication from "../pages/Publication";
import VidioBlog from "../pages/VidioBlog";
import Login from "../pages/Login";
import Karzina from "../pages/Karzina/karzina";
import Office from "../pages/Office/office";
import Detiski from "../pages/Detiski/detiski";
import Teatralni from "../pages/Teatralni/teatralni";
import Masajni from "../pages/Masajni/masajni";
import PublicationMore from "../pages/PublicationMore/publicationMore";
import LikeDom from "../pages/LikeDom/likeDom";
import Garantiya from "../pages/Garantiya/garanti";
import ContactA from "../pages/ContactA/contactA";
import Product from "../Admin/adminPages/Product/product";
import AdminNavbar from "../Admin/AdminNavbar/adminNavbar";
import AdminHome from "../Admin/adminPages/AdminHome/adminHome";
import AdminContact from "../Admin/adminPages/AdminContact/adminContact";
import ProductMore from "../pages/ProductMore/productMore";

export default function AppRouter() {
    return (<BrowserRouter >
        <Routes >
            <Route path="/" element={< Navigate to="/home" />} />
            <Route path="/home" element={< HomePage />} />
            <Route path="/publication" element={< Publication />} />
            <Route path="/VidioBlog" element={< VidioBlog />} />
            <Route path="/Login" element={< Login />} />
            <Route path="/ContactA" element={< ContactA />} />
            <Route path="/Karzina" element={< Karzina />} />
            <Route path="/LikeDom" element={< LikeDom />} />
            <Route path="/Office" element={< Office />} />
            <Route path="/Detiski" element={< Detiski />} />
            <Route path="/Teatralni" element={< Teatralni />} />
            <Route path="/Masajni" element={< Masajni />} />
            <Route path="/PublicationMore" element={< PublicationMore />} />
            <Route path="/Garantiya" element={< Garantiya />} />
            <Route path="/ProductMore" element={< ProductMore />} />
            <Route path="/AdminNavbar" element={< AdminNavbar />} />
            <Route path="/AdminHome" element={< AdminHome />} />
            <Route path="/Product" element={< Product />} />
            <Route path="/AdminContact" element={< AdminContact />} />
        </Routes>
    </BrowserRouter>
    );
}