echo '--------------------------------------------------';
echo 'This will remove existing files at:';
echo './src/css/bootstrap/ and ./src/js/bootstrap/';
echo '--------------------------------------------------';
echo 'It will then get the latest v4 changes and copy..';
echo 'those latest files to those directories.';
echo '--------------------------------------------------';
echo 'To continue press `Y`.';
echo '--------------------------------------------------';

read ANS;

if [ $ANS == "yes" ];
then
  echo '--------------------------------------------------';
  echo 'Removing files ./src/css/* and ./src/js/* ...';
  rm -Rf ./src/css/bootstrap/
  rm -Rf ./src/js/bootstrap/
  echo 'Cleaned src/css and src/js folders.';
  echo '--------------------------------------------------';
  echo 'Downloading newest bootstrap files as a module..';
  git submodule update --init --recursive
  echo 'Fetched latest v4 bootstrap files as a module.';
  echo '--------------------------------------------------';
  echo 'Installing new files into project..';
  cp -R ./modules/bootstrap/scss/* ./src/css/bootstrap/
  cp -R ./modules/bootstrap/js/src/* ./src/js/bootstrap/
  echo 'Finished installing newest files.';
  echo '--------------------------------------------------';
  echo 'You will need to run `gulp build to compile` to';
  echo 'preview your project with the new files.';
fi
