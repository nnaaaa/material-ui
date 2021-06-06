import { Grid, Container, Typography, Button,Card } from '@material-ui/core'
import { css } from '../../theme'
import Categories from '../../feature/Categories/index'
import Footer from '../../feature/Footer/index'

export default function HomePage() {
    const styles = css()
    return (
        <>
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
                <Grid container justify="center"
                    className={styles.padding}>
                    <Categories />
                </Grid>
                <Footer />
            </Container>
            
        </>
    )
}