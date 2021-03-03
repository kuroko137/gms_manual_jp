﻿(function() {
var glossary =  {"type":"data","entrys":[{"type":"entry","name":"absolute","value":"絶対値(absolute value)とは符号を無視する値であり、基本的にいかなる値でも正またはゼロの値に変換されます。例として、-10の絶対値は10となります。"},{"type":"entry","name":"アルゴリズム","value":"アルゴリズムとは1つの明確な問題を解くために設計された命令や規則の集まりです。2つの数字を足し算するという単純な問題から、動画ファイルを別の形式に変換したり、音声ファイルをより小さなファイルサイズに圧縮するといった複雑な問題まで扱われます。"},{"type":"entry","name":"アンチエイリアス","value":"This is a technique used to smooth otherwise jagged lines or textures by blending the color of an edge with the color of the pixels around it. The result should be a more pleasing and realistic appearance, depending on the intensity of the effect."},{"type":"entry","name":"API","value":"The acronym 'API' stands for Application Programming Interface, and this refers to sets of rules, routines, and protocols used to build software applications. APIs help in communication with third party programs or services, which can be used to build different software. Companies such as Facebook and Twitter actively use APIs to help developers gain easier access to their services, and in GameMaker Studio 2 you'll see the API scronym used when talking about extensions - for example, the Google Play Services API or the Amazon Game On API."},{"type":"entry","name":"application surface","value":"The application surface is a special built-in surface that GameMaker Studio 2 will draw everything to in the Draw Events of a game (a surface is essentially an area of memory reserved for graphics). This surface is then drawn to the display buffer at the end of each game frame, displaying its contents to the player."},{"type":"entry","name":"architectures","value":"The architecture of a processor chip (CPU) is a description of its basic components and of its basic operations. Each processor family has its own architecture, like ARM or x64."},{"type":"entry","name":"ARGB","value":"アルファ（Alpha）、赤（Red）、緑（Green）、青（Blue）を組み合わせた頭字語で、16進数で指定された色成分を参照するための形式です。#FF53E270のように2桁で1つの色成分を表しており、この例ではアルファ(FF), 赤(53), 緑(E2), 青(70)という構成値に分解できます。"},{"type":"entry","name":"argument","value":"An argument (also known as a parameter) is a value that is passed into a function. For example, the GameMaker Language function 'sqr(num)' is a function that will give you the square of a number that you provide as the argument, eg: 'a = sqr(4);' Here the argument is 4, and the function will return 16, which is stored in the variable 'a'."},{"type":"entry","name":"アセットキー","value":"ドープシートのタイムライン上でアセットが配置されている位置のことです。アセットキーは複数のフレームに伸ばすことができます。"},{"type":"entry","name":"アセットトラック","value":"シーケンスのトラックパネルに追加されるトラックで、スプライト、サウンド、インスタンス、シーケンスのうちいずれか1つのアセットを含みます。"},{"type":"entry","name":"代入","value":"代入とは、変数の値を設定（割り当て）することを指す用語です。"},{"type":"entry","name":"backend","value":"The backend is the part of a program that is performed in the background and is opaque to the user, usually without the need for any user interaction. For example, the server side of things when doing network programming over the internet, or the data processing that goes on behind the scenes in an RPG game. This is essentially the oppositre of the frontend."},{"type":"entry","name":"bezier interpolation","value":"Bezier interpolation involves estimating a new value by connecting two adjacent known values with a mathematically generated spline curve which can be edited using \\\"handles\\\" attached to each point. You can then get the interpolated value by checking any point along the line."},{"type":"entry","name":"ビット","value":"単一のデータ値であり、1か0（trueかfalse）になります。ビットを8つのブロックに入れて繋げたものがバイトです。"},{"type":"entry","name":"bit depth","value":"The bit depth refers to the number of bits in each sample of an audio file. Lower bit depth gives poorer quality sound but much smaller file size. Lower bit depths are usually used for small sound effects and patforms where memory may be an issue (like HTML5)."},{"type":"entry","name":"bit rate","value":"Bit rate is measured in Kilobits-per-sec(kbps or k) and is the number of bits encoded per second or the number of bits transmitted or received per second. The higher the bit rate and sampling rate, the higher the audio quality but the more processing power and bandwidth it needs. Lower bit rates create a smaller file size and use less processing and bandwidth, but with a drop in audio quality. For good quality music usually a bit rate of 64–128kbps (96kbps+ recommended) is preferred."},{"type":"entry","name":"ビットマップ","value":"ビットマップとは、ビット単位で保存される色ピクセルからなる静止画像をあらわす用語です（数学的アルゴリズムによって保存されるベクター画像とは異なります）。代表的なビットマップ画像はPNG、JPG、BMPで、ベクター画像ではSWFが代表的です。"},{"type":"entry","name":"境界ボックス","value":"スプライトにおける境界ボックスとは、衝突判定が最初に行われる範囲の端のことであり、適用先のスプライトと異なるサイズにできます。シーケンスにおける境界ボックスは、キャンバス内にあるすべてのアセットから割り出した総面積の境界線となります。"},{"type":"entry","name":"build tools","value":"Build tools are external applications that GameMaker Studio 2 requires to generate executable packages for the different target platforms."},{"type":"entry","name":"byte","value":"A byte is a unit of data that is eight binary digits long, and each of the digits that comprise a byte are called bits, ie: a byte is 8 bits, and a bit can be a 1 or a 0."},{"type":"entry","name":"Cache","value":"The cache is a collection of files that are generated by GameMaker once and then stored and re-used over multiple runs of a project. Note that this cache can sometimes become 'stale', meaning it must be cleared to force GameMaker to rebuild it from scratch, ensuring that no stale files corrupt your final game exectable."},{"type":"entry","name":"コールバック","value":"コールバックとは、割り当てられている処理を終了してから別の関数（またはコードブロック）を作動させる関数のことです。たとえばsprite_add()関数なら、スプライトが読み込まれたときにasynchronous Image Loadedイベントでコールバックを作動させます。"},{"type":"entry","name":"キャットムル・ロム補間","value":"数学的スプラインに基づく非線形補間の一種です。隣接する既知の値を「滑らか」な曲線（スプライン）によってつなぎ合わせることで新しい値を推定します。この値は、線上の任意ポイントから算出されます。"},{"type":"entry","name":"Compiling","value":"Compiling is when GameMaker takes your code and collects it together in such a way as to create an executable package that will run on a device as a game."},{"type":"entry","name":"compression","value":"Compression is the use of mathematical algorithms to reduce the size of a file. This is used in particular for audio and image files, where formats like JPG (image) and MP3 (audio) are compressed formats. Compression usually results is much smaller file sizes, but with some data loss which may or may not be noticable depending on the type and strength of the compression used. Uncompressed formats would be BMP (image) or WAV (audio), which have larger file sizes, but no data loss."},{"type":"entry","name":"conditional","value":"Conditionals, conditional statements, and conditional expressions are features of general programming language, and they help the code make a choice whrere the result is either true or false. These can perform different actions depending on the need of the programmer, and multiple conditionals can be combined into a single condition, as long as the final value of the condition is either true or false. Examples of conditional statements are 'if' and 'while'."},{"type":"entry","name":"定数","value":"定数とは、プログラムの実行中に変化することがない名前付きの値をあらわす用語です。GameMaker Studio 2にはos_windowsのような組み込み定数が多くありますが、拡張機能およびプロジェクト専用の定数（マクロとも）を作成することも可能です。"},{"type":"entry","name":"CPUオーバーヘッド","value":"CPUオーバーヘッドは、コンピューターの中央処理装置（CPU）が実行できる処理量、および個々の演算タスクによって占有される最大使用率の割合をあらわす尺度です。"},{"type":"entry","name":"deadzone","value":"The deadzone is the distance you have to move an analog stick before the game recognizes it's being moved. A low deadzone will make any slight movement of the analog stick move your player or aim or whatever. A high deadzone value means that the analog stick needs a much greater movement before the game will detect it and move whatever is being controlled."},{"type":"entry","name":"表示バッファ","value":"表示バッファは、あらゆるものが最終的に描画される「キャンバス」です。表示バッファを直接対象とするイベント（Pre Drawイベントなど）もありますが、それ以外のイベントはまずアプリケーションサーフェスを対象とし、それから表示バッファに描画を行います。"},{"type":"entry","name":"ドープシート","value":"ドープシートとはシーケンスのタイムラインを視覚的に示す領域です。ここでアセットキーとパラメーターキーを追加・削除・編集することで、シーケンスの各トラックの時間による動きを変化させることができます。"},{"type":"entry","name":"encoding","value":"Encoding transforms data into another format using a scheme that is publicly available so that it can easily be reversed. This is not the same as encryption, as it does not require a key to decode it. Encoding is generally used to either change the data into a format for eaiser use by a different system (like sending data to a server), or for making data unreadable to the human eye."},{"type":"entry","name":"EULA","value":"The End User Licence Agreement (EULA) is a legal document that outlines the licence for a product that you are getting."},{"type":"entry","name":"exception","value":"A special, unexpected and anomalous condition encountered during the execution of a program is known as an exception. It can also be termed as an error or a condition which alters the way of the program or the microprocessor to a different path. An example of an exception can be the case when a program tries to access a variable, but the variable does not exist. Exceptions must be handled and eradicated in the program code to avoid any fatal error, a process called debugging."},{"type":"entry","name":"executable package","value":"A package of files that are used to execute a program. In GameMaker Studio this can be a single file - like an installer for windows - or multiple files - like the HTML5 output."},{"type":"entry","name":"expression","value":"An expression is a combination of one or more constants, variables, operators, and/or functions that are interpreted according to particular rules of precedence and association to return another value. A simple expression would be (5 + 5), which returns 10."},{"type":"entry","name":"浮動小数点","value":"浮動小数点の数とは5.5、0.001、-2,345.6789といった浮動小数点を含む数のことです。小数点がないものは整数といいます。"},{"type":"entry","name":"font","value":"A font is a collection of graphical glyphs used to represent text in a language. Fonts can be different weights, sizes, and styles and are used to display any written content in a project."},{"type":"entry","name":"フレームワーク","value":"フレームワークとは、ユーザーが変更を加えたりビルドできるコード基盤のことです。フレームワークにはソフトウェアライブラリ、API、コンパイラといったものが含まれます。簡単に言うと、フレームワークとはプロジェクトにプログラミングの目的、レベルに合わせた環境を提供するものです。たとえばGameMaker Studio 2では、基本的な操作、ステート管理、ネットワーク機能など、プロジェクトでよく使う機能を入れたスクリプト・オブジェクトを1つのプロジェクトにまとめれば、ローカルアセットパッケージを通してフレームワーク形式のプロジェクトを作成することが可能です。新しいプロジェクトにインポートすればそのまま土台となり、システムを一からプログラムし直すことなく作り始めることができます。"},{"type":"entry","name":"frontend","value":"The frontend is the part of a program that is 'front facing', ie: the part that the end user interacts with. For example, in GameMaker Studio 2 the interface where you do the programming and add assets, etc... is the frontend of the program, as it is where you interact with the program and input values and files and other things. This is essentially the oppositre of the backend."},{"type":"entry","name":"GameMaker: Studio 1.4","value":"A previous version of the GameMaker software (often called Legacy GameMaker) that is no longer available nor supported. "},{"type":"entry","name":"garbage collector","value":"The garbage collector is an automated tool that is part of the game code and is used to remove certain things (like arrays and structs) from memory when they are no longer referenced in your code, without the need for you to explicitly remove them."},{"type":"entry","name":"ギズモ","value":"ギズモとは直接操作可能な、独立型ビジュアルスクリーンイディオムのことです。ユーザーが視覚的に操作でき、何らかの効果をもたらしたり、具体的な結果を得られるものを指します。"},{"type":"entry","name":"GUI","value":"Short for 'Graphical User Interface', which is a user interface that includes graphical elements, such as windows, icons and buttons. In GameMaker you have a specific set of object events (Draw GUI Events) that can draw to this layer specifically designed for things like score, lives, inventories, etc..."},{"type":"entry","name":"hard-coded","value":"In computer programming, the term hard-coded is used to describe code that is considered fixed and not likely to change. Hardcoded features are built into hardware or software in such a way that they cannot be modified later on. For example, if you are making a game and 'hard-code' the player health to 10, then you would be using the value 10 throughout the game code rather than using a variable."},{"type":"entry","name":"hashing","value":"Hashing is the method of creating a string or value that relates to a single source - usually a file - and ONLY that source. For example., in GameMaker you can generate a hash for a save file, then, before accessing it later, generate another hash for it and check the original hash and the new hash to determine if the file has been tampered with."},{"type":"entry","name":"HSV","value":"This stands for Hue, Saturation and Value and is a way of expressing a colour usually using values from 0 to 255. The hue is the colour hue value, the saturation is amount of the colour to be used, and the value is the brightness of the colour. "},{"type":"entry","name":"HUD","value":"In games, the HUD stands for the Heads-Up Display. This is the method by which information is visually relayed to the player as part of a game's user interface, so things like the health bar, status icons, score, etc... all form part of the HUD, and normally HUD elements do not require user interaction."},{"type":"entry","name":"IDE","value":"The IDE, or Integrated Development Environment, is a software application that provides comprehensive facilities to computer programmers for software development. In this case, the entire frontend of GameMaker Studio 2 is considered the IDE, and includes sections to create graphics, add sounds, and add code to make your games."},{"type":"entry","name":"iteration","value":"An iteration is a single pass through a set of operations in your project code. One form of iteration in computer programming is via loops. A loop will repeat a certain segment of code until a condition is met and it can proceed further. Each time the computer runs a loop, it is known as an iteration. In simple terms, iteration is the process of repeating a particular snippet of code over and over again to perform a certain action."},{"type":"entry","name":"JSON","value":"JSON stands for JavaScript Object Notatio, and is a lightweight format for storing data. JSON is often used when data is sent from a server to a web page and is considered 'self-describing' and easy to understand and follow when viewed."},{"type":"entry","name":"キーフレーム","value":"キーフレーム（またはパラメーターキー）とは、ドープシートのタイムラインにおいてパラメーター値の変更が定義されているポイントのことです。"},{"type":"entry","name":"keyword","value":"Keywords are special words that are reserved by a programming language or a program as they have a special meaning. These keywords are reserved to perform certain tasks, and they can be either commands or parameters. Each programming language has a set of reserved keywords (also known as reserved names) which cannot be used as variable names, and the GameMaker Language is no exception, where words like return, while, if and break are all reserved kewords used in the programming language."},{"type":"entry","name":"リニア補間","value":"リニア（直線）補間では、直線によって2つの隣接した既知の値をつなぎ合わせ、新しい値を推定します。さらに線上の任意ポイントを照合することで、補間された値を取得できます。グラフィックス処理においては、ピクセルの端を滑らかにする基本的手法のことを指します。"},{"type":"entry","name":"method","value":"In GameMaker, a method is the name given to a user-defined function that has been bound to an instance, so that the instance variable is the name of the funtion and what you use to call it."},{"type":"entry","name":"operand","value":"An operand is a term used to denote the values which can be manipulated using different operators. In the expression A + B + C, A, B and C are the operands."},{"type":"entry","name":"operator","value":"An operator is a term used to denote something which can manipulate different operands. In the expression A + B - C, + and - are the operators. Examples of different operators are + (addition), - (subtrtaction), = (equals), != (not equal) and >= (greater than or equal to), but there are many more."},{"type":"entry","name":"パラメーターキー","value":"パラメーターキー（またはキーフレーム）とは、ドープシートのタイムラインにおいてパラメーター値の変更が定義されているポイントのことです。"},{"type":"entry","name":"パラメータートラック","value":"トラックパネル内のアセットトラックに割り当てられるトラックで、位置や画像のインデックスといったアセットトラックのパラメーター1つを変更します。"},{"type":"entry","name":"physics","value":"In GameMaker, when we talk about an object, instance or room using 'physics' we mean it is using the built-in physics simulation functions, based on the Box2D physics library."},{"type":"entry","name":"再生ヘッド","value":"シーケンスのドープシート、スプライトエディタのフレームビューにおけるタイムラインの'再生'位置です。シーケンス（およびスプライト）ではアニメーションのプレビューに合わせて動き、特定のフレームに置くことで同じ位置のキーやキーフレームを編集できます。"},{"type":"entry","name":"port number","value":"A port number is a way to identify a specific process to which an Internet or other network message is to be forwarded when it arrives at a server."},{"type":"entry","name":"Remote Workers","value":"A Remote Worker is a special program that GameMaker Studio 2 will use on certain platforms to create your game executables without actually running the GameMaker Studio 2 IDE on that platform"},{"type":"entry","name":"レンダリング","value":"GameMaker Studio 2におけるレンダリングとは、一般には「ディスプレイバッファに描画」または「サーフェスに描画」することを意味します。また、ベクターソース（フォントなど）をビットマップ画像に変換するプロセスのことを指している場合もあります。"},{"type":"entry","name":"RSS","value":"Short for 'Rich Site Summary', and is a standardized system for the distribution of content from an online publisher to Internet users."},{"type":"entry","name":"Runtime","value":"The runtime in GameMaker Studio 2 is the collection of compiler assets that is required by the program to create a final executable package for a given target platform. These are installed seperately from the IDE, and can be changed and updated at any time."},{"type":"entry","name":"sample rate","value":"Sample rate is the number of samples of audio carried per second, measured in Hz or kHz (one kHz being 1000 Hz). The higher the sample rate, the more a sound will approximate the original analog waveform, but the larger the file size will be. In general sound effects are fine with a lower sample rate than music."},{"type":"entry","name":"SCM","value":"SCM stands for Source Control Management, which is a program (or suite of programs) responsible for maintining versions of the source code for a project. SCM permits you to store a running history of code changes, as well as review and undo any changes made to the source code, among other things."},{"type":"entry","name":"SDK","value":"SDK stands for 'Software Development Kit'. This usually refers to a collection of software and/or packages used for developing applications for a specific device or operating system."},{"type":"entry","name":"server","value":"In computing, a server is a computer program or a device that provides functionality for other programs or devices, called 'clients'."},{"type":"entry","name":"shaders","value":"A shader is a collection of small programs that run directly on the GPU to create graphics and graphical effects. These are very fast to run and free up the CPU to do other things."},{"type":"entry","name":"スムース補間","value":"スムース補間では、数学的に生成されたスプライン曲線によって2つの隣接した既知の値をつなぎ合わせ、新しい値を推定します。さらに線上の任意ポイントを照合することで、補間された値を取得できます。"},{"type":"entry","name":"source code","value":"Source code is the fundamental component of a computer program that is required for the program to run."},{"type":"entry","name":"spline","value":"A spline is basically a smooth curve used to join points. Mathematically speaking it is deifned as a sufficiently smooth polynomial function that is piecewise-defined, and possesses a high degree of smoothness at the places where the polynomial pieces connect."},{"type":"entry","name":"スプライト","value":"スプライトとは、1つの大きなシーンの部品となるビットマップ画像です。静止画、動画のどちらも該当します。"},{"type":"entry","name":"statement","value":"In programming, a statement is a single line of code written legally in a programming language that expresses an action to be carried out. A statement might have internal components of its own, including expressions, operators and functions. An example of a statement is A = B + 5. A GameMaker Studio 2 program is nothing but a sequence of one or more statements that together perform a task (like move the player). "},{"type":"entry","name":"swatches","value":"A swatch is simply a small square sample of a colour or a material used to illustrate how it will look."},{"type":"entry","name":"syntax","value":"Similar to human languages, programming languages have their own set of rules on how statements can be conveyed, and this set of rules is known as the syntax. While a number of programming languages share many features, functions, and capabilities, they generally differ in syntax. Without the proper use of syntax, one cannot write an executable program, and wrong syntax will lead to errors when compiling."},{"type":"entry","name":"テクセル","value":"テクセル（もといテクスチャ要素）とはテクスチャ空間における基本単位であり、画像空間における基本単位であるピクセルと類似するものです。画像がピクセルの配列によって表されるように、テクスチャはテクセルの配列によって表されます。3Dサーフェスにテクスチャを貼りつける際（この処理をテクスチャマッピングと呼びます）、テクセルはレンダラーによって出力画像の適切なピクセルにマッピングされます。"},{"type":"entry","name":"texture atlas","value":"Another name for a texture page, which is simply a collection of images required by one or more sprites in your game, organised in an optimal way to use as little texture memory as possible."},{"type":"entry","name":"テクスチャページ","value":"テクスチャページ（テクスチャアトラスとも）とはスプライト、タイルセット、フォントの文字列などといった複数の画像を1つにまとめたものです。最適な形式でまとめられるため、ゲーム実行時のテクスチャメモリ使用量を最小限にすることができます。"},{"type":"entry","name":"tile map","value":"The tile map is the name given to a collection of tiles taken from a tile set and used to create levels in a game."},{"type":"entry","name":"tile sets","value":"A tile set is a collection of square or rectangular graphical assets laid out on a grid as a single image. Each item in the grid can then be placed multiple times in a room to create a larger scene called the 'tile map'."},{"type":"entry","name":"タイムライン","value":"GameMaker Studio 2のタイムラインとは、連続して実行されるイベントが直線的にまとまったものです。それぞれのイベントにコードやアクションを追加してタスクを実行でき、タイムラインが再生されると、自分の位置に達したイベントからタスクを実行します。"},{"type":"entry","name":"トラックパネル","value":"シーケンスエディタの領域のことで、アセットトラック、パラメータートラック、トラックグループ、クリップマスクグループといったシーケンスの各トラックが表示されます。"},{"type":"entry","name":"truth table","value":"A truth table is a mathematical table used in logic - specifically in connection with boolean algebra and boolean functions - which sets out the functional values of logical expressions on each of their functional arguments, that is, for each combination of values taken by their logical variables."},{"type":"entry","name":"typo","value":"Typographic error."},{"type":"entry","name":"URL","value":"Short for 'Universal Resource Locator', and is basically the address of something on the internet."},{"type":"entry","name":"v-sync","value":"V-sync or vertical synchronisation is used to synchronise your game update speed to the refresh rate of the monitor. This can reduce screen tearing - which is when your screen displays portions of multiple frames in one go - but can also cause performance issues or problems on monitors with high refresh-rates."},{"type":"entry","name":"variable","value":"A variable is a named value within a program which can be modified, stored and displayed whenever required. For example, if we have an integer variable with a name XYZ and it stores a value 10, we can then do things like A = XYZ + 10, which will set the value of the variable A to 20, since XYZ is 10 and we are adding 10 to it. You can also change variable values using operators, so doing XYZ = XYZ + 100 would modify the value of our XYZ variable to be equal to 110. Variables can also be used to store identifiers and references to different assets."},{"type":"entry","name":"vector","value":"A vector is a mathematical construct that has a size, called the magnitude, and a direction. In GameMaker, a vector is usually used to show the distance and direction something moved in. A vector can also be used to define images and certain image formats like SWF use vector maths to define the images they contain."},{"type":"entry","name":"Version Number","value":"A version number is a unique set of numbers assigned to a specific release of a software program, game or asset, normally with the format MAJOR.MINOR.MAINTENANCE, eg: v2.3.56. Typically, as updates and entirely new editions of a game or asset are released, the version number will increase."},{"type":"entry","name":"vertex","value":"A vertex is the name given to a single point of a polygon that contains various characteristics that define it's position, its colour and its texture. In computer graphics, this usually means a corner of a triangle that is used to create a primitive, and a combination of such primitives is what makes the graphics on the screen."},{"type":"entry","name":"Virtual Machine (VM)","value":"In GameMaker, the The VM (Virtual Machine) is a compiling method that uses a generic runner for each platform and then uses that to interpret the code for your game."},{"type":"entry","name":"VRAM","value":"VRAM is the amount of memory available for video, ie: the memory space that can store textures and images."},{"type":"entry","name":"weak reference","value":"A weak reference is a reference that does not protect the referenced object from collection by a garbage collector, and so can be used to check if a struct is still \\\"alive\\\" (referenced) or not somewhere in the game."},{"type":"entry","name":"YoYo Compiler (YYC)","value":"This is a special compiler for creating executable packages that use native code instead of interepreted code and a runner (wich is what the GameMaker VM compile uses). Compiled code is faster to run, but takes more time to compile the executable."}]};
window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), glossary, { sync:true });
})();
