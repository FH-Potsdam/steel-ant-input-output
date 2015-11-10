// BASE VARIABLES
let props = {
	groups: [],
	groupsAmount: 3,
	availableFormId: 0,
	circleMinSize: 10,
	lineWeight: 1,
	backgroundColor: 'whitesmoke',
	wrapperSize: 50,
	colorIndex: 0,
	mainBrightness: 90,
	mainColor: false
};

// SETUP
function setup() {
	initCanvas();

	background(props.backgroundColor);
	props.mainColor = color(0, 0, props.mainBrightness, 100);

	console.log(`Generating ${props.groupsAmount} groups`);
	props.groups = addGroups(props.groupsAmount);
	console.log(`${props.groupsAmount} groups generated`);
}

function draw() {
	noLoop();
}

function initCanvas() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
}

// GENERATE CONTENTS
function addGroups(groupsAmount) {
	let groups = [];
	for (var i = 1; i <= groupsAmount; i++) {
		let { mainBrightness, mainColor } = props;
		let oldBrightness = mainColor._getBrightness();
		groups.push(addGroup(i));
		let newBrightness = oldBrightness - (i * (groupsAmount * (groupsAmount * i)));

		props.mainColor = color(0, 0, newBrightness, 100);
	}
	return groups;
}

function addGroup(id) {
	let rows = Math.ceil(width / props.wrapperSize) + 1;
	let columns = Math.ceil(width / props.wrapperSize) + 1;
	let formPosX = 0 - (props.wrapperSize / 2);
	let formPosY = formPosX;
	let columnPosX = formPosX;
	let rowPosY = formPosY;
	let forms = [];
	let groupId = props.groups.length;

	for (let row = 1; row <= rows; row++) {
		for (let column = 1; column <= columns; column++) {
			let form = addForm(
				props.availableFormId,
				props.mainColor,
				columnPosX,
				rowPosY,
				props.wrapperSize,
				row,
				column
			);
			forms.push(form);
			columnPosX = column === columns ? formPosX : columnPosX + props.wrapperSize;
			props.availableFormId++;
		};
		rowPosY = row === rows ? formPosY : rowPosY + props.wrapperSize;
	};

	let group = {
		id,
		rows: rows,
		columns: columns,
		forms: forms
	};

	group.connections = addConnections(group);

	console.log(`Generated Group with id: ${group.id}`, group);
	return group;
}

function addForm(id, circleColor, x , y, size, row, column) {
	let hasCircle = random(0,2) < 1;
	let circleSize = random(props.circleMinSize, props.wrapperSize - 5);
	let circleX = x + (props.wrapperSize / 2);
	let circleY = y + (props.wrapperSize / 2);
	let form = {
		id,
		x,
		y,
		row,
		column,
		circle: hasCircle ? false : {
			x: circleX,
			y: circleY,
			size: circleSize,
			circleColor
		}
	};
	if (form.circle) {
		let circleCenter = circleSize / 2;
		form.circle.arcPoints = {
			top: {x: circleX, y: circleY - circleCenter},
			bottom: {x: circleX, y: circleY + circleCenter},
			left: {x: circleX - circleCenter, y: circleY},
			right: {x: circleX + circleCenter, y: circleY}
		};
	}

	drawForm(form);
	return form;
}

function getExtremeArcPoints(firstCircle, nextCircle) {
	let points = {};
	points.start = firstCircle.arcPoints[dir];

	switch(dir) {
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
	let { x, y, circle } = wrapper;
	noFill();
	noStroke();
	rect(x, y, props.wrapperSize, props.wrapperSize);
	if (circle) {
		noFill();
		stroke(circle.circleColor);
		strokeWeight(props.lineWeight);
		ellipse(circle.x, circle.y, circle.size, circle.size);
	}
}

function addConnections(group) {
	let connections = [];
	let { columns, rows } = group;

	group.forms.forEach((form, index) => {
		let isFirstColumn = form.column === 1;
		let isFirstRow = form.row === 1;
		let isLastRow = form.row === rows;
		let isLastColumn = form.column === columns;
		let rightSibling, leftSibling, topSibling, bottomSibling;

		if (!isFirstRow) {
			topSibling = getFormByPosition(group, form.row - 1, form.column);
			connections.push(addConnection('top', form, topSibling));
		}
		if (!isFirstColumn) {
			leftSibling = getFormByPosition(group, form.row, form.column - 1);
			connections.push(addConnection('left', form, leftSibling));
		}
		if (!isLastRow) {
			bottomSibling = getFormByPosition(group, form.row + 1, form.column);
			connections.push(addConnection('bottom', form, bottomSibling));
		}
		if (!isLastColumn) {
			rightSibling = getFormByPosition(group, form.row, form.column + 1);
			connections.push(addConnection('right', form, rightSibling));
		}
	});

	return connections;
}

function addConnection(dir, startForm, endForm) {
	if (!startForm.circle || !endForm.circle) { return; }
	let startPoint = {};
	let endPoint = {};
	switch(dir) {
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
	strokeWeight(props.lineWeight);
	line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);

	return { startPoint, endPoint };
}

// GETTERS
function getFormById(id) {
	let allForms = [];
	props.groups.forEach((group) => {
		allForms.concat(group.forms);
	});
	return allForms.filter((form) => {
		return form.id === id;
	})[0];
}

function getFormByPosition(group, row, column) {
	return group.forms.filter((form) => {
		return form.row === row && form.column == column;
	})[0];
}
