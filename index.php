<!DOCTYPE html>
<html>
<head>
	<title>Nar Cuenca</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Bowlby+One" rel="stylesheet">
	<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="_assets/_slick/slick.css"/>
	<link rel="stylesheet" type="text/css" href="_assets/_slick/slick-theme.css"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.0/css/iziModal.css">
	<link rel="stylesheet" type="text/css" href="_assets/_css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="_assets/_css/styles.css">
	
</head>
<body>

	<?php
		require_once '_partials/header.php';
	?>

	<main class="container" id="mainBody">
		<?php
			require_once '_partials/navbar.php';
		?>

		<div class="tab-content body-cover">
			<?php
				require_once '_partials/home.php';
				require_once '_partials/background.php';
				require_once '_partials/sample.php';
				require_once '_partials/contact.php';
			?>
		</div>
	</main>

	<?php
		require_once '_partials/footer.php';
	?>

	<script src="_assets/_js/jquery-3.2.1.min.js"></script>
	<script src="_assets/_js/bootstrap.min.js"></script>
	 <script src="_assets/_js/form-submission-handler.js"></script> 
	<script type="text/javascript" src="_assets/_slick/slick.min.js"></script>
	<script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.0/js/iziModal.js"></script>
	<script src="_assets/_js/jquery.canvas.particles.js"></script>
	<script src="_assets/_js/scripts.js"></script>

</body>
</html>