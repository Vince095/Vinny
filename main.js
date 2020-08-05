
$(function() {
    var smsg="Hi";
    $("#form").submit(function(){
    $("#msend").trigger("click");
    return false;
    });
    var k="";
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     t=t-3;
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
     $(".status").html("last seen today at " + time);
    var lastmsg="" ;var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    $(".tick").html(tick);
    $(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
    $("#msend").click(function(){
    eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
    var a="";
    var scroll=($(".conversation-container").scrollTop())+1550;
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
    var msg=$("#val").val().trim();
    var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
    msg==""?$("#val").focus():($("#ap").append(para),$(".status").css("margin-left","0"),
    $("#form")[0].reset(),setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("speeking... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    $("#name").html("VINNY");
    function send(){
    var sr=lastmsg.split(" ");
    var search="";
     scroll=($(".conversation-container").scrollTop())+155065;
    for(x=0;x<sr.length;x++){
        search+=sr[x]+"+";
    }
    /*----randomize the array using Fisher-Yates Algorithm----------*/
    function shuffleArray(array){
        var currentIndex = array.length, temp, randIndex;
        //while there are elemnts to shuffle
        while(0 != currentIndex){
            randIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -=1;
            //swap it with the current element
            temp = array[currentIndex];
            array[currentIndex] = array[randIndex];
            array[randIndex] = temp;

        }
        return array[randIndex];
    }
    function info(){
	Swal.fire({
  icon: 'info',
  title: 'Vinny is a personal virtual assistant',
  text: 'Made By - Vincent Thejane',
  footer: '<a href="https://vince095.github.io">PORTFOLIO</a>'
})
    }
    var humourAns = ["WHAT DID THE SPIDER DO ON THE COMPUTER?... MADE A WEBSITE!",
    "WHAT DID THE COMPUTER DO AT LUNCHTIME? .... HAD A BYTE!",
    "WHY WAS THE COMPUTER COLD? .... IT LEFT IT'S WINDOWS OPEN!",
    "WHERE DO ALL THE COOL MICE LIVE? ... IN THEIR MOUSEPADS",
    "What do you get when you cross a computer with an elephant? ...Lots of memory!",
    "What do you get when you cross a computer and a life guard? A screensaver!"];

    var learnC = ["C is a high-level structured oriented programming language, used in general purpose programming, developed by Dennis Ritchie at AT&T Bell Labs, the USA between 1969 and 1973.",
    "C was invented to write UNIX operating system.",
    "C is a successor of 'Basic Combined Programming Language' (BCPL) called B language.",
    "Linux OS, PHP, and MySQL are written in C.",
    "C is a robust language with a rich set of built-in functions and operators.",
    "Programs written in C are efficient and fast."
    ];
    var SE = ["One of the fundamental procedures of developing software in step by step manner is by following the Software Development Life Cycle (SDLC). SDLC is a popular practice that is followed by different organizations for designing and developing high-quality software applications.  It acts as a framework that holds some specific tasks to be achieved at every phase during the software development progression. This article will give you deep insight into the need for software development in various stages of SDLC.",
    "SDLC has different models designed which have their advantages and disadvantages. Waterfall model is a traditional SDLC model which will be discussed in this chapter. It is a straightforward and basic structure which can be easily understandable by software developers and testers. It is the first model of SDLC to be introduced for software development.",
    "The classical waterfall model which is also known as the linear-sequential life cycle model is an essential software development model which can be understandable from the structure itself. The model is straightforward yet idealistic. When this model was first introduced, it used to be very popular, but time, the new model has come up with a change in features and requirements and hence it is used decidedly less but still a popular one which everyone must know. All the old software has been developed based on this model's life cycle. It is a sequential model which segregates software development into different phases. Each phase is designed with some unique functionality and use. The model was pioneered in the year 1970 by Winston Royce.",
    "<h1>Requirement Gathering Stage/feasibility study</h1><p>This phase has the purpose to establish whether it would be monetarily as well as technically practicable to expand the development of software. This has the achievability study with the understanding of the problem as well as determines the diverse potential strategies used for solving the problem.</p>",
    "<h1>Design stage</h1><qoute>There is a thorough study of the entire requirement specifications from the first phase, and then the system design is equipped. This phase helps developers to specify hardware as well as the system's requirement which ultimately helps in characterizing the system design as a whole.</qoute>",
    "<h1>Build stage</h1><p>This phase is also known as the coding phase of software development where the idea is converted into source code and UI plus UX design using programming language and tools. Hence, every designed module needs to be coded.</p>",
    "<h1 align='center'>SDLC Spiral Model</h1><p>The spiral model is another important SDLC model that came into use when the iteration in product development came into the applied concept. The initial phase of the Spiral model is the early stages of Waterfall Life Cycle that are needed to develop a software product. This model supports risk handling, and the project is delivered in loops. Each loop in the Spiral model is the phases of the software development process.</p>",
    "<h1>SDLC Prototype Model</h1><p>Prototyping is a general approach to develop an effective replica of any idea or software or system which needs further engineering for making it the ultimate product. The prototype model will present a mini-sized duplicate copy of your target end product which requires precise customer feedback for crafting accordingly. A prototype of an application typically displays the workability of any product in the development phase, but may not essentially contain the exact requirement of the expected outcome. In this chapter, you will learn about one of the most popular SDLC models that is the prototyping model.</p>",
    "<h1>SDLC Iterative Model</h1><p>Software Development Life Cycle (SDLC) is extremely vast and full of various development and testing activities, methodologies, techniques, tools, and more. It engages strong planning as well as management, computation, plan, and preparation. After completing all the cycles and iterations as per requirements, the application gets developed successfully. This model is also a division of SDLC (Software Development Life Cycle). In this chapter, you will learn about this model in details.</p>",
    "<h1>SDLC Big Bang Model</h1><p>Some other SDLC models do not follow any specific phases and procedures. There are models where development starts with the necessary money as well as efforts /workforce as the input, and the software product which may or may not be based on the client's requirement as the output. This Big Bang Model is one of such software development model which does not follow any specific protocol, and so the need for planning is the least. When the client is not sure about the requirements and needs for developing the project entirely or implementation has to be done on the fly with the least analysis, Big Bang Model came into the picture. In this chapter, you will learn about the Big Bang SDLC model in details.</p>"
    ];
    
    var java =["<h1 align='center'>Java</h1><p>Java is robust technology widely used to develop application software.Java is an object-oriented programming language with its runtime environment. It is a combination of features of C and C++ with some essential additional concepts. Java is well suited for both standalone and web application development and is designed to provide solutions to most of the problems faced by users of the internet era.</p><p><h1>What is Java?</h1><ul><li>Java is an object-oriented programming language developed by Sun Microsystems, and it was released in 1995.</li><li>James Gosling initially developed Java in Sun Microsystems (which was later merged with Oracle Corporation).</li><li>Java is a set of features of C and C++. It has obtained its format from C, and OOP features from C++.</li><li>Java programs are platform independent which means they can be run on any operating system with any processor as long as the Java interpreter is available on that system.</li><li>Java code that runs on one platform does not need to be recompiled to run on another platform; it's called write once, run anywhere(WORA).</li><li>Java Virtual Machine (JVM) executes Java code, but it has been written in platform-specific languages such as C/C++/ASM, etc. JVM is not written in Java and hence cannot be platform independent, and Java interpreter is a part of JVM.</li></ul></p><h1>Where is Java being Used?</h1><p>Earlier Java was only used to design and program small computing devices, but it was later adopted as one of the platform-independent programming languages, and now according to Sun, 3 billion devices run Java. Java is one of the most important programming languages in today's IT industries.<ul><li>JSP - In Java, JSP (Java Server Pages) is used to create dynamic web pages, such as in PHP and ASP.</li><li>Applets - Applets are another type of Java programs that are implemented on Internet browsers and are always run as part of a web document.</li><li>J2EE - Java 2 Enterprise Edition is a platform-independent environment that is a set of different protocols and APIs and is used by various organizations to transfer data between each other.</li><li>JavaBeans - This is a set of reusable software components that can be easily used to create new and advanced applications.</li><li>Mobile - In addition to the above technology, Java is widely used in mobile devices nowadays, many types of games and applications are being made in Java.</li></ul></p><p><h1>Types of Java applications</h1><ol><li>Web Application - Java is used to create server-side web applications. Currently, Servlet, JSP, Struts, JSF, etc. technologies are used.</li><li>Standalone Application - It is also known as the desktop application or window-based application. An application that we need to install on every machine or server such as media player, antivirus, etc. AWT and Swing are used in java for creating standalone applications.</li><li>Enterprise Application - An application that is distributed in nature, such as banking applications, etc. It has the advantage of high-level security, load balancing, and clustering. In Java, EJB is used for creating enterprise applications.</li><li>Mobile Application - Java is used to create application software for mobile devices. Currently, Java ME is used for building applications for small devices, and also Java is a programming language for Google Android application development.</li></ol><h1>Features of Java.</h1><ol><li>Object-Oriented - Java supports the features of object-oriented programming. Its object model is simple and easy to expand.</li><li>Platform independent - C and C++ are platform dependency languages hence the application programs written in one Operating system cannot run in any other Operating system, but in platform independence language like Java application programs written in one Operating system can able to run on any Operating system.</li><li>Simple - Java has included many features of C / C ++, which makes it easy to understand.</li><li>Secure - Java provides a wide range of protection from viruses and malicious programs.  It ensures that there will be no damage and no security will be broken.</li><li>Portable - Java provides us with the concept of portability. Running the same program with Java on different platforms is possible.</li><li>Robust - During the development of the program, it helps us to find possible mistakes as soon as possible.</li><li>Multi-threaded - The multithreading programming feature in Java allows you to write a program that performs several different tasks simultaneously.</li><li>Distributed - Java is designed for distributed Internet environments as it manages the TCP/IP protocol.</li></ol></p>",
    ];

     var tutor =[SE,java,learnC];

    java =shuffleArray(java);
    SE = shuffleArray(SE);
    learnC = shuffleArray(learnC);
    humourAns = shuffleArray(humourAns);
    tutor = shuffleArray(tutor);
    var a="";
     var d = new Date();
     var h = d.getHours(); 
     var t = d.getMinutes();
     10>h?h="0"+h:h=h;
     10>t?t="0"+t:t=t;
     12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
     var hello=["HELLO","HI","HEY THERE","HEY","HI DUDE"];
     var gm=["GM","GOOD MORNING","GOOD MORNING VINNY", "GOOD MORNING VINNY"];
     var bad=["BAD","NOT BAD","USELESS","NOT WORKING","NOT GOOD"];
     var ge=["GOOD EVNG","GOOD EVENING","GOOD EVENING VINNY","GOOD EVENING VINNY"];
     var gn=["GOON NIGHT","I'M FEELING SLEEPY"];
     var welcome=["NICE WORKING", "NICE CODE","NICE","WOW","WOW IT'S WORKING","GREAT CODE","AWESOME CODE","IT'S NICE","AWESOME CODE BRO","IT'S GOOD","OH MY GOD","OMG","OHO","NICE TO MEET YOU","NICE TO MEET U","NICE TO SEE YOU","NICE TO C U"];
     var s2u=["I HATE YOU","I LOVE YOU","I MISS YOU"];
     var gaf=["GOOD AFTERNOON","GOOD VINNY","GOOD AFTERNOON VINNY" ];
     var like=["GOOD","👍🏻", "☺️","😅","LOL","ME TOO"];
     var hru=["HOW R U?","H R U?", "HOW ARE YOU?", "HRU?","HRU", "HOW R U","H R U", "HOW ARE YOU"];
     var good=["I'M GOOD","AM AWESOME","AM GOOD","AM FINE","AM GREAT","AM OK","I AM GOOD","I AM FINE","FANTASTIC","I'M FINE","I AM FINE", "I'M FINE U","I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE","FINE:)","FINE :)", "MARVELOUS","AWESOME","FINE☺️","GREAT"];
     var wru=["WHO R U?","W R U?", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
     var wrud=["WHAT R U DOING?","WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY","WHAT ARE YOU DOING"];
      var bye=["OKAY BYE","GOOD BYE", "BYE","GOODBYE","LATER","TATA","SEE YOU LATER","SEE YOU AGAIN"];
      var SENG =["SOFTWARE ENGINEERING","SE","TEACH ME SOFTWARE ENGINEERING","LEARN","TUTORIALS","AND","..."];
      var learn =["LEARN C","TEACH ME C","WHICH TOOL TO LEARN"];
      var jav =["LEARN JAVA","JAVA","JAVAC","TEACH ME JAVA PROGRAMMING","TEACH ME JAVA","WHAT DO I HAVE TO KNOW"];
      var social=["DO YOU HAVE A GIRLFRIEND","CAN YOU LOVE","DO YOU LOVE ME","I LOVE YOU"];
      var th=["THANKS","THANK YOU"];
      var tut =["TUTORIALS","WHAT TO LEARN","WHAT TO LEARN TODAY","TODAYS TUTORIALS","TUTOR","TUTORSHIP"];
      var qu=["WHAT","WHAT?","WHICH","WHICH?","WHEN","WHEN?","REALLY?"]
      var fact =["FACT OF THE DAY","C Programming","C","TEACH ME"];
      var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH"];
      var humour=["JOKES","NEXT","ANOTHER ONE","FUNNY","HAHAHA","LOL","TELL ME A JOKE","PLEASE SAY A JOKE","ARE YOU FUNNY","CAN YOU MAKE JOKES","TELL ME SOMETHING NICE"];
      var info=["WHAT IS THIS SITE ABOUT","WHAT IS SIE CS CLUB","HELP ME","CLUB INFO"];
     
     function isInArray(x, y) { return x.indexOf(y) > -1; }

    isInArray(hello, lastmsg)==true?(smsg="Hello "+"<?php $login = Session::get('login');if ($login == true) {?> <span style='float: right;color: #888;'> <strong><?php echo Session::get('name') ; ?></strong></span> <?php}?>"+", How are you? 😊", k="Hello ,How are you? "):
	isInArray(info, lastmsg)==true?(smsg="We are a community of young software developers, scientists and designers dedicated to honing our craft. The primary goal is to bring together a group of remarkable people to start ground breaking contribution in the world of computer science.", k=smsg):
    isInArray(wru, lastmsg)==true?(smsg="I am Vinny created to assist you", k=smsg):
    isInArray(bad, lastmsg)==true?(smsg="Thanks for your precious feedback, I'll try to improve that.😇", k=smsg):
    isInArray(wrud, lastmsg)==true?(k="Nothing special and you? ", smsg=k+"☺️"):
    isInArray(social, lastmsg)==true?(k="I am incapable of love ", smsg=k+"☺️"):
    isInArray(bye, lastmsg)==true?(smsg="Hope I was helpful to you, if there's any inputs or complaints you want to make ,please contact vincent.....goodbye ", k=smsg, 
    setTimeout(function(){$(".status").html("last seen today at "+time)},6000),
    setTimeout(function(){$(".status").css("margin-left","-50")},8000)):
    isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+"😇"):
    isInArray(gm, lastmsg)==true?(k="Good Morning ", smsg=k+"😇"):
    isInArray(gn, lastmsg)==true?(smsg="Good night", k=smsg):
    isInArray(humour, lastmsg)==true?(smsg=humourAns, k=smsg):
    isInArray(fact, lastmsg)==true?(smsg=learnC, k=smsg):
    isInArray(tut, lastmsg) ==true?(smsg =tutor, k=smsg):
    isInArray(jav, lastmsg)==true?(smsg=java, k=smsg):
    isInArray(learn, lastmsg)==true?(smsg="<h1 align='center'><strong>C Programming</strong><br/></h1><b align='center'>in the beginning, C was used for developing system applications, e.g.:<br/></b><ul><li>Database Systems</li><li>Language Interpreters</li><li>Compilers and Assemblers</li><li>Operating Systems</li><li>Network Drivers</li><li>Word Processors</li></ul> <h1>C Has Become Very Popular for Various Reasons</h1><br/><ul><li>One of the early programming languages.</li><li>Still, the best programming language to learn quickly.</li><li>C language is reliable, simple and easy to use.</li><li>C language is a structured language.</li><li>Modern programming concepts are based on C.</li><li>It can be compiled on a variety of computer platforms.</li><li>Universities preferred to add C programming in their courseware.</li></ul><br/><h1>Advantages of C</h1><ol><li>C is the building block for many other programming languages.</li><li>Programs written in C are highly portable.</li><li>Several standard functions are there (like in-built) that can be used to develop programs.</li><li>C programs are collections of C library functions, and it's also easy to add own functions to the C library.</li><li>The modular structure makes code debugging, maintenance and testing easier.</li></ol><br/><h1>Disavantages of C</h1><ul><li>C does not provide Object Oriented Programming (OOP) concepts.</li><li>There are no concepts of Namespace in C.</li><li>C does not provide binding or wrapping up of data in a single unit.</li><li>C does not provide Constructor and Destructor.</li></ul>",
     k= "C Programming. In the beginning, C was used for developing system applications, eg  Database Systems, Language Interpreters, Compilers and Assemblers. Operating Systems, Network Drivers. Word Processors. C has become Very Popular for Various Reasons.  One of the early programming languages. Still, the best programming language to learn quickly.C language is reliable, simple and easy to use.C language is a structured language.Modern programming concepts are based on C.It can be compiled on a variety of computer platforms.Universities preferred to add C programming in their courseware. Advantages of C . C is the building block for many other programming languages.Programs written in C are highly portable.Several standard functions are there (like in-built) that can be used to develop programs.C programs are collections of C library functions, and it's also easy to add own functions to the C library.The modular structure makes code debugging, maintenance and testing easier. Disavantages of C. C does not provide Object Oriented Programming (OOP) concepts.There are no concepts of Namespace in C.C does not provide binding or wrapping up of data in a single unit.C does not provide Constructor and Destructor."):
    isInArray(welcome, lastmsg)==true?(smsg="Thanks", k=smsg):
    isInArray(s2u, lastmsg)==true?(smsg="Same to you", k=smsg):
    isInArray(qu, lastmsg)==true?(k="I don't know ", smsg=k+"😕"):
    isInArray(ge, lastmsg)==true?(k="Good Evening ", smsg=k+"😇"):
    isInArray(ok, lastmsg)==true?(smsg="hmm", k=smsg):
    isInArray(SENG, lastmsg)==true?(smsg=SE, k=smsg):
    isInArray(gaf, lastmsg)==true?(k="Good Afternoon",smsg=k+"😇"):
    isInArray(like, lastmsg)==true?(smsg="<font size=6>👍🏻</font>", k="ok"):
    isInArray(good, lastmsg)==true?(smsg="Nice to hear it. 😊", k="Nice to hear it. "):
    isInArray(hru, lastmsg)==true?(smsg="I'm good, What about you ? ", k=smsg):
    lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q="+search+"'></iframe>",k="This are the Top results" ):
    (smsg="Sorry, I do not know what you mean, please explain it with proper spellings or  If you say so I can search for you. To search, <br> type <q><b> Search Your keyword </b></q> for example type : <b>Search Vincent</b>",k="Sorry, I do not know what you mean, please explain it, with proper spellings, or  If it's okey with you, I can search the net for you. To search,type,Search Your keyword,for example, type, Search Vincent ");
    para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
    setTimeout(function() { $('#ap').append(para);$(".status").html("online");
    $(".conversation-container").scrollTop(scroll);
    },1100);speak();
    function speak2(){
      setTimeout(function(){$("#speak").click();})
    }
    $("#speak").click(function(){
        responsiveVoice.speak(k,"US English Male");
    })
    function speak(){
        responsiveVoice.speak(k, "US English Male");
    }
    
    }
    });
    
