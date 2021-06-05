import React from 'react'
import { Grid, CssBaseline, Container, Typography, Button } from '@material-ui/core'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import Header from './feature/Header/index'
import Card from './feature/Card/index.js'
import Categories from './feature/Categories/index.js'
import Footer from './feature/Footer/index'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bcd4'
    }
  },

})
const css = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(8, 0, 8, 0)
  },
}))
function App() {
  const styles = css()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={styles.padding}>
        <Typography variant="h3" align="center" component="h1" paragraph>
          IT SOLUTIONS & SOFTWARE WORDPRESS THEME
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <Button variant="outlined" color="primary">
              VIEW DEMOS
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
        </Grid>
      </Container>
      <Grid container justify="center"
        className={styles.padding}>
        <Categories />
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
