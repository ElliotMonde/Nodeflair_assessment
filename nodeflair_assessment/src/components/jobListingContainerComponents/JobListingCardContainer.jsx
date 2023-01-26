import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobListingCard from "./JobListingCard";
import jobs from "../../jobInformation"



function JobListingCardContainer(props) {
    const [currFocus, setCurrFocus] = useState(0);
    function SetCardFocus(key) {
        document.getElementsByClassName("jobListingCard")[currFocus].classList.remove("cardOnFocus");
        document.getElementsByClassName("jobListingCard")[key].classList.add("cardOnFocus");
        setCurrFocus(key);
        props.whenClicked(key);
        console.log(currFocus);
    }

    return (
        <Box className="cardContainerBox" sx={{ flexGrow: 1 }}>
            <Grid container sx={{ flexDirection: "column" }} className="cardContainer">
                {jobs.map(job => {
                    return (
                        <JobListingCard
                            whenClicked={() => { SetCardFocus(job.id) }}
                            key={job.id}
                            logo={job.company.companyLogo}
                            companyName={job.company.companyName}
                            rating={job.company.rating}
                            jobName={job.job.jobTitle}
                            jobType={job.job.jobType}
                            timePosted={job.timePosted}
                            jobLocation={job.job.jobLocation}
                            salary={job.job.salaryRange}
                            jobTags={job.tags}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}
export default JobListingCardContainer;
// function JobDetailedInformation() {
//     return (
//         <Grid container className="jobDetailsContainer">
//             <h1 id="detailedJobTitle">{jobs[SetCardFocus()].company.companyName}</h1>
//         </Grid>
//     )
// }
// export {JobListingCardContainer, JobDetailedInformation};