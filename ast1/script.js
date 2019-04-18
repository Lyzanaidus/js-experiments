var mage = document.getElementById('mage');

var MinWidth = 0 ;
var MaxWidth = -200 ;
var FPS = 60;
var MAGE_INTERVAL = 1000/FPS;  

var mageMove = 0;
var xDir = -1;
var int;
var pause = 1;

function checkDir(mageMove) 
{
  console.log('Function : checkDir');
  if (mageMove >= MinWidth) 
  {
    xDir = -1;
  }
  else if (mageMove <= MaxWidth) 
  {
    xDir = 5;
  }
}

function checkPause(mageMove)
{
  console.log('Function : checkPause');
  if (mageMove === MinWidth - xDir) 
  {
    pause = 1;
  }
  else if (mageMove === MaxWidth) 
  {
    pause = 0;
  }
}

function left() 
{
  console.log('Function : left');
  
  if (mageMove < -100) 
  {
    console.log('asd')
  }
}

function right() 
{
  console.log('Function : right');
  
  if (mageMove >= -200) 
  {
    clearInterval(int);
    console.log('Interval Cleared')
    mageMove = mageMove - 100;
  }

}

function start() 
{
  console.log('Function : start');
  
  int = setInterval(movemage,MAGE_INTERVAL);
}

function delay() 
{
  console.log('Function : delay');
 
  setTimeout(start,1000);
}

function movemage() 
{
  console.log('Function : movemage');
  
  checkDir(mageMove);
  checkPause(mageMove)
  

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

