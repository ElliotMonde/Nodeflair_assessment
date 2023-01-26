import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import JobListingCardTopInformation from "./JobListingCardTopInformation";
import JobListingCardBottomInformation from "./JobListingCardBottomInformation";
// import Link from "@mui/material/Link";
export default function JobListingCard(props) {

    return (
        <Grid className="cardGrid" item>

            <div className="cardLink" onClick={props.whenClicked} overlay="true" sx={{ textDecoration: "none", color: "#000" }} >
                <Card className="jobListingCard" sx={{ borderRadius: "10px" }}>
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
                </Card>
            </div>
        </Grid >
    )
}