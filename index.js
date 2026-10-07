// Image paths for the PACELINE site.
// Page images are matched to <img data-img="key"> tags at the bottom of this file.
const IMG = {
  "founder1": "assets/images/founder1.jpg",
  "founder2": "assets/images/founder2.jpg",
  "aboutStory": "assets/images/aboutStory.jpg",
  "visitMap": "assets/images/visitMap.jpg",
  "homeStory": "assets/images/homeStory.jpg",
  "hero": "assets/images/hero.jpg",
  "exploreMen": "assets/images/exploreMen.jpg",
  "exploreWomen": "assets/images/exploreWomen.jpg",
  "catAccessories": "assets/images/catAccessories.jpg",
  "catRoad": "assets/images/catRoad.jpg",
  "catTrail": "assets/images/catTrail.jpg",
  "catApparel": "assets/images/catApparel.jpg",
  "arrival": "assets/images/arrival.jpg"
};

IMG.p1 = 'assets/images/product-01-cloudmonster-2.jpg';
IMG.p2 = 'assets/images/product-02-vaporfly-3.jpg';
IMG.p3 = 'assets/images/product-03-endorphin-pro-4.jpg';
IMG.p4 = 'assets/images/product-04-megablast.jpg';
IMG.p5 = 'assets/images/product-05-speedgoat-6.jpg';
IMG.p6 = 'assets/images/product-06-ghost-max-2.jpg';
IMG.p7 = 'assets/images/product-07-fresh-foam-x-1080.jpg';
IMG.p8 = 'assets/images/product-08-adizero-adios-pro-4.jpg';
IMG.p9 = 'assets/images/product-09-genesis-trail.jpg';
IMG.p10 = 'assets/images/product-10-recovery-slide.jpg';
IMG.p11 = 'assets/images/product-11-race-singlet.jpg';
IMG.p12 = 'assets/images/product-12-tempo-shorts.jpg';
IMG.p13 = 'assets/images/product-13-thermal-half-zip.jpg';
IMG.p14 = 'assets/images/product-14-storm-shell-jacket.jpg';
IMG.p15 = 'assets/images/product-15-forerunner-965-gps-watch.jpg';
IMG.p16 = 'assets/images/product-16-fenix-trail-watch.jpg';
IMG.p17 = 'assets/images/product-17-compression-leggings.jpg';
IMG.p18 = 'assets/images/product-18-trail-running-cap.jpg';

document.querySelectorAll("img[data-img]").forEach(function(el) { el.src = IMG[el.dataset.img]; });
