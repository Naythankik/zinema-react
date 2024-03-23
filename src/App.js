import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WelcomePage} from "./Pages/WelcomePage";
import {FirstPage} from "./Pages/Default/FirstPage"
import {SecondPage} from  "./Pages/Default/SecondPage"
import {IndexPage} from "./Pages/Default/IndexPage";
import {ThirdPage} from "./Pages/Default/ThirdPage";
import {FourthPage} from "./Pages/Default/FourthPage";
import {SigninPage} from "./Pages/Auth/SigninPage";
import {SignupPage} from "./Pages/Auth/SignupPage";
import {ForgetPasswordPage} from "./Pages/Auth/ForgetPasswordPage";
import {ResetPasswordPage} from "./Pages/Auth/ResetPasswordPage";
import {BrowserPage} from "./Pages/Zinema/BrowserPage";

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="trend" element={<FirstPage />} />
                  <Route path="grand" element={<SecondPage />} />
                  <Route path="read" element={<ThirdPage />} />
                  <Route path="theatres" element={<FourthPage />} />
                  <Route path="zinema" element={<WelcomePage />} />
                  <Route path='auth'>
                      <>
                          <Route path="signin" element={<SigninPage />} />
                          <Route path="signup" element={<SignupPage />} />
                          <Route path="forget-password" element={<ForgetPasswordPage />} />
                          <Route path="reset-password/:token" element={<ResetPasswordPage />} />
                      </>
                  </Route>
                  <Route path="browse" element={<BrowserPage />} />

              </Routes>
          </BrowserRouter>
  );
}

export default App;
