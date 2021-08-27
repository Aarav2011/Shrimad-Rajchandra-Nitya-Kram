function function1() {
    Stop();
    document.getElementById("audio1").play();
}
function function2() {
    document.getElementById("audio1").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio2").play();
}
function function3() {
    document.getElementById("audio2").pause();
    document.getElementById("audio1").pause();
    document.getElementById("audio3").play();
}
function Stop() {
    document.getElementById("audio2").pause();
    document.getElementById("audio3").pause();
    document.getElementById("audio1").pause();
}