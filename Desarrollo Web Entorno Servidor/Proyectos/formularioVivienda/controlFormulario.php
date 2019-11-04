<?php
    function obtenerDatos() {
        if(isset($_REQUEST['enviar'])) {
            if ($_REQUEST['direccion'] != "" && $_REQUEST['precio'] != "" && $_REQUEST['tamano'] != "")
                $direccion = $_REQUEST['direccion'];
                $precio = $_REQUEST['precio'];
                $tamano = $_REQUEST['tamano'];
            $extras = $_REQUEST["extras"];
            $extrasStr = "";
            for($i = 0; $i < count($extras); $i++) 
                $extrasStr .= $extras[$i] . " ";
            $datosVivienda = [
                "tipoVivienda" => $_REQUEST['tipoVivienda'][0],
                "zona" => $_REQUEST['zona'][0],
                "direccion" => $direccion,
                "dormitorios" => $_REQUEST['dormitorios'],
                "precio" => $precio,
                "tamano" => $tamano,
                "extras" => $extrasStr,
                "foto" => $_FILES['foto']['name'],
                "observaciones" => $_REQUEST['observaciones'],
            ];
            
            return $datosVivienda;
        }
    }
    
    function mostrarDatosFormulario() {

?>
        <!DOCTYPE html>
        <html>
        <head>
        	<meta charset="utf-8">
        	<link rel="stylesheet" type="text/css" href="estiloFormulario.css">
        	<title>Formulario vivienda</title>
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
        		<li>Foto: <a href="<?=$datosVivienda["foto"]?>"><?=$datosVivienda["foto"]?></a></li>
        		<li>Observaciones: <?=$datosVivienda["observaciones"]?></li>
        	</ul>
        </body>
        </html>
<?php 
        }

    function camposVacios() {
        $datosVivienda = obtenerDatos();
        if($datosVivienda["direccion"] == "")
            echo "<label>El campo dirección está vacío</label>";
    }
?>