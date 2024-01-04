import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React, { isValidElement, cloneElement, Children } from "react";

const Backdrop = (props: { onClose: () => void }) => {
	return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props: { onClose: () => void; children: any }) => {
	const childrenWithProps = Children.map(props.children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child, { onClose: props.onClose } as any);
		}

		return child;
	});

	return (
		<div className={`${classes.modal} md:w-[380px] md:m-auto rounded-lg`}>
			{childrenWithProps}
		</div>
	);
};

export const Modal = (props: { onClose: () => void; children: any }) => {
	const portalElement = document.getElementById("modal") as HTMLElement;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement,
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClose={props.onClose}>
					{props.children}
				</ModalOverlay>,
				portalElement,
			)}
		</>
	);
};
