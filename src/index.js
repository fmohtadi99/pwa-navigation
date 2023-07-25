"use client";
import React, { createElement } from "react";
import { Drawer } from "./libs/drawer";
import { backFunction, errorHandlers, theRoutes } from "./functions";
import "./style.css";
import { Router } from "./libs/router";

/** Package name */
const PACKAGE_NAME = "pwa-navigation";

/** An array of screen components
 * @typedef {{ id: string; screen: React.JSX.ElementType }} Screens
 * @type {Screens[]}
 */
export var registeredScreens = [];

/**
* @typedef {{accentColor?: string[];
*	alignContent?: string[];
*	alignItems?: string[];
*	alignSelf?: string[];
*	alignmentBaseline?: string[];
*	all?: string[];
*	animation?: string[];
*	animationDelay?: string[];
*	animationDirection?: string[];
*	animationDuration?: string[];
*	animationFillMode?: string[];
*	animationIterationCount?: string[];
*	animationName?: string[];
*	animationPlayState?: string[];
*	animationTimingFunction?: string[];
*	backfaceVisibility?: string[];
*	background?: string[];
*	backgroundAttachment?: string[];
*	backgroundBlendMode?: string[];
*	backgroundClip?: string[];
*	backgroundColor?: string[];
*	backgroundImage?: string[];
*	backgroundOrigin?: string[];
*	backgroundPosition?: string[];
*	backgroundRepeat?: string[];
*	backgroundSize?: string[];
*	baselineShift?: string[];
*	blockSize?: string[];
*	border?: string[];
*	borderBlockEnd?: string[];
*	borderBlockEndColor?: string[];
*	borderBlockEndStyle?: string[];
*	borderBlockEndWidth?: string[];
*	borderBlockStart?: string[];
*	borderBlockStartColor?: string[];
*	borderBlockStartStyle?: string[];
*	borderBlockStartWidth?: string[];
*	borderBottom?: string[];
*	borderBottomColor?: string[];
*	borderBottomLeftRadius?: string[];
*	borderBottomRightRadius?: string[];
*	borderBottomStyle?: string[];
*	borderBottomWidth?: string[];
*	borderCollapse?: string[];
*	borderColor?: string[];
*	borderImage?: string[];
*	borderImageOutset?: string[];
*	borderImageRepeat?: string[];
*	borderImageSlice?: string[];
*	borderImageSource?: string[];
*	borderImageWidth?: string[];
*	borderInlineEnd?: string[];
*	borderInlineEndColor?: string[];
*	borderInlineEndStyle?: string[];
*	borderInlineEndWidth?: string[];
*	borderInlineStart?: string[];
*	borderInlineStartColor?: string[];
*	borderInlineStartStyle?: string[];
*	borderInlineStartWidth?: string[];
*	borderLeft?: string[];
*	borderLeftColor?: string[];
*	borderLeftStyle?: string[];
*	borderLeftWidth?: string[];
*	borderRadius?: string[];
*	borderRight?: string[];
*	borderRightColor?: string[];
*	borderRightStyle?: string[];
*	borderRightWidth?: string[];
*	borderSpacing?: string[];
*	borderStyle?: string[];
*	borderTop?: string[];
*	borderTopColor?: string[];
*	borderTopLeftRadius?: string[];
*	borderTopRightRadius?: string[];
*	borderTopStyle?: string[];
*	borderTopWidth?: string[];
*	borderWidth?: string[];
*	bottom?: string[];
*	boxShadow?: string[];
*	boxSizing?: string[];
*	breakAfter?: string[];
*	breakBefore?: string[];
*	breakInside?: string[];
*	captionSide?: string[];
*	caretColor?: string[];
*	clear?: string[];
*	clip?: string[];
*	clipPath?: string[];
*	clipRule?: string[];
*	color?: string[];
*	colorInterpolation?: string[];
*	colorInterpolationFilters?: string[];
*	columnCount?: string[];
*	columnFill?: string[];
*	columnGap?: string[];
*	columnRule?: string[];
*	columnRuleColor?: string[];
*	columnRuleStyle?: string[];
*	columnRuleWidth?: string[];
*	columnSpan?: string[];
*	columnWidth?: string[];
*	columns?: string[];
*	content?: string[];
*	counterIncrement?: string[];
*	counterReset?: string[];
*	cssFloat?: string[];
*	cssText?: string[];
*	cursor?: string[];
*	direction?: string[];
*	display?: string[];
*	dominantBaseline?: string[];
*	emptyCells?: string[];
*	fill?: string[];
*	fillOpacity?: string[];
*	fillRule?: string[];
*	filter?: string[];
*	flex?: string[];
*	flexBasis?: string[];
*	flexDirection?: string[];
*	flexFlow?: string[];
*	flexGrow?: string[];
*	flexShrink?: string[];
*	flexWrap?: string[];
*	float?: string[];
*	floodColor?: string[];
*	floodOpacity?: string[];
*	font?: string[];
*	fontFamily?: string[];
*	fontFeatureSettings?: string[];
*	fontKerning?: string[];
*	fontSize?: string[];
*	fontSizeAdjust?: string[];
*	fontStretch?: string[];
*	fontStyle?: string[];
*	fontVariant?: string[];
*	fontVariantCaps?: string[];
*	fontVariantLigatures?: string[];
*	fontVariantNumeric?: string[];
*	fontWeight?: string[];
*	gap?: string[];
*	glyphOrientationVertical?: string[];
*	grid?: string[];
*	gridArea?: string[];
*	gridAutoColumns?: string[];
*	gridAutoFlow?: string[];
*	gridAutoRows?: string[];
*	gridColumn?: string[];
*	gridColumnEnd?: string[];
*	gridColumnGap?: string[];
*	gridColumnStart?: string[];
*	gridGap?: string[];
*	gridRow?: string[];
*	gridRowEnd?: string[];
*	gridRowGap?: string[];
*	gridRowStart?: string[];
*	gridTemplate?: string[];
*	gridTemplateAreas?: string[];
*	gridTemplateColumns?: string[];
*	gridTemplateRows?: string[];
*	height?: string[];
*	hyphens?: string[];
*	imageOrientation?: string[];
*	imageRendering?: string[];
*	inlineSize?: string[];
*	isolation?: string[];
*	justifyContent?: string[];
*	justifyItems?: string[];
*	justifySelf?: string[];
*	left?: string[];
*	letterSpacing?: string[];
*	lightingColor?: string[];
*	lineBreak?: string[];
*	lineHeight?: string[];
*	listStyle?: string[];
*	listStyleImage?: string[];
*	listStylePosition?: string[];
*	listStyleType?: string[];
*	margin?: string[];
*	marginBlockEnd?: string[];
*	marginBlockStart?: string[];
*	marginBottom?: string[];
*	marginInlineEnd?: string[];
*	marginInlineStart?: string[];
*	marginLeft?: string[];
*	marginRight?: string[];
*	marginTop?: string[];
*	marker?: string[];
*	markerEnd?: string[];
*	markerMid?: string[];
*	markerStart?: string[];
*	mask?: string[];
*	maskComposite?: string[];
*	maskImage?: string[];
*	maskPosition?: string[];
*	maskRepeat?: string[];
*	maskSize?: string[];
*	maskType?: string[];
*	maxHeight?: string[];
*	maxWidth?: string[];
*	maxBlockSize?: string[];
*	maxInlineSize?: string[];
*	minBlockSize?: string[];
*	minHeight?: string[];
*	minInlineSize?: string[];
*	minWidth?: string[];
*	objectFit?: string[];
*	objectPosition?: string[];
*	opacity?: string[];
*	order?: string[];
*	orientation?: string[];
*	orphans?: string[];
*	outline?: string[];
*	outlineColor?: string[];
*	outlineOffset?: string[];
*	outlineStyle?: string[];
*	outlineWidth?: string[];
*	overflow?: string[];
*	overflowAnchor?: string[];
*	overflowWrap?: string[];
*	overflowX?: string[];
*	overflowY?: string[];
*	overscrollBehavior?: string[];
*	overscrollBehaviorBlock?: string[];
*	overscrollBehaviorInline?: string[];
*	overscrollBehaviorX?: string[];
*	overscrollBehaviorY?: string[];
*	padding?: string[];
*	paddingBlockEnd?: string[];
*	paddingBlockStart?: string[];
*	paddingBottom?: string[];
*	paddingInlineEnd?: string[];
*	paddingInlineStart?: string[];
*	paddingLeft?: string[];
*	paddingRight?: string[];
*	paddingTop?: string[];
*	pageBreakAfter?: string[];
*	pageBreakBefore?: string[];
*	pageBreakInside?: string[];
*	paintOrder?: string[];
*	perspective?: string[];
*	perspectiveOrigin?: string[];
*	placeContent?: string[];
*	placeItems?: string[];
*	placeSelf?: string[];
*	pointerEvents?: string[];
*	position?: string[];
*	quotes?: string[];
*	resize?: string[];
*	right?: string[];
*	rotate?: string[];
*	rowGap?: string[];
*	rubyAlign?: string[];
*	rubyPosition?: string[];
*	scale?: string[];
*	scrollBehavior?: string[];
*	shapeRendering?: string[];
*	stopColor?: string[];
*	stopOpacity?: string[];
*	stroke?: string[];
*	strokeDasharray?: string[];
*	strokeDashoffset?: string[];
*	strokeLinecap?: string[];
*	strokeLinejoin?: string[];
*	strokeMiterlimit?: string[];
*	strokeOpacity?: string[];
*	strokeWidth?: string[];
*	tabSize?: string[];
*	tableLayout?: string[];
*	textAlign?: string[];
*	textAlignLast?: string[];
*	textAnchor?: string[];
*	textCombineUpright?: string[];
*	textDecoration?: string[];
*	textDecorationColor?: string[];
*	textDecorationLine?: string[];
*	textDecorationStyle?: string[];
*	textIndent?: string[];
*	textOrientation?: string[];
*	textOverflow?: string[];
*	textRendering?: string[];
*	textShadow?: string[];
*	textTransform?: string[];
*	textUnderlinePosition?: string[];
*	top?: string[];
*	touchAction?: string[];
*	transform?: string[];
*	transformBox?: string[];
*	transformOrigin?: string[];
*	transformStyle?: string[];
*	transition?: string[];
*	transitionDelay?: string[];
*	transitionDuration?: string[];
*	transitionProperty?: string[];
*	transitionTimingFunction?: string[];
*	translate?: string[];
*	unicodeBidi?: string[];
*	userSelect?: string[];
*	vectorEffect?: string[];
*	verticalAlign?: string[];
*	visibility?: string[];
*	whiteSpace?: string[];
*	widows?: string[];
*	width?: string[];
*	willChange?: string[];
*	wordBreak?: string[];
*	wordSpacing?: string[];
*	wordWrap?: string[];
*	writingMode?: string[];
*	zIndex?: string[] }} TransitionCSS

*/

/**
 * The style of the routing animation
 * @typedef {{this: TransitionCSS, next: TransitionCSS}} styleType
 * @type {styleType}
 */
const defaultTransitionStyle = {
	this: {
		scale: ["1", "1.05"],
		transform: ["translateX(0px)", "translateX(-50px)"],
		filter: ["none", "brightness(0.4)"],
	},
	next: {
		transform: ["translateX(100%)", "translateX(0)"],
	},
};

/**
 * @typedef {{	classDrawer: string,
 * 			classRouter: string,
 * 			storageKey: string,
 * }} AppConfiguration
 */
export const appConfig = {
	classDrawer: `${PACKAGE_NAME}-drawer`,
	classRouter: `${PACKAGE_NAME}-router`,
	packageName: PACKAGE_NAME,
	storageKey: `${PACKAGE_NAME}-routes`,
};

/**
 * @typedef {{	actionDelay?: number,
 * 			transitionDuration?: number,
 * 			transitionEase?: string,
 * 			transitionStyle?: styleType,
 * 			disableBackFunction?: boolean,
 * 			zIndex?: number
 * }} UserConfiguration
 */
export var userConfig = {
	actionDelay: 10,
	transitionDuration: 650,
	transitionEase: "cubic-bezier(0.16, 1, 0.3, 1)",
	transitionStyle: defaultTransitionStyle,
	disableBackFunction: true,
	zIndex: 10000,
};

