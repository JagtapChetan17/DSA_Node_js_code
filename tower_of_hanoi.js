function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 1) {
        document.write(" Move disk 1 from rod " + from_rod + " to rod " + to_rod + "\n"); 
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    document.write("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "\n");
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
} 
var n = 3; // Number of disks                  
towerOfHanoi(n, 'E', 'C', 'A')
