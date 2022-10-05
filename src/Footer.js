import React from "react";
import { Grid, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    return (
        <Box>
            <Grid container className="Footer">
                <Grid container direction="column" className="FooterNames" xs={4}>
                    <p>Created by:</p>
                    <Grid item>
                        <a href="https://www.linkedin.com/in/rushla-hara-de-castro-2608b614a/"  target="_blank">Rushla Castro</a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.linkedin.com/in/yasmine-tanase/" target="_blank">Yasmine Tanase</a>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        <h3>FOLLOW US</h3>
                    </Grid>
                    <Grid>
                        <Grid >
                            <p>Rushla</p>
                            <a href="https://github.com/rushla" target="_blank" className="Icons">
                                <GitHubIcon sx={{color: "white"}}/>
                            </a>
                            <a href="https://www.instagram.com/rushla/" target="_blank" className="Icons">
                                <InstagramIcon sx={{color: "white"}}/>
                            </a>
                            <a href="https://www.tiktok.com/@rushla" target="_blank" className="Icons">
                                <img src="tiktok.svg" className="Icon" />
                            </a>
                        </Grid>
                        <Grid >
                            <p>Yasmine</p>
                            <a href="https://github.com/YhbCastro" target="_blank" className="Icons">
                                <GitHubIcon sx={{color: "white"}}/>
                            </a>
                            <a href="https://www.instagram.com/yasminehara/" target="_blank" className="Icons">
                                <InstagramIcon sx={{color: "white"}}/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer 