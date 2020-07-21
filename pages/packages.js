// make array of package price, append each value from low to high
const packages = new Array();
packages.push(50);
packages.push(75);
packages.push(150);
packages.push(500);

// load package prices into the html in order of appended (low -> high, 0 -> 3)
function loadPackages() {
    document.getElementById("package1").innerHTML = packages[0];
    document.getElementById("package2").innerHTML = packages[1];
    document.getElementById("package3").innerHTML = packages[2];
    document.getElementById("package4").innerHTML = packages[3];
}