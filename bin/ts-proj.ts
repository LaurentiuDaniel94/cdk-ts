#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsProjStack } from '../lib/ts-proj-stack';
import { PhotoStack } from '../lib/PhotoStack';
import { PhotoHandlerStack } from '../lib/PhotoHandlerStack';



const app = new cdk.App();
new TsProjStack(app, 'TsProjStack'); 
new PhotoStack(app, 'PhotoStack')
new PhotoHandlerStack(app, 'PhotoHandlerStack')