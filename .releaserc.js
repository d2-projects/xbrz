module.exports = {
  branch: 'master',
  plugins: [
    [ '@semantic-release/commit-analyzer' ],
    [ '@semantic-release/release-notes-generator' ],
    [ '@semantic-release/changelog', { changelogFile: 'docs/CHANGELOG.md' } ],
    [ '@semantic-release/npm', { npmPublish: true } ],
    [ '@semantic-release/github' ],
    [ '@semantic-release/git', { assets: ['docs/CHANGELOG.md', 'package.json'] } ]
  ]
}
