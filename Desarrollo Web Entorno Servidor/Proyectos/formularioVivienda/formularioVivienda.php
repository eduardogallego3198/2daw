<?php include 'controlFormulario.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estiloFormulario.css">
	<title>Insert title here</title>
</head>
<body>
	<h2>Inserción de vivienda</h2>
	<p>Introduzca los datos de la vivienda:</p>
	<form enctype="multipart/form-data" action="controlFormulario.php" method="post">
		<table>
			<tr>
				<td><strong>Tipo de vivienda:</strong></td>
				<td>
					<select name="tipoVivienda[]">
						<option value="Casa">Casa</option>
						<option value="Piso">Piso</option>
						<option value="Adosado">Adosado</option>
						<option value="Chalet">Chalet</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><strong>Zona:</strong></td>
				<td>
					<select name="zona[]">
						<option value="Norte">Norte</option>
						<option value="Sur">Sur</option>
						<option value="Este">Este</option>
						<option value="Oeste">Oeste</option>
						<option value="Centro">Centro</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><strong>Dirección:</strong></td>
				<td>
					<input type="text" name="direccion">

				</td>
			</tr>
			<tr>
				<td><strong>Número de dormitorios:</strong></td>
				<td>
					<input type="radio" name="dormitorios" value="1">1 
					<input type="radio" name="dormitorios" value="2">2 
					<input type="radio" name="dormitorios" value="3">3 
					<input type="radio" name="dormitorios" value="4">4 
					<input type="radio" name="dormitorios" value="5">5
				</td>
			</tr>
			<tr>
				<td><strong>Precio:</strong></td>
				<td><input type="text" name="precio"> €</td>
			</tr>
			<tr>
				<td><strong>Tamaño:</strong></td>
				<td><input type="text" name="tamano"> m<sup>2</sup></td>
			</tr>
			<tr>
				<td><strong>Extras (marque los que procedan):</strong></td>
				<td>
					<input type="checkbox" name="extras[]" value="Piscina">Piscina 
					<input type="checkbox" name="extras[]" value="Jardin">Jardín 
					<input type="checkbox" name="extras[]" value="Garaje">Garaje
				</td>
			</tr>
			<tr>
				<td><strong>Foto:</strong></td>
				<td>
					<input type="hidden" name="MAX_FILE_SIZE" value="1048576" />
					<input type="file" name="foto" id="foto">
				</td>
			</tr>
			<tr>
				<td><strong>Observaciones:</strong></td>
				<td><textarea rows="6" cols="60" name="observaciones"></textarea></td>
			</tr>
			<tr>
				<td><input type="submit" name="enviar" id="enviar" value="Insertar vivienda"></td>
				<td></td>
			</tr>
		</table>
	</form>
</body>
</html>