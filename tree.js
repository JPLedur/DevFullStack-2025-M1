class TreeNode{
    constructor(value){
        this.value = value
        this.children = []
    }

    addChild(node){
        this.children.push(node)
    }

    removeChild(value){
        this.children = this.children.filter(child => child.value !== value) // Verifica o valor no array de filho que quer remover, filtrando para cada elemento no array
    }
}

class Tree {
    constructor(rootValue){
        this.root = new Tree(rootValue)
    }

    traverseDFS(callback){
        function recurse(node){
            callback(node) 
            node.children.array.forEach(child => recurse(child));
        }
        recurse(this.root)
    }
}

const tree = new Tree('A')

const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')
const I = new TreeNode('I')

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)

G.addChild(H)

function printNode(node){
    console.log(node.value)
}

tree.traverseDFS(printNode)