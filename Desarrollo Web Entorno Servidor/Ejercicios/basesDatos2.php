<?php
    // Conexión con la base de datos
    $conex = new mysqli("localhost", "root", "EduGallego_98", "prueba");
    
    // Mostrar error si falla la conexión con la base de datos
    if($conex->connect_errno)
        echo "Falló la conexión con MySQL: (" . $conex->connect_errno 
        . ") " . $conex->connect_error;
    
    // Consulta a la base de datos
    $result = $conex->query("select * from alumno");
    
    // Mostrar resultado de la consulta
    foreach($result as $alumno)
        print_r($alumno);

    // Mostrar resultado de la consulta en orden inverso
    for($nfila = $result->num_rows - 1; $nfila >= 0; $nfila--) {
        // Apunta a una fila determinada del resultado
        $result->data_seek($nfila);
        //Obtiene una fila del resultado como array asociativo
        $fila = $result->fetch_assoc();
        print_r($fila);
    }

    $consulta = $conex->query("insert into alumno values" 
        . "(num_matricula = 5, nombre = 'Pedro', " 
        . "apellidos = 'Martínez Ramírez', telefono = '555555555', " 
        . "email = 'pmartinez@mail.com', id_curso = 2)");

    if(!$consulta)
        echo "Fallo al insertar registro: (" . $conex->errno . ") " 
        . $conex->error;
    else
        foreach($result as $alumno)
            print_r($alumno);
?>