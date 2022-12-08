function init() {
	let page = new URL(location.href).pathname;
	if (page === "/") {
		page = "main";
	}
	jQuery.get(page + ".md", function (data) {
		document.getElementById('content').innerHTML = marked.parse(data);
	}).fail(function () {
		$("#404").show();
	});
	let id = (new URL(location.href)).searchParams.get("date");
	if (id) {
		let date = id.split(".");
		document.getElementById(date[0]).classList.add("show");
		document.getElementById(date[0]).parentNode.classList.add("show");
		document.getElementById(id).classList.add("show");
	}
}

function changePage(event) {
	if (!event) {
		event = window.event;
	}
	let el = (event.target || event.srcElement);
	let state = "?date=" + el.parentNode.parentNode.children[1].id;
	location.href = el.children[0].innerHTML + state;
}

const years = ['2022', '2021', '2020', '2019'];

const months = ["January", "February", "March", "April", "May", "June", "July",
	"August", "September", "October", "November", "December"
];

const proj = [
	["usbPD", '2022', 'September', 'usbPD'],
	["Gallery", '2022', 'August', 'gallery'],
	["32u4_lcd", '2022', 'August', '32u4_bulk'],
	["Wacom", '2022', 'May', 'wacom'],
	["i.MXRT11", '2022', 'March', 'imxrt1170'],
	["Ghome", '2022', 'February', 'ghome'],
	["ColorCat", '2021', 'October', 'colorcat'],
	["aaFAT", '2021', 'September', 'aafat'],
	["i.MXRT", '2021', 'September', 'imxrt1050'],
	["Boost Conv", '2021', 'February', 'boost'],
	["SpinScreen", '2020', 'December', "POV"],
	["Home Lab", '2020', 'November', 'server'],
	["Verus Coin", '2020', 'October', 'verus'],
	["F1C100s", '2020', 'April', 'f1c100s'],
	["LeekSpin", '2020', 'August', 'leekspin'],
	["infINT", '2019', 'February', "infINT"],
];

function fill() {
	let tab = document.getElementById('menu').children[0];
	for (yr in years) {
		var yrProj = [];
		for (p in proj) {
			if (proj[p][1] == years[yr])
				yrProj.push(proj[p]);
		}
		if (yrProj.length > 0) {
			yrProj.sort((a, b) => months.findIndex(index => index == a[2]) - months.findIndex(index => index == b[2]));
			var cur = tab.cloneNode(true);
			cur.hidden = false;
			cur.children[0].children[0].innerHTML = years[yr];
			var subnav = cur.children[1];
			subnav.id = years[yr];
			for (mu in months) {
				let newM = undefined;
				for (p in yrProj) {
					if (yrProj[p][2] == months[mu]) {
						if (newM === undefined) {
							newM = subnav.children[0].cloneNode(true);
							newM.hidden = false;
							newM.children[0].innerHTML = yrProj[p][2];
							newM.children[1].id = years[yr] + "." + yrProj[p][2];
						}
						newP = newM.children[1].children[0].cloneNode(true);
						newP.hidden = false;
						newP.append(yrProj[p][0]);
						newP.children[0].innerHTML = yrProj[p][3];
						newP.children[1].href = yrProj[p][3];
						newM.children[1].appendChild(newP);
					}

				}
				if (newM !== undefined) {
					subnav.appendChild(newM);
				}
			}
			document.getElementById('menu').appendChild(cur);
		}
	}
}

(function ($) {
	fill();
	init();
	"use strict"; // Start of use strict

	// Toggle the side navigation
	$("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
		$("body").toggleClass("sidebar-toggled");
		$(".sidebar").toggleClass("toggled");
		if ($(".sidebar").hasClass("toggled")) {
			$('.sidebar .collapse').collapse('hide');
		};
	});

	// Close any open menu accordions when window is resized below 768px
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('.sidebar .collapse').collapse('hide');
		};
	});

	// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
		var e0 = e.originalEvent,
			delta = e0.wheelDelta || -e0.detail;
		this.scrollTop += (delta < 0 ? 1 : -1) * 30;
		e.preventDefault();
	});

	// Scroll to top button appear
	$(document).on('scroll', function () {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// Smooth scrolling using jQuery easing
	$(document).on('click', 'a.scroll-to-top', function (e) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1000, 'easeInOutExpo');
		e.preventDefault();
	});

})(jQuery); // End of use strict
(function ($) {
	$('.multilevel .dropdown-menu > *').on('mouseenter click', function (e) {

		var elem = $(this);

		// Hide all other dropdowns

		elem.parent().find('.dropdown-menu').removeClass('show');

		// Show the corresponding menu

		let menu = elem.find('.dropdown-menu').first();

		if (menu.length) {
			// This is a dropdown menu toggle. Show the menu
			// and prevent it from closing on click.
			menu.addClass('show');
			e.stopPropagation();
		}

	});

	$('body').click(function () {
		// When the body is clicked, hide all multilevel dropdowns.
		$('.multilevel .dropdown-menu').removeClass('show');
	});

})(jQuery);
