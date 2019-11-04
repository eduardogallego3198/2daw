<?php
    $numeros = [25, 4, 9, 13, 8, 16, 20];

    function sumaHasta($numeros, $token) {
        // Suma un array hasta que encuentra el token y devuelve array de suma 
        // y posición del token
        $suma = 0;
        while(current($numeros) != $token) {
            $suma += current($numeros);
            next($numeros);
        }
        return array($suma, key($numeros));
    }

    $res = sumaHasta($numeros, 13);
    echo("Hay un 13 en la posición $res[1] <br/>");
    echo("La suma es $res[0]");
?>