import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const employmentStatus = formData.get("employmentStatus") as string;
    const dietaryRestrictions = formData.getAll(
      "dietaryRestrictions",
    ) as string[];
    const favColor = formData.get("favColor") as string;

    console.log({
      email,
      password,
      employmentStatus,
      dietaryRestrictions,
      favColor,
    });
  }

  return (
    <section>
      <h1>Signup form</h1>

      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        />

        <fieldset>
          <legend>Employment Status:</legend>

          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>

          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>

          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>

          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>

          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>

          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>

        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}

export default App;