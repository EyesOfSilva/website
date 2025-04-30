export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","gallery-images/image01.jpg","gallery-images/image02.jpg","gallery-images/image03.jpg","logo-dark.svg","logo-light.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.QvhaLVQM.js",app:"_app/immutable/entry/app.HkVj59Rf.js",imports:["_app/immutable/entry/start.QvhaLVQM.js","_app/immutable/chunks/CKyl6Msw.js","_app/immutable/chunks/DYHIa6d2.js","_app/immutable/chunks/BoSml81q.js","_app/immutable/entry/app.HkVj59Rf.js","_app/immutable/chunks/DYHIa6d2.js","_app/immutable/chunks/BACOfbod.js","_app/immutable/chunks/tNBFRi1W.js","_app/immutable/chunks/BP0KR8Iq.js","_app/immutable/chunks/BoSml81q.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
