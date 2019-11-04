<?php
    header('Content-Type: text/html; charset=UTF-8'); 

    function obtenerDatos() {
        $datosVivienda = [];
        $foto = "<a href='".$_FILES['foto']['name'] . "'>" 
                . $_FILES['foto']['name']."</a>";
        if(isset($_REQUEST['extras'])) {
            $extrasArr = $_REQUEST['extras'];
            $extras = "";
            foreach($extrasArr as $extra)
                $extras .= $extra;
        }
        $datosVivienda = [
            "tipoVivienda" => $_REQUEST['tipoVivienda'][0],
            "zona" => $_REQUEST['zona'][0],
            "direccion" => $_REQUEST['direccion'],
            "dormitorios" => $_REQUEST['dormitorios'],
            "precio" => $_REQUEST['precio'],
            "tamano" => $_REQUEST['tamano'],
            "extras" => $extras,
            "foto" => $foto,
            "observaciones" => $_REQUEST['observaciones']
        ];
        return $datosVivienda;
    }
    
    function mostrarDatos() {
?>
<?php if(isset($_REQUEST['enviar'])): $datosVivienda = obtenerDatos();?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" 
            href="estiloFormulario.css">
        <title>Insert title here</title>
    </head>
    <body>
        <h2>Inserción de vivienda</h2>
        <p>Estos son los datos introducidos:</p>
        <ul>
            <li>Tipo: <?=$datosVivienda["tipoVivienda"]?></li>
            <li>Zona: <?=$datosVivienda["zona"]?></li>
            <li>Dirección: <?=$datosVivienda["direccion"]?></li>
            <li>Número de dormitorios: <?=$datosVivienda["dormitorios"]?></li>
            <li>Precio: <?=$datosVivienda["precio"]?> €</li>
            <li>Tamaño <?=$datosVivienda["tamano"]?> m<sup>2</sup></li>
            <li>Extras: <?=$datosVivienda["extras"]?></li>
            <li>Foto: <?=$datosVivienda["foto"]?></li>
            <li>Observaciones: <?=$datosVivienda["observaciones"]?></li>
        </ul>
    </body>
</html>
<?php endif; }?>
<?php
    function camposVacios() {
        $datosVivienda = obtenerDatos();
        if($datosVivienda['direccion'] == null)
            echo "<label>No se ha introducido la direcci�n</label>";
        elseif($datosVivienda['dormitorios'] == null)
            echo "<label>No se ha seleccionado el n�mero de dormitorios"
                    . "</label>";
        elseif($datosVivienda['precio'] == null)
            echo "<label>No se ha intrducido el precio</label>";
        elseif($datosVivienda['tamano'] == null)
            echo "<label>No se ha introducido el tama�o</label>";
    }

    mostrarDatos();
?>