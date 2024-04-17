import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { AwsProvider } from "./.gen/providers/aws/provider";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string, env: string) {
    super(scope, id);

    // Instantiate the AWS provider construct
    new AwsProvider(this, "aws", {
      region: "us-east-1", // Specify the AWS region
    });

    // s3 start

    const bucketName = `my-${env}-bucket`; // Generate bucket name based on environment

    new S3Bucket(this, `${env}-bucket`, {
      bucket: bucketName,
      acl: "private",
    });

    // Output bucket name for reference
    new TerraformOutput(this, `${env}-bucket-name`, {
      value: bucketName,
    });

    // end
  }
}

const app = new App();
const env = process.env.ENV || "dev";
new MyStack(app, "cdktf", env);
app.synth();
