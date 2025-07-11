# Contributing to Modern Web Developer Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 🤝 Ways to Contribute

### 🐛 Bug Reports
- Check existing issues before creating a new one
- Use the bug report template
- Provide clear reproduction steps
- Include environment details (browser, OS, etc.)

### 💡 Feature Requests
- Search existing issues for similar requests
- Use the feature request template
- Explain the use case and benefits
- Consider implementation complexity

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch
- Follow coding standards
- Write meaningful commit messages
- Add tests if applicable
- Update documentation

### 📚 Documentation
- Fix typos or unclear explanations
- Add missing documentation
- Improve code comments
- Update README if needed

## 🚀 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup Steps
1. **Fork the repository** on GitHub
2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/portfolio.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📋 Pull Request Process

### Before Submitting
1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding standards
   - Test your changes thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a clear, descriptive title
   - Fill out the PR template
   - Link related issues
   - Request review from maintainers

### PR Guidelines
- **One feature per PR** - Keep changes focused
- **Clear description** - Explain what and why
- **Test coverage** - Ensure functionality works
- **Documentation** - Update if needed
- **No merge conflicts** - Rebase if necessary

## 🎯 Coding Standards

### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable names
- Add JSDoc comments for complex functions
- Prefer const/let over var

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Use semantic class names
- Maintain consistent spacing
- Test responsive design

### File Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── data/          # Static data
├── utils/         # Utility functions
└── styles/        # Global styles
```

### Naming Conventions
- **Components**: PascalCase (e.g., `MyComponent.jsx`)
- **Files**: camelCase (e.g., `useTheme.jsx`)
- **Variables**: camelCase (e.g., `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Guidelines
- Write unit tests for utilities
- Test component rendering
- Test user interactions
- Mock external dependencies
- Aim for good coverage

## 📝 Commit Messages

Use conventional commits format:
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tool changes

### Examples
```
feat(hero): add floating animation effects
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(components): improve button hover states
```

## 🔄 Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

## 🏷️ Issue Labels

- **bug** - Something isn't working
- **enhancement** - New feature or improvement
- **documentation** - Documentation changes
- **good first issue** - Good for newcomers
- **help wanted** - Extra attention needed
- **priority: high** - Critical issues
- **priority: medium** - Important issues
- **priority: low** - Nice to have

## 📞 Getting Help

- **Issues**: Use GitHub issues for bugs and features
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact maintainers directly if needed

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Special thanks in commits

## 📄 License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to this project! Your help makes it better for everyone. 🙏
