const string = `<style>
*{box-sizing:border-box;margin:0;padding:0;}
*::before,*::after{box-sizing:border-box;}
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    padding-top: 100px;
}
.wrapper {
    margin: 0 auto;
    width: 477px;
    height: 700px;
    position: relative;
    padding-top: 90px;
}
.head {
    width: 477px;
    height: 360px;
    background-color: #D9453B;
    border-radius: 200px;
    transform: rotate(8deg);
    position: relative;
    overflow: hidden;
    box-shadow: -94px -34px 34px -82px rgba(255, 255, 255, .8) inset;
    position: relative;
    z-index: 8;
}
.head .line {
    width: 300px;
    height: 345px;
    border: 2px solid rgba(221,188,28, .3);
    border-radius: 0 300px;
    transform: rotate(42deg);
    position: absolute;
    left: 89px;
    top: 0;
    z-index: 1;
}
.head::before {
    content: '';
    display: block;
    width: 404px;
    height: 122px;
    position: absolute;
    top: 17px;
    left: 43px;
    z-index: 5;
    border-radius: 50%;
    box-shadow: 0px -29px 0px 0px #D9453B, 0px 1px 0px 0px rgba(159,32,36, .5) inset;
    transform: rotate(2deg);
}
.ring {
    position: absolute;
    top: 22px;
    left: 255px;
    z-index: 3;
    transform: rotate(15deg);
}
.ring::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 43px;
    top: 18px;
    z-index: 3;
    transform: rotate(162deg);
    border-radius: 50% 50% 73px 29px;
    box-shadow: 1px 4px 0 0  rgba(237, 186, 0, .9);
}
.ring::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 16px;
    top: 22px;
    z-index: 3;
    transform: rotate(28deg);
    border-radius: 30px 35px 50% 50%;
    box-shadow: 1px -4px 0 0 rgba(237, 186, 0, .9);
}
.ring-c {
    background-color: #fff;
}
.ring-w {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 10px 50%;
}
.ring-w1 {
    width: 40px;
    height: 45px;
    border-radius: 50% 50% 10px 10px;
    position: absolute;
    top: -16px;
    left: 17px;
}
.ring-w2 {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: 42px;
}
.ring2 {
    transform: rotate(13deg) scale(1.2);
    z-index: 1;
    left: 250px;
    top: 21px;
}
.ring2 .ring-c {
    background-color: rgba(237, 186, 0, .9);
}
.ice {
    width: 150px;
    height: 50px;
    background-color: #fff;
    box-shadow: 0px -3px 10px 0px rgba(207,228,226, .5);
    transform: rotate(10deg);
    position: absolute;
    top: 52px;
    left: 199px;
    z-index: 10;
    border-radius: 50%;
}
.ice::before {
    content: '';
    width: 150px;
    height: 31px;
    background-color: #fff;
    position: absolute;
    top: 21px;
    right: -78px;
    border-radius: 50%;
    transform: rotate(21deg);
    z-index: -1;
    box-shadow: 16px -2px 9px -9px rgba(207,228,226, .9);
}
.ice::after {
    content: '';
    width: 114px;
    height: 34px;
    background-color: #fff;
    position: absolute;
    top: 16px;
    left: -49px;
    z-index: -1;
    border-radius: 50%;
    transform: rotate(-15deg);
    box-shadow: -12px -6px 9px -9px rgb(207,228,226, .9);
}
.face {
    width: 230px;
    height: 230px;
    border-radius: 230px 0;
    transform: rotate(49deg);
    background-color: #fff;
    position: absolute;
    left: 65px;
    top: 94px;
    z-index: 5;
}
.face-c {
    width: 203px;
    height: 75px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 77px;
    left: -75px;
    transform: rotate(-62deg);
}
.face-c1 {
    width: 113px;
    height: 111px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 52px;
    left: -26px;
}
.face-c2 {
    width: 98px;
    height: 86px;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: -42px;
    right: 3px;
}
.face-c3 {
    width: 83px;
    height: 69px;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    right: -30px;
    top: -26px;
}
.face-c4 {
    width: 83px;
    height: 69px;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    left: -8px;
    bottom: -19px;
}
.face-c5 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: -3px;
    right: 69px;
}
.eyes {
    width: 180px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 90px;
    left: 5px;
    z-index: 3;
    transform: rotate(-43deg);
}
.eye {
    width: 24px;
    height: 31px;
    background-color: #211718;
    border-radius: 50%;
    position: relative;
}
.eye::before {
    content: '';
    display: block;
    width: 4px;
    height: 6px;
    background-color: rgba(255, 255, 255, .8);
    position: absolute;
    top: 5px;
    left: 4px;
    border-radius: 5px;
    transform: rotate(30deg);
}
.cheeks {
    width: 259px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 109px;
    left: -4px;
    z-index: 3;
    transform: rotate(-47deg);
}
.cheek {
    box-shadow: 0px 0px 20px 20px rgba(212,161,178, 1);
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background-color: rgba(212,161,178, 1);
}
.body {
    width: 226px;
    height: 191px;
    background-color: #D9453B;
    border-radius: 79px 100px 75px 78px;
    margin-left: 120px;
    margin-top: -24px;
    transform: rotate(3deg);
    position: relative;
    z-index: 4;
    -webkit-appearance: none;
    box-shadow: -67px -34px 50px -74px rgba(255, 255, 255, .8) inset;
    padding-top: 80px;
    box-sizing: border-box;
}
.body-c {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    margin: 0 auto;
    box-shadow: 0px 0px 30px 36px #fff;
}
.text {
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    font-style: oblique;
    position: relative;
    top: -36px;
}
.logo {
    width: 42px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 6px 3px 0 0 #03A750;
    position: absolute;
    left: 152px;
    top: 137px;
    transform: rotate(24deg);
    zoom: .7;
}
.logo::after {
    content: '';
    width: 42px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 6px 3px 0 0 #1281C6;
    position: absolute;
    left: -3px;
    top: 5px;
    transform: rotate(68deg);
}
.logo::before {
    content: '';
    width: 42px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 6px 3px 0 0 #ed344e;
    position: absolute;
    left: -11px;
    top: 5px;
    transform: rotate(129deg);
}
.arm-l {
    width: 100px;
    height: 60px;
    background-color: #D9453B;
    position: absolute;
    left: 42px;
    top: 436px;
    z-index: 5;
    border-radius: 25px 37px 25px 53px;
    transform-origin: 100px 30px;
    transform: rotate(21deg);
    box-shadow: -5px -17px 38px -20px rgb(255, 255, 255, 80%) inset;
    animation: 2s ease-in-out 1s infinite lRotate;
}
@keyframes lRotate {
    0% { 
        transform: rotate(21deg);
    }
    10% { 
        transform: rotate(30deg);
    }
    20% { 
        transform: rotate(14deg);
        border-radius: 30px 29px 25px 53px;
    }
    30% { 
        transform: rotate(28deg);
    }
    40%,50%,60%,70%,80%,90%,100% { 
        transform: rotate(21deg);
    }
}
.arm-r {
    width: 100px;
    height: 60px;
    background-color: #D9453B;
    position: absolute;
    left: 303px;
    top: 466px;
    z-index: 1;
    border-radius: 25px 37px 36px 53px;
    transform: rotate(236deg);
    box-shadow: -30px -42px 30px -36px rgb(255, 255, 255, .7) inset;
}
.scarf {
    width: 245px;
    height: 27px;
    background-color: rgba(232,180,0, 1);
    border-radius: 20px;
    position: absolute;
    top: 442px;
    left: 115px;
    z-index: 4;
    transform: rotate(3deg);
}
.scarf-c {
    width: 18px;
    height: 60px;
    background: rgba(232,180,0, 1);
    position: absolute;
    top: 437px;
    left: 128px;
    z-index: 5;
    transform: rotate(13deg);
    border-top-left-radius: 5px;
}
.scarf-c .line {
    width: 2px;
    height: 22px;
    position: absolute;
    bottom: 0;
    left: 2px;
    background: #D9453B;
}
.scarf-c .line:nth-child(2) {
    left: 6px;
}
.scarf-c .line:nth-child(3) {
    left: 10px;
}
.scarf-c .line:nth-child(4) {
    left: 14px;
}
.leg-l {
    width: 85px;
    height: 48px;
    background-color: #D9453B;
    border-radius: 2px 10px 29px 44px;
    position: absolute;
    top: 595px;
    left: 145px;
    z-index: 4;
}
.leg-r {
    width: 84px;
    height: 89px;
    background-color: #D9453B;
    border-radius: 50px 10px 41px 31px;
    position: absolute;
    top: 561px;
    left: 242px;
    z-index: 3;
    transform: rotate(9deg);
    box-shadow: -88px 2px 40px -86px rgb(255, 255, 255, .7) inset;
}
</style>
`
export default string;