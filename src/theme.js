import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00bcd4'
      },
      secondary: {
        main:'#ffa733'
      }
    },
})
  
export const css = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(8, 0, 8, 0)
  },
}))