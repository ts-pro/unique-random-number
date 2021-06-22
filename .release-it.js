module.exports = {
  git: {
    commitMessage: 'release: v${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: false,
  },
};
