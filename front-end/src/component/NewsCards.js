import * as React from 'react';
import "../component/NewsCards.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

export default function MultiActionAreaCard() {
  return (

    <div >

      <div className='news'>
        <h5 className='news-title' style={{ alignItems: "center" }}> WHAT'S UP IN FESTIWORLD?</h5>
        <div id='border'></div>
      </div>
      <Container fluid >

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={3} >

            <Grid item xs={12} md={12} lg={4} style={{ alignItems: "center", justifyContent: 'center', display: "flex" }}>
              <Card sx={{ maxWidth: 700 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1526933939726-28eb126974ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      News Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={4} style={{ alignItems: "center", justifyContent: 'center', display: "flex" }}>
              <Card sx={{ maxWidth: 700 }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1526933939726-28eb126974ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      News Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={4} style={{ alignItems: "center", justifyContent: 'center', display: "flex" }}>
              <Card sx={{ maxWidth: 700 }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1526933939726-28eb126974ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      News Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>


          </Grid>
        </Box>
      </Container>
</div>


      );
}
