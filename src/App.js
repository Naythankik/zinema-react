import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WelcomePage} from "./Pages/WelcomePage";
import {FirstPage} from "./Pages/Default/FirstPage"
import {SecondPage} from  "./Pages/Default/SecondPage"
import {IndexPage} from "./Pages/Default/IndexPage";
import {ThirdPage} from "./Pages/Default/ThirdPage";
import {FourthPage} from "./Pages/Default/FourthPage";
import {SigninPage} from "./Pages/SigninPage";
import {SignupPage} from "./Pages/SignupPage";
import {ForgetPasswordPage} from "./Pages/ForgetPasswordPage";

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/trend" element={<FirstPage />} />
                  <Route path="/grand" element={<SecondPage />} />
                  <Route path="/read" element={<ThirdPage />} />
                  <Route path="/theatres" element={<FourthPage />} />
                  <Route path="/zinema" element={<WelcomePage />} />
                  <Route path="/signin" element={<SigninPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/forget-password" element={<ForgetPasswordPage />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;
