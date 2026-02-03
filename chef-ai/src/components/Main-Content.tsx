import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipeShown, setRecipeShown] = React.useState<boolean>(false);

  function addIngredient(formData: FormData): void {
    const newIngredient = formData.get("ingredient") as string;
    if (!newIngredient) return;

    setIngredients((prev) => [...prev, newIngredient]);
  }

  function showRecipe(): void {
    setRecipeShown(true);
  }

  return (
    <main>
      {/* FORM */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          required
        />
        <button type="submit">Add ingredient</button>
      </form>

      {/* INGREDIENT SECTION */}
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>

          <ul className="ingredients-list" aria-live="polite">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={showRecipe}>Get a recipe</button>
          </div>
        </section>
      )}

      {/* SAME RECIPE SECTION AS BEFORE */}
      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>

          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple and delicious{" "}
              <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
            </p>

            <h3>Beef Bolognese Pasta</h3>

            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g. spaghetti, penne, or linguine)
              </li>
            </ul>

            <strong>Instructions:</strong>
            <ol>
              <li>Bring a large pot of salted water to a boil.</li>
              <li>Cook the ground beef until browned.</li>
              <li>Add onion and garlic; cook 2–3 minutes.</li>
              <li>Stir in tomato paste.</li>
              <li>Add tomatoes, broth, oregano, basil. Simmer.</li>
              <li>Cook pasta separately.</li>
              <li>Toss pasta with sauce.</li>
              <li>Serve hot.</li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
