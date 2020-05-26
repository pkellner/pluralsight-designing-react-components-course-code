#!/usr/bin/env bash

# Sending an e-mail depends on completing the following:
# https://support.google.com/accounts/answer/185833
# https://apple.stackexchange.com/a/92205

version="0.18"
startTime=$(date +%s)

OLDIFS=$IFS
IFS=$'\n'

runDir="$PWD"
npmDir="$PWD/npmCheck"
repoDir="${npmDir}/repo"
npmLogDir="${npmDir}/logs"
npmLog="${npmLogDir}/npmCheck.log"
npmOut="${npmLogDir}/npmCheck.out"
errDirs="${npmLogDir}/errDirs.txt"
okDirs="${npmLogDir}/okDirs.txt"
errMsg="${npmLogDir}/err.msg"
ignoreDirs="$PWD/ignore.txt"
npmFiles="${npmDir}/file_list.txt"

mailTo="humite@gmail.com"

npmCnt=0
npmIgnore=0

unset currentDir

# init dirs
rm -rf "${npmDir}"
mkdir -p "${npmLogDir}" "${repoDir}"
touch "${errDirs}" "${okDirs}"

mkLog(){
 echo "[$(date +%d-%m-%Y-%H:%M:%S)] $@" | tee -a "${npmLog}"
}

sendMail(){
mailx -s "npmCheck results" "$MAILTO" < $npmOut
}

checkErr(){
mkLog "Error"
cat ${errMsg} >> ${npmLog}

# add dir to error list if set
if ! [ -z ${currentDir+x} ]
 then
    echo ${currentDir} >> $errDirs
 fi

return 254
}

cloneRepo(){
 rm -rf "${repoDir}"
 mkLog "[git] cloning repository $1"
 git clone "$1" "${repoDir}" 2> ${errMsg} || checkErr
}

createDirList(){
 if [ -f $ignoreDirs ]; then
  find ${runDir} -name 'package.json'|grep -v node_modules | grep -v -f $ignoreDirs | sort > $npmFiles
 else
  find ${runDir} -name 'package.json'|grep -v node_modules | sort > $npmFiles
 fi
}

npmBuild(){
 mkLog "[find] package.json files"
 totalFiles=$(wc -l $npmFiles|awk '{print $1}')
 while read i;do
  currentDir=$(dirname $i)
  npmCnt=$(($npmCnt+1))
  mkLog "[npm] Processing $npmCnt of $totalFiles ${currentDir}"
  pushd "${currentDir}" > /dev/null
  /usr/local/bin/ncu -u 2> ${errMsg} >> ${npmLog}|| checkErr && \
  echo "${currentDir}" >> ${okDirs} && \
  rm -rf ./node_modules ./.next
  popd > /dev/null
done < $npmFiles
}

writeReport(){
finishTime=$(date +%s)
totalTime=$(date -u -r $(($finishTime-$startTime)) +"%T")
echo 
echo 
echo 
echo "## -- Execution Report -- ##" | tee -a ${npmOut}
date | tee -a ${npmOut}
echo -e "The total execution time is $totalTime \n" | tee -a ${npmOut}
echo -e "The number of failed builds: $(wc -l $errDirs|awk '{print $1}')\n" | tee -a ${npmOut}
echo -e "The list of failed build directories:\n" | tee -a ${npmOut}
cat "$errDirs" | tee -a ${npmOut}
echo 
echo -e "The number of successful builds: $(wc -l $okDirs|awk '{print $1}')\n" | tee -a ${npmOut}
mailx -s "npm check results" ${mailTo} < ${npmOut}
}

# Check if script is run with a parameter
if ! [ -z ${1+x} ]
 then
  cloneRepo $1 && \
  createDirList && \
  npmBuild || echo "Error: Please check logs in $npmLogDir"
 else
  createDirList && \
  npmBuild || echo "Error: Please check logs in $npmLogDir"
 fi

writeReport

IFS=$OLDIFS
