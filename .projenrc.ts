import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  name: '@cachemonet/greeter',
  repository: 'https://github.com/gaslimitreached/greeter.git',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  projenrcTs: true,
});

project.synth();
