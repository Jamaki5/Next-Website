import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
      opacity: "50%",
    },
    "& label.Mui-focused": {
      color: "#60A5FA",
      opacity: "100%",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#60A5FA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#93C5FD",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#60A5FA",
      },
    },
  },
})(TextField);

function InputField(props) {
  return <CssTextField {...props} />;
}

export default InputField;