import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import {Home} from "./home";
import {Posts} from "./posts";
import {NotFound} from "./notFound";
import { PostDetails } from "./postdetails";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={App} />
                <Route path="/home" Component={Home} />
                <Route path="/post/:id" element={PostDetails} />
                <Route path="/*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    );
    }