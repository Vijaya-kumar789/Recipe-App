# Kitchen Whiz Recipe App

This repository contains a Recipe App built using TheMealDB API. The app allows users to explore a wide range of recipes and view detailed instructions by category.

---

## Features

- Browse recipes by category.
- View detailed recipe instructions and ingredients.
- Responsive design for a seamless experience on all devices.

---

## Tech Stack

- **Frontend:** React.js, Tailwind
- **Backend:** Node.js, Express.js
- **API:** [TheMealDB API](https://www.themealdb.com)
- **Deployment:** [Netlify/Render] (replace with your choice)

---

## Setup and Installation

### Prerequisites

1. Node.js and npm installed.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Vijaya-kumar789/Recipe-App.git
   cd Recipe-App
   ```

2. Navigate to the `client` folder to set up the frontend:
   ```bash
   cd client
   ```

3. Install frontend dependencies:
   ```bash
   npm install
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

5. Open a new terminal and navigate to the `server` folder to set up the backend:
   ```bash
   cd ../server
   ```

6. Install backend dependencies:
   ```bash
   npm install
   ```

7. Start the backend server:
   ```bash
   npm start
   ```

8. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## Usage

1. Open the app in your browser.
2. Browse recipes by selecting a category from the list.
3. Click on a recipe to view detailed instructions, ingredients, and preparation steps.

---

## API Integration

The app integrates with [TheMealDB API](https://www.themealdb.com) to fetch recipe data.

### Example API Request

```javascript
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Deployment

1. Build the frontend project:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `build` folder of the frontend to your preferred hosting service (e.g., Netlify, Vercel).

3. Deploy the backend to your hosting platform (e.g., Heroku, AWS, Render).

4. Ensure the environment variables are configured in both the frontend and backend hosting services.

---

## Future Enhancements

- Add user accounts for saving favorite recipes.
- Include meal planning and shopping list features.
- Add support for multi-language translations.
- Integrate search functionality by meal name or area.

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements or suggestions.

---

## Acknowledgments

- [TheMealDB](https://www.themealdb.com) for providing the recipe API.
- The open-source community for inspiring this project.

