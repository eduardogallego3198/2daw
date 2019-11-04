function capturaMicrofono() {
    var audioMicrofono = document.querySelector("#audioMicrofono");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
            audioMicrofono.srcObject = stream;
        }).catch(function (error) {
            document.write("Algo ha salido mal!");
        });
    }
}