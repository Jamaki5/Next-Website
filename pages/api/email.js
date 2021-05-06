export default (req, res) => {
  console.log("a request!");
  res.json({ valid: true });
};
