import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

//Cloud animation intro
export const cloudSVGAnimation = (elem, cont) => {
	let children = elem.querySelectorAll("path, polygon");
	let SVGTween = gsap.from(children, {
		xPercent: -20,
		opacity: 0,
		stagger: {
			each: -0.3,
			from: "start",
		},
		duration: 1.25,
		scale: -2,
		ease: Power1.easeInOut,
		transformOrigin: "50% 100%",
		delay: 3,
		scrollTrigger: {
			trigger: cont,
			start: "top center",
			once: true,
		},
	});
};
//Cloud animation intro
export const imageAnimation = (elem, cont) => {
	let imgTween = gsap.to(elem, {
		opacity: 1,
		duration: 1,
		ease: Power1.easeInOut,
		scrollTrigger: {
			trigger: cont,
			start: "top center",
			once: true,
		},
	});
};

//Text animation intro
export const textAnimation = (elem, cont, type) => {
	let arrows = elem.querySelectorAll(".emplifi-animated-banner__arrow");
	let spacer = elem.querySelectorAll(".emplifi-animated-banner__arrow-spacer");
	let headlines = elem.querySelectorAll(
		".emplifi-animated-banner__headline-left, .emplifi-animated-banner__headline-right"
	);
	let grow = type == "pull" ? 0 : 0.75;
	let easing = type == "pull" ? Power1.easeOut : Power1.easeInOut;
	const arrowTween = gsap
		.timeline()
		.from(
			headlines,
			{
				duration: 1.5,
				opacity: 0,
				stagger: 0.5,
				ease: Power1.easeInOut,
			},
			0
		)
		.to(
			arrows,
			{
				duration: 0.5,
				opacity: 1,
				ease: Power1.easeInOut,
			},
			type == "pull" ? 1.25 : 1
		)
		.to(
			arrows,
			{
				duration: 3.25,
				flexGrow: grow,
				ease: easing,
			},
			type == "pull" ? 0.75 : 1.25
		)
		.to(
			spacer,
			{
				duration: 3.25,
				flexGrow: 0,
				ease: easing,
			},
			type == "pull" ? 0.75 : 1.25
		)
		.to(
			arrows,
			{
				duration: 1,
				opacity: 0,
				ease: Power1.easeInOut,
			},
			2.25
		);
	if (type == "pull") {
		arrowTween.to(
			spacer,
			{
				duration: 2,
				width: 0,
				ease: easing,
			},
			2
		);
	}
	ScrollTrigger.create({
		animation: arrowTween,
		trigger: cont,
		start: "top center",
		once: true,
	});
};

// Scroll to the next object
export const scrollButton = (elem) => {
	let nextCont = elem.nextSibling;
	let scrollButtons = elem.querySelectorAll("[data-scroll]");
	scrollButtons.forEach((el, i) => {
		el.addEventListener("click", (e) => {
			let pageScroll = gsap.to(window, {
				duration: 0.5,
				scrollTo: nextCont,
				ease: Power1.easeInOut,
			});
		});
	});
};
