class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  display(node) {
    if (!node) {
      return;
    }
    display(node.left);
    console.log(node.data);
    display(node.right);
  }

  insertNode(root, node) {
    if (root.data >= node.data) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  inorder(node) {
    if (node === null) {
      return;
    }
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }

  preorder(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  postorder(node) {
    if (node === null) {
      return;
    }
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data);
  }
}

let arr = [10, 4, 3, 5, 11, 12];

let tree = new BST();
for (let i of arr) {
  tree.insert(i);
}
console.table("inorder");
tree.inorder(tree.root);
console.table("preorder");
tree.preorder(tree.root);
console.table("postorder");
tree.postorder(tree.root);
