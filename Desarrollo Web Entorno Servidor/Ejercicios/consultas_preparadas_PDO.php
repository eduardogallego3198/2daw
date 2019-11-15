<?php include 'controlConsultasPreparadas.php' ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "
    http://www.w3.org/TR/html4/loose.dtd">
<!-- Desarrollo Web en Entorno Servidor -->
<!-- Tema 3 : Trabajar con bases de datos en PHP -->
<!-- Ejemplo: Utilización de excepciones en PDO -->
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Ejercicio Tema 3: Excepciones en PDO</title>
    </head>
    <body>
        <div id="encabezado">
            <h1>Ejercicio: Utilización de excepciones en PDO</h1>
            <form id="form_seleccion" action=<?=$_SERVER['PHP_SELF']?> method="post">
                <span>Producto: </span>
                <select name="producto">
                    <?php rellenarDesplegable($dwes, $producto); ?>
                </select>
                <input type="submit" value="Mostrar stock" name="enviar"/>
            </form>
        </div>
        <div id="contenido">
            <h2>Stock del producto en las tiendas:</h2>
            <?php mostrarStock($producto, $dwes); ?>
        </div>
        <div id="pie">
            <?php controlErrores($dwes); ?>
        </div>
    </body>
</html>