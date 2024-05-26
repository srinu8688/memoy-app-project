import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";
import IntroScreen1 from "./pages/IntroScreen1";
import IntroScreen2 from "./pages/IntroScreen2";
import InstructionScreen from "./pages/InstructionScreen";
import ActivityScreen from "./pages/ActivityScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/intro-screen":
        title = "";
        metaDescription = "";
        break;
      case "/intro-screen1":
        title = "";
        metaDescription = "";
        break;
      case "/instruction-screen":
        title = "";
        metaDescription = "";
        break;
      case "/activity-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/intro-screen" element={<IntroScreen1 />} />
      <Route path="/intro-screen1" element={<IntroScreen2 />} />
      <Route path="/instruction-screen" element={<InstructionScreen />} />
      <Route path="/activity-screen" element={<ActivityScreen />} />
    </Routes>
  );
}
export default App;
