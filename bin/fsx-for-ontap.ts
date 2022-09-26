#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { FsxForOntapStack } from "../lib/fsx-for-ontap-stack";

const app = new cdk.App();
new FsxForOntapStack(app, "FsxForOntapStack");
