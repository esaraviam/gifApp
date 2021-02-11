import GifGrid from "./GifGrid";
import PropTypes from "prop-types";
import React from "react";
const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories
        .map((category, i) => {
          return <GifGrid key={`category_${i}`} categoryName={category} />;
        })
        .reverse()}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
