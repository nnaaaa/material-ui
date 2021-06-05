import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'
import img3 from '../../assets/4.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

const tileData = [
    {
        img: img1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];

export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={3} >
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}