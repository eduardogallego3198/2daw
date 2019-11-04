<?php
    function sumatorio(&$suma, ...$numeros) {
        $suma = 0;
        foreach ($numeros as $n)
            $suma += $n;
        return $suma;
    }

    echo sumatorio($res, 1, 2, 3) . "\n";
    echo $res;
?>