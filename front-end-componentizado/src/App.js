import { ResetCSS } from './global/resetCSS'
import Layout from './components/Layout'
import Container from './components/container';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Layout>
        <ResetCSS />
        <Container />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
