import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Provider from "./contexts";

export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <RoutesApp/>
      </Provider>
    </BrowserRouter>
  );
};