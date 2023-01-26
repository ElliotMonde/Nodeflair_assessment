import Grid from "@mui/material/Grid";
import jobs from "../jobInformation"

export default function JobDetailedInformation(props) {
    return(
        <Grid container className="jobDetailsContainer">
                <h1 id="detailedJobTitle">{jobs[props.jobKey].company.companyName}</h1>
        </Grid>
    )
}