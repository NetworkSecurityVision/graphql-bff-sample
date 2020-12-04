#! /bin/bash
set -e

repodir="_a_temp_repo_ignore_by_git_"
destdir="api"

rm -rf $repodir 2>&1
git clone --depth=1 git@github.com:xxxuser/xxxproject.git $repodir
rm -rf $destdir 2>&1
cp -rf $repodir/api $destdir/
find $destdir ! -name "*.proto" -type f -exec rm -r {} \;
cd $repodir
touch $destdir/version
git log -1 > ../$destdir/version
cd ..
rm -rf $repodir
echo 'gRPC API update complete'