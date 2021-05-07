import { ThemeProvider } from './theme/themeContext';
import GlobalStyles from './theme/globalStyles'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import { Navbar, Footer } from "../website/components"
import Contact from './pages/Contact';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}
export default App;