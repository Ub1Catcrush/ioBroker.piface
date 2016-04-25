/**
 *
 *      ioBroker PiFace Adapter
 *
 *      Copyright (c) 2016 Eisbaeeer@gmail.com
 *
 *      MIT License
 *
 */

var utils =   require(__dirname + '/lib/utils'); // Get common adapter utils
var adapter = utils.adapter('piface');
var PiFaceIN = [];
var inp = [];

adapter.on('ready', function () {
    main();
});

adapter.on('objectChange', function (id, obj) {
    adapter.log.info('objectChange ' + id + ' ' + JSON.stringify(obj));
});

adapter.on('stateChange', function (id, state) {
    adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));

    // you can use the ack flag to detect if state is command(false) or status(true)
    if (!state.ack) {
        adapter.log.info('ack is not set!');
    }
});


function pifaceinit(){
    adapter.log.info('function pifaceinit() called!');
}

function pifaceread() {
    var PIFD = require('node-pifacedigital');
    var pi = new PIFD.PIFaceDigital(0,true);
    
        PiFaceIN[0] = pi.get(0);
        PiFaceIN[1] = pi.get(1);
        PiFaceIN[2] = pi.get(2);
        PiFaceIN[3] = pi.get(3);
        PiFaceIN[4] = pi.get(4);
        PiFaceIN[5] = pi.get(5);
        PiFaceIN[6] = pi.get(6);
        PiFaceIN[7] = pi.get(7);
        
        // change to "true"|"false"
                if (PiFaceIN[0] == '1') {
          PiFaceIN[0] = true
          }
        if (PiFaceIN[0] == '0') {
          PiFaceIN[0] = false
          }

        if (PiFaceIN[1] == '1') {
          PiFaceIN[1] = true
          }
        if (PiFaceIN[1] == '0') {
          PiFaceIN[1] = false
          }

        if (PiFaceIN[2] == '1') {
          PiFaceIN[2] = true
          }
        if (PiFaceIN[2] == '0') {
          PiFaceIN[2] = false
          }

        if (PiFaceIN[3] == '1') {
          PiFaceIN[3] = true
          }
        if (PiFaceIN[3] == '0') {
          PiFaceIN[3] = false
          }

        if (PiFaceIN[4] == '1') {
          PiFaceIN[4] = true
          }
        if (PiFaceIN[4] == '0') {
          PiFaceIN[4] = false
          }

        if (PiFaceIN[5] == '1') {
          PiFaceIN[5] = true
          }
        if (PiFaceIN[5] == '0') {
          PiFaceIN[5] = false
          }

        if (PiFaceIN[6] == '1') {
          PiFaceIN[6] = true
          }
        if (PiFaceIN[6] == '0') {
          PiFaceIN[6] = false
          }

        if (PiFaceIN[7] == '1') {
          PiFaceIN[7] = true
          }
        if (PiFaceIN[7] == '0') {
          PiFaceIN[7] = false
          }

// set objects if input is changed
            if (PiFaceIN[0] !== inp[0]) {
                adapter.setState (adapter.namespace + '.' + 'IN0', {val: PiFaceIN[0], ack: true});
                inp[0] = PiFaceIN[0];
            }
            if (PiFaceIN[1] !== inp[1]) {
                adapter.setState (adapter.namespace + '.' + 'IN1', {val: PiFaceIN[1], ack: true});
                inp[1] = PiFaceIN[1];
            }
            if (PiFaceIN[2] !== inp[2]) {
                adapter.setState (adapter.namespace + '.' + 'IN2', {val: PiFaceIN[2], ack: true});
                inp[2] = PiFaceIN[2];
            }
            if (PiFaceIN[3] !== inp[3]) {
                adapter.setState (adapter.namespace + '.' + 'IN3', {val: PiFaceIN[3], ack: true});
                inp[3] = PiFaceIN[3];
            }
            if (PiFaceIN[4] !== inp[4]) {
                adapter.setState (adapter.namespace + '.' + 'IN4', {val: PiFaceIN[4], ack: true});
                inp[4] = PiFaceIN[4];
            }
            if (PiFaceIN[5] !== inp[5]) {
                adapter.setState (adapter.namespace + '.' + 'IN5', {val: PiFaceIN[5], ack: true});
                inp[5] = PiFaceIN[5];
            }
            if (PiFaceIN[6] !== inp[6]) {
                adapter.setState (adapter.namespace + '.' + 'IN6', {val: PiFaceIN[6], ack: true});
                inp[6] = PiFaceIN[6];
            }
            if (PiFaceIN[7] !== inp[7]) {
                adapter.setState (adapter.namespace + '.' + 'IN7', {val: PiFaceIN[7], ack: true});
                inp[7] = PiFaceIN[7];
            }

    adapter.log.info('Inputs: ' + PiFaceIN[0] + ":" + PiFaceIN[1] + ":" + PiFaceIN[2] + ":" + PiFaceIN[3] + ":" + PiFaceIN[4] + ":" + PiFaceIN[5] + ":" + PiFaceIN[6] + ":" + PiFaceIN[7] );
}

function main() {
    pifaceinit();
    setInterval(pifaceread, 10000);
//    setInterval(pifaceread, adapter.config.interval * 1000);
    adapter.subscribeStates('*');
            adapter.log.info('function main() called!');
}

