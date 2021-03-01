import { useEffect, useState } from 'preact/hooks';
import { subscribers, getCurrentUrl, Link as StaticLink, exec } from './index';

export const M = (props) => {
	const [_nextUrl, setNextUrl] = useState('');
	const [state, setState] = useState({});
	let nextUrl;
	let update;

	useEffect(() => {
		setNextUrl(window.location.pathname);
		update = () => {
			nextUrl = _nextUrl;
			setState({});
		};
		subscribers.push(update);
		return () => subscribers.splice(subscribers.indexOf(update)>>>0, 1);
	}, []);

	let url = nextUrl || getCurrentUrl(), 
		path = url.replace(/\?.+$/,'');
	nextUrl = null;
	
	return props.children({
		url,
		path,
		matches: exec(path, props.path, {}) !== false
	});
}

export const Link = ({ class: c, className, path, ...props }) => {
	const inactive = [c, className].filter(Boolean).join(' ');
	const active = [c, className].filter(Boolean).join(' ');
	return (
		<M path={path || props.href}>
			{ ({ matches }) => (
				<StaticLink {...props} class={matches ? active : inactive} />
			) }
		</M>
	);
}

export default M;