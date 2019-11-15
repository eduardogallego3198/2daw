<?php
    $conex = new PDO('mysql:host=localhost;dbname=alumnado', 'root', 'EduGallego_98');
    $consulta = $conex->query('select * from alumno')->fetchAll($conex::FETCH_ASSOC);
    foreach($result as $fila)
        print_r($fila);
?>