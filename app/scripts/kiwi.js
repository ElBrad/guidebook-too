var ident = Math.floor((Math.random() * 1000) + 100);

function startChat()
{
  document.getElementById('kiwi').src = "https://kiwiirc.com/client?settings=e9286b604ad025752393eb5d37329b68&nick=BootHelp_" + ident;
}

function autoResize()
{

  newWidth = document.body.clientWidth;
  newHeight = document.body.clientHeight;

  if(newWidth == null){

    newWidth = window.innerWidth;

  }

  if(newHeight == null){

    newHeight = window.innerHeight;

  }

  if(newWidth <= 50){

    newWidth = 50;

  }

  if(newHeight <= 50){

    newHeight = 50;

  }

  document.getElementById('kiwi').style.width = newWidth;
  document.getElementById('kiwi').style.height = newHeight - 12;

  startChat();

}

window.onload = autoResize;
window.onresize = autoResize;
