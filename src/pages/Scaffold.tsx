import { initUserStore } from "../store/userStore.ts";
import { Home } from "./Home/Home.tsx";

function Scaffold() {
  initUserStore();

  return <Home />;
}

export default Scaffold;
