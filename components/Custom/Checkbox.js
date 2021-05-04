import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const CssCheckbox = withStyles({
  root: {
    color: "#93C5FD",
    "&$checked": {
      color: "#60A5FA",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function OwnCssCheckbox(props) {
  return <CssCheckbox {...props} />;
}

export default OwnCssCheckbox;
