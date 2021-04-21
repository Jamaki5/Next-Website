import IconButton from "@material-ui/core/IconButton";

function Nav(props) {
  function getItem({ name, path, show, icon }) {
    return (
      <IconButton className="w-16 focus:outline-none" >
        {icon}
      </IconButton>
    );
  }

  return (
    <div className="fixed md:w-16 min-h-screen bg-gray-800">
      <div className="mt-16">
      {props.links.map((l) => getItem(l))}
      </div>
    </div>
  );
}

export default Nav;
