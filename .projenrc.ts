import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@cachemonet/greeter',
  npmAccess: NpmAccess.PUBLIC,
  projenrcTs: true,
  releaseToNpm: true,
  repository: 'https://github.com/gaslimitreached/greeter.git',
});

project.synth();
