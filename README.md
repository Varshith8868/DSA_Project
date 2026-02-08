# AVL Tree Visualizer


A beautiful, interactive web-based visualization tool for AVL Trees (Adelson-Velsky and Landis Trees). This project demonstrates the self-balancing properties of AVL trees through real-time animations and statistics.

## Overview

The AVL Tree Visualizer helps students and developers understand how AVL trees maintain their balance during insertions and deletions. It provides a graphical representation of the tree structure, calculating balance factors and performing rotations (Left-Left, Right-Right, Left-Right, Right-Left) automatically.

## Features

- **Interactive Operations**:
  - **Insert**: Add nodes to the tree and watch it self-balance.
  - **Delete**: Remove nodes from the tree with automatic rebalancing.
  - **Search**: Find nodes in the tree with visual feedback (blinking node).
- **Real-time Statistics**:
    - **Tree Height**: Current height of the tree.
    - **Balance Factor**: Balance factor of the root node.
    - **Last Rotation**: Displays the type of the last rotation performed (LL, RR, LR, RL).
    - **Node Count**: Total number of nodes in the tree.
- **Visual Feedback**:
    - Color-coded nodes based on balance status (Green: Balanced, Amber: Left Heavy, Violet: Right Heavy, Cyan: Searching).
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

Simply open the `index.html` file in your web browser, or run a local server (e.g., `python -m http.server 8000`) and navigate to `http://localhost:8000`.

## Usage

1. **Insert a Value**:
   - Enter a number in the "Insert Value" input field.
   - Click the **Insert** button or press **Enter**.
   - Watch the node appear and the tree balance itself if necessary.

2. **Delete a Value**:
   - Enter a number in the "Delete Value" input field.
   - Click the **Delete** button or press **Enter**.
   - The node is removed, and the tree rebalances if needed.

3. **Search for a Value**:
   - Enter a number in the "Search Value" input field.
   - Click the **Search** button or press **Enter**.
   - If found, the node blinks cyan for 2 seconds.

4. **Reset**:
   - Click the **Reset** button to clear the tree and start over.

5. **Analyze Nodes**:
   - Hover over any node in the tree to see its specific Value, Height, and Balance Factor.

## License

This project is open source and available for educational purposes.
