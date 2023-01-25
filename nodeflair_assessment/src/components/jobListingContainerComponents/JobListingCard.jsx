import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import JobListingCardTopInformation from "./JobListingCardTopInformation";
import JobListingCardBottomInformation from "./JobListingCardBottomInformation";

export default function JobListingCard(props) {

    return (
        <Grid className="cardGrid" item>
            <Card className="jobListingCard" variant="outlined" sx={{borderRadius: "10px"}}>
                <Grid container>
                <JobListingCardTopInformation
                    item
                    xs={8}
                    logo={props.logo}
                    companyName={props.companyName}
                    rating={props.rating}
                    jobName={props.jobName}
                    jobType={props.jobType}
                    timePosted={props.timePosted}
                    jobLocation={props.jobLocation}
                    salary={props.salary}
                />
                <JobListingCardBottomInformation item xs={4}  jobTag={props.jobTags}/>
                </Grid>
            </Card>
        </Grid>
    )
}