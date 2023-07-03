import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  // https://stackoverflow.com/questions/64589655/package-is-not-publishing-to-npm-not-in-the-npm-registry
  name: '@gaslimitreached/greeter',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: NpmAccess.PUBLIC,
  projenrcTs: true,
  releaseToNpm: true,
  repository: 'https://github.com/gaslimitreached/greeter.git',
});

project.synth();
