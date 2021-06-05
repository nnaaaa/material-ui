import { AppBar, Button, Typography, Toolbar, IconButton, Grid, Container, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = makeStyles((theme) => ({
    appBar: {
        boxShadow: `none`,
        padding: 0
    },
    logo: {
        flex: 1,
    },
    item: {
        margin: theme.spacing(2),
        color: 'white'
    },
    btnGroup: {
        flex: 1,
        justifyContent: 'flex-end'
    }
}))

export default function NavBar() {
    const classes = styles()
    return (
        <AppBar position="static" color="primary" className={classes.appBar}>
            <Toolbar variant="contained">
                <Typography className={classes.logo} variant="h3">engitech</Typography>
                <Button className={classes.item}>
                    Demos
                </Button>
                <Button className={classes.item}>
                    Feature
                </Button>
                <Button className={classes.item}>
                    Documentation
                </Button>
                <ButtonGroup className={classes.btnGroup}>
                    <IconButton size="small">
                        <FontAwesomeIcon icon={faTwitter} />
                    </IconButton>
                    <IconButton size="small">
                        <FontAwesomeIcon icon={faFacebook} />
                    </IconButton>
                    <IconButton size="small">
                        <FontAwesomeIcon icon={faGoogle} />
                    </IconButton>
                </ButtonGroup>

            </Toolbar>
        </AppBar>
    )
}