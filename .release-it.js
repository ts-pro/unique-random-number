module.exports = {
  git: {
    commitMessage: 'release: v${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: true,
  },
  github: {
    release: true,
  },
};
