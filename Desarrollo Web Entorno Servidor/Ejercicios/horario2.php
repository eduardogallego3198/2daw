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
        function cabecera($dias) {
            print("<table><tr>");
            foreach($dias as $dia)
                print("<th>$dia</th>");
            print("</tr>");
        }

        function horasClases($horas, $clases) {
            for($fil = 0; $fil < count($horas); $fil++) {
                print("<tr>");
                    print("<td>$horas[$fil]</td>");
                    foreach($clases as $dia => $asignaturas)
                        print("<td>$asignaturas[$fil]</td>");
                print("</tr>");
            }
        }

        $dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];    
        $horas = ["8:15 - 9:15", "9:15 - 10:15", "10:15 - 11:15", "R",
                    "11:45 - 12:45", "12:45 - 13:45", "13:45 - 14:45"];
        $clases = [
            "Lunes" => ["HLC", "DWES", "DWES", "E", "DWEC", "DWEC", "DESPL"],
            "Martes" => ["DWES", "DWES", "DESPL", "C", "DESPL", "EINEM", "EINEM"],
            "Miércoles" => ["DIW", "DIW", "DWES", "R", "DWES", "HLC", "HLC"],
            "Jueves" => ["DIW", "DIW", "DWEC", "E", "DWEC", "EINEM", "EINEM"],
            "Viernes" => ["DWES", "DWES", "DWEC", "O", "DWEC", "DIW", "DIW"],
        ];
        cabecera($dias);
        horasClases($horas, $clases);
        print("</table>");
    ?>
</body>
</html>