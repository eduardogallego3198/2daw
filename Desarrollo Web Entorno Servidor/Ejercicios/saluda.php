<?php
    function saluda($nombre, $saludo = "Hola") {
        if($nombre != null)
            return "$saludo $nombre";
    }
    
    echo saluda("Pepe\n");
    echo saluda(null, "Buenos días");
?>