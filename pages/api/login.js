export default (req, res) => {
  console.log(req.method)

  switch(req.method) {
    case "POST":
      const { id, pw } = JSON.parse(req.body);
      if(id === "test" && pw === "1234")
        res.status(200).json({ login: true })
      else
        res.status(200).json({ login: false })
      break;
    default:
      res.status(404).json();
  }
}
