<?php
    $conex = new PDO('mysql:host=localhost;dbname=prueba', 'root', 'EduGallego_98');
    $result = $conex->query('select * from alumno')->fetchAll($conex::FETCH_ASSOC);
    foreach($result as $fila)
        print_r($fila);
?>