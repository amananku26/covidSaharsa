import React,{Component} from "react"
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import "./Feeder.css"

class Feed extends Component {
  render() {
    return <Feedback projectId="60991d2eb37def00044f2507" />;
  }
}
Feedback.defaultProps = {
    email: true,
    emailRequired: true,
    emailDefaultValue: "",
    projectName: "",
    subProject: "",
    primaryColor: "black",
    textColor: "white",
    hoverBorderColor: "#000000",
    postSubmitButtonMsg: "Thanks!",
    submitButtonMsg: "Send Feedback",
    feedbackTypes: ["general", "Your Support", "idea"],
    zIndex: "100000000"
  };

export default Feed