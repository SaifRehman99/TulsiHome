var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
    menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
    selectedMenu = undefined,
    subBg = document.querySelector('.dropdown__bg'),
    subBgBtm = document.querySelector('.dropdown__bg-bottom'),
    subArr = document.querySelector('.dropdown__arrow'),
    subCnt = document.querySelector('.dropdown__wrap'),
    header = document.querySelector('.main-header'),
    closeDropdownTimeout,
    startCloseTimeout = function startCloseTimeout() {
	closeDropdownTimeout = setTimeout(function () {
		return closeDropdown();
	}, 50);
},
    stopCloseTimeout = function stopCloseTimeout() {
	clearTimeout(closeDropdownTimeout);
},
    openDropdown = function openDropdown(el) {

	//- get menu ID
	var menuId = el.getAttribute('data-sub');
	//- get related sub menu
	var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
	//- get menu sub content
	var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
	//- get bottom section of current sub
	var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect();
	//- get height of top section
	var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();
	//- get menu position
	var menuMeta = el.getBoundingClientRect();
	//- get sub menu position
	var subMeta = menuSubCnt.getBoundingClientRect();

	//- set selected menu
	selectedMenu = menuId;

	//- Remove active Menu
	menuItems.forEach(function (el) {
		return el.classList.remove('active');
	});
	//- Set current menu to active
	el.classList.add('active');

	//- Remove active sub menu
	menuSubs.forEach(function (el) {
		return el.classList.remove('active');
	});
	//- Set current menu to active
	menuSub.classList.add('active');

	//- Set dropdown menu background style to match current submenu style
	subBg.style.opacity = 1;
	subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
	subBg.style.width = subMeta.width + 'px';
	subBg.style.height = subMeta.height + 'px';
	//- Set dropdown menu bottom section background position
	subBgBtm.style.top = menuSubTop.height + 'px';
	console.log(menuSubBtm);

	//- Set Arrow position
	subArr.style.opacity = 1;
	subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';

	//- Set sub menu style
	subCnt.style.opacity = 1;
	subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
	subCnt.style.width = subMeta.width + 'px';
	subCnt.style.height = subMeta.height + 'px';

	//- Set current sub menu style
	menuSub.style.opacity = 1;

	header.classList.add('dropdown-active');
},
    closeDropdown = function closeDropdown() {

	//- Remove active class from all menu items
	menuItems.forEach(function (el) {
		return el.classList.remove('active');
	});
	//- Remove active class from all sub menus
	menuSubs.forEach(function (el) {
		el.classList.remove('active');
		el.style.opacity = 0;
	});
	//- set sub menu background opacity
	subBg.style.opacity = 0;
	//- set arrow opacity
	subArr.style.opacity = 0;

	// unset selected menu
	selectedMenu = undefined;

	header.classList.remove('dropdown-active');
};

//- Binding mouse event to each menu items
menuItems.forEach(function (el) {

	//- mouse enter event
	el.addEventListener('mouseenter', function () {
		stopCloseTimeout();
		openDropdown(this);
	}, false);

	//- mouse leave event
	el.addEventListener('mouseleave', function () {
		return startCloseTimeout();
	}, false);
});

//- Binding mouse event to each sub menus
menuSubs.forEach(function (el) {

	el.addEventListener('mouseenter', function () {
		return stopCloseTimeout();
	}, false);
	el.addEventListener('mouseleave', function () {
		return startCloseTimeout();
	}, false);
});



