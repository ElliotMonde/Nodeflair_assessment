import JobTag from "./JobTag";

export default function JobListingCardBottomInformation(props) {
    return (
        <div className="jobListingCardBottomInformation">
            <p className="jobTagPara">
                {props.jobTag.map((tag) => {
                    return (
                        
                        <JobTag
                            key={props.jobTag.indexOf(tag)}
                            JobTag={tag}
                        />
                    )
                })}
            </p>    
        </div>
    )
}