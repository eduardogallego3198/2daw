<?php
    function conIva($precio, $iva = 21) {
        return (1 + ($iva / 100)) * $precio;
    }
    
    print("Precio con IVA: ". conIva(20) . "\n");
    print("Precio con IVA: ". conIva(12.5, 10));
    
?>