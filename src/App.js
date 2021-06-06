import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import Header from './feature/Header/index'
import Home from './screen/Home/index'
import Footer from './feature/Footer/index'
import { theme, css } from './theme'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

function App() {
  const styles = css()
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header />
        <Switch>
          <Route path='footer'>
            <Footer/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
