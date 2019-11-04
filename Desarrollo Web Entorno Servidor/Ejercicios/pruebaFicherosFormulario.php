
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
        <p>Sube una imagen:</p>
        <input type="file" name="imagen" enctype="multipart/form-data">
        <input type="submit" value="Enviar" name="enviar">
    </form>
    <?php
        $imagenTmpNom = $_REQUEST['imagen']['tmp_name'];
        echo $imagenTmpNom;
        if (is_uploaded_file($imagenTmpNom))
            echo "La imágen se ha subido correctamente";
    ?>
</body>
</html>