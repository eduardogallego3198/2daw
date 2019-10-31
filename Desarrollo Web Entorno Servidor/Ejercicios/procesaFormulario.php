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
        $nom = $_POST['nombre'];
        
        function saluda($nombre, $saludo = "Hola") {
            if($nombre != null)
                return "$saludo $nombre";
        }

        echo saluda($nom);
    ?>
</body>
</html>
