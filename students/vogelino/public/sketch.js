'use strict';

var props = {};

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.class('p5-canevas');
	canvas.parent('main-canevas');

	colorMode(HSB, 360, 100, 100, 100);

	props = getDefaults();

	background(props.backgroundColor);
	props.mainColor = getColor(90, false, 0);
	generateGroups();
	drawConnections(props.groups[0]);

	props.mainColor = getColor(75, false, 0);
	generateGroups();
	drawConnections(props.groups[1]);

	props.mainColor = getColor(30, false, 0);
	generateGroups();
	drawConnections(props.groups[2]);
}

function draw() {
	noLoop();
}

function getDefaults() {
	return {
		availableFormId: 0,
		circleMinSize: 10,
		connectionWeight: 2,
		backgroundColor: 'whitesmoke',
		groups: [],
		wrapperSize: 50,
		colorIndex: 0,
		mainColor: getColor()
	};
}

function getExtremeArcPoints(firstCircle, nextCircle) {
	var points = {};
	points.start = firstCircle.arcPoints[dir];

	switch (dir) {
		case 'right':
			points.end = nextCircle.arcPoints.left;
			break;
		case 'left':
			points.end = nextCircle.arcPoints.right;
			break;
		case 'top':
			points.end = nextCircle.arcPoints.bottom;
			break;
		case 'bottom':
			points.end = nextCircle.arcPoints.top;
			break;
	}

	return points;
}

function drawForm(wrapper) {
	var x = wrapper.x;
	var y = wrapper.y;
	var circle = wrapper.circle;

	noFill();
	noStroke();
	rect(x, y, props.wrapperSize, props.wrapperSize);
	if (circle) {
		fill(circle.circleColor);
		ellipse(circle.x, circle.y, circle.size, circle.size);
	}
}

function drawConnections(group) {
	var columns = group.columns;
	var rows = group.rows;

	group.forms.forEach(function (form, index) {
		var isFirstColumn = form.column === 1;
		var isFirstRow = form.row === 1;
		var isLastRow = form.row === rows;
		var isLastColumn = form.column === columns;
		var rightSibling = undefined,
		    leftSibling = undefined,
		    topSibling = undefined,
		    bottomSibling = undefined;

		if (!isFirstRow) {
			topSibling = getFormByPosition(group, form.row - 1, form.column);
			drawConnection('top', form, topSibling);
		}
		if (!isFirstColumn) {
			leftSibling = getFormByPosition(group, form.row, form.column - 1);
			drawConnection('left', form, leftSibling);
		}
		if (!isLastRow) {
			bottomSibling = getFormByPosition(group, form.row + 1, form.column);
			drawConnection('bottom', form, bottomSibling);
		}
		if (!isLastColumn) {
			rightSibling = getFormByPosition(group, form.row, form.column + 1);
			drawConnection('right', form, rightSibling);
		}
	});
}

function drawConnection(dir, startForm, endForm) {
	if (!endForm) {
		debugger;
	};
	if (!startForm.circle || !endForm.circle) {
		return;
	}
	var startPoint = {};
	var endPoint = {};
	switch (dir) {
		case 'right':
			startPoint = startForm.circle.arcPoints.right;
			endPoint = endForm.circle.arcPoints.left;
			break;
		case 'left':
			startPoint = startForm.circle.arcPoints.left;
			endPoint = endForm.circle.arcPoints.right;
			break;
		case 'top':
			startPoint = startForm.circle.arcPoints.top;
			endPoint = endForm.circle.arcPoints.bottom;
			break;
		case 'bottom':
			startPoint = startForm.circle.arcPoints.bottom;
			endPoint = endForm.circle.arcPoints.top;
			break;
	}

	stroke(endForm.circle.circleColor);
	strokeWeight(props.connectionWeight);
	line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
}

function addForm(id, x, y, size, row, column) {
	var hasCircle = random(0, 2) < 1;
	var circleSize = random(props.circleMinSize, props.wrapperSize - 5);
	var circleX = x + props.wrapperSize / 2;
	var circleY = y + props.wrapperSize / 2;
	var form = {
		id: id,
		x: x,
		y: y,
		row: row,
		column: column,
		circle: hasCircle ? false : {
			x: circleX,
			y: circleY,
			size: circleSize,
			circleColor: props.mainColor
		}
	};
	if (form.circle) {
		var circleCenter = circleSize / 2;
		form.circle.arcPoints = {
			top: { x: circleX, y: circleY - circleCenter },
			bottom: { x: circleX, y: circleY + circleCenter },
			left: { x: circleX - circleCenter, y: circleY },
			right: { x: circleX + circleCenter, y: circleY }
		};
	}
	return form;
}

function getFormById(id) {
	var allForms = [];
	props.groups.forEach(function (group) {
		allForms.concat(group.forms);
	});
	return allForms.filter(function (form) {
		return form.id === id;
	})[0];
}

function getFormByPosition(group, row, column) {
	return group.forms.filter(function (form) {
		return form.row === row && form.column == column;
	})[0];
}

function getColor(bri, hue, sat, alpha) {
	bri = bri >= 0 ? bri : random(50, 75);
	hue = hue >= 0 ? hue : random(190, 200);
	sat = sat >= 0 ? sat : random(33, 66);
	alpha = alpha >= 0 ? alpha : 100;
	return color(hue, sat, bri, alpha);
}

function generateGroups() {
	var rows = Math.floor(width / props.wrapperSize);
	var columns = Math.floor(width / props.wrapperSize);
	var formPosX = 0;
	var formPosY = 0;
	var columnPosX = formPosX;
	var rowPosY = formPosY;
	var forms = [];
	var groupId = props.groups.length;

	for (var row = 1; row <= rows; row++) {
		for (var column = 1; column <= columns; column++) {
			var form = addForm(props.availableFormId, columnPosX, rowPosY, props.wrapperSize, row, column);
			drawForm(form);
			forms.push(form);
			columnPosX = column === columns ? formPosX : columnPosX + props.wrapperSize;
			props.availableFormId++;
		};
		rowPosY = row === rows ? formPosY : rowPosY + props.wrapperSize;
	};

	props.groups.push({
		id: props.groups.length,
		rows: rows,
		columns: columns,
		forms: forms
	});
}