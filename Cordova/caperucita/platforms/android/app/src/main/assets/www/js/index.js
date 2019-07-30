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

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        init();
    }
};

app.initialize();

var canvas, stage, exporRoot, anim_container, dom_overlay_container, fnStartAnimation;

function init(){
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");

    var comp = AdobeAn.getComposition("FC45751335404B069D18EB8C2FF8A879");
    var lib = comp.getLibrary();
    handleComplete({}, comp);
}
function handleComplete(evt, comp){
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exporRoot = new lib.caperucitav2();
    stage = new lib.Stage(canvas);
    stage.addChild(exporRoot);

    fnStartAnimation = function(){
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", handleTick);

        function handleTick(event){
            var cameraInstance = exporRoot.___camera___instance;
            if(cameraInstance){
                if(cameraInstance._off != null && cameraInstance._off == true){
                    exporRoot.transformMatrix = new createjs.Matrix2D();
                }
                else{
                    var mat = cameraInstance.getMatrix();
                    var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
                    mat.tx -= stageCenter.x;
                    mat.ty -= stageCenter.y;
                    var inverseMat = mat.invert();
                    inverseMat.prependTransform(stageCenter.x, stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    inverseMat.appendTransform(-stageCenter.x, -stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    exporRoot.transformMatrix = inverseMat;
                }
            }
            stage.update();
        }
    }

    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw/w, yRatio = ih/h, sRatio = 1;
            if(isResp) {
                if((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY =pRatio*sRatio;
            lastW = iw, lastH = ih, lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}