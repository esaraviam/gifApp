import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import Grid from "@material-ui/core/Grid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);
  return (
    <Grid
      direction="row"
      justify="space-between"
      alignItems="center"
      container
      spacing={3}
    >
      <Grid item xs={12}>
        <h2>Gif Expert App</h2>
      </Grid>
      <Grid item xs={12}>
        <AddCategory setCategories={setCategories} />
      </Grid>
      <Grid item xs={12}>
        <CategoryList categories={categories} />
      </Grid>
    </Grid>
  );
};

export default GifExpertApp;
