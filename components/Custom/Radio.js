import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const CssRadio = withStyles({
  root: {
    color: "#93C5FD",
    "&$checked": {
      color: "#60A5FA",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function OwnCssRadio(props) {
  return <CssRadio {...props} />;
}

export default OwnCssRadio;
