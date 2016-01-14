var os = require('os');
var localhost = "localhost";
var hostname = os.hostname().split('.')[0];
var webpage = "www.bloomingdales.com";

module.exports = {

            sitespeedioMcom: {
                    options: {
                        resultBaseDir: 'bin/performance/mcom',
                        urls: [
                            'http://' + hostname + '.federated.fds:8080/',
                            'http://' + hostname + '.federated.fds:8080/shop/mens/boots?id=1000046&edge=hybrid&cm_sp=NAVIGATION_MEW-_-SIDE_NAV-_-3864-Shoes-Boots',
                            'http://' + hostname + '.federated.fds:8080/shop/shoes/boots?id=25122&edge=hybrid',
                            'http://' + hostname + '.federated.fds:8080/shop/product/kitchenaid-ksm150ps-artisan-5-qt-stand-mixer?ID=77589&CategoryID=29422'
                        ],
                        html: true,
                       // browser: 'chrome',
                        deepth: 1
                       // budget: {
                         //   rules: {
                           //     default: 90
                           // }
                       // }
                    }

            },

            sitespeedioBcom: {
                options: {
                    resultBaseDir: 'bin/performance/bcom',
                    urls: [
                        'http://' + webpage,
                        //'http://' + localhost + ':8081/shop/mens/boots-under-200?id=1005463&edge=hybrid&cm_sp=NAVIGATION_MEW-_-SIDE_NAV-_-3864-Boots-Boots_Under_$200',
                       // 'http://' + localhost + ':8081/shop/product/hudson-love-bootcut-jeans-in-supervixen?ID=1537434&CategoryID=5545'

                    ],
                    html: true,
                    //browser: 'chrome',
                    deepth: 0,
                   
                    budget: {
                       rules: {
                         default: 90
                        },
                    }
                }

            }


};