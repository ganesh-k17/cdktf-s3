# CDK

## Install CDK for Terraform and initialize a new CDK project

```bash
npm install -g cdktf-cli
cdktf init --template="typescript"
```

## Install required dependencies

```bash
npm install @cdktf/provider-aws
```

## Deploying resources

```bash
npm install
cdktf get
cdktf synth
```

```bash
ENV=dev cdktf deploy
```
