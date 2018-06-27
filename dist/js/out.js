/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./coin.js */ "./js/coin.js");
__webpack_require__(/*! ./furry.js */ "./js/furry.js");
__webpack_require__(/*! ./game.js */ "./js/game.js");

/*
document.addEventListener("DOMContentLoaded", function () {

    function Furry() {

        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }

    function Coin() {

        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);

    }

    function Game() {

        this.board = document.querySelectorAll("#board div");
        this.scoreElement = document.querySelector("#score strong");
        this.cookieElement = document.querySelector("#score span");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.ongoing = true;

        this.index = function (x, y) {
            return x + (y * 10);
        };


        this.showFurry = function () {
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        };

        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };

        this.startGame = function () {

            var self = this;

            this.idSetInterval = setInterval(function () {

                self.moveFurry();
            }, 250);
        };

        this.moveFurry = function () {


            if (this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === "left") {
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === "up") {
                this.furry.y = this.furry.y - 1;
            } else if (this.furry.direction === "down") {
                this.furry.y = this.furry.y + 1;
            }

            this.gameOver();

            if (this.ongoing === false) {
                return;
            }
            this.showFurry();
            this.checkCoinCollision();


        };

        this.hideVisibleFurry = function () {

            for (var i = 0; i < this.board.length; i++) {
                this.board[i].classList.remove("furry");
            }
        };

        this.turnFurry = function (event) {

            switch (event.which) {
                case 37:
                    this.furry.direction = "left";
                    break;
                case 38:
                    this.furry.direction = "up";
                    break;
                case 39:
                    this.furry.direction = "right";
                    break;
                case 40:
                    this.furry.direction = "down";
                    break;
            }

        };

        this.checkCoinCollision = function () {

            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {

                this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
                this.score++;
                this.scoreElement.innerHTML = this.score;

                if (this.score > 1) {
                    this.cookieElement.innerText = "COOKIES";
                }

                this.coin = new Coin;
                this.showCoin();

            }

        };

        this.gameOver = function () {

            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {

                clearInterval(this.idSetInterval);
                this.hideVisibleFurry();
                this.ongoing = false;
                alert("GAME OVER. Eaten cookies: " + this.score);
            }
        }
    }

    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    });


    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();
});

*/

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Coin() {

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Furry() {

    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Game() {

    this.board = document.querySelectorAll("#board div");
    this.scoreElement = document.querySelector("#score strong");
    this.cookieElement = document.querySelector("#score span");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.ongoing = true;

    this.index = function (x, y) {
        return x + y * 10;
    };

    this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    this.startGame = function () {

        var self = this;

        this.idSetInterval = setInterval(function () {

            self.moveFurry();
        }, 250);
    };

    this.moveFurry = function () {

        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }

        this.gameOver();

        if (this.ongoing === false) {
            return;
        }
        this.showFurry();
        this.checkCoinCollision();
    };

    this.hideVisibleFurry = function () {

        for (var i = 0; i < this.board.length; i++) {
            this.board[i].classList.remove("furry");
        }
    };

    this.turnFurry = function (event) {

        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    };

    this.checkCoinCollision = function () {

        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {

            this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
            this.score++;
            this.scoreElement.innerHTML = this.score;

            if (this.score > 1) {
                this.cookieElement.innerText = "COOKIES";
            }

            this.coin = new Coin();
            this.showCoin();
        }
    };

    this.gameOver = function () {

        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {

            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            this.ongoing = false;
            alert("GAME OVER. Eaten cookies: " + this.score);
        }
    };
}

document.addEventListener('keydown', function (event) {
    game.turnFurry(event);
});

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

/***/ })

/******/ });
//# sourceMappingURL=out.js.map