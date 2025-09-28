# Contributing to Recipe Finder

Thank you for your interest in contributing to Recipe Finder! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**

   - Click the "Fork" button on the GitHub repository page
   - Clone your fork locally:

   ```bash
   git clone https://github.com/your-username/recipe-finder.git
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

4. **Create a new branch for your feature**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Follow ES6+ syntax conventions
- Use meaningful variable and function names
- Add JSDoc comments for functions and components
- Keep components focused and single-purpose
- Use proper prop validation where applicable

### CSS

- Use component-scoped CSS files
- Follow BEM naming convention where appropriate
- Use CSS custom properties (variables) for consistent theming
- Ensure responsive design with mobile-first approach
- Test on different screen sizes

### File Structure

- Place new components in `src/components/`
- Each component should have its own CSS file
- Use PascalCase for component files (e.g., `MyComponent.jsx`)
- Use kebab-case for CSS files (e.g., `my-component.css`)

## 🔧 Development Workflow

### Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/add-recipe-rating
   ```

2. **Make your changes**

   - Write clean, readable code
   - Add appropriate comments and documentation
   - Test your changes thoroughly

3. **Test your changes**

   ```bash
   npm run dev      # Test in development
   npm run build    # Test production build
   npm run lint     # Check code quality
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add recipe rating system"
   ```

### Commit Message Convention

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Examples:

```
feat: add recipe search functionality
fix: resolve mobile layout issues
docs: update API documentation
style: format code with prettier
refactor: extract search logic to custom hook
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Search functionality works with various terms
- [ ] Filters work correctly (cuisine and difficulty)
- [ ] Recipe cards display properly
- [ ] Recipe detail modal opens and closes correctly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] No JavaScript errors in browser console
- [ ] App builds successfully for production

### Browser Testing

Test your changes in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Pull Request Process

### Before Submitting

1. Ensure your code follows the style guidelines
2. Test your changes thoroughly
3. Update documentation if necessary
4. Make sure all existing functionality still works
5. Rebase your branch on the latest main branch

### Submitting a Pull Request

1. **Push your branch to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request on GitHub**

   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - List the changes you've made

3. **Pull Request Template**

   ```markdown
   ## Description

   Brief description of the changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring

   ## Testing

   - [ ] Tested locally
   - [ ] Responsive design verified
   - [ ] No console errors

   ## Screenshots (if applicable)

   Add screenshots for UI changes
   ```

## 🎯 Areas for Contribution

### High Priority

- [ ] Recipe rating and review system
- [ ] Recipe categories and tags
- [ ] Advanced search functionality
- [ ] Recipe scaling (adjust servings)
- [ ] Improved mobile experience

### Medium Priority

- [ ] Recipe sharing functionality
- [ ] User authentication
- [ ] Personal recipe collections
- [ ] Nutritional information
- [ ] Shopping list generation

### Low Priority

- [ ] Dark mode support
- [ ] Recipe print functionality
- [ ] Recipe import/export
- [ ] Offline support
- [ ] Recipe video integration

## 🐛 Reporting Issues

### Bug Reports

Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### Feature Requests

Include:

- Clear description of the feature
- Use case and benefits
- Proposed implementation (if any)
- Mockups or examples (if applicable)

## 📚 Resources

### Helpful Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Code Examples

- [React Hooks](https://react.dev/reference/react)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🤝 Community Guidelines

### Be Respectful

- Treat all contributors with respect
- Be constructive in feedback
- Help newcomers to the project
- Follow the code of conduct

### Communication

- Use clear, concise language
- Ask questions if anything is unclear
- Provide helpful feedback on pull requests
- Share knowledge and best practices

## 📞 Getting Help

### Where to Ask Questions

- Open an issue for bugs or feature requests
- Start a discussion for general questions
- Check existing issues before creating new ones

### Response Times

- We aim to respond to issues within 48 hours
- Pull requests are typically reviewed within a week
- Be patient as this is maintained by volunteers

---

**Thank you for contributing to Recipe Finder! 🍳**

_Together, we can make this the best recipe finding app!_
