// AVL Tree Implementation
class TreeNode {
    constructor(val) {
        this.val = val;
        this.h = 1;
        this.left = null;
        this.right = null;
        this.x = 0;
        this.y = 0;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
        this.lastRotation = 'None';
        this.steps = [];
    }

    insert(val) {
        this.root = this._insert(this.root, val);
        this.updateStats();
        this.drawTree();
    }

    _insert(node, val) {
        if (!node) return new TreeNode(val);

        if (val < node.val) {
            node.left = this._insert(node.left, val);
        } else if (val > node.val) {
            node.right = this._insert(node.right, val);
        } else {
            return node; // Duplicate values not allowed
        }

        this.updateHeight(node);
        return this.balance(node);
    }

    updateHeight(node) {
        if (!node) return 0;
        node.h = 1 + Math.max(this.height(node.left), this.height(node.right));
        return node.h;
    }

    height(node) {
        return node ? node.h : 0;
    }

    getBF(node) {
        if (!node) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    balance(node) {
        if (!node) return null;

        let bf = this.getBF(node);

        if (bf > 1) { // Left heavy
            if (this.getBF(node.left) >= 0) {
                this.lastRotation = 'LL';
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left);
                this.lastRotation = 'LR';
                return this.rightRotate(node);
            }
        } else if (bf < -1) { // Right heavy
            if (this.getBF(node.right) <= 0) {
                this.lastRotation = 'RR';
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.right);
                this.lastRotation = 'RL';
                return this.leftRotate(node);
            }
        }

        this.lastRotation = 'None';
        return node;
    }

    leftRotate(z) {
        let y = z.right;
        let T2 = y.left;

        y.left = z;
        z.right = T2;

        this.updateHeight(z);
        this.updateHeight(y);

        return y;
    }

    rightRotate(z) {
        let y = z.left;
        let T2 = y.right;

        y.right = z;
        z.left = T2;

        this.updateHeight(z);
        this.updateHeight(y);

        return y;
    }

    updateStats() {
        document.getElementById('tree-height').textContent = this.height(this.root);
        document.getElementById('balance-factor').textContent = this.getBF(this.root);
        document.getElementById('last-rotation').textContent = this.lastRotation;
        document.getElementById('node-count').textContent = this.countNodes(this.root);
    }

    countNodes(node) {
        if (!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    // Tree Visualization
    drawTree() {
        const svg = document.getElementById('tree-svg');
        svg.innerHTML = '';

        if (!this.root) return;

        this.calculatePositions(this.root, 400, 50, 200);
        this.drawNode(svg, this.root);
    }

    calculatePositions(node, x, y, offset) {
        if (!node) return;

        node.x = x;
        node.y = y;

        if (node.left) {
            this.calculatePositions(node.left, x - offset, y + 80, offset / 2);
        }
        if (node.right) {
            this.calculatePositions(node.right, x + offset, y + 80, offset / 2);
        }
    }

    drawNode(svg, node) {
        if (!node) return;

        // Draw edges first
        if (node.left) {
            this.drawEdge(svg, node.x, node.y, node.left.x, node.left.y);
            this.drawNode(svg, node.left);
        }
        if (node.right) {
            this.drawEdge(svg, node.x, node.y, node.right.x, node.right.y);
            this.drawNode(svg, node.right);
        }

        // Draw node
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', 25);
        circle.classList.add('node');

        const bf = this.getBF(node);
        if (bf > 1) {
            circle.classList.add('glow-amber');
        } else if (bf < -1) {
            circle.classList.add('glow-violet');
        } else {
            circle.classList.add('glow-green');
        }

        // Add hover effects
        circle.addEventListener('mouseover', (e) => {
            const tooltip = document.getElementById('tooltip');
            tooltip.textContent = `Value: ${node.val}, Height: ${node.h}, BF: ${bf}`;
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 10 + 'px';
            tooltip.classList.remove('opacity-0');
            tooltip.classList.add('opacity-100');
            circle.setAttribute('r', 30);
        });

        circle.addEventListener('mouseout', () => {
            const tooltip = document.getElementById('tooltip');
            tooltip.classList.remove('opacity-100');
            tooltip.classList.add('opacity-0');
            circle.setAttribute('r', 25);
        });

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + 5);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.textContent = node.val;

        svg.appendChild(circle);
        svg.appendChild(text);
    }

    drawEdge(svg, x1, y1, x2, y2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1 + 25);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2 - 25);
        line.setAttribute('stroke', 'white');
        line.setAttribute('stroke-width', '2');
        line.classList.add('edge');
        svg.appendChild(line);
    }
}

// Initialize
const tree = new AVLTree();
tree.drawTree();

// Event Listeners
document.getElementById('insert-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('insert-value').value);
    if (!isNaN(val)) {
        tree.insert(val);
        document.getElementById('insert-value').value = '';
    }
});

document.getElementById('auto-demo-btn').addEventListener('click', () => {
    const sequence = document.getElementById('demo-sequence').value.split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v));
    let i = 0;
    const interval = setInterval(() => {
        if (i < sequence.length) {
            tree.insert(sequence[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    tree.root = null;
    tree.lastRotation = 'None';
    tree.updateStats();
    tree.drawTree();
});

// Enter key for insert
document.getElementById('insert-value').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('insert-btn').click();
    }
});