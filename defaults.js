const defaultValues = {
    fontName: "Roboto", // Default font for the widget
    customText: "Going Live Baby", // Default custom text
    fontSize: "16", // Default font size in pixels
    textColor: "#FFFFFF", // Default text color (white)
    backgroundColor: "#131019", // Default background color (dark)
    bderColor: "#FFFFFF", // Default border color (white)
    diamondColor: "#1DA1F2", // Default diamond color (blue)
    diamondGlowColor: "#FFD700", // Default diamond glow color (gold)
    textGlowColor: "#FFD700", // Default text glow color (gold)
    diamondGlowSpread: 10, // Default spread for diamond glow in pixels
    iconShadowSpread: 10, // Default spread for icon shadow in pixels
    gradientStart: "#FF0000", // Default gradient start color (red)
    gradientEnd: "#0000FF" // Default gradient end color (blue)
};

// Expose the default values globally
window.defaultValues = defaultValues;
