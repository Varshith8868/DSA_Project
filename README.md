# AVL Tree Visualizer

A beautiful, interactive web-based visualization tool for AVL Trees (Adelson-Velsky and Landis Trees). This project demonstrates the self-balancing properties of AVL trees through real-time animations and statistics.

## Overview

The AVL Tree Visualizer helps students and developers understand how AVL trees maintain their balance during insertions. It provides a graphical representation of the tree structure, calculating balance factors and performing rotations (Left-Left, Right-Right, Left-Right, Right-Left) automatically.

## Features

- **Interactive Visualizations**: Watch nodes being inserted and the tree rebalancing itself.
- **Auto Demo Mode**: Run a predefined sequence of insertions to see the tree in action without manual input.
- **Real-time Statistics**:
    - **Tree Height**: Current height of the tree.
    - **Balance Factor**: Balance factor of the root node.
    - **Last Rotation**: Displays the type of the last rotation performed (LL, RR, LR, RL).
    - **Node Count**: Total number of nodes in the tree.
- **Visual Feedback**:
    - Color-coded nodes based on balance status (Green: Balanced, Amber: Left Heavy, Violet: Right Heavy).
    - Glowing effects and animations.
    - Hover tooltips for detailed node information (Value, Height, Balance Factor).
- **Responsive Design**: Built with a glassmorphism aesthetic using Tailwind CSS and custom styles.

## Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Custom styling and animations.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development (loaded via CDN).
- **JavaScript (ES6+)**: Logic for the AVL Tree data structure and DOM manipulation.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- An active internet connection (required to load Tailwind CSS from CDN).

### Installation

No installation is required. This is a static web application.

1. Clone or download this repository.
2. Open the directory containing the files.

### Running the Application

Simply open the `index.html` file in your web browser.

## Usage

1. **Insert a Value**:
   - Enter a number in the "Insert Value" input field.
   - Click the **Insert** button or press **Enter**.
   - Watch the node appear and the tree balance itself if necessary.

2. **Auto Demo**:
   - The "Demo Sequence" field contains a default list of numbers. You can edit this list (comma-separated).
   - Click **Auto Demo** to watch the sequence be inserted automatically.

3. **Reset**:
   - Click the **Reset** button to clear the tree and start over.

4. **Analyze Nodes**:
   - Hover over any node in the tree to see its specific Value, Height, and Balance Factor.

## License

This project is open source and available for educational purposes.
