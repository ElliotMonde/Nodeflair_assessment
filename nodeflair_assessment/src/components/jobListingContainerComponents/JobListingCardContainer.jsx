import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobListingCard from "./JobListingCard";
import jobs from "../../jobInformation"
export default function JobListingCardContainer(props) {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {jobs.map( job=>{
                    return(
                        <JobListingCard
                            logo = {job.company.companyLogo}
                            companyName = {job.company.companyName}
                            rating = {job.company.rating}
                            jobName = {job.job.jobTitle}
                            jobType = {job.job.jobType}
                            timePosted = {job.timePosted}
                            jobLocation = {job.job.jobLocation}
                            salary = {job.job.salaryRange}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}