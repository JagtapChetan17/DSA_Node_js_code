function createAdjMatrix(V, G) {
    var adjMatrix = [];
    for (var i = 0; i < V; i++) {
        adjMatrix.push([]); 
        for (var j = 0; j < V; j++) { 
            adjMatrix[i].push(0); 
        }
    }
    for (var i = 0; i < G.length; i++) {
        adjMatrix[G[i][0]][G[i][1]] = G[i][2];
        adjMatrix[G[i][1]][G[i][0]] = G[i][2];
    }
    return adjMatrix;
}
function prims(V, G) {
    var adjMatrix = createAdjMatrix(V, G);
    var vertex = 0; var MST = []; var edges = []; var visited = []; var minEdge = [null, null, Infinity];

    while (MST.length !== V - 1) {

        visited.push(vertex);

        for (var r = 0; r < V; r++) {
            if (adjMatrix[vertex][r] !== 0) {
                edges.push([vertex, r, adjMatrix[vertex][r]]);
            }
        }
        for (var e = 0; e < edges.length; e++) {
            if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) {
                minEdge = edges[e];
            }
        }
        edges.splice(edges.indexOf(minEdge), 1); 
        MST.push(minEdge + "</br>"); 
        vertex = minEdge[1]; 
        minEdge = [null, null, Infinity];
    }
    console.log(MST);
}
var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5; var graph = [
    [a, b, 2],
    [a, c, 3],
    [b, d, 3],
    [b, c, 5],
    [b, e, 4],
    [c, e, 4],
    [d, e, 2],
    [d, f, 3],
    [e, f, 5]

];
prims(6, graph);   
