<!DOCTYPE html>
<html>
<head>
	<title>Nar Cuenca</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</head>
<body>

	<?php
	require_once 'partials/header.php';
		?>

	<div class="container">

		<?php
			require_once 'partials/navbar.php';
		?>

		<div class="tab-content body-cover">

			<?php
				require_once 'partials/home.php';
				require_once 'partials/background.php';
				require_once 'partials/sample.php';
				require_once 'partials/contact.php';
			?>

		<div class="tab-content">

	</div>

	<script type="text/javascript">
		$(document).ready(function() {
		  $('[data-toggle="popover"]').popover();
		})

		$('#psu').click(function(){
			$('#psu_modal').css('display','block');
		});
	</script>

</body>
</html>