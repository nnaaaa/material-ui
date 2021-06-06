import { AppBar, Button, Typography, Toolbar, IconButton, Grid, Container, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const styles = makeStyles((theme) => ({
    appBar: {
        boxShadow: `none`,
        padding: 0
    },
    item: {
        margin: theme.spacing(2),
        color: 'white'
    },
    link: {
        textDecoration:'none'
    }
}))

export default function NavBar() {
    const classes = styles()
    return (
        <AppBar position="static" color="primary" className={classes.appBar}>
            <Toolbar variant="contained">
                <Grid container justify="space-between">
                    <Grid item container md={2} justify="center">
                        <Grid item>
                            <Typography className={classes.logo} variant="h3">
                                engitech
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container md={3} justify="center" alignContent="center">
                        <Grid item md={4}>
                            <Link to="/" className={classes.link}>
                                <Button className={classes.item}>
                                    Home
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Link to="/footer" className={classes.link}>
                                <Button className={classes.item}>
                                    About
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Link to="/footer" className={classes.link}>
                                <Button className={classes.item}>
                                    Private
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item container md={2} justify="center" alignContent="center">
                        <Grid item >
                            <IconButton size="small">
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton size="small">
                                <FontAwesomeIcon icon={faFacebook} />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <IconButton size="small">
                                <FontAwesomeIcon icon={faGoogle} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}