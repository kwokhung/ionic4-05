# Global
npm install -g typescript
npm install -g cordova
npm install -g phonegap
npm install -g ionic
npm install -g @ionic/cli-plugin-proxy

# Tools
npm install --save-dev --save-exact typescript@latest
npm install --save-dev --save-exact ionic@latest
npm install --save-dev --save-exact @ionic/app-scripts@latest
npm install --save-dev @ionic/lab

# Packages
npm install --save chart.js
npm install --save @types/chart.js
npm install --save echarts
npm install --save @types/echarts
npm install --save echarts-liquidfill

# Rebuild
npm rebuild node-sass

# barcode scanner
ionic cordova plugin add phonegap-plugin-barcodescanner
npm install --save @ionic-native/barcode-scanner

# bluetooth
ionic cordova plugin add cordova-plugin-bluetooth-serial
npm install --save @ionic-native/bluetooth-serial

ionic start ionic4-05 blank --type=angular
ionic g page "pages/home"
ionic g page "pages/scan"
ionic g service "services/logger/logger"

1. Init Repo (VSCode)

2. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"ionic4-05"}'

3. Remote Add Origin
-> git remote add origin https://github.com/kwokhung/ionic4-05

4. Push Origin Master
-> git push -u origin master

ionic serve

or

ionic cordova platform add android
ionic cordova run android