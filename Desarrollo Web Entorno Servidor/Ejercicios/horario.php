<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="horario.css">
    <title>Document</title>
</head>
<body>
    <?php
        $horario = [
            0 => ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
            1 => ["8:15 - 9:15", "9:15 - 10:15", "10:15 - 11:15", "R",
                    "11:45 - 12:45", "12:45 - 13:45", "13:45 - 14:45"],
            2 => [
                "Lunes" => ["HLC", "DWES", "DWES", "E", "DWEC", "DWEC", "DESPL"],
                "Martes" => ["DWES", "DWES", "DESPL", "C", "DESPL", "EINEM", "EINEM"],
                "Miércoles" => ["DIW", "DIW", "DWES", "R", "DWES", "HLC", "HLC"],
                "Jueves" => ["DIW", "DIW", "DWEC", "E", "DWEC", "EINEM", "EINEM"],
                "Viernes" => ["DWES", "DWES", "DWEC", "O", "DWEC", "DIW", "DIW"],
            ],
        ];
        $filas = 0;
        $horas = $horario[1];
        print("<table><th></th>");
        foreach($horario[0] as $dia)
            print("<th>$dia</th>");
        foreach($horario[2] as $dia => $asignaturas)
            $filas = count($asignaturas);
        for($fil = 0; $fil < $filas; $fil++) {
            print("<tr>");
                $hora = $horas[$fil];
                print("<td>$hora</td>");
                foreach($horario[2] as $dia => $asignaturas) {
                    $asignatura = $asignaturas[$fil];
                    print("<td>$asignatura</td>");
                }
            print("</tr>");
        }
    ?>
</body>
</html>