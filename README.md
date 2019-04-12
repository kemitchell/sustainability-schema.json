JSON schema for open software project sustainability resources

This package exports a JSON schema for sustainability objects.

The `definitions` property of the schema contains all sub-schemas that you might like to load individually:

- `project`
- `contributor`
- `contributorReference`

This package treats the exposure of those sub-schemas as part of its public API for semantic versioning.

You can validate data against the schema using libraries like [tv4](https://www.npmjs.com/package/tv4).
