## Eduardo Gallego Chillón
## Curso: 2º DAW

#!/bin/bash

opcion=1

############################
# Función: sumar()
# Argumentos: num1, num2
# Descripción: Suma el primer parámetro con el segundo.
############################
sumar() {
    num1=$1 num2=$2
    echo "$num1 + $num2 = $(($num1 + $num2))"
}

############################
# Función: restar()
# Argumentos: num1, num2
# Descripción: Resta el segundo paŕametro al primero. Si el primer parámetro es
#              menor que el segundo, resta el primer parámetro al segundo.
############################
restar() {
    num1=$1 num2=$2
    if [ $num1 -gt $num2 ]
    then
    	echo "$num1 - $num2 = $(($num1 - $num2))"
    else
	echo "$num2 - $num1 = $(($num2 - $num1))"
    fi
}

############################
# Función: dividir()
# Argumentos: num1, num2
# Descripción: Divide el primer paŕametro por el segundo. Si el primer parámetro
#              es menor que el segundo, divide el segundo parámetro por el
#              primero.
############################
dividir() {
    num1=$1 num2=$2
    if [ $num1 -gt $num2 ]
    then
    	echo "$num1 / $num2 = $(($num1 / $num2))"
    else
	echo "$num2 / $num1 = $(($num2 / $num1))"
    fi
}

############################
# Función: multiplicar()
# Argumentos: num1, num2
# Descripción: Multiplica el primer valor por el segundo.
############################
multiplicar() {
    num1=$1 num2=$2
    echo "$num1 * $num2 = $(($num1 * $num2))"
}

# Muestra el menú mientras la opción no sea cero.
while [ $opcion -ne 0 ]
do
    echo "CALCULADORA"
    echo "1 - Sumar"
    echo "2 - Restar"
    echo "3 - Dividir"
    echo "4 - Multiplicar"
    echo "0 - Salir"
    echo "Elige una opción (0 - 4):"
    read opcion
# Si la opción está entre 1 y 4 se piden los números
    case $opcion in
	[1-4])
	     echo "Introduce primer número"
	     read num1
	     echo "Introduce segundo número"
	     read num2
        ;;
    esac

# Llamada de las funciónes en función del número introducido. Si el número no
# está entra 0 y 4, muestra un mensaje de error.
    case $opcion in
        1) sumar $num1 $num2;;
        2) restar $num1 $num2;;
        3) dividir $num1 $num2;;
        4) multiplicar $num1 $num2;;
        0) exit;;
	*) echo "Opción no válida";;
    esac
done

