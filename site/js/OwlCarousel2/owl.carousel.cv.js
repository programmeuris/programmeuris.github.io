$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
})