function capturaWebcam() {
    var video = document.querySelector("#videoWebcam");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            video.srcObject = stream;
        }).catch(function (error) {
            document.write("Algo ha salido mal!");
        });
    }
}