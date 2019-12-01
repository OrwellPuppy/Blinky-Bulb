//This somehow checks for mobile browser
//version code #000

function updateDeviceType(){
  (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
  if(jQuery.browser.mobile){
    console.log('MOBILE BROWSER');
  }else{console.log('NON-MOBILE BROWSER');}
}
//generally assume vertical
//localStorage.clear(); //bookmark testing
var pane=$();
var main=$();
var sec1=$();
var ootLabel=$("<div id='ootLabel'></div>");
//var sec2=$("<div id='sec2' class='test sectioner'>You're out of time.</div>");
//var sec3=$("<div id='sec3' class='test sectioner'></div>");
var subSecA=$("<div id='subA' class='sec1 sectioner subsection raise'></div>");
var subSecB=$("<div id='subB' class='sec1 sectioner subsection raise'></div>");
var subSecC=$("<div id='exit' class='sec1 sectioner button raise'></div>");
var subSecV=$("<div id='clue' class='sec1 sectioner button raise'>CLUE</div>");
var subSecD=$("<div id='subD' class='sec3 sectioner button drop'>CLEAR</div>");

var clearEvent={};
var startGameEvent={};
var endGameEvent={};
var solution=[];
var altSolutions=[];

var savedScoresMax=5;
var usedClue=false;//if you used a clue this round
var clock=$("<div id='clock' class=''></div>");
var clockLabel=$("<div id='clockLabel' class=''>time</div>");
var selections=$("<div id='selections' class=''></div>");
var selectionsLabel=$("<div id='selectionsLabel' class=''>select</div>");
var titleLabel=$("<div id='titleLabel' class='menuItem'>Blinky Bulb</div>");
var subtitleLabel=$("<div id='subtitleLabel' class='menuItem'>a quick puzzle game</div>");
var levelButton=$("<div id='levelButton' class='menuItem menuButton'>PROGRESSION</div>");
var playButton=$("<div id='playButton' class='menuItem menuButton'>ROULETTE</div>");
var menuButtons=$();
var challengeBox=$("<div id='challengeBox' class='menuItem statsBox'></div>");
var progBox=$("<div id='progBox' class='menuItem statsBox'></div>");
var instructBox=$("<div id='instructBox' class='menuItem statsBox'>"
  +"<h3 class='test smallHeader titleFont invis'>- HOW TO PLAY -</h3>"
  +"<h4 class='test smallHeader titleFont invis'>Select a bulb to toggle a pattern of bulbs on or off. To win, select the correct combination of bulbs such that all the bulbs are toggled off.   Solve puzzles with no time limit in <i>PROGRESSION</i>, or challenge yourself by solving randomly generated puzzles in 30 seconds in <i>ROULETTE</i>.</h4>"
  +"</div>");
var progLabel=$("<div id='progLabel' class='list menuItem myLabel'></div>");
var statsListA=$("<div id='statsListA' class='list menuItem myLabel'></div>");
var statsListC=$("<div id='statsListC' class='list menuItem'>High Scores</div>");
var sectionHolder=$("<div id='sectionHolder' class='menuItem'></div>");
var scoreList=[];
for(var i=0; i<savedScoresMax;i++){
  scoreList[i]=$("<li id='scoreList' class='list menuItem'>error</li>");
}
var myList=$("<ol id='myList'></ol>");
var timeInterval={};
var deadline=new Date();
var vert=false;
var backgroundBlack='rgb(0,0,0)';
var backgroundGrey='rgb(173,171,166)';
var lightestGrey='rgb(40,40,40)';
var myGreen='rgb(22,183,137)';
var myDarkGreen='rgb(19,150,119)';
var myRed='rgb(193,41,46)';
var myOrange='rgb(232,170,8)';
var whiteOrange='rgb(255,217,120)';
var textColor='rgb(180,180,180)'
var notch=25;//used for the size of the clue marker
var boopSize=35;//size of clue button swell
var currentGameType='';//this is used so the game knows if its a level or round being played
var superString="";
var lvlHolder=[];

//********************************************
//************* GAME VARIABLES ***************
//********************************************
//var rows=5;//9  must be equal or greater than columns
//var columns=4;//7
var maxSelection=1;
var gameTime=30;//time you get in roulette mode
var selected=maxSelection;
var g = new puzzle();
//var rowRib1=-1;
//var colRib1=-1;
//var rowRib2=-1;
//var colRib2=-1;
//********************************************
//********************************************


//define the node object
function NodeObj(x,y){
  this.r=x;
  this.c=y;
  this.clicked=false;//shows a border or not(?)
  this.banned=false;//shows whether banned or not; alt color border
  this.state=false; //lighted up or not(?)
  this.clickEvent={};//the event that is assigned on click
  this.gameNodeType="";//NEcorner, SEcorner, SWcorner, NWcorner, middle, Nside, Eside, Sside, Wside
  this.image=$("<div id='node"+x+y+"' class='node removeColor circleSpeed drop'></div>");
  this.tile=$("<div id='tileDiv' class='tile circleSpeed drop'></div>");
  this.mid=$("<div id='midCircle' class='mid drop'></div>");
}


//define a puzzle object
function puzzle(){
  this.rows=0;
  this.columns=0;
  this.rowRib1=-1;
  this.rowRib2=-1;
  this.colRib1=-1;
  this.colRib2=-1;
  this.solution=[];
  this.bannedList=[];
  this.nodes=[];
  this.clue=0;

  this.load=function(thisLvlNum){
    this.rows=levelList[thisLvlNum][0];
    this.columns=levelList[thisLvlNum][1];
    this.rowRib1=levelList[thisLvlNum][2];
    this.rowRib2=levelList[thisLvlNum][3];
    this.colRib1=levelList[thisLvlNum][4];
    this.colRib2=levelList[thisLvlNum][5];
    //console.log('test thislvlnum: '+levelList[thisLvlNum][8]);
    this.clue=levelList[thisLvlNum][6];

    this.solution=levelList[thisLvlNum][8];
    console.log('solution!!: '+this.solution);
  }

  this.logParameters=function(){
    //only used for the inital generation of progression levels
    var clueX=Math.floor(Math.random()*this.solution.length);

    //[0] # of rows
    //[1] # columns
    //[2] first ribbon row
    //[3] second ribbon row
    //[4] first ribbon column
    //[5] second ribbon column
    //[6] clue number in solution
    //[7] solution length
    //[8-] solution

    //superString+=('['+this.rows +','+ this.columns+','+this.rowRib1+','+this.rowRib2+','+this.colRib1+','+this.colRib2+','+clueX+','+this.solution.length+','+this.solution+'],');
    //superString+='\n';

    //console.log('['+this.rows +','+ this.columns+','+this.rowRib1+','+this.rowRib2+','+this.colRib1+','+this.colRib2+','+clueX+','+this.solution.length+','+this.solution+'],');
    lvlHolder.push([this.rows,this.columns,this.rowRib1,this.rowRib2,this.colRib1,this.colRib2,clueX,this.solution.length,this.solution]);
  }

  this.createNodeMatrix=function(){
    //Create the node matrix: node[row][col]
    for(var x=0;x<this.rows;x++){
      this.nodes[x]=[];
      for(var y=0;y<this.columns;y++){
        this.nodes[x][y]=new NodeObj(x,y);
        this.assignGameboardNodeType(x,y);
      }
    }
  }

  this.assignGameboardNodeType=function(x, y){
    if(((x==this.rowRib1)&&(y==this.colRib1))||((x==this.rowRib1)&&(y==this.colRib2))||((x==this.rowRib2)&&(y==this.colRib1))||((x==this.rowRib2)&&(y==this.colRib2))){
      this.nodes[x][y].tile.addClass('cornerTile');
      this.nodes[x][y].gameNodeType='intersection';
      this.nodes[x][y].image.removeClass('removeColor');
      this.nodes[x][y].image.addClass('intersection');
    }else if((x==this.rowRib1)||(x==this.rowRib2)){
      this.nodes[x][y].tile.addClass('sideTile');
      this.nodes[x][y].gameNodeType='row';
    }else if((y==this.colRib1)||(y==this.colRib2)){
      this.nodes[x][y].tile.addClass('sideTile');
      this.nodes[x][y].gameNodeType='column';
    }else{
      this.nodes[x][y].tile.addClass('middleTile');
      this.nodes[x][y].gameNodeType='standard';
    }
  }

  this.generateBoard=function(){
    //determine # of rows and cols
    var randX=Math.random();
    if(randX>=0.666){
      this.rows=5;
      this.columns=5;
    }
    else if(randX>=0.333){
      this.rows=5;
      this.columns=4;
    }else{
      this.rows=4;
      this.columns=4;
    }
    //determine ribbons
    this.rowRib1=Math.floor(Math.random()*this.rows);
    this.colRib1=Math.floor(Math.random()*this.columns);
    this.rowRib2=Math.floor(Math.random()*this.rows);
    this.colRib2=Math.floor(Math.random()*this.columns);
    randX=Math.random();
    if(randX>=0.60){
      //1 col and 1 row
      this.rowRib2=-1;
      this.colRib2=-1;
    }else if(randX>=0.55){
      //1 rows 0 cols
      this.colRib2=-1;
      this.colRib1=-1;
      this.rowRib2=-1;
      this.rows=4;
      this.columns=4;
      this.rowRib1=Math.floor(Math.random()*this.rows);
    }else if(randX>=0.50){
      //0 rows 1 cols
      this.rowRib2=-1;
      this.rowRib1=-1;
      this.colRib2=-1;
      this.rows=4;
      this.columns=4;
      this.colRib1=Math.floor(Math.random()*this.columns);
    }else if(randX>=0.45){
      //2 rows 0 cols (border only)
      this.colRib2=-1;
      this.colRib1=-1;
      this.rowRib1=0;
      this.rowRib2=this.rows-1;
    }else if(randX>=0.40){
      //2 cols 0 rows (border only)
      this.rowRib2=-1;
      this.rowRib1=-1;
      this.colRib1=0;
      this.colRib2=this.columns-1;
    }else if(randX>=0.30){
      //1 col 2 rows (border only rows)
      this.colRib2=-1;
      this.rowRib1=0;
      this.rowRib2=this.rows-1;
    }else if(randX>=0.20){
      //1 row 2 cols (border only columns)
      this.rowRib2=-1;
      this.colRib1=0;
      this.colRib2=this.columns-1;
    }else{
      //2 cols and 2 rows (all borders)
      this.rowRib1=0;
      this.rowRib2=this.rows-1;
      this.colRib1=0;
      this.colRib2=this.columns-1;
    }
    //console.log('rr='+this.rowRib1+' '+this.rowRib2+'; cr='+this.colRib1+' '+this.colRib2);
  }

  this.generateRound=function(numNodes){
    var bulbList=[];
    for(var x=0;x<numNodes;x++){
      do{
        var unique=true;
        var newBulb=[Math.floor(Math.random()*this.rows),Math.floor(Math.random()*this.columns)]
        for(var y=0; y<x; y++){
          if((newBulb[0]==bulbList[y][0])&&(newBulb[1]==bulbList[y][1])){
            unique=false;
          }
        }
      }while(!unique);
      bulbList.push(newBulb);
    }
    sortThisList(bulbList);
    this.solution=bulbList;
  }
  this.getBannedList=function(){
    var bList=[];
    var newBan=true;
    var bannedSolList=[];
    var weights=[];
    do{
      updateBannedSolList();
      weights= getWeights();
      newBan=addABan();//adds a ban and returns true, or if none left, returns false
    }while(newBan);
    console.log('banned list: '+bList);
    this.bannedList=bList;

    function updateBannedSolList(){
      for(var y=0; y<altSolutions.length;y++){
        bannedSolList[y]=false;
        for(var x=0; x<bList.length; x++){
          for(var z=0;z<altSolutions[y].length;z++){
            if((bList[x][0]==altSolutions[y][z][0])&&(bList[x][1]==altSolutions[y][z][1])){
              bannedSolList[y]=true;
            }
          }
        }
      }
    }

    function getWeights(){
      var w=[];
      for(var i=0; i<altSolutions.length;i++){
        w[i]=[];
        for(var j=0; j<altSolutions[i].length;j++){
          w[i][j]=calcWeight(altSolutions[i][j], i);
        }
      }
      return w;
    }

    function calcWeight(sol, solutionIndex){
      //first check if it's in the solution
      for(var q=0;q<g.solution.length;q++){
        if((sol[0]==g.solution[q][0])&&(sol[1]==g.solution[q][1])){
          return 0;
        }
      }
      //next check if it's in the banned list already, or its part of an already banned alt solution
      for(var q=0;q<bList.length;q++){
        if(((sol[0]==bList[q][0])&&(sol[1]==bList[q][1]))||(bannedSolList[solutionIndex])){
          return 0;
        }
      }
      //finally, calc weight
      var wCount=0;
      for(var i=0; i<altSolutions.length;i++){
        for(var j=0; j<altSolutions[i].length;j++){
          if((sol[0]==altSolutions[i][j][0])&&(sol[1]==altSolutions[i][j][1])&&(!bannedSolList[i])){
            wCount++;
          }
        }
      }
      return wCount;
    }

    function addABan(){
      //determine largest weight that's part of an unbanned solution
      var largestWeight=0;
      var indexA=0;
      var indexB=0;
      for(var i=0; i<weights.length;i++){
        if(!bannedSolList[i]){//skip this alt solution if it's already banned
          for(var j=0;j<weights[i].length;j++){
            if(weights[i][j]>largestWeight){
              largestWeight=weights[i][j];
              indexA=i;
              indexB=j;
            }else if((weights[i][j]==largestWeight)&&(Math.random()>.5)&&currentGameType!='level'){//bmhere
              //adds some randomness into which node is banned
              indexA=i;
              indexB=j;
            }
          }
        }
      }
      if(largestWeight>0){
        //console.log(altSolutions[indexA][indexB]+' wt: '+largestWeight);
        bList.push(altSolutions[indexA][indexB]);
        return true;
      }else{
        return false;
      }
    } 
  }
}


//define an object that holds all the save data
function SaveData(){
  //list of localStorage variables: currentHigh, winStreak, currentLevel, score1..score[max], date1..date[max]
  this.currentHigh=savedScoresMax+1;//the number of the place in high scores; local: currentHigh
  this.currentStreak=0; //win streak; local: winStreak
  this.currentLevel=0;  //progression mode level; local: currentLevel
  //function to initialize the variables
  this.init=function(){
    if(localStorage.getItem('currentHigh')!=null){
      this.currentHigh=localStorage.getItem('currentHigh');
    }else{
      localStorage.setItem('currentHigh',savedScoresMax+1);
    }
    if(localStorage.getItem('winStreak')!=null){
      this.currentStreak=parseInt(localStorage.getItem('winStreak'));
    }else{
      localStorage.setItem('winStreak',0);
    }
    if(localStorage.getItem('currentLevel')!=null){
      this.currentLevel=parseInt(localStorage.getItem('currentLevel'));
    }else{
      localStorage.setItem('currentLevel',0);//set to zero except for testing BOOKMARK
    }
    for(var i=1;i<=savedScoresMax;i++){
      if(!localStorage.getItem('score'+i)){
        localStorage.setItem('score'+i,'0');
        localStorage.setItem('date'+i, '');
      }
    }
  }
  this.init();

  //save current level
  this.saveLevel=function(){
    localStorage.setItem('currentLevel',this.currentLevel);
  }

  //save a loss to local storage during game in case of crash
  this.fallbackSave=function(){
    localStorage.setItem('winStreak',0);
    localStorage.setItem('currentHigh',savedScoresMax+1);
  }

  this.saveWinStreak=function(){
    //possibly enter new high score
    this.currentStreak++;
    localStorage.setItem('winStreak',this.currentStreak);
    localStorage.setItem('score'+(this.currentHigh),this.currentStreak);
    localStorage.setItem('date'+this.currentHigh,$.datepicker.formatDate('m/d/yy', new Date()));
    //console.log('before win, currentHigh spot: '+this.currentHigh);
    //console.log('after win, currentStreak: '+this.currentStreak);
    
    /*if(this.currentHigh>savedScoresMax){//save in unlisted last place
      localStorage.setItem('score'+this.currentHigh,this.currentStreak);
      localStorage.setItem('date'+this.currentHigh,$.datepicker.formatDate('m/d/yy', new Date()));
    }*/ //redundant?!?
    
    var i=Math.min(savedScoresMax,this.currentHigh-1);
    while(this.currentStreak>parseInt(localStorage.getItem('score'+i))&&i>0){
      if(this.currentStreak<=parseInt(localStorage.getItem('score'+(i-1)))||i==1){
        for(var x=Math.min(savedScoresMax,this.currentHigh-1);x>=(i);x--){
          var tempScore=localStorage.getItem('score'+(x));
          localStorage.setItem('score'+(x+1),tempScore);
          var tempDate=localStorage.getItem('date'+(x));
          localStorage.setItem('date'+(x+1),tempDate);
        }
        localStorage.setItem('score'+i,this.currentStreak);
        localStorage.setItem('date'+i,$.datepicker.formatDate('m/d/yy', new Date()));
        localStorage.setItem('currentHigh',i);
        this.currentHigh=i;
      }
      i-=1;
    }
    localStorage.setItem('currentHigh',this.currentHigh);//if currentHigh doesnt change, still need to override the fallbackSave
  }

  this.saveLoss=function(){
    this.currentStreak=0;
    this.currentHigh=savedScoresMax+1;
  }

  this.getScore=function(spot){
    if(parseInt(localStorage.getItem('score'+spot))==0){
      return '&nbsp;&nbsp;&nbsp;-';
    }else if(parseInt(localStorage.getItem('score'+spot))==1){
      return '&nbsp;&nbsp;&nbsp;1 round&nbsp; '+localStorage.getItem('date'+spot);
    }else if(parseInt(localStorage.getItem('score'+spot))<10){
      return '&nbsp;&nbsp;&nbsp;'+parseInt(localStorage.getItem('score'+spot))+'&nbsp;rounds&nbsp;'+localStorage.getItem('date'+spot);
    }else{
      return '&nbsp;&nbsp;'+parseInt(localStorage.getItem('score'+spot))+'&nbsp;rounds&nbsp;'+localStorage.getItem('date'+spot);
    }
  }

  this.getCurrentStreak=function(){
    if(this.currentStreak=='0'){
      return 'win streak: -';
    }else if(this.currentStreak=='1'){
      return 'win streak: 1 round';
    }else{
      return 'win streak: '+this.currentStreak+' rounds';
    }
  }

  this.checkCurrentHigh=function(spot){
    if(this.currentHigh==spot){
      return true;
    }else{
      return false;
    }
  }

}
var sData=new SaveData();

$(document).ready(function() { 
  updateDeviceType();
  //Do this after document loads
  pane=$('#pane');
  main=$('#main');
  showMenu();
  //createLevels(); //only used when creating random levels for progression
});

function createLevels(){
  //code only used for initial generation of levels in progression***
  var cycles=5;
  var breaks=0;
  for(var i=0;i<cycles;i++){
    var testGame=new puzzle;
    testGame.generateBoard();
    testGame.generateRound(4);
    testGame.logParameters();
  }
  console.log('initial total: '+ cycles);
  for(var x=0;x<lvlHolder.length-1;x++){
    for(var y=x+1;y<lvlHolder.length;y++){
      while(comparePuzzles(lvlHolder[x],lvlHolder[y])){
        lvlHolder.splice(y,1);
        if(lvlHolder.length<=y){
          breaks++;
          break;
        }
      }
    }
  }
  console.log('final total: '+lvlHolder.length+' breaks: '+breaks);
  console.log('lvlh: '+lvlHolder[0][8][0]);
  for(x=0;x<lvlHolder.length;x++){
    superString+='['+lvlHolder[x][0]+','+lvlHolder[x][1]+','+lvlHolder[x][2]+','+lvlHolder[x][3]+','+lvlHolder[x][4]+','+lvlHolder[x][5]+','+lvlHolder[x][6]+','+lvlHolder[x][7];
    superString+=',[';
    superString+='['+lvlHolder[x][8][0]+']';  
    for(y=1;y<lvlHolder[x][8].length;y++){
      superString+=',['+lvlHolder[x][8][y]+']';  
    }
    superString+=']],';
    superString+='\n';
  }
  console.log(superString);
}

function comparePuzzles(a, b){//code only used for initial generation of levels in progression***
  //[0] # of rows
  //[1] # columns
  //[2] first ribbon row
  //[3] second ribbon row
  //[4] first ribbon column
  //[5] second ribbon column
  //[6] clue number in solution
  //[7] solution length
  //[8-] solution
  var result=true;
  //if((a[2]==b[2])&&(a[3]==b[3])&&(a[4]==b[4])&&(a[5]==b[5])&&(a[7]==b[7])){
  if((a[2]!==b[2])&&(a[2]!==b[3])&&(a[3]!==b[3])){
  //if the row ribbons are all different, the solutions are determined to be different
    result=false;
  }else if((a[4]!==b[4])&&(a[4]!==b[5])&&(a[5]!==b[5])){
  //if the columns ribbons are all different, the solutions are determined to be different
    result=false;
  }else{
    for(x=0;x<4;x++){
      if(((a[8][x][0]!==b[8][0][0])||(a[8][x][1]!==b[8][0][1]))&&((a[8][x][0]!==b[8][1][0])||(a[8][x][1]!==b[8][1][1]))
        &&((a[8][x][0]!==b[8][2][0])||(a[8][x][1]!==b[8][2][1]))&&((a[8][x][0]!==b[8][3][0])||(a[8][x][1]!==b[8][3][1]))){
        result=false;
        break;
      }
    }
  }
  //}else{result=false}
  return result;
}

function showMenu(){
  pane.empty();
  pane.append(titleLabel);
  pane.append(subtitleLabel);
  pane.append(challengeBox);
  pane.append(sectionHolder);

  sectionHolder.append(progBox);
  sectionHolder.append(instructBox);
  progBox.append(levelButton);
  levelButton.append(progLabel);
  challengeBox.append(playButton);
  playButton.append(statsListA);
  menuButtons=$('.menuButton');
  challengeBox.append(statsListC);
  challengeBox.append(myList);
  console.log('currentHigh: '+sData.currentHigh);
  sData.init();
  for(var i=0;i<savedScoresMax;i++){
    myList.append(scoreList[i]);
    scoreList[i].html(sData.getScore(i+1));
    if(sData.checkCurrentHigh(i+1)){
      scoreList[i].css('background-color', myOrange)
        .css('color', 'black');
    }else{
      scoreList[i].css('background-color', 'transparent')
        .css('color', textColor);
    }
  }
  statsListA.text(sData.getCurrentStreak());
  progLabel.text('level '+(sData.currentLevel+1));
  $('.menuItem').fadeIn(0);
  redrawMenu();
  $(window).off('resize'); //in case Resize function has already been added
  $(window).resize(redrawMenu);
  levelButton.bind('touchstart', startGameEvent=function(e){
    beginLevel();
    e.stopPropagation();
    e.preventDefault();
  });
  levelButton.bind('mousedown', startGameEvent=function(e){
    beginLevel();
  });
  playButton.bind('touchstart', startGameEvent=function(e){
    beginRound();
    e.stopPropagation();
    e.preventDefault();
  });
  playButton.bind('mousedown', startGameEvent=function(e){
    beginRound();
  });
}

function beginLevel(){//only for progression mode
  menuButtons.unbind('touchstart');
  menuButtons.unbind('mousedown');
  trig(levelButton);
  //Create game type
  currentGameType='level';
  g.load(sData.currentLevel);
  //D g.rows=levelList[sData.currentLevel].rows;
  //D g.columns=levelList[sData.currentLevel].columns;
  //Create the node matrix: node[row][col]
  g.createNodeMatrix();
  blackOut(350, backgroundGrey, calcAndThrowRound);
}

function instaBeginLevel(){
  pane.empty();
  g.load(sData.currentLevel);
  g.createNodeMatrix();
  calcAndThrowRound();
}


function beginRound(){//only for roulette mode
  menuButtons.unbind('touchstart');
  menuButtons.unbind('mousedown');
  trig(playButton);
  //Create game type
  sData.fallbackSave();
  usedClue=false;
  currentGameType='round';
  g.generateBoard();
  //Create the node matrix: node[row][col]
  g.createNodeMatrix();
  blackOut(350, backgroundGrey, calcAndThrowRound);
}


function calcAndThrowRound(){
  initializeThePane();//assigns elements to the pane
  resizePane();
  var secOffset=pane.width()*.4;
  if(vert){secOffset=pane.height()*.4;}
  redraw(true, secOffset);//recalculates and assigns dimensions to the elements in the pane
  var delay=350;
  var myEasing='easeOutSine';
  if(currentGameType=='round'){
    maxSelection=4;
    clockLabel.text('time');
    clock.text(Math.floor(gameTime));
  }else{
    //D g.solution=levelList[sData.currentLevel].solution;
    maxSelection=g.solution.length;
    clockLabel.text('level');
    clock.text(sData.currentLevel+1);
    /*
    if(sData.currentLevel<10){
      clock.text("T"+(sData.currentLevel+1));
    }else{}
    */
  }
  selected=maxSelection;//reset selected counter
  selections.text(maxSelection);
  setTimeout(function(){
    if(vert){
      sec1.animate({top:'+='+secOffset+'px'},{duration:delay, easing:myEasing});
      subSecD.animate({top:'-='+secOffset+'px'},{duration:delay, easing:myEasing});
    }else{
      sec1.animate({left:'+='+secOffset+'px'},{duration:delay, easing:myEasing});
      subSecD.animate({left:'-='+secOffset+'px'},{duration:delay, easing:myEasing});
    }
  
    //
    //solution=[[1,2],[0,3],[0,2],[0,1]];
    //console.log('forced solution: '+solution);
    //
    setTimeout(function(){
      $(window).off('resize'); //in case Resize function has already been added
      $(window).resize(redraw);
      //initialize variables
      if(currentGameType=='round'){
        g.generateRound(maxSelection);
      }
      altSolutions=findAltSolutions(g.solution);//takes the time to calc, must be after generate round
      g.getBannedList();
      popRound(g.solution);
      setTimeout(function(){
        addNodeClickEvents();//must be at the very end so that you dont click them before its ready
        if(currentGameType=='round'){
          deadline = new Date(Date.parse(new Date())+((gameTime+.49)*1000));
          updateClock(deadline);
          timeInterval = setInterval(function(){updateClock(deadline)},100);
        }
      },100);
    },delay);
  },200);
}

function throwClue(){
  usedClue=true;
  subSecV.css('color','black');
  //clue button event

  if(currentGameType=='round'){
    //animate to get player attention
    subSecV.css({
      'z-index':100,
      top:'-='+boopSize,
      left:'-='+boopSize,
      height:'+='+boopSize*2,
      width:'+='+boopSize*2,
      'line-height':'+='+boopSize*2+'px',
      opacity:.08,
      backgroundColor: myDarkGreen
    });
    subSecV.animate({
      top:'+='+boopSize,
      left:'+='+boopSize,
      height:'-='+boopSize*2,
      width:'-='+boopSize*2,
      'line-height':'-='+boopSize*2+'px',
      opacity:1,
      backgroundColor: myGreen
    },400,function(){
      subSecV.css('z-index',1);
      subSecV.bind('touchstart', clearEvent=function(e){
        clue();
        e.stopPropagation();
        e.preventDefault();
      });
      subSecV.bind('mousedown', clearEvent=function(e){
        clue();
      });

    });
  }

}

function initializeThePane(){
  pane.empty();
  subSecA.css('background-color', lightestGrey);
  subSecB.css('background-color', lightestGrey);
  //append and place the elements
  pane.append(ootLabel);
  ootLabel.css('display', 'none');
  pane.append(subSecA);
  pane.append(subSecB);
  pane.append(subSecC);
  pane.append(subSecV);
  sec1=$('.sec1');
  pane.append(subSecD);

  //if you have a clue--- mark
  if(currentGameType=='level'&&sData.currentLevel<50){//edit here to determine availability of clue in progression (bookmark)
    //throwClue();
    subSecC.html('EXIT');
    subSecC.css('color', 'black');
    subSecV.css('color','black');
    subSecV.css('backgroundColor',myGreen);
    subSecV.bind('touchstart', clearEvent=function(e){
      clue();
      e.stopPropagation();
      e.preventDefault();
    });
    subSecV.bind('mousedown', clearEvent=function(e){
      clue();
    });
  }else if(currentGameType=='level'){ //no clue
    subSecC.html('EXIT');
    subSecV.css('background-color',lightestGrey);
  }else{//roulette games
    subSecV.css('background-color',lightestGrey);
    subSecC.html('FORFEIT');
    subSecC.css('color', myRed);

  }
  addClickEvents();
  subSecA.append(clockLabel);
  subSecA.append(clock);
  subSecB.append(selectionsLabel);
  subSecB.append(selections); 
  for(var x=0;x<g.rows;x++){
    for(var y=0;y<g.columns;y++){
      pane.append(g.nodes[x][y].image);
      pane.append(g.nodes[x][y].tile);
      pane.append(g.nodes[x][y].mid);
      //attach the ID number and the click event
      g.nodes[x][y].image.data('IDrow', x);
      g.nodes[x][y].image.data('IDcol', y);
      g.nodes[x][y].mid.data('IDrow', x);
      g.nodes[x][y].mid.data('IDcol', y);
    }
  }
}

function addNodeClickEvents(){
  for(var x=0;x<g.rows;x++){
    for(var y=0;y<g.columns;y++){
      g.nodes[x][y].image.bind('touchstart', g.nodes[x][y].clickEvent=function(e){
        clickOnNode($(this));
        e.stopPropagation();
        e.preventDefault();
      });
      g.nodes[x][y].image.bind('mousedown', g.nodes[x][y].clickEvent=function(e){
        clickOnNode($(this));
      });
      g.nodes[x][y].mid.bind('touchstart', g.nodes[x][y].clickEvent=function(e){
        clickOnNode($(this));
        e.stopPropagation();
        e.preventDefault();
      });
      g.nodes[x][y].mid.bind('mousedown', g.nodes[x][y].clickEvent=function(e){
        clickOnNode($(this));
      });
    }
  }
}


function resizePane(){
  //make smaller if desktop
  if(!jQuery.browser.mobile){
    if(main.width()>400){
      pane.css('width',400+((main.width()-400)*.25*(4/8)));
    }else{
      pane.css('width',main.width());
    }
    if(main.height()>800){
      pane.css('height',800+((main.height()-800)*.25));
    }else{
      pane.css('height',main.height());
    }
  }
}

function redrawMenu(){
  resizePane();
  var paneHeight=pane.height();
  var paneWidth=pane.width();  
  var shortSide=paneHeight;
  var statsBox=$('.statsBox');
  var horzMargin=Math.max(paneWidth*0.05,2);
  var margins = (paneHeight)*.02;
  var fontSize=(paneWidth+paneHeight)*0.02;
  var smallerMult=1;
  if(paneHeight>paneWidth*1.25){
    //portrait
    shortSide=paneWidth;
    statsBox.css('width', '90%');
    sectionHolder.css('width', 'auto');
    statsBox.css('height', 'auto');
    statsBox.css('margin-left', horzMargin);
    statsBox.css('margin-right', horzMargin);
    titleLabel.css('font-size', fontSize*2.5);
    titleLabel.css('padding-top', margins*.9);
    subtitleLabel.css('font-size', fontSize*.9);
    subtitleLabel.css('margin-bottom', margins/8);
    subtitleLabel.css('padding-bottom', margins/2);
  }else{
    //landscape
    statsBox.css('width', paneWidth*.46);
    sectionHolder.css('width', paneWidth*.46);
    statsBox.css('height', 'auto');
    statsBox.css('margin-left', horzMargin/10);
    statsBox.css('margin-right', horzMargin/10);
    titleLabel.css('font-size', fontSize*2);
    titleLabel.css('padding-top', margins*.6);
    subtitleLabel.css('font-size', fontSize*.7);
    subtitleLabel.css('margin-bottom', margins*.15);
    subtitleLabel.css('padding-bottom', margins*.4);
  }

  if((Math.abs(1-paneWidth/paneHeight)<.3)){//for square-ish display
    //fontSize=(shortSide+paneWidth)*0.022;
    smallerMult=.85;
  }  
  var myLabels=$('.myLabel');
  myLabels.css('margin-top', 10);
  //myLabels.css('font-weight','normal');
  menuButtons.css('font-size', fontSize*1.25*smallerMult);
  menuButtons.css('min-height', 1.5*margins);
  menuButtons.css('line-height', 1.5*margins-1+'px');
  menuButtons.css('margin-bottom', margins/7+'px');
  statsBox.css('padding-top', margins/2);
  statsBox.css('padding-bottom', margins/2);
  statsBox.css('margin-top', margins/2);
  $('h3').css('margin-top',0);
  $('h3').css('font-weight','normal');
  $('h3').css('margin-bottom',margins/6);
  $('h4').css('margin-bottom',margins/3);
  statsListC.css('margin-top', margins);
  $('.list').css('font-size', fontSize*.85);
  instructBox.css('font-size',fontSize*.7);
}

function redraw(notAgain, secOffset){
  //pane.css('overflow','hidden');
  if(!(notAgain==true)){
    setTimeout(function(){redraw(true)},315);
  }
  if(secOffset===undefined){
    secOffset=0;
  }
  resizePane();
  var paneHeight=pane.height();
  var paneWidth=pane.width();
  //determine screen ratios
  vert=false;
  var longSide=paneWidth;
  var shortSide=paneHeight;
  if(paneHeight*1.2>paneWidth){
    vert=true;
    longSide=paneHeight;
    shortSide=paneWidth;
  }

  //little ratio is ratio of menu sections to the total pane height
  var normalStretch=1.00;
  var maxStretch=1.00;
  var buttonRatio=1/3;//ratio of the clear button to the total menu sections (top+bottom)
  var sideSpacerWidth=1; //width of the side spacers to square things up and account for rounding

  //Case where there's too much vert space
  if((longSide)>((shortSide/g.columns)*(g.rows+4.5))){
    var littleRatio=((longSide-(shortSide/g.columns)*g.rows*maxStretch)/longSide);
    console.log('Extreme excess of vertical space!!');
  //Case where there's too much vert space
  }else if((longSide)>((shortSide/g.columns)*(g.rows+4))){
    var littleRatio=((longSide-(shortSide/g.columns)*g.rows*normalStretch)/longSide);
    console.log('Excess of vertical space!');
  //Case where there's plenty of vert space
  }else if((longSide)>((shortSide/g.columns)*(g.rows+2))){
    var littleRatio=((longSide-(shortSide/g.columns)*g.rows)/longSide);
    console.log('Normal vertical space.');
  //Case where there's limited amnt of vert space
  }else if((longSide)>((shortSide/g.columns)*(g.rows+1.5))){
    var littleRatio=(longSide-(shortSide/g.columns)*g.rows)/longSide;
    //button is height of a node
    if(!vert){
      buttonRatio=1/2;//clear button gets more space for horiz text if in horz mode
    }
    console.log('Limited vertical space.');
  }else{//Case where there's shortage of vert space
    sideSpacerWidth=(((shortSide/g.columns)*(g.rows+1.5))-longSide)/(g.rows+1.5);
    console.log('ssw:'+sideSpacerWidth);
    var littleRatio=1.5/(g.rows+1.5);
    if(!vert){
      buttonRatio=1/2;//clear button gets more space for horiz text if in horz mode
    }
    console.log('Shortage of vertical space!');
  }

  //define element deminsions
  if(vert){
    var sec1width=paneWidth;
    var sec1height=paneHeight*littleRatio*(1-buttonRatio);
    var sec2width=paneWidth;
    var sec2height=paneHeight*(1-littleRatio);
    var sec3width=paneWidth;
    var sec3height=paneHeight*littleRatio*(buttonRatio);
    var nodeWidth=Math.round((sec2width/g.columns)-sideSpacerWidth);
    var nodeHeight=Math.round(sec2height/g.rows);
    var topSpace=sec1height;
    var leftSpace=0;
    var subSecWidth=shortSide/3;
    var subSecHeight=longSide-sec2height-sec3height;
    var roundError=nodeWidth*g.columns-sec2width;
  }else{
    var sec1width=paneWidth*littleRatio*(1-buttonRatio);
    var sec1height=paneHeight;
    var sec2width=paneWidth*(1-littleRatio);
    var sec2height=paneHeight;
    var sec3width=paneWidth*littleRatio*(buttonRatio);
    var sec3height=paneHeight;
    var nodeWidth=Math.round((sec2width)/g.rows);//trans
    var nodeHeight=Math.round((sec2height/g.columns)-sideSpacerWidth);//trans
    var topSpace=Math.floor((sideSpacerWidth*(g.columns))/2);
    var leftSpace=sec1width;
    var subSecWidth=longSide-sec2width-sec3width;
    var subSecHeight=shortSide/3;
    var roundError=nodeWidth*g.rows-sec2width;
  }
  var midHeight=Math.floor(nodeHeight*.2);
  var midWidth=Math.floor(nodeHeight*.2);
  var allMidImages=$(".mid");
  allMidImages.css('width',(midWidth+notch*2));
  allMidImages.css('height',(midHeight+notch*2));

  for(var x=0;x<g.rows;x++){
    for(var y=0;y<g.columns;y++){
      //placement
      if(vert){
        g.nodes[x][y].image.css('top', topSpace+x*nodeHeight);
        g.nodes[x][y].image.css('left', leftSpace+y*nodeWidth-roundError/2);
        g.nodes[x][y].tile.css('top', topSpace+x*nodeHeight);
        g.nodes[x][y].tile.css('left', leftSpace+y*nodeWidth-roundError/2);
        g.nodes[x][y].mid.css('top', topSpace+x*nodeHeight+(nodeHeight-midHeight)/2-notch);
        g.nodes[x][y].mid.css('left', leftSpace+y*nodeWidth-roundError/2+(nodeWidth-midWidth)/2-notch);
      }else{//transformation
        g.nodes[x][y].image.css('top', topSpace+nodeHeight*(g.columns-y-1)-roundError/2);//trans
        g.nodes[x][y].image.css('left', leftSpace+nodeWidth*(x));//trans
        g.nodes[x][y].tile.css('top', topSpace+nodeHeight*(g.columns-y-1)-roundError/2);//trans
        g.nodes[x][y].tile.css('left', leftSpace+nodeWidth*(x));//trans
        g.nodes[x][y].mid.css('top', topSpace+nodeHeight*(g.columns-y-1)-roundError/2+(nodeHeight-midHeight)/2-notch);//trans
        g.nodes[x][y].mid.css('left', leftSpace+nodeWidth*(x)+(nodeWidth-midWidth)/2-notch);//trans
      }
      if(!g.nodes[x][y].mid.is(":hidden")){
        g.nodes[x][y].mid.css({top:'+='+notch, left:'+='+notch, width:'-='+notch*2, height:'-='+notch*2})
      }
    };
  };
  
  //set all subsection deminsions;
  var borderSize = 0.05;//a percentage
  var allSubsectionImages=$(".subsection");
  if(vert){
    allSubsectionImages.css('width',subSecWidth*(1-borderSize*4/3));
    allSubsectionImages.css('height',subSecHeight*(1-borderSize*2));
    subSecC.css('width',subSecWidth*(1-borderSize*4/3));
    subSecC.css('height', subSecHeight*(1-borderSize*3)/2);
    subSecV.css('width',subSecWidth*(1-borderSize*4/3));
    subSecV.css('height', subSecHeight*(1-borderSize*3)/2);
    subSecD.css('width',sec3width*(1-borderSize*6));
    subSecD.css('height',sec3height*(1-borderSize*4));
    subSecA.css({top: subSecHeight*borderSize-secOffset, left:subSecWidth*borderSize});
    subSecB.css({top: subSecHeight*borderSize-secOffset, left:subSecWidth*borderSize*2+subSecWidth*(1-borderSize*4/3)});
    subSecC.css({top: subSecHeight*borderSize-secOffset, left:subSecWidth*borderSize*3+subSecWidth*(1-borderSize*4/3)*2});
    subSecV.css({top: subSecHeight*(.5+.5*borderSize)-secOffset, left:subSecWidth*borderSize*3+subSecWidth*(1-borderSize*4/3)*2});
    subSecD.css({top: sec3height*borderSize*2+sec1height+sec2height+secOffset, left:sec3width*borderSize*3});
    ootLabel.css({top:paneHeight/2.4, width: sec2width, height: sec2height});
    subSecD.removeClass('sideways');
  }else{
    allSubsectionImages.css('width',subSecWidth*(1-borderSize*2));
    allSubsectionImages.css('height',subSecHeight*(1-borderSize*4/3));
    subSecC.css('width',subSecWidth*(1-borderSize*2));
    subSecC.css('height',subSecHeight*(1-borderSize*7/3)/2);
    subSecV.css('width',subSecWidth*(1-borderSize*2));
    subSecV.css('height',subSecHeight*(1-borderSize*7/3)/2);
    subSecD.css('width',sec3width*(1-borderSize*4));
    subSecD.css('height',sec3height*(1-borderSize*6));
    subSecA.css({top: subSecHeight*borderSize, left:subSecWidth*borderSize-secOffset});
    subSecB.css({top: subSecHeight*borderSize*2+subSecHeight*(1-borderSize*4/3), left:subSecWidth*borderSize-secOffset});
    subSecC.css({top: subSecHeight*borderSize*3+subSecHeight*(1-borderSize*4/3)*2, left:subSecWidth*borderSize-secOffset});
    subSecV.css({top: subSecHeight*borderSize*3.5+subSecHeight*(1-borderSize*4/3)*2.5, left:subSecWidth*borderSize-secOffset});
    subSecD.css({top: sec3height*borderSize*3, left:sec3width*borderSize*2+sec1width+sec2width+secOffset});
    ootLabel.css({top:sec1height/2.4, width: paneWidth, height: sec2height});
    subSecD.addClass('sideways');
  }

  //set nodes dimensions
  var nodeBorderWidth=Math.floor(Math.min(nodeWidth*.03,nodeHeight*.03)+2);
  //console.log("borderWidth: "+nodeBorderWidth);
  var allNodeImages=$(".node");
  allNodeImages.css('width',nodeWidth-nodeBorderWidth*2);
  allNodeImages.css('height',nodeHeight-nodeBorderWidth*2);
  allNodeImages.css('border-width',nodeBorderWidth);
  allNodeImages.css('font-size',((nodeHeight)*.25));//used for sizing the shodows in the css
  var allTileImages=$(".tile");
  allTileImages.css('width',nodeWidth-nodeBorderWidth*2);
  allTileImages.css('height',nodeHeight-nodeBorderWidth*2);
  allTileImages.css('border-width',nodeBorderWidth);
  boopSize=sec1width*.6;

  //set font sizes
  var ssSize=Math.min(subSecWidth,subSecHeight);
  var ssFont=Math.max(subSecV.width()*.06+10, ssSize*.18);
  if(vert){
    subSecD.css('font-size', ssFont);
    subSecD.css('line-height', sec3height*(1-borderSize*4)-1+'px');
  }else{
    subSecD.css('font-size', ssFont);
    subSecD.css('line-height', sec3width*.82+'px');
  }
  if(sData.currentLevel>998 && currentGameType=='level'){//bookmark
    clock.css('font-size', ssFont*1.3);
    clock.css('line-height', subSecHeight*.8-11+'px');
  }else{
    clock.css('font-size', ssSize*.55);
    clock.css('line-height', subSecHeight*.8-11+'px');
  }
  clockLabel.css('font-size', ssFont);
  selections.css('font-size', ssSize*.55);
  selections.css('line-height', subSecHeight*.8-11+'px');
  selectionsLabel.css('font-size', ssFont);
  subSecC.css('font-size', ssFont);
  subSecC.css('line-height', subSecC.height()-1+'px');
  subSecV.css('font-size', ssFont);
  subSecV.css('line-height', subSecV.height()-1+'px');
  //pane.css('font-size', ssFont*1.25);
  ootLabel.css('font-size', ssFont*1.2);
}



function getToggleList(coords, test){//List form: {row, col}
  var r=coords[0];
  var c=coords[1];
  var toggleList=[];//corner middle side
  /*console.log('@!!!: ');
  console.log('@!!!: '+g.nodes[r][c].gameNodeType);*/
  if(g.nodes[r][c].gameNodeType=='intersection'){
    for(x=0;x<g.columns;x++){
      toggleList.push([r,x]);
    }
    for(x=0;x<g.rows;x++){
      toggleList.push([x,c]);
    }
  }
  else if(g.nodes[r][c].gameNodeType=='row'){
    for(x=0;x<g.rows;x++){
      if(g.nodes[x][c].gameNodeType!=='row'){
        toggleList.push([x,c]);
      }
    }
    toggleList.push([r,c]);
  }
  else if(g.nodes[r][c].gameNodeType=='column'){
    for(x=0;x<g.columns;x++){
      if(g.nodes[r][x].gameNodeType!=='column'){
        toggleList.push([r,x]);
      }
    }
    toggleList.push([r,c]);
  }
  else if(g.nodes[r][c].gameNodeType=='standard'){
    toggleList.push([r, c]);//middle
    if(r>0){
      toggleList.push([r-1, c]);//top
    }
    if(r<g.rows-1){
      toggleList.push([r+1, c]);//bottom
    }
    if(c>0){
      toggleList.push([r, c-1]);//left
    }
    if(c<g.columns-1){
      toggleList.push([r, c+1]);//right
    }
  }
  
  //remove intersection nodes from toggle list
  var i=0;
  while(i<toggleList.length){
    if(g.nodes[toggleList[i][0]][toggleList[i][1]].gameNodeType=='intersection'){
      toggleList.splice(i,1)
    }else{i++}
  }
  
 
  if(test==1){console.log('TL: '+toggleList);}
  return toggleList;
}

function toggleNodeList(list, toggleTileBorders){
  var bumpDist=Math.floor(pane.height()*.01)+1;
  for(var x=0; x<list.length;x++){
    var myNode=g.nodes[list[x][0]][list[x][1]];
    if(toggleTileBorders){
      myNode.image.finish();
      myNode.mid.finish();
      myNode.image.animate({top:'-='+bumpDist+'px'},150);
      myNode.mid.animate({top:'-='+bumpDist+'px'},150);
      myNode.image.animate({top:'+='+bumpDist+'px'},150);
      myNode.mid.animate({top:'+='+bumpDist+'px'},150);
    }
    myNode.state=!myNode.state; //toggles lighted up or not
    myNode.image.toggleClass('removeColor').toggleClass('addColor');
  }
}


function clickOnNode(nodeImage){
  var thisRow=nodeImage.data('IDrow');
  var thisCol=nodeImage.data('IDcol');
  //if click on a banned node
  if(g.nodes[thisRow][thisCol].banned){
    g.nodes[thisRow][thisCol].image.removeClass('addBannedBorder');
    setTimeout(function(){g.nodes[thisRow][thisCol].image.addClass('addBannedBorder')},120);
  }
  //process normal click
  if((!g.nodes[thisRow][thisCol].banned) && (selected>0 || g.nodes[thisRow][thisCol].clicked)){
    if(g.nodes[thisRow][thisCol].clicked){
      selected++;
    }else{
      selected--;
    }
    selections.text(selected);
    g.nodes[thisRow][thisCol].clicked=!g.nodes[thisRow][thisCol].clicked;
    toggleNodeList(getToggleList([thisRow,thisCol]),true);
    g.nodes[thisRow][thisCol].image.toggleClass('addBorder');
    
    //if victory achieved
    var lit=0;
    for(var x=0; x<g.rows; x++){
      for(var y=0; y<g.columns; y++){
        if(g.nodes[x][y].state){lit++}
      }
    }
    if(lit==0){//bookend
      var finalTime=getTimeRemaining(deadline);
      console.log('FINAL TIME: '+finalTime);
      var myRunFunction=showMenu;
      unbindAll();
      clearInterval(timeInterval);
      subSecA.stop(true,true);
      if(currentGameType=='level'){
        sData.currentLevel++;
        if(sData.currentLevel>34999){
          sData.currentLevel=0;
        }
        sData.saveLevel();
        myRunFunction=instaBeginLevel;
      }else if(finalTime>0){
        sData.saveWinStreak();
      }
      if(currentGameType=='round'&&finalTime<=0){
        setTimeout(function(){
          endRound(getLosePhrase(), showMenu);
        },350);
      }else{
        var h=(pane.height()+pane.width())/4;
        var runTime=1100;
        pane.stop();
        pane.animate({
          backgroundColor: myOrange
        },{queue:true, duration:100,easing:'linear'});
        pane.animate({
          backgroundColor: whiteOrange
        },{queue:true, duration:50,easing:'linear'});
        pane.animate({
          backgroundColor: myOrange
        },{queue:true, duration:200,easing:'linear'});
        //fade out
        pane.animate({
          backgroundColor: 'black'
        },{queue:true, duration:1600, easing:'linear'});

        for(var x=0; x<g.rows; x++){
          for(var y=0; y<g.columns; y++){
            var posNegA=Math.round(Math.random())*2-1;
            var posNegB=Math.round(Math.random())*2-1;
            var myTop=posNegA*(Math.random()*(h)+h/1);
            var myLeft=posNegB*(Math.random()*(h)+h/1);
            g.nodes[x][y].image.removeClass('addBorder');
            g.nodes[x][y].image.removeClass('drop');
            g.nodes[x][y].tile.removeClass('drop');
            g.nodes[x][y].mid.remove();
            g.nodes[x][y].image.clearQueue();
            g.nodes[x][y].tile.clearQueue();
            g.nodes[x][y].image.animate({
              top:'+='+myTop+'px',
              left:'+='+myLeft+'px'
            },{
              duration: runTime,
              easing: 'easeOutSine',
              complete:function(){
                $(this).fadeOut(275);
              }
            });
            g.nodes[x][y].tile.animate({
              top:'+='+myLeft+'px',
              left:'+='+myTop+'px'
            },{
              duration: runTime,
              easing: 'easeOutSine',
              complete:function(){
                $(this).fadeOut(275);
              }
            });         
          }
        }
        endRound(getWinPhrase(), myRunFunction);
      }
    } 
  }
  //make red if no selections left (and no victory)
  if(selected==0 && lit!=0){
    subSecB.animate({backgroundColor: myRed},{duration:200, queue:false});
  }else{
    subSecB.animate({backgroundColor: lightestGrey},{duration:200, queue:false});
  }
  //if already out of selections, flash red
  if((!g.nodes[thisRow][thisCol].banned)&&(selected==0)&&(!g.nodes[thisRow][thisCol].clicked)){
    subSecB.animate({backgroundColor: lightestGrey},{duration:100, queue:true}); 
    subSecB.animate({backgroundColor: myRed},{duration:100, queue:true});
  }
}

function getLosePhrase(){
  var myLosePhrase = "";
  var ranNum = Math.random();
  if(ranNum<.1){
    myLosePhrase="You've solved the puzzle!<br/> But not fast enough to count.";
  }else if(ranNum<.2){
    myLosePhrase="You've done it!<br/> But not quickly enough.";
  }else if(ranNum<.3){
    myLosePhrase="You've solved the puzzle!<br/> But not fast enough.";
  }else if(ranNum<.4){
    myLosePhrase="You've solved it!<br/> But not fast enough.";
  }else{
    myLosePhrase="You've solved the puzzle!<br/> But you ran out of time.";
  }
  return myLosePhrase;
}

function getWinPhrase(){
  //console.log('TR:'+Math.round(getTimeRemaining(deadline),0));
  var myWinPhrase="";
  
  var wowNum=Math.random();
  if(wowNum>.95){myWinPhrase+="Wow. "}
  else if(wowNum>.90){myWinPhrase+="Wow! "}

  var RPNum = Math.random()*500;
  if(RPNum<1){myWinPhrase+= "You win"}
  else if(RPNum<2){myWinPhrase+= "You're a winner"}
  else if(RPNum<3){myWinPhrase+= "You've won"}
  else if(RPNum<4){myWinPhrase+= "Great job"}
  else if(RPNum<5){myWinPhrase+= "Excellent"}
  else if(RPNum<6){myWinPhrase+= "You're a genius"}
  else if(RPNum<7){myWinPhrase= "Great"}
  else if(RPNum<8){myWinPhrase+= "Perfect"}
  else if(RPNum<9){myWinPhrase+= "Good job"}
  else if(RPNum<10){myWinPhrase+="Well done"}
  else if(RPNum<11){myWinPhrase+="You're really smart"}
  else if(RPNum<12){myWinPhrase+="You win"}
  else if(RPNum<13){myWinPhrase="You win"}
  else if(RPNum<14){myWinPhrase+="You've won again"}
  else if(RPNum<15){myWinPhrase+="You win"}
  else if(RPNum<16){myWinPhrase+="Look you've won"}
  else if(RPNum<17){myWinPhrase+="You're so smart"}
  else if(RPNum<18){myWinPhrase+="You're good at this"}
  else if(RPNum<19){myWinPhrase+="You win"}
  else if(RPNum<20){myWinPhrase="You win"}
  else if(RPNum<21){myWinPhrase="Super"}
  else if(RPNum<22){myWinPhrase+="You won"}
  else if(RPNum<23){myWinPhrase="Outstanding"}
  else if(RPNum<24){myWinPhrase+="You win"}
  else if(RPNum<25){myWinPhrase+="You win"}
  else if(RPNum<26){myWinPhrase+="You win"}
  else if(RPNum<27){myWinPhrase+="You win"}
  else if(RPNum<28){myWinPhrase+="Exceptional"}
  else if(RPNum<29){myWinPhrase+="You win"}
  else if(RPNum<30){myWinPhrase+="You're a champion"}
  else if(RPNum<31){myWinPhrase+="You win"}
  else if(RPNum<32){myWinPhrase+="You win"}
  else if(RPNum<33){myWinPhrase+="Way to go"}
  else if(RPNum<34){myWinPhrase+="You won"}
  else if(RPNum<35){myWinPhrase+="You're brilliant"}
  else if(RPNum<36){myWinPhrase+="Phenomenal"}
  else if(RPNum<37){myWinPhrase+="Not bad"}
  else if(RPNum<38){myWinPhrase+="Very good"}
  else if(RPNum<39){myWinPhrase+="You win"}
  else {myWinPhrase= "You win"}

  if(Math.random()>.1){myWinPhrase+="."}else{myWinPhrase+="!"}
  return myWinPhrase;
}

function popRound(bulbList){
  var compiledToggleList=[];
  for(var i=0; i<g.bannedList.length; i++){
    g.nodes[g.bannedList[i][0]][g.bannedList[i][1]].banned=true;
    g.nodes[g.bannedList[i][0]][g.bannedList[i][1]].image.toggleClass('addBannedBorder');
  }
  for(var thisIndex of bulbList){
    compiledToggleList=compiledToggleList.concat(getToggleList(thisIndex,1));
  }
  console.log('CTL:'+compiledToggleList);//need to add the filter-loops here!
   //remove duplicates
  var i=0;
  var j=0;
  while(i<compiledToggleList.length-1){
    j=i+1;
    while(j<compiledToggleList.length){
      if(compiledToggleList[i][0]==compiledToggleList[j][0]&&compiledToggleList[i][1]==compiledToggleList[j][1]){
        compiledToggleList.splice(j,1);
        compiledToggleList.splice(i,1);
        j=i+1
      }else{
        j++;
      }
    }
    i++;
  }
  toggleNodeList(compiledToggleList,false);
}

function addClickEvents(){
  //clear button event
  subSecD.bind('touchstart', clearEvent=function(e){
    clear();
    e.stopPropagation();
    e.preventDefault();
  });
  subSecD.bind('mousedown', clearEvent=function(e){
    clear();
  });
  //exit button event
  subSecC.bind('touchstart', endGameEvent=function(e){
    exitRound();
    e.stopPropagation();
    e.preventDefault();
  });
  subSecC.bind('mousedown', endGameEvent=function(e){
    exitRound();
  });
}

function exitRound(){
  unbindAll();
  trig(subSecC);
  clearInterval(timeInterval);
  sData.saveLoss();
  blackOut(350, backgroundBlack, showMenu);
}

function clue(){
  //subSecA.stop(true,true);
  //subSecA.css('background-color',lightestGrey);
  subSecV.unbind('touchstart');
  subSecV.unbind('mousedown');    
  subSecV.css('background-color',lightestGrey);
  //subSecV.css('color',backgroundBlack);
  g.nodes[g.solution[g.clue][0]][g.solution[g.clue][1]].mid.fadeIn(0);
  g.nodes[g.solution[g.clue][0]][g.solution[g.clue][1]].mid.animate({
    height:'-='+notch*2,
    width:'-='+notch*2,
    left:'+='+notch,
    top:'+='+notch,
    opacity:1
  },500);
}

function trig(theButton){
  theButton.stop(true,true);
  theButton.css('backgroundColor', myDarkGreen);
  theButton.animate({backgroundColor: myGreen},500);
}

function clear(){
  //selections.removeClass('redFont');
  trig(subSecD);
  selected=maxSelection;
  selections.text(selected);
  subSecB.animate({backgroundColor: lightestGrey},{duration:200, queue:false});
  for(var r=0; r<g.rows; r++){
    for(var c=0; c<g.columns; c++){    
      g.nodes[r][c].clicked=false;
      g.nodes[r][c].state=false;
      g.nodes[r][c].banned=false;
      g.nodes[r][c].image.removeClass('addBorder');
      g.nodes[r][c].image.removeClass('addColor');
      g.nodes[r][c].image.removeClass('addBannedBorder');
      if(g.nodes[r][c].gameNodeType!=='intersection'){
        g.nodes[r][c].image.addClass('removeColor');
      }
    }
  }
  popRound(g.solution);
}

function sortThisList(list){
  for(var i=0;i<list.length-1;i++){
    for(var x=0;x<list.length-1;x++){
      if((list[x][0]<list[x+1][0])||((list[x][0]==list[x+1][0])&&(list[x][1]<list[x+1][1]))){
        [list[x], list[x+1]]=[list[x+1], list[x]];
      }
    }
  }
}

function findAltSolutions(bulbList){//brute force algorithm
  //create a blank board
  var model=getBlankBoard();
  console.log('list: '+bulbList);
  //light up initial bulbs to create solution key
  for(var x=0;x<bulbList.length;x++){
    var startingBulbs=getToggleList(bulbList[x]);
    for(var y=0;y<startingBulbs.length;y++){
      model[startingBulbs[y][0]][startingBulbs[y][1]]^=true;
    }
  }

  function getBlankBoard(){
    var blankBoard = [];
    for(var x=0;x<g.rows;x++){
      blankBoard[x]=[];
      for(var y=0;y<g.columns;y++){
        blankBoard[x][y]=0;
      }
    }
    return blankBoard;
  }

  function checkGuess(guess){
    for(var i=0;i<g.rows;i++){
      for(var j=0;j<g.columns;j++){
        if(guess[i][j]!=model[i][j]){
          return false;
        }
      }
    }
    return true;
  }

  function findSolutions(num){//number of node selections
    var solutions=[];
    for(var r=1;r<=num;r++){
      var options=Math.pow(g.rows*g.columns,r);
      console.log(r+' options: '+options);
      for(var i=0;i<options;i++){
        var board=getBlankBoard();
        var guessList=convertToNodeCoord(r, i);
        var myTogList=[];
        for(var j=0;j<guessList.length;j++){
          myTogList=getToggleList(guessList[j]);
          for(var x=0;x<myTogList.length;x++){
            board[myTogList[x][0]][myTogList[x][1]]^=true;
          }
        }
        if(checkGuess(board)){
          sortThisList(guessList);
          if(!checkForDoubleToggle(guessList) && isNotInitial(guessList)){
            solutions.push(guessList);
          }
        }
      }
    }
    
    consolidateList(solutions);
    for(var z=0;z<solutions.length;z++){
      console.log('alt solution ('+(z+1)+'/'+solutions.length+'): '+solutions[z]);
    }
    return solutions;
  }

  function convertToNodeCoord(numNodes, thisNum){
    var myList=[];
    var runningNum=thisNum;
    for(var i=numNodes-1;i>=0;i--){
      var startNum=Math.floor(runningNum/Math.pow(g.rows*g.columns,i));
      var x = Math.floor(startNum/g.columns);
      var y = startNum%g.columns;
      runningNum=runningNum-startNum*Math.pow(g.rows*g.columns,i);
      myList.push([x, y]);
    }
    return myList;
  }


  function consolidateList(solutionsList){//removes duplicates
    var myLength=solutionsList.length;
    for(var i=0;i<myLength-1;i++){
      for(var x=i+1;x<myLength;x++){
        if(compareLists(solutionsList[i],solutionsList[x])){
          //if the lists are the same, mark as a dupe
          solutionsList[x]=null;
        }
      }
    }
    for(var i=0;i<myLength;i++){
      if(solutionsList[i]==null){
        solutionsList.splice(i,1);
        i--;
        myLength--;
      }
    }
  }

  function compareLists(listA, listB){//return true if they're the same list
    if(listA == null || listB == null){
      return false;//if they've already been marked a duplicate, ignore and move on
    }
    if(listA.length!==listB.length){
      return false;
    }
    for(var i=0; i<listA.length; i++){
      if(!((listA[i][0]==listB[i][0])&&(listA[i][1]==listB[i][1]))){
        return false;
      }  
    }
    return true;
  }

  function checkForDoubleToggle(list){//assumes list is sorted
  //checks for solutions that toggle the same node twice, returns true if discovered
    for(var i=0;i<list.length-1;i++){
      if((list[i][0]==list[i+1][0])&&(list[i][1]==list[i+1][1])){
        return true;
      }
    }
    return false;
  }

  function isNotInitial(list){//returns false if this solution is the initial solution
    //assumes both lists are sorted
    if(list.length!==g.solution.length){//if lists are not the same size, they're not the same
      return true;
    }
    for(var i=0;i<list.length;i++){
      if(!((list[i][0]==g.solution[i][0])&&(list[i][1]==g.solution[i][1]))){
        return true;
      }
    }
    return false;
  }
  return findSolutions(maxSelection);
}


function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t/1000);
  return seconds;
}

