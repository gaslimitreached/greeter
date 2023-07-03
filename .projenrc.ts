import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@gaslimitreached/greeter',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: NpmAccess.PUBLIC,
  packageName: 'greeter',
  projenrcTs: true,
  releaseToNpm: true,
  repository: 'https://github.com/gaslimitreached/greeter.git',
  // only supported for aws code artifacts
  // scopedPackagesOptions: [{
  //   scope: '@cachemonet',
  //   registryUrl: 'https://registry.npmjs.org/',
  // }],
});

project.synth();
