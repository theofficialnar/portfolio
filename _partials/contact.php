<div id="contact" class="tab-pane fade">
	<div class="row">
		<!-- email form -->
		<div class="col-lg-6">
			<h1 class="heading-no-margin text-center" data-aos="fade-up">Contact Me</h1>
			<p class="text-center" data-aos="fade-up">Have a project that you'd like to discuss? Shoot me an email!</p>
			<hr>
			<form id="gform" action="https://script.google.com/macros/s/AKfycbx-lnkqPL8g4Ag4LVWv_iC8_n2GuAXfQ_VyI9eDlgyWxcPOHVM2/exec" method="post">
				<div class="form-group" data-aos="zoom-out-left">
					<label for="con_name">Name:</label>
					<input type="text" name="name" id="con_name" class="form-control" placeholder="Firstname Lastname" required>
				</div>
				<div class="form-group" data-aos="zoom-out-left">
					<label for="con_email">Email:</label>
					<input type="email" name="email" id="con_email" class="form-control" placeholder="name@domain.com" required>
				</div>
				<div class="form-group" data-aos="zoom-out-left">
					<label for="con_msg">Message:</label>
					<textarea rows="3" name="message" id="con_msg" class="form-control" placeholder="Say something nice..."></textarea>
				</div>
				<div class="text-center" style="margin-top: 5px" data-aos="zoom-in-down">
					<input type="submit" value="Send" class="btn btn-primary" style="width: 20%">
					<input type="reset" value="Reset" class="btn btn-warning" style="width: 20%">
				</div>
			</form>
		</div>

		<!-- socials -->
		<div class="col-lg-6">
			<h1 class="heading-no-margin text-center" data-aos="fade-up">Follow Me</h1>
			<p class="text-center" data-aos="fade-up">Let's get social and get to know me more!</p>
			<hr>
			<div class="text-center" data-aos="zoom-out-right">
				<span class="social_icons"><a href="https://www.facebook.com/TheOfficialNar" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></span>
				<span class="social_icons"><a href="https://github.com/theofficialnar" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></span>
				<span class="social_icons"><a href="https://www.instagram.com/heyitsnar/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></span>
				<span class="social_icons"><a href="https://twitter.com/TheOfficialNar" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></span>
				<span class="social_icons"><a href="https://www.linkedin.com/in/lunar-jay-cuenca-758057149/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></span>
			</div>
		</div>
	</div>
</div>

<!-- email success modal -->
<button style="display: none" id="succEmailTrigger">Hidden Trigger</button>
<div id="succEmail"></div>