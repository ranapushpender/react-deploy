source config.sh
branchname=`git rev-parse --abbrev-ref HEAD`
mv build $branchname
echo $USERNAME $SERVER
ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER rm -rf /$DEPLOY_PATH/react-deploy/projects/$branchname
scp -o StrictHostKeyChecking=no -r ./$branchname $USERNAME@$SERVER:/$DEPLOY_PATH/react-deploy/projects/
ssh -o StrictHostKeyChecking=no $USERNAME@$SERVER 'docker exec -i nginx sh /scripts/generate-config.sh'
mv $branchname build