function updateClock(deadline){
  var timeRemaining=Math.round(getTimeRemaining(deadline));
  console.log('tick!');
  if((timeRemaining<=10)&&(timeRemaining>=1)){
    subSecA.animate({backgroundColor: myRed},500);
    subSecA.animate({backgroundColor: lightestGrey},500);
  }else if(timeRemaining<=0){
    clearInterval(timeInterval);
    throwClue();
    timeRemaining=0;
    subSecA.stop(true,true);
    subSecA.css('background-color', myRed);
    sData.saveLoss();
  }
  clock.text(timeRemaining);
}

function unbindAll(){
  for(var x=0; x<g.rows; x++){
    for(var y=0; y<g.columns; y++){
      g.nodes[x][y].image.unbind('touchstart');
      g.nodes[x][y].image.unbind('mousedown');
      g.nodes[x][y].mid.unbind('touchstart');
      g.nodes[x][y].mid.unbind('mousedown');      
    }
  }
  subSecD.unbind('touchstart');
  subSecD.unbind('mousedown');
  subSecC.unbind('touchstart');
  subSecC.unbind('mousedown');
  subSecV.unbind('touchstart');
  subSecV.unbind('mousedown');
}

function endRound(ootContent, runFunction){
  var mainHeight=main.height();
  var mainWidth=main.width();
  var raiseGroup=$('.raise');
  var dropGroup=$('.drop');
  var moveTime=1000;
  ootLabel.html(ootContent);
  ootLabel.fadeIn(80);
  if(vert){
    sec1.animate({top:'-='+mainHeight*.66+'px'},moveTime);
    dropGroup.animate({top:'+='+mainHeight+'px'},moveTime+150);
  }else{
    sec1.animate({left:'-='+mainWidth*.66+'px'},moveTime);
    dropGroup.animate({left:'+='+mainWidth+'px'},moveTime+150);
  }
  setTimeout(function(){
    dropGroup.remove();
    sec1.remove();
    setTimeout(function(){
      blackOut(350, backgroundBlack, runFunction);
    },1400);
  },900);
}

function blackOut(outTime, bColor, completeF){
  pane.fadeTo(outTime,0,'easeOutQuad',function(){
     completeF();
     pane.fadeTo(outTime,1,'easeInQuad');    
  });
}