import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="site-pages">
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
            <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
