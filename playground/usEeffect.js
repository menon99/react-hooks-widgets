 // useEffect(() => {
  //   console.log("Component mounted");
  // }, []); // [] means run only at initial render

  // useEffect(() => console.log("All render")); // runs at initial and all re-renders

  // useEffect(() => {
  //   console.log("Term updated");
  // }, [term]); // [term] means run when term is updated

  // useEffect(() => {
  //   console.log("Focus updated");
  // }, [inputState]);

  // useEffect(() => {
  //   if (inputState.length === 0 && term.length > 0) console.log("Boom search");
  // }, [term, inputState]); // runs when either term or focus is updated