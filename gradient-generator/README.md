# Gradient Generator React TypeScript Application

This project creates an interactive gradient generator with customizable options for creating beautiful CSS gradients.

## Project Structure

```
gradient-generator/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   └── GradientGenerator/
│   │       ├── GradientGenerator.tsx
│   │       └── GradientGenerator.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Features

- Multiple gradient types: linear, radial, conic, and reflected
- Color customization with color pickers
- Scale adjustment from 0% to 500%
- Angle control for applicable gradient types
- Position control for radial and conic gradients
- Live preview
- CSS code generation

## Installation

1. Make sure you have Node.js installed (v14+ recommended)
2. Clone or download this repository
3. Navigate to the project directory
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

The application should now be running at http://localhost:3000

## File Descriptions

- **GradientGenerator.tsx**: The main component that handles all gradient generation logic
- **GradientGenerator.css**: Styles specific to the gradient generator component
- **App.tsx**: Root component that includes the gradient generator
- **App.css**: Global application styles
- **index.tsx**: Entry point for the React application
- **index.css**: Base styles for the entire application

## Usage

1. Select a gradient type from the dropdown (linear, radial, conic, or reflected)
2. Choose your start and end colors using the color pickers
3. Adjust the scale slider to increase or decrease the gradient size
4. For applicable gradients, adjust the angle and position
5. View the live preview and copy the generated CSS code

## Customization

You can easily customize this component by:

- Adding more gradient types
- Implementing additional color stops
- Creating preset gradients
- Adding export functionality for SVG or PNG

## Browser Support

This application works in all modern browsers that support CSS gradients:

- Chrome 26+
- Firefox 16+
- Safari 7+
- Edge 12+
- Opera 12.1+

## License

This project is open source and available under the MIT License.
