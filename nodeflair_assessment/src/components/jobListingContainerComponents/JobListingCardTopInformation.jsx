import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PlaceIcon from '@mui/icons-material/Place';

export default function JobListingCardTopInformation(props) {
    return (
        <Box className="jobListingCardTopInformation">
            <Grid container="true">
                <Grid item="true" className="cardTopDiv">
                    <div className="companyLogoDiv">
                        <img className="companyLogoImg"  src={props.logo} alt="company logo"/>
                    </div>
                    <div className="companyInfoDiv">
                        <p className="companyInfoPara">
                        <span className="companyNameSpan">
                                {props.companyName}
                        </span>
                        <span>
                                &nbsp;&nbsp;&nbsp;
                                {props.rating}
                                &nbsp;★
                        </span>
                        </p>
                        <h2 className="jobName">{props.jobName}</h2>
                    </div>
                    <div className="jobType">
                        {props.jobType}
                    </div>
                </Grid>
                <Grid className="cardBtmDiv">
                    <div className = "jobTimeLocation">
                        <span className="timePosted">
                            {props.timePosted}
                        </span>
                        <div className="jobLocation">
                            <span>
                                <PlaceIcon color="disabled" className="placeIcon"/>
                            </span>
                            <span>
                                {props.jobLocation}
                            </span>
                        </div>
                    </div>
                    <div className="jobSalary">
                        <p>
                            <span className="salaryInfo">
                                {props.salary.length > 0 ? `${props.salary[0]} - ${props.salary[1]}/mth` : null} - 
                            </span>
                            <span className="estSalaryTag">
                                EST
                            </span>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}