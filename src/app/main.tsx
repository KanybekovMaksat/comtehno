import { createRoot } from "react-dom/client";
import App from "./provider/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
