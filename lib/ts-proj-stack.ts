import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';



// export class L3Bucket extends Construct {
//   constructor(scope: Construct, id: string, expiration: number) {
//     super(scope, id);

//     new Bucket(this, 'myL3Bucket', {
//       lifecycleRules: [{
//         expiration: Duration.days(expiration)
//   }
//       ]
//     })
//   }
// }

export class TsProjStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create an S3 bucket with a lifecycle rule to delete objects after 1 day with L1 construct
    new CfnBucket(this, 'myL1Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    })

    // create an S3 bucket with a lifecycle rule to delete objects after 2 days with L2 construct
    new Bucket(this, 'myL2Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(2)
      }]
    })

    // new L3Bucket(this, 'myL3Bucket', 3);
  }
}
