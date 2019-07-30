/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        var h2 = document.getElementsByTagName("h2");
        h2[0].innerHTML = device.platform + ": " + device.model;

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        this.initPlugins();
    },
    initPlugins: function() {
        // this.initAccelerometer();
        this.initShake();
    },
    initAccelerometer: function() {
        function onSuccess(acceleration) {
            console.log("Aceleración X: "+acceleration.x);
            console.log("Aceleración Y: "+acceleration.y);
            console.log("Aceleración Z: "+acceleration.z);

            if(acceleration.z > 9) {
                console.log("sisisjlsjiaf");
                window.stage.children[0].stop();
            }
            else {
                console.log("nonooosdjfkhsd");
                window.stage.children[0].play();
            }
        }

        function onError(error) {
            alert("Error con el acelerómetro");
        }
        var options = {
            frequency: 500
        }
        var watch = navigator.accelerometer.watchAcceleration(onSuccess, onError,options);
    },
    initShake: function() {
        var onShake = function () {
            console.log("Shaked");
            window.stage.children[0].gotoAndPlay(1);
          };
           
          var onError = function () {
              console.log("error");
          };
           
          // Start watching for shake gestures and call "onShake"
          // with a shake sensitivity of 40 (optional, default 30)
          shake.startWatch(onShake, 40 , onError);
           
          // Stop watching for shake gestures
        //   shake.stopWatch();
          
    }
};

app.initialize();