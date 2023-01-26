import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import JobListingCardTopInformation from "./JobListingCardTopInformation";
import JobListingCardBottomInformation from "./JobListingCardBottomInformation";
// import Link from "@mui/material/Link";
export default function JobListingCard(props) {

    return (
        <Grid className="cardGrid" item>
            <Card className="jobListingCard" variant="outlined" sx={{
                borderRadius: "10px",
                // add this to the statehook when it is in focus
                "&:focus": {
                    border: "1px solid #1fc76a",
                }
            }} >
                <div className="cardLink" onClick={props.whenClicked} overlay sx={{ textDecoration: "none", color: "#000" }} >
                    <Grid container>
                        <JobListingCardTopInformation
                            item
                            
                            logo={props.logo}
                            companyName={props.companyName}
                            rating={props.rating}
                            jobName={props.jobName}
                            jobType={props.jobType}
                            timePosted={props.timePosted}
                            jobLocation={props.jobLocation}
                            salary={props.salary}
                        />
                        <JobListingCardBottomInformation item jobTag={props.jobTags} />
                    </Grid>
                </div>
            </Card>
        </Grid >
    )
}