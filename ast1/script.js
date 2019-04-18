var mage = document.getElementById('mage');

var MinWidth = 0 ;
var MaxWidth = -200 ;
var FPS = 40;
var INTERVAL = 1000/FPS;


var mageMove = 0;
var xDir = -1;


var int;

function start() 
{
  setInterval(animate,INTERVAL);
}

function delay() 
{
  console.log('Delay');
  setTimeout(start,3000);
}


                // Using setTimeout
function animate() 
{
      if (mageMove <= MaxWidth) 
      {
        xDir = 1;
      }

      else if (mageMove >= MinWidth) 
      {
        xDir = -1;
      }

      mageMove = mageMove + xDir;
      mage.style.marginLeft = mageMove + '%';

      console.log('xDir = ',xDir);
      console.log('mageMove = ',mageMove);
      console.log('MinWidth = ',MinWidth , " | MaxWidth = " , MaxWidth);

      if (mageMove % 100 === 0 && xDir===1) 
      {
        clearInterval(int);
        delay();
      }
};

//delay();

start();
