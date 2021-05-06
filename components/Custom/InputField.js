import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function InputField(props) {
  const CssTextField = withStyles({
    root: {
      "& .MuiInputBase-root": {
        color: props.theme.color,
      },
      "& .MuiFormLabel-root": {
        color: props.theme.color,
        opacity: "70%",
      },
      "& label.Mui-focused": {
        color: props.theme.primary,
        opacity: "100%",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.theme.primary,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: props.theme.nofocus,
        },
        "&:hover fieldset": {
          borderColor: props.theme.hover,
        },
        "&.Mui-focused fieldset": {
          borderColor: props.theme.primary,
        },
      },
    },
  })(TextField);

  return <CssTextField {...props} />;
}

export default InputField;
