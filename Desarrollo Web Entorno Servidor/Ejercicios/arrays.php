<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrays</title>
</head>
<body>
    <?php
        $array = [
            0 => [1, 2, 3, 4, 5],
            1 => ['a', 'b', 'c', 'd', 'e'],
        ];

        var_dump($array);

        for ($i = 0; $i < 2; $i++)
            for($j = 0; $j < 5; $j++)
                echo($array[$i][$j]);

        $array2 = [1, 2, 3, 4];

        foreach ($array2 as $valor)
            print_r("$valor\n");
            
        foreach ($array2 as $clave => $valor)
            echo("La clave es $clave y el valor es $valor\n");

        $array[0][5] = "Hola que tal";

        var_dump($array);

        $array3 = [];
        for ($i = 0; $i < 1000; $i++) {
            for ($j = 0; $j < 1000; $j++) {
                $array3[$j*$i] = $i * $j;
                echo($array3[$i * $j]);
                echo("\n");
            }
        }
    ?>
</body>
</html>