(function(){
	var xmlns = "http://www.w3.org/2000/svg";
	var radius = [
		(window.innerHeight * .35) / 4,
		(window.innerHeight * .58) / 4,
		(window.innerHeight * .82) / 4
	];

	var svg = document.querySelector('#radar');
	
	var wrapper = document.createElementNS(xmlns, 'g');
	wrapper.setAttributeNS(null, 'transform', "translate("+window.innerWidth /4+" "+window.innerHeight /4+")");

	
	var lineGroup_1 = document.createElementNS(xmlns, 'g');
	lineGroup_1.setAttribute('class', 'line-1');
	var lineGroup_2 = document.createElementNS(xmlns, 'g');
	lineGroup_2.setAttribute('class', 'line-2');
	var lineGroup_3 = document.createElementNS(xmlns, 'g');
	lineGroup_3.setAttribute('class', 'line-3');

	var pointRadar_1 = createPointRadar(radius[0]);
	var pointRadar_2 = createPointRadar(radius[1]);
	var pointRadar_3 = createPointRadar(radius[2]);
	lineGroup_1.appendChild(pointRadar_1);
	lineGroup_2.appendChild(pointRadar_2);
	lineGroup_3.appendChild(pointRadar_3);

	//createBulletRadar(lineGroup_1, radius[0]);
	//createBulletRadar(lineGroup_2, radius[1], true);
	//createBulletRadar(lineGroup_3, radius[2], true);
	
	var bullet = document.createElementNS(xmlns, 'circle');
			bullet.setAttribute('class', 'bullet-opacity-1');
			bullet.setAttributeNS(null, 'r', (32));
			bullet.setAttributeNS(null, 'cx', 0);
			bullet.setAttributeNS(null, 'cy', 0 + radius[0]);
			bullet.setAttributeNS(null, 'fill', "url(#image1)");
			lineGroup_3.appendChild(bullet);
		
		var bullet2 = document.createElementNS(xmlns, 'circle');
		bullet2.setAttribute('class', 'bullet-opacity-2');
		bullet2.setAttributeNS(null, 'r', (32));
		bullet2.setAttributeNS(null, 'cx', 0 + radius[1]);
		bullet2.setAttributeNS(null, 'cy', 0);
		bullet2.setAttributeNS(null, 'fill', "url(#image)");
		lineGroup_2.appendChild(bullet2); 
		
		
		var bullet3 = document.createElementNS(xmlns, 'circle');
		bullet3.setAttribute('class', 'bullet-opacity-3');
		bullet3.setAttributeNS(null, 'r', (32));
		bullet3.setAttributeNS(null, 'cx', 0);
		bullet3.setAttributeNS(null, 'cy', 0 - radius[2]);
		bullet3.setAttributeNS(null, 'fill', "url(#image2)");
		lineGroup_3.appendChild(bullet3); 
		
		var bullet4 = document.createElementNS(xmlns, 'circle');
		bullet4.setAttribute('class', 'bullet-opacity-4');
		bullet4.setAttributeNS(null, 'r', (32));
		bullet4.setAttributeNS(null, 'cx', 0 - radius[1]);
		bullet4.setAttributeNS(null, 'cy', 0);
		bullet4.setAttributeNS(null, 'fill', "url(#image4)");
		lineGroup_2.appendChild(bullet4);
		
			var bullet5 = document.createElementNS(xmlns, 'circle');
		bullet5.setAttribute('class', 'bullet-opacity-4');
		bullet5.setAttributeNS(null, 'r', (32));
		bullet5.setAttributeNS(null, 'cx', 0 - radius[2]);
		bullet5.setAttributeNS(null, 'cy', 0);
		bullet5.setAttributeNS(null, 'fill', "url(#image5)");
		lineGroup_3.appendChild(bullet5);

	wrapper.appendChild(lineGroup_1);
	wrapper.appendChild(lineGroup_2);
	wrapper.appendChild(lineGroup_3);

	svg.appendChild(wrapper);

	document.querySelector('.line-2').style.transform = "rotate(100deg, "+window.innerWidth /2+", "+window.innerHeight /2+")"

	function createPointRadar(radius){
		var obj = document.createElementNS(xmlns, 'circle');
		obj.setAttributeNS(null, 'r', radius);
		obj.setAttributeNS(null, 'cx', 0);
		obj.setAttributeNS(null, 'cy', 0);
		obj.setAttributeNS(null, 'fill', "none");
		obj.setAttributeNS(null, 'stroke', "#fff");
		obj.setAttributeNS(null, 'stroke-width', "1");
		obj.setAttributeNS(null, 'stroke-opacity', ".2");

		return obj;
	}
	
	

	function createBulletRadar(group, radius, half){
		/*if(half){
			var bullet = document.createElementNS(xmlns, 'circle');
			bullet.setAttribute('class', 'bullet-opacity-1');
			bullet.setAttributeNS(null, 'r', (Math.random()*3) + 2);
			bullet.setAttributeNS(null, 'cx', 0);
			bullet.setAttributeNS(null, 'cy', 0 - radius);
			bullet.setAttributeNS(null, 'fill', "#fff");
			group.appendChild(bullet);
		}*/
		
		var bullet = document.createElementNS(xmlns, 'circle');
			bullet.setAttribute('class', 'bullet-opacity-1');
			bullet.setAttributeNS(null, 'r', (32));
			bullet.setAttributeNS(null, 'cx', 0);
			bullet.setAttributeNS(null, 'cy', 0 + radius);
			bullet.setAttributeNS(null, 'fill', "url(#image)");
			lineGroup_3.appendChild(bullet);
		
		var bullet2 = document.createElementNS(xmlns, 'circle');
		bullet2.setAttribute('class', 'bullet-opacity-2');
		bullet2.setAttributeNS(null, 'r', (32));
		bullet2.setAttributeNS(null, 'cx', 0 - radius);
		bullet2.setAttributeNS(null, 'cy', 0);
		bullet2.setAttributeNS(null, 'fill', "url(#image)");
		lineGroup_2.appendChild(bullet2);
		

	/*if(half){
		var bullet3 = document.createElementNS(xmlns, 'circle');
		bullet3.setAttribute('class', 'bullet-opacity-3');
		bullet3.setAttributeNS(null, 'r', (Math.random()*3) + 2);
		bullet3.setAttributeNS(null, 'cx', 0);
		bullet3.setAttributeNS(null, 'cy', 0 + radius);
		bullet3.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(bullet3);
	}
		
		var bullet4 = document.createElementNS(xmlns, 'circle');
		bullet4.setAttribute('class', 'bullet-opacity-4');
		bullet4.setAttributeNS(null, 'r', (Math.random()*3) + 2);
		bullet4.setAttributeNS(null, 'cx', 0 + radius);
		bullet4.setAttributeNS(null, 'cy', 0);
		bullet4.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(bullet4);*/
	}
})()
new WOW().init();