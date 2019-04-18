var mage = document.getElementById('mage');

var MinWidth = 0 ;
var MaxWidth = -200 ;
var FPS = 60;
var MAGE_INTERVAL = 1000/FPS;  

var mageMove = 0;
var xDir = -1;
var int;
var pause = 1;

function start() 
{
  int = setInterval(movemage,MAGE_INTERVAL);
}

function delay() 
{
  console.log('Delay');
  setTimeout(start,1000);
}

function movemage() 
{
  if (mageMove >= MinWidth) 
  {
    xDir = -1;
  }

  else if (mageMove <= MaxWidth) 
  {
    xDir = 5;
  }

  if (mageMove === MinWidth) 
  {
    pause = 1;
  }
  else if (mageMove === MaxWidth) 
  {
    pause = 0;
  }

  mageMove = mageMove + xDir;
  mage.style.marginLeft = mageMove + '%';

  console.log('xDir = ',xDir , 'mageMove = ',mageMove , 'pause = ',pause, 'MinWidth = ' , MinWidth , "MaxWidth = " , MaxWidth);

  if (mageMove % 100 === 0 && pause === 1) 
  {
    clearInterval(int);
    console.log('Interval Cleared')
    delay();
  }
}
start();

