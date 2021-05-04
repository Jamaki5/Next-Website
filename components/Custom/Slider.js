import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const CssSlider = withStyles({
  root: {
    color: "#60A5FA",
  },
})(Slider);

function OwnCssSlider(props) {
  return <CssSlider {...props} />;
}

export default OwnCssSlider;
