const desc = ({ value, label } = { value: null, label: null }) => {
  console.log(value);
  console.log(label);
};

desc();
desc({});
desc({ label: "akash", value: "ak" });
