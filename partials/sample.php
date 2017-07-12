<div id="sample" class="tab-pane fade">
	<div class="row">
		<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center">
			<h1 class="heading-no-margin">Portfolio</h1>
			<p>Take a quick peek at my latest creations!</p>
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center">
			<div class="col-lg-6 col-md-6">
				<img src="images/psu.png" alt="psu_cover" class="thumbnail gallery-icon" id="psu">
			</div>
		</div>
	</div>

	<!-- MODALS -->
	<div id="psu_modal" class="modal">
		<span class="close" onclick="$('#psu_modal').css('display','none')">&times;</span>
		<div class="modal-content">
			<div class="icon-left">
				<div class="psu_slides">
					<img src="images/psu.png" style="width: 100%">
				</div>
				<div class="psu_slides">
					<img src="images/psu1.png" style="width: 100%">
				</div>
				<div class="psu_slides">
					<img src="images/psu2.png" style="width: 100%">
				</div>
				<div class="psu_slides">
					<img src="images/psu3.png" style="width: 100%">
				</div>
				<div class="psu_slides">
					<img src="images/psu4.png" style="width: 100%">
				</div>
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
			</div>
			<div class="icon-right">
				<h1>TEXT</h1>
			</div>
		</div>
	</div>
</div>