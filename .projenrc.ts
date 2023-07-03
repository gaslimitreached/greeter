import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@cachemonet/greeter',
  // npmRegistryUrl: 'https://npm.pkg.github.com',
  packageName: 'greeter',
  projenrcTs: true,
  releaseToNpm: true,
  repository: 'https://github.com/gaslimitreached/greeter.git',
});

project.synth();
