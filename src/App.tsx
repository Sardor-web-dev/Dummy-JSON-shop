import { ProductProvider } from "./contexts/ProductContext";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ProductProvider>
        <Layout />
    </ProductProvider>
  );
}

export default App;
