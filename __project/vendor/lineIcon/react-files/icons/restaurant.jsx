import React from 'react';

function Restaurant(props) {
	const title = props.title || "restaurant";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 18.1L51.7 3.6c-.8-1.4-2.3-2.3-3.9-2.3H16.2c-1.6 0-3.1.9-3.9 2.3L4.1 18.1c0 .1-.1.1-.1.2-.1.2-.1.4-.1.6v39.3c0 2.5 2 4.5 4.5 4.5h47.1c2.5 0 4.5-2 4.5-4.5V19c.1-.3 0-.6-.1-.9zM17 20.6c-.2 2.5-2.3 4.4-4.8 4.4s-4.6-1.9-4.8-4.4H17zm13.2 0c-.2 2.5-2.3 4.4-4.8 4.4s-4.6-1.9-4.8-4.4h9.6zm13.2 0c-.2 2.5-2.3 4.4-4.8 4.4s-4.6-1.9-4.8-4.4h9.6zm13.1 0c-.2 2.5-2.3 4.4-4.8 4.4s-4.6-1.9-4.8-4.4h9.6zM15.4 5.3c.2-.3.5-.5.9-.5h31.5c.4 0 .7.2.9.5l6.7 11.9H8.8l6.6-11.9zm2.6 54V42.7c0-.6.5-1 1-1h5c.6 0 1 .5 1 1v16.5h-7zm37.6 0H28.5V42.7c0-2.5-2-4.5-4.5-4.5h-5c-2.5 0-4.5 2-4.5 4.5v16.5h-6c-.6 0-1-.5-1-1V27c1.4 1 3 1.6 4.8 1.6 2.7 0 5.1-1.3 6.6-3.2 1.5 2 3.9 3.2 6.6 3.2 2.7 0 5.1-1.3 6.6-3.2 1.5 2 3.9 3.2 6.6 3.2 2.7 0 5.1-1.3 6.6-3.2 1.5 2 3.9 3.2 6.6 3.2 1.8 0 3.5-.6 4.8-1.6v31.3c-.1.5-.6 1-1.1 1z"/>
		<path d="M46.4 38.2h-5.1c-1.7 0-3.1 1.4-3.1 3.1v5.1c0 1.7 1.4 3.1 3.1 3.1h5.1c1.7 0 3.1-1.4 3.1-3.1v-5.1c0-1.7-1.4-3.1-3.1-3.1zm-.4 7.9h-4.4v-4.4H46v4.4z"/>
	</g>
</svg>
	);
};

export default Restaurant;