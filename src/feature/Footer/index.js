import { AppBar, Button, Typography, Toolbar, IconButton, Grid, Container, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { faPaperPlane, faFileVideo, faHandPeace } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = makeStyles((theme) => ({
    wrapper: {
        background: theme.palette.primary.light,
        padding:theme.spacing(0,10)
    },
    contact: {
        padding: theme.spacing(10, 0)
    },
}))

export default function Footer() {
    const classes = styles()
    return (
        <div className={classes.wrapper} >
            <Container maxWidth="md" className={classes.contact} >
                <Grid container justify="center" spacing={3}>
                    <Grid item container md={4}>
                        <Grid item md={2} xs={12}>
                            <FontAwesomeIcon icon={faHandPeace}
                                size="2x" color="white" />
                        </Grid>
                        <Grid item md={10} xs={12}>
                            <Typography variant="h5" paragraph>
                                Online Support
                            </Typography>
                            <Typography variant="body2"
                                color="textSecondary" paragraph>
                                We offer a dedicated & friendly support,
                                regular updates & extended documentation.
                            </Typography>
                            <Button variant="contained">
                                Get Support
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item container md={4}>
                        <Grid item md={2} xs={12}>
                            <FontAwesomeIcon icon={faFileVideo}
                                size="2x" color="white" />
                        </Grid>
                        <Grid item md={10} xs={12}>
                            <Typography variant="h5" paragraph>
                                Detailed Documentation
                            </Typography>
                            <Typography variant="body2"
                                color="textSecondary" paragraph>
                                Our documentation is as thorough as possible.
                                Each theme options is detailed & easy to follow.
                            </Typography>
                            <Button variant="contained">
                                Online Documentation
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item container md={4}>
                        <Grid item md={2} xs={12}>
                            <FontAwesomeIcon icon={faPaperPlane}
                                size="2x" color="white" />
                        </Grid>
                        <Grid item md={10} xs={12}>
                            <Typography variant="h5" paragraph>
                                Video Tutorials
                            </Typography>
                            <Typography variant="body2"
                                color="textSecondary" paragraph>
                                Watch our video tutorials,
                                step by step instructions to set up the theme.
                            </Typography>
                            <Button variant="contained">
                                Watch Tutorial
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container md="xl" className={classes.contact} >
                <Typography variant="h4" align="center" paragraph>
                    TAKE YOUR IT SOLUTIONS UP WITH ENGITECH
                </Typography>
                <Grid container justify="center">
                    <Grid item>
                        <Button variant="contained">
                            VIEW DEMOS
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}