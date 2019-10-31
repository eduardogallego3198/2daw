<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
    <?php
        $nombre = 'Eduardo';
        
        $str = <<<cad1
        Ejemplo de una cadena
        expandida en varias líneas
        empleando la sintaxis heredoc.
        cad1;

        $str2 = <<<'cad2'
        Ejemplo de un string
        expandido en varias líneas
        empleando la sintaxis nowdoc.
        cad2;

        $algo = "Algo";
        
        echo "Esto es una cadena sencilla\n";

        echo "Hola $nombre\n";

        echo "Esto es una comilla doble: \"\n";

        echo "$str\n";

        echo <<<EOT
        Mi nombre es "$nombre".
        Esto debería mostrar una 'A' mayúscula: \x41
        $algo\n
        EOT;

        echo $str2;
    ?>
</body>
</html>

