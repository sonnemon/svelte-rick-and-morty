import sirv from 'sirv';
import compression from 'compression';
import polka from 'polka';
import * as sapper from '@sapper/server';

const { NODE_ENV, PORT } = process.env;
const dev = NODE_ENV;

polka()
	.use(
		compression({
			threshold: 0
		}),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, (error) => {
		if (error) console.log('error', error);
	});