const hasScreen = screens => {
	registeredScreens = screens;
	const initialScreenId = screens[0].id;
	const initialScreen = screens[0].screen;
	const initial = createElement(initialScreen, { id: initialScreenId }, null);
	theRoutes.init(initialScreenId);

	const html = document.getElementsByTagName("html")[0];
	const body = document.getElementsByTagName("body")[0];
	const parents = [html, body];
	setTimeout(() => {
		parents.forEach(parent => {
			parent.setAttribute(
				"style",
				"height: 100dvh; width: 100dvw; overflow: hidden;"
			);
		});
	}, 10);

	return (
		<>
			<section
				id={initialScreenId}
				className={appConfig.classRouter}
				style={{
					transform: "translateX(0)",
					position: "relative",
				}}>
				{initial}
			</section>
			<Router />
		</>
	);
};

const hasDrawer = drawer => <Drawer component={drawer} />;

/** Navigation
 * @param {object} props
 * @param {UserConfiguration} [props.configuration]
 * @param {React.JSX.ElementType} [props.drawer]
 * @param {Screens[]} [props.screens]
 * @returns {JSX.Element}
 */

export default function Navigation({ configuration, drawer, screens }) {
	userConfig = { ...userConfig, ...configuration };
	errorHandlers.styleOverload(userConfig.transitionStyle);
	errorHandlers.mismatchTiming(
		userConfig.actionDelay,
		userConfig.transitionDuration
	);
	window.onpopstate = backFunction;

	return (
		<>
			{screens && hasScreen(screens)}
			{drawer && hasDrawer(drawer)}
		</>
	);
}
