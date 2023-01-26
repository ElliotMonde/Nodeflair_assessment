import Grid from "@mui/material/Grid";
import jobs from "../jobInformation"
import JobListingCardTopInformation from "./jobListingContainerComponents/JobListingCardTopInformation";
export default function JobDetailedInformation(props) {
    return(
        <Grid container className="jobDetailsContainer" sx={{flexDirection: "column"}}>
            <div sx={{ height: "20vh" }}>
                <JobListingCardTopInformation 
                    logo={jobs[props.jobKey].company.companyLogo}
                    companyName={jobs[props.jobKey].company.companyName}
                    rating={jobs[props.jobKey].company.rating}
                    jobName={jobs[props.jobKey].job.jobTitle}
                    jobType={jobs[props.jobKey].job.jobType}
                    timePosted={jobs[props.jobKey].timePosted}
                    jobLocation={jobs[props.jobKey].job.jobLocation}
                    salary={jobs[props.jobKey].job.salaryRange}
                    
                />
            </div>
            <div className="jobDescriptionDiv">
            {/* The Job Description portions can also be put in jobinformation.js and fetched based on the company's descriptions. */}
                <h2>Job Description</h2>
                <h3>
                   Responsibilities 
                </h3>
                <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                </ul>
                <h3>
                    Requirements
                </h3>
                <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit odio, molestie in pretium ut, aliquam ac libero. Etiam pulvinar lorem ut neque aliquam, a hendrerit libero iaculis. Phasellus turpis risus, posuere eget elementum vel, lobortis ac neque. Integer efficitur ornare velit, quis imperdiet elit vulputate nec.  </li>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit odio, molestie in pretium ut, aliquam ac libero. Etiam pulvinar lorem ut neque aliquam, a hendrerit libero iaculis. </li>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                </ul>
            </div>
        </Grid>
    )
}