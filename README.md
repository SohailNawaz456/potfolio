# Alex Carter - 3D Portfolio Website

A cutting-edge, immersive 3D portfolio website for web developer Alex Carter. Built with HTML, Tailwind CSS, Three.js, GSAP, and vanilla JavaScript.

## Features

- Stunning 3D elements and WebGL particle background
- Rotating 3D cube with profile images
- Interactive 3D project cards with tilt effect
- Custom cursor following mouse movements
- Animated skill bars with glowing effects
- Smooth scrolling with GSAP animations
- Glitch text effects for headings
- Responsive design that works on all devices
- Glass morphism panels with blur effects
- Mobile-friendly navigation menu
- Animated elements that appear as you scroll
- Neon glow effects and borders

## File Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom CSS styles and animations
├── js/
│   ├── main.js             # Core JavaScript functionality
│   └── 3d-effects.js       # Three.js and GSAP animations
└── README.md               # Project documentation
```

## Technologies Used

- **HTML5** - Structure and semantic markup
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D rendering and WebGL effects
- **GSAP** - Smooth animations and scrolling effects
- **Vanilla Tilt.js** - 3D tilt effect for project cards
- **Font Awesome** - Icons and visual elements

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. For the best experience, use Chrome, Firefox, or Edge

## Customization

### Personal Information

Edit the content in `index.html` to customize:
- Your name and professional titles
- About section with your story and skills
- Projects with descriptions and images
- Contact information

### 3D Elements

The portfolio includes several 3D elements that can be customized:
- WebGL particle background in `3d-effects.js`
- 3D rotating cube in the hero section
- 3D tilt effect on project cards
- Animated skill bars with glowing effects

### Styling

The website uses Tailwind CSS with custom styles in `css/styles.css`. You can:
- Change the color scheme by modifying the gradient colors
- Adjust the intensity of glow effects
- Modify the glitch animation parameters
- Customize the glass morphism effect opacity

### Images

Replace the placeholder images with your own by:
1. Adding your images to an `images/` folder
2. Updating the `src` attributes in the HTML

## Browser Support

This portfolio website is optimized for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Mobile experience is supported but some 3D effects may be reduced for performance.

## Performance Notes

The 3D effects can be resource-intensive. To improve performance:
- Reduce the particle count in the WebGL background
- Simplify animations on mobile devices
- Consider disabling some effects for users with slower devices

## Credits

- [Three.js](https://threejs.org/) - 3D JavaScript library
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vanilla Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) - Tilt effect library
- [Font Awesome](https://fontawesome.com/) - Icons
- [Unsplash](https://unsplash.com/) - Stock photos

## License

This project is open source and available under the [MIT License](LICENSE). 