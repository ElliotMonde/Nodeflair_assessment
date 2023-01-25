import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobListingCard from "./JobListingCard";
import jobs from "../../jobInformation"
export default function JobListingCardContainer() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} sx={{flexDirection: "column"}}className="cardContainer">
                {jobs.map( job=>{
                    return(
                        <JobListingCard
                            key = {job.id}
                            logo = {job.company.companyLogo}
                            companyName = {job.company.companyName}
                            rating = {job.company.rating}
                            jobName = {job.job.jobTitle}
                            jobType = {job.job.jobType}
                            timePosted = {job.timePosted}
                            jobLocation = {job.job.jobLocation}
                            salary = {job.job.salaryRange}
                            jobTags = {job.tags}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}