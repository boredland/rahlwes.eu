module.exports = {
    ci: {
      collect: {
        numberOfRuns: "2",
        settings: {
          extraHeaders: '{"Cookie": "vercel-live-feedback-optout=1"}',
          skipAudits: ["is-crawlable"],
        },
      },
    },
  };