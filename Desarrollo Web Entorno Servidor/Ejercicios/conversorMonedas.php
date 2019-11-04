<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Conversor de monedas</title>
</head>
<body>
    <h1>Conversor de monedas</h1>
    <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
        <input type="text" name="cantidadConvertir" placeholder="0">
        <select name="monedasConvertir[]">
            <option value="EUR" selected>Euros</option>
            <option value="USD">Dólares</option>
            <option value="GBP">Libras</option>
        </select>
        =
        <input type="text" name="resultado" placeholder="0" readonly="readonly">
        <select name="monedasResultado[]">
            <option value="EUR">Euros</option>
            <option value="USD" selected>Dólares</option>
            <option value="GBP">Libras</option>
        </select>
        <br/><br/>
        <input type="submit" value="Convertir" name="convertir">
    </form>
    <?php
        $cantidadConvertidr = $_REQUEST['cantidadConvertir'];
        $monedaConvertir = $_REQUEST['monedasConvertir'];
        $monedaResultado = $_REQUEST['monedasResultado'];
        function convertir($cant, $monConv, $monRes) {
            $resultado = 0;
            if ($monConv == 'EUR' && $monRes == 'USD')
                $resultado = $cant * 1.1;
            else if ($monConv == 'EUR' && $monRes == 'GBP')
                $resultado = $cant * 0.9;
            else if ($monConv == 'USD' && $monRes == 'EUR')
                $resultado = $cant * 0.91;
            else if ($monConv == 'USD' && $monRes == 'GBP')
                $resultado = $cant * 0.82;
            else if ($monConv == 'GBP' && $monRes == 'EUR')
                $resultado = $cant * 1.12;
            else if ($monConv == 'GBP' && $monRes == 'USD')
                $resultado = $cant * 1.23;
            else 
                $resultado = $cant;
            return $resultado;
        }

        if (isset($_REQUEST['convertir'])) {
            
        }
    ?>
</body>
</html>