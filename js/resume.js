var stephenResume = function() {
  /**
   * This function is fired when an element with the 'more-info' class is clicked.  This is to kick off the process to see if we need to pop a modal.
   */
  function MoreInfoClicked(clicked) {
    var id = null;
    if(clicked.target) {
      id = $(clicked.target).attr('id');
    }
    if(id != null && resume[id] != null) {
      LoadModal(resume[id]);
    }
  }

  /**
   * This function clones my template hidden in the main page, makes the template viewable, replaces the mustache template variables with detailed information object data, and pops a modal.
   */

  function LoadModal(info) {
    var template = $('#moreInfoTemplate').clone();
    $(template).css('display','block');
    template = template.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, info);
    vex.open({
    content: rendered
    });
  }
  /**
   * Placeholder object definition for my template.
   */
  function DetailedInformation(title, content) {
    this.title = title;
    this.content = content;
  }

  // Detailed information definitions for my modals.
  var resume = [];
  resume['objective'] = new DetailedInformation('Objective','Having managed software engineers for the last couple years, I can say that I believe leadership to be my calling.  Mentoring, growing and succeeding through others has been both a rewarding and challenging experience.  I have trained more than 25 engineers at NativeX and managed nearly as many.  The best part of my day is getting to talk to people and figuring out what makes them tick so I can anticipate what they will need to help my company run better.');
  resume['finance'] = new DetailedInformation('Personal Finance', 'I am a personal finance fanatic.  I can (and do!) spend hours learning about tax optimization, retirement accounts, intelligent investing, budget efficiency, etc.  I love to educate and assist my friends and family with their financial future.  I know this sounds crazy, but finance and numbers really excite me!');
  resume['uwl'] = new DetailedInformation('University of Wisconsin - La Crosse', 'Full disclosure here: I haven\'t completed my degree yet.  I haven\'t had a chance to complete any classes in awhile due to my rapidly increasing responsibilities at NativeX, however I still will complete the degree as time permits.');
  resume['uwltop'] = new DetailedInformation('University of Wisconsin - La Crosse', 'Full disclosure here: I haven\'t completed my degree yet.  I haven\'t had a chance to complete any classes in awhile due to my rapidly increasing responsibilities at NativeX, however I still will complete the degree as time permits.');
  resume['manage'] = new DetailedInformation('Management Role','My efforts on the support team are to be the primary technical and people manager for a team that varies in size between three and nine engineers.  We do everything from speaking directly with partners integrating our technology, finding and fixing bugs in our SDKs, finding and fixing bugs in our backend, and running ad-hoc investigations to dive into business abnormalities.  The vision for our support engineers is to maintain the highest customer satisfaction in the industry and to keep our software engineers focused on coding instead of fire-fighting.  On the SDK team, I am focused on people and project management for a team of four software engineers.  While I don\'t have in-depth knowledge of iOS/Android/Unity/Corona, I am responsible for business logic design, platform cohesiveness and code reviews.');
  resume['volleyball'] = new DetailedInformation('Volleyball','Volleyball is my favorite sport!  My favorite position to play is setter, but nowadays I mostly play with my family who aren\'t tall and force me to be a hitter.');
  resume['social'] = new DetailedInformation('FlipToast and DasBoom', 'FlipToast and DasBoom were products NativeX created to enter the social media market.  FlipToast was built for Windows and Mac users with ActionScript, JavaScript and HTML using Adobe AIR on the front-end with a .NET back-end.  DasBoom was a made-for-mobile web application built using HTML5 on the front-end with a Node.js back-end. They were both social media aggregators, collecting data from Facebook, Twitter and LinkedIn that allowed the user to visualize and interact with their networks in various way.  FlipToast was the most successful, having 300,000 daily active users at the peak.  We sunset the product in late 2012 to focus on mobile advertising.');
  resume['myroleinsocial'] = new DetailedInformation('My Role on FlipToast/DasBoom','I was the primary backend developer for FlipToast and DasBoom.  My secondary responsibility was to architect and implement our logic layer on the front-end.  We retrieved a TON of data from the various social networks in different formats that needed to be packaged neatly for our front-end developers.');
  resume['technicalsales'] = new DetailedInformation('Sales Engineering','Often times big partners have very specific ways they want to leverage ad technology.  I am responsible for helping sell our vision from a technical perspective and help determine the best course of action for integrating with NativeX.');
  resume['dolproject'] = new DetailedInformation('Dawn of Light', 'Dawn of Light is an open-source project that made private servers widely available for Dark Age of Camelot (a 13-year-old MMORPG).  My contributions to the project were more or less my first foray into real coding.  My crowning achievement was creating an automated player event system.  This system would teleport all players to a particular zone in the game, set up a bunch of keeps (castles), merchants, and teleporters, then begin a battle.  At the end of the battle it would award points to the highest rated factions and players, allowing them to purchase new skills.');
  resume['nativex'] = new DetailedInformation('NativeX', 'NativeX strives to be the world leader in native advertising for games.  In practice, this means trying to deliver the right kind of ad (video, popup, rewarded, non-rewarded) to the right user at the right time.  For example, when you\'ve just lost a game, the last thing you want is a nasty popup.  An ad where you can get a boost to help you beat the game, however, might be enticing.');

  // Set the more-info objects to clickable and see if we need to let the user know about clickability.
  $(document).ready(function(){
    var clickableMessage = 'Many things are clickable for more info!';
    $('.more-info').click(MoreInfoClicked);
    if('localStorage' in window && window['localStorage'] !== null) {
        if(!localStorage.getItem('viewed')) {
          vex.dialog.alert(clickableMessage);
          localStorage.setItem('viewed', true);
        }
    } else {
      vex.dialog.alert(clickableMessage);
    }
  });
}();