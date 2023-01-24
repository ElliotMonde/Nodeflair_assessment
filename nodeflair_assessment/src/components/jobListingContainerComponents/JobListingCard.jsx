import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import JobListingCardTopInformation from "./JobListingCardTopInformation";
import JobListingCardBottomInformation from "./JobListingCardBottomInformation";

export default function JobListingCard(props) {

    return (
        <Grid item>
            <Card className="jobListingCard" variant="elevation">

                <JobListingCardTopInformation
                    logo={props.logo}
                    companyName={props.companyName}
                    rating={props.rating}
                    jobName={props.jobName}
                    jobType={props.jobType}
                    timePosted={props.timePosted}
                    jobLocation={props.jobLocation}
                    salary={props.salary}
                />
                <JobListingCardBottomInformation />
            </Card>
        </Grid>
    )
}