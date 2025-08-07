#include <bits/stdc++.h>
using namespace std;

//structure
struct Node {
    int data;
    Node* left;
    Node* right;
};

// creation
Node* createNode(int val) {
    Node* newnode = new Node();
    newnode->data = val;
    newnode->left = newnode->right = nullptr;
    return newnode;
}

// insertion
Node* insert(Node* node, int val) {
    if (node == nullptr) return createNode(val);

    if (val < node->data)
        node->left = insert(node->left, val);
    else
        node->right = insert(node->right, val);

    return node;
}

// inorder traversal
void inorder(Node* node) {
    if (node == nullptr) return;

    inorder(node->left);
    cout << node->data << endl;
    inorder(node->right);
}

// main
int main() {
    Node* head = nullptr;
    head = insert(head, 5);
    head = insert(head, 1);
    head = insert(head, 8);
    head = insert(head, 3);
    head = insert(head, 51);
    inorder(head);
    
}
