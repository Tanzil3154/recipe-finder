# 🍳 Recipe Finder

A modern, responsive React application for discovering and exploring delicious recipes from around the world. Built with React 19, Vite, and modern CSS, this app provides an intuitive interface for searching, filtering, and viewing detailed recipe information.

![Recipe Finder Screenshot](https://via.placeholder.com/800x400/f8f9fa/333?text=Recipe+Finder+App)

## ✨ Features

### 🔍 Smart Search

- **Real-time Search**: Search recipes by name, ingredients, or description with debounced input for optimal performance
- **Intelligent Filtering**: Find recipes by cuisine type (Italian, Indian, American, Mexican, Asian) and difficulty level (Easy, Medium, Hard)
- **Multi-criteria Search**: Combine text search with filters for precise results

### 📱 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Recipe Cards**: Clean, card-based layout with recipe previews
- **Detailed Recipe Modal**: Full-screen recipe details with ingredients and step-by-step instructions
- **Visual Indicators**: Difficulty badges, cuisine tags, cooking time, and serving information
- **No Results Handling**: Friendly empty state when no recipes match the search criteria

### 🎨 Modern Interface

- **Clean Typography**: Easy-to-read fonts and well-structured layouts
- **Intuitive Icons**: SVG icons for better scalability and performance
- **Smooth Interactions**: Hover effects and smooth transitions
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd recipe-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 🛠️ Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server with hot reloading  |
| `npm run build`   | Build production-ready app in `dist/` folder |
| `npm run preview` | Preview production build locally             |
| `npm run lint`    | Run ESLint to check code quality             |

## 📂 Project Structure

```
recipe-finder/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── RecipeCard.jsx        # Individual recipe card
│   │   ├── RecipeCard.css        # Recipe card styles
│   │   ├── RecipeDetail.jsx      # Recipe modal/details
│   │   ├── RecipeDetail.css      # Recipe detail styles
│   │   ├── RecipeGrid.jsx        # Recipe grid layout
│   │   ├── RecipeGrid.css        # Recipe grid styles
│   │   ├── SearchBar.jsx         # Search and filter component
│   │   └── SearchBar.css         # Search bar styles
│   ├── data/              # Application data
│   │   └── recipes.js     # Recipe dataset
│   ├── assets/            # Images and assets
│   │   └── react.svg      # React logo
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global application styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global CSS styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🧩 Component Architecture

### App.jsx (Main Component)

- **State Management**: Handles search terms, filters, and selected recipe
- **Data Flow**: Manages communication between all child components
- **Recipe Filtering**: Implements real-time filtering logic with useMemo optimization

### SearchBar.jsx

- **Debounced Search**: Prevents excessive API calls with 500ms debounce
- **Filter Controls**: Dropdown menus for cuisine and difficulty filtering
- **Clear Functionality**: Reset all search and filter states

### RecipeGrid.jsx

- **Responsive Layout**: CSS Grid-based responsive recipe display
- **Empty States**: Handles no-results scenarios gracefully
- **Recipe Cards**: Maps recipe data to individual RecipeCard components

### RecipeCard.jsx

- **Recipe Preview**: Shows essential recipe information at a glance
- **Interactive**: Click-to-view full recipe details
- **Visual Elements**: Displays cooking time, servings, difficulty, and cuisine

### RecipeDetail.jsx

- **Modal Interface**: Full-screen overlay for detailed recipe view
- **Complete Information**: Shows all recipe data including ingredients and instructions
- **User Experience**: Click outside to close, dedicated close button

## 📊 Data Structure

Each recipe object contains the following properties:

```javascript
{
  id: number,              // Unique identifier
  title: string,           // Recipe name
  description: string,     // Brief recipe description
  ingredients: string[],   // Array of ingredients
  instructions: string[],  // Step-by-step cooking instructions
  cookTime: string,        // Cooking time (e.g., "20 mins")
  servings: number,        // Number of servings
  difficulty: string,      // "Easy", "Medium", or "Hard"
  cuisine: string,         // Cuisine type
  image: string           // Recipe image URL
}
```

### Sample Recipes Included

- **Classic Spaghetti Carbonara** (Italian, Medium)
- **Chicken Tikka Masala** (Indian, Hard)
- **Classic Caesar Salad** (American, Easy)
- **Beef Tacos** (Mexican, Easy)
- **Chocolate Chip Cookies** (American, Easy)
- **Vegetable Stir Fry** (Asian, Easy)

## 🎨 Styling & Design

### CSS Architecture

- **Component-scoped CSS**: Each component has its own CSS file
- **CSS Custom Properties**: Uses CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern CSS Features**: Uses CSS Grid, Flexbox, and modern selectors

### Design System

- **Color Palette**: Clean, modern colors with good contrast ratios
- **Typography**: Readable font stack with proper hierarchy
- **Spacing**: Consistent spacing system using rem units
- **Animations**: Subtle hover effects and transitions

## 🚀 Performance Optimizations

- **React.useMemo**: Optimized recipe filtering to prevent unnecessary re-renders
- **Debounced Search**: Reduces search frequency to improve performance
- **CSS Optimization**: Efficient CSS with minimal reflows and repaints
- **SVG Icons**: Scalable vector graphics for crisp icons at any size

## 🔧 Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with modern features
- **Code Quality**: ESLint with React-specific rules
- **Development**: Hot Module Replacement (HMR) for fast development

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and component structure
- Add CSS files for new components
- Update this README if you add new features
- Test your changes on different screen sizes

## 📝 Future Enhancements

- [ ] Recipe rating and reviews system
- [ ] User authentication and personal recipe collections
- [ ] Recipe sharing functionality
- [ ] Advanced search with multiple cuisine types
- [ ] Recipe import from external sources
- [ ] Nutritional information display
- [ ] Shopping list generation
- [ ] Recipe scaling (adjust serving sizes)
- [ ] Offline support with service workers
- [ ] Recipe video integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the existing issues on GitHub
2. Create a new issue with a detailed description
3. Include steps to reproduce any bugs

---

**Happy Cooking! 👨‍🍳👩‍🍳**

_Made with ❤️ and React_
