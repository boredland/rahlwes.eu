module.exports = {
	ci: {
		collect: {
			numberOfRuns: "1",
			settings: {
				extraHeaders: '{"Cookie": "vercel-live-feedback-optout=1"}',
				skipAudits: ["is-crawlable"],
			},
		},
	},
};
