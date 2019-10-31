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
        $dias = [
            "Sunday" => "Domingo",
            "Monday" => "Lunes",
            "Tuesday" => "Martes", 
            "Wednesday" => "Miércoles", 
            "Thursday" => "Jueves",
            "Friday" => "Viernes", 
            "Saturday" => "Sábado"
        ];
        date_default_timezone_set("Europe/Madrid");
        $fecha = date_create();
        date_timestamp_set($fecha, 883866000);
        foreach ($dias as $dia_en => $dia_es)
            if (date("l") == $dia_en)
                echo date_format($fecha, "$dia_es, j-F-Y, G:i ");
    ?>
</body>
</html>
