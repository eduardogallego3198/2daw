<?php
    header('Content-Type: text/html; charset=ISO-8859-1'); 

    function obtenerDatos() {
        $extras = "No";
        $extrasArr = [];
        $foto = "Sin foto";
        if(isset($_REQUEST['extras'])) {
            $extrasArr = $_REQUEST['extras'];
            foreach($extrasArr as $extra)
                $extras .= $extra;
        }
        if(isset($_REQUEST['foto']))
            $foto = "<a href=".$_REQUEST['foto'].">";
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
        if(isset($_REQUEST['enviar'])):
            $datosVivienda = obtenerDatos();
?>
            <!DOCTYPE html>
            <html>
            <head>
            	<meta charset="UTF-8">
            	<link rel="stylesheet" type="text/css" href="estiloFormulario.css">
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
<?php  
        endif; 
    }
    
    function camposVacios() {
        $datosVivienda = obtenerDatos();
        if($datosVivienda['direccion'] == null)
            echo "<label>No se ha introducido la dirección</label>";
        elseif($datosVivienda['dormitorios'] == null)
            echo "<label>No se ha seleccionado el número de dormitorios</label>";
        elseif($datosVivienda['precio'] == null)
            echo "<label>No se ha intrducido el precio</label>";
        elseif($datosVivienda['tamano'] == null)
            echo "<label>No se ha introducido el tamaño</label>";
    }

    mostrarDatos();
?>