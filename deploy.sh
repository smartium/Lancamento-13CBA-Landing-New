rm -rf ../landingBuild/bundle
meteor build --server-only --directory ../landingBuild
cd ../landingBuild/bundle/programs/server
npm install --production
cd ../../../
git add .
git commit -m `date +%dD%mM%YY-%HH%MM%SS`
git push -u origin master
