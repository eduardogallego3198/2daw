<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        //Paso de parámetro por valor
        function siguiente($a) {
            $a++;
            return $a;
        }

        //Paso de parámetro por referencia
        function incrementa(&$a) {
            $a++;
        }

        $num = 35;
        echo("Valor pasado: $num\n");
        echo("Valor siguiente: ");
        echo(siguiente($num));
        echo("\nNuevo valor de \$num: ");
        incrementa($num);
        echo($num);
    ?>
</body>
</html>