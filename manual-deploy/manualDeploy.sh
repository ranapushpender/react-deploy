#!/bin/bash
source src/scripts/config.sh
branchname=`git rev-parse --abbrev-ref HEAD`
mv build $branchname
echo $USERNAME $SERVER
ssh -o StrictHostKeyChecking=no -p 2222 $USERNAME@$SERVER rm -rf /$DEPLOY_PATH/react-deploy/projects/$branchname
scp -o StrictHostKeyChecking=no -P 2222 -r $branchname $USERNAME@$SERVER:/$DEPLOY_PATH/react-deploy/projects/
curl login.sita.grappus.com/reload
mv $branchname build
