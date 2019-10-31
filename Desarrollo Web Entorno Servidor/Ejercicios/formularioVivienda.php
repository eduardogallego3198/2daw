<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style type="text/css">
        h2 { color: blue; }
        table { border: 1px dashed lightgreen; padding: 10px 10px; margin: 10px 0px; }
        td { padding: 5px; }
    </style>
    <title>Document</title>
</head>
<body>
    <h2>Inserción de vivienda</h2>
    <label for="formulario">Introduzca los datos de la vivienda:</label>
    <form enctype="multipart/form-data" action="<?=$_SERVER['PHP_SELF']?>" 
        method="post" id="formulario">
        <table>
            <tr>
                <td><strong>Tipo de vivienda:</strong></td>
                <td>
                    <select name="tipoVivienda[]">
                        <option value="piso">Piso</option>
                        <option value="casa">Casa</option>
                        <option value="chalet">Chalet</option>
                        <option value="adosado">Adosado</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><strong>Zona:</strong></td>
                <td>
                    <select name="zona[]">
                        <option value="norte">Norte</option>
                        <option value="sur">Sur</option>
                        <option value="este">Este</option>
                        <option value="oeste">Oeste</option>
                        <option value="centro">Centro</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><strong>Dirección: </strong></td>
                <td><input type="text" name="direccion"></td>
            </tr>
            <tr>
                <td><strong>Número de dormitorios:</strong></td>
                <td>
                    <input type="radio" name="dormitorios" value="uno">1 
                    <input type="radio" name="dormitorios" value="dos">2 
                    <input type="radio" name="dormitorios" value="tres">3 
                    <input type="radio" name="dormitorios" value="cuatro">4 
                    <input type="radio" name="dormitorios" value="cinco">5
                </td>
            </tr>
            <tr>
                <td><strong>Precio:</strong></td>
                <td><input type="text" name="precio"> €</td>
            </tr>
            <tr>
                <td><strong>Tamaño</strong></td>
                <td>
                    <input type="text" name="tamano"> m<sup>2</sup></td>
            </tr>
            <tr>
                <td><strong>Extras (marque los que procedan): </strong></td>
                <td>
                    <input type="checkbox" name="piscina" id="">Piscina 
                    <input type="checkbox" name="jardin" id="">Jardín 
                    <input type="checkbox" name="garaje" id="">Garaje 
                </td>
            </tr>
            <tr>
                <td><strong>Foto: </strong></td>
                <td>
                    <input type="file" name="foto">
                </td>
            </tr>
            <tr>
                <td><strong>Obsrvaciones:</strong></td>
                <td><textarea name="" id="" cols="50" rows="6"></textarea></td>
            </tr>
            <tr>
                <td><input type="submit" name="enviar" value="Insertar vivienda"></td>
                <td></td>
            </tr>
        </table>
    </form>
</body>
</html>