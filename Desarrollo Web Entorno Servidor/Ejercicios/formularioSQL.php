<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        p { margin: 5px 0px; }
    </style>
    <title>Formulario SQL</title>
</head>
<body>
    <h2>Insertar o borrar alumno</h2>
    <form action="controlFormularioSQL.php" method="post">
        <table id="campos">
            <tr>
                <td><p>Número matrícula: </p></td>
                <td><p><input type="text" name="num_matricula"></p></td>
            </tr>
            <tr>
                <td><p>Nombre: </p></td>
                <td><input type="text" name="nombre"></td>
            </tr>
            <tr>
                <td><p>Apellidos: </p></td>
                <td><input type="text" name="apellidos"></td>
            </tr>
            <tr>
                <td><p>Teléfono: </p></td>
                <td><input type="text" name="telefono"></td>
            </tr>
            <tr>
                <td><p>Email: </p></td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td><p>Id curso: </p></td>
                <td><input type="text" name="id_curso"></td>
            </tr>
        </table>
        <table id="botones">
            <tr>
                <td><input type="submit" value="Ver" name="ver"></td>
                <td><input type="submit" value="Insertar" name="insertar"></td>
                <td><input type="submit" value="Borrar" name="borrar"></td>
                <td><input type="submit" value="Modificar" name="modificar"></td>
            </tr>
        </table>
    </form>
</body>
</html>