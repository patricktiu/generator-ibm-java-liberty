mkdir -p ../docs/scan
WORKING_DIR=`pwd`
echo "Current workingDir is $WORKING_DIR"
mkdir ./production
cd ./production
git clone git@github.ibm.com:arf/java-codegen-liberty.git
cd ./java-codegen-liberty/generator-liberty
npm install --only=production
npm install @wicked/cli -g
echo "Running scan"
wicked-cli -s . -u travisci@travis.ibm.com
cd $WORKING_DIR
echo "Copying scan results file to ../docs"
cp ./production/java-codegen-liberty/generator-liberty/generator-liberty_scan-results/* ../docs/scan
