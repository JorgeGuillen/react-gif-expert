import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Squirtle",
    
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // spread ... hace una copia de todo o un elemtno del array o un object
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
</>
  );
};
