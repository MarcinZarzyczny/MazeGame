document.addEventListener('DOMContentLoaded', function (event) {
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let startPlayer = 4;
    let sek = 0;
    let min = 0;

    canvas.width = 960;
    canvas.height = 720;
    canvas.style.marginTop = "10px";
    canvas.style.marginBottom = "10px";
    canvas.style.backgroundColor = "#A3AB78";

    context.fillStyle = '#F5F5F4';
    context.fillRect(0, 0, canvas.width, canvas.height);
    //mapa

    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 3, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 3, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 3, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 3, 0, 0, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 4, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 3, 3, 1, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 4, 1, 1, 3, 3, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    class Level {
        #wall;
        #width;
        #height;
        #walls;
        #map;
        #gravity;
        constructor(wallWidth, wallHeight, canvasWidtch, canvasHeight, map) {
            //rozmiar scian
            this.#wall = { width: wallWidth, height: wallHeight };
            //rozmiar poziomu
            this.#width = canvasWidtch / wallWidth;
            this.#height = canvasHeight / wallHeight;
            //rozmiar pola
            this.#walls = [
                { id: 'background', colour: '#BDE038', solid: 0 },
                { id: 'wall', colour: '#506266', solid: 1 },
                { id: 'win', colour: '#678DFE', solid: 0 },
                { id: 'lose', colour: '#ff0000', solid: 0 },
                { id: 'teleport', colour: '#BDE038', solid: 0 },
                { id: 'klucz', colour: '#BDE038', solid: 0 },
                { id: 'tramp', colour: '#EF8A22', solid: 1 }
            ];
            //mapa
            this.#map = map;
            this.#gravity = wallHeight / 5;

        }
        set wall(size) {
            var canvasWiddth = this.#wall.width * this.#width;
            var canvasHeight = this.#wall.height * this.#height;

            this.#wall = { width: zize.width, height: size.height };

            this.#width = canvasWiddth / size.width;
            this.#height = canvasHeight / size.height;
        }
        get wall() {
            return this.#wall;
        }
        get width() {
            return this.#width;
        }
        get height() {
            return this.#height;
        }
        get walls() {
            return this.#walls;
        }
        get map() {
            return this.#map;
        }
        retmap() {
            console.log(this.#map);
        }
        cznge(sol) {
            this.#map[20][3] = sol;
        }

        get gravity() {
            return this.#gravity;
        }
        drawWall(x1, y1, x2, y2, colour, context) {
            context.beginPath();
            context.rect(x1, y1, x2, y2);
            context.fillStyle = colour;
            context.fill();
        };
        drawMap(context) {
            for (var x = 0; x < level.width; x++) {
                for (var y = 0; y < level.height; y++) {
                    this.drawWall(
                        x * this.wall.width,
                        y * this.wall.height,
                        (x + 1) * this.wall.width,
                        (y + 1) * this.wall.height,
                        this.walls[this.map[y][x]].colour,
                        context
                    );
                }
            }
        };
        checkMap(map) {
            var minWidth = map[0].length;
            var minHeight = map.length;
            var wartosciPoprawne = true;
            for (var y = 1; y < this.height; y++) {
                if (map[y].length < minWidth) minWidth = map[y].length;
            }
            for (var x = 0; x < minWidth; x++) {
                for (var y = 0; y < minHeight; y++) {
                    if (this.map[y][x] > (this.walls.length - 1)) {
                        wartosciPoprawne = false;
                        console.log("Bład mapy. Wiersz " + (y + 1) + ", kolumna " + (x + 1) + ".")
                    }
                }
            }
            if ((minWidth == this.width && minHeight == this.height) && wartosciPoprawne == true) {
                return true;
            }
            else {
                return false
            };

        }
        redyCanvas() {
            canvas.height = this.height * this.map[0].lenght;
            canvas.width = this.width * this.map[0][0].lenght;
            return true;
        }
    };
    class Player {
        #position;
        #r;
        #color;
        #velocity;
        #speed;
        #moving;
        #gravity;
        #fallingCounter;

        constructor(level, kolor) {
            this.#position = {
                x: level.wall.width * (30 + 0.5),
                y: level.wall.height * (22 + 0.5)
            };

            this.#r = (level.wall.height / 2) - 1;
            this.#color = kolor;
            this.#velocity = {
                x: 0,
                y: 0
            }
            this.#speed = {
                x: level.wall.width / 8,
                y: level.wall.width / 4.5
            }
            this.#moving = {
                left: false,
                right: false,
                up: false,
                uptramp: false
            }
            this.#gravity = level.gravity;
            this.#fallingCounter = 0.01;

        }
        get position() {
            return this.#position;
        }
        get r() {
            return this.#r;
        }
        get velocity() {
            return this.#velocity;
        }
        get color() {
            return this.#color;
        }
        get speed() {
            return this.#speed;
        }
        get moving() {
            return this.#moving;
        }
        get gravity() {
            return this.#gravity;
        }
        get fallingCounter() {
            return this.#fallingCounter;
        }
        resetMoving() {
            this.#moving = {
                left: false,
                right: false,
                up: false
            }
        }
        draw(context) {
            context.beginPath();
            context.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
            context.fillStyle = this.#color;
            context.fill();
            context.strokeStyle = this.#color;
            context.stroke();
        }
        muve(context, level) {
            var oldPosition = this.position;
            this.#position = {
                x: this.#position.x + this.velocity.x,
                y: this.#position.y + this.velocity.y + this.gravity * this.fallingCounter
            }

            var sinus = Math.floor((this.r * Math.sin(45)));
            var cosinus = Math.floor((this.r * Math.cos(45)));

            this.#fallingCounter += 0.03;
            var location = {
                centerX: Math.floor(this.position.x / level.wall.width),
                centerY: Math.floor(this.position.y / level.wall.height),
                right: Math.floor((this.position.x + this.r + 0.01) / level.wall.height),
                left: Math.floor((this.position.x - this.r - 0.01) / level.wall.height),
                top: Math.floor((this.position.y - this.r - 0.01) / level.wall.width),
                bottom: Math.floor((this.position.y + this.r + 0.01) / level.wall.width),
                poSkosieX: Math.floor(((this.position.x - sinus) - 1) / level.wall.width),
                poSkosieY: Math.floor(((this.position.y - cosinus) - 1) / level.wall.height),
                poSkosieX2: Math.floor(((this.position.x + sinus) - 1) / level.wall.width),
                poSkosieY2: Math.floor(((this.position.y + cosinus) - 1) / level.wall.height)

            };
            var walls = {
                center: level.walls[level.map[location.centerY][location.centerX]],
                left: level.walls[level.map[location.centerY][location.left]],
                right: level.walls[level.map[location.centerY][location.right]],
                top: level.walls[level.map[location.top][location.centerX]],
                bottom: level.walls[level.map[location.bottom][location.centerX]],
                prawyDolnyPunktPoSkosie: level.walls[level.map[location.poSkosieY][location.poSkosieX]],
                lewyDolnyPunktPoSkosie: level.walls[level.map[location.poSkosieY][location.poSkosieX2]],
                lewyDolnyPunktPoSkosie2: level.walls[level.map[location.poSkosieY][location.poSkosieX2]],
                lewyDolnyPunktPoSkosie3: level.walls[level.map[location.poSkosieY2][location.poSkosieX]]
            };
            this.chekSolidWalls(walls, location, oldPosition);
            this.checkWinWalls(walls);
            this.checkWinLose(walls);
            this.checkTeleport(walls);
            this.kea(walls);
            this.draw(context);

        }
        setMoving() {
            this.#velocity = { x: 0, y: 0 };
            if (this.#moving.left) this.#velocity.x -= this.speed.x;
            if (this.moving.right) this.#velocity.x += this.speed.x;
            if (this.moving.up == true) this.#velocity.y -= this.speed.y;  
            if (this.moving.uptramp == true) this.#velocity.y -= this.speed.y*1.8;                   

        }
        startMoving(key) {
            var location = {
                centerX: Math.floor(this.position.x / level.wall.width),
                centerY: Math.floor(this.position.y / level.wall.height),
                right: Math.floor((this.position.x + this.r + 0.01) / level.wall.height),
                left: Math.floor((this.position.x - this.r - 0.01) / level.wall.height),
                top: Math.floor((this.position.y - this.r - 0.01) / level.wall.width),
                bottom: Math.floor((this.position.y + this.r + 0.01) / level.wall.width)
            };
            var walls = {
                center: level.walls[level.map[location.centerY][location.centerX]],
                left: level.walls[level.map[location.centerY][location.left]],
                right: level.walls[level.map[location.centerY][location.right]],
                top: level.walls[level.map[location.top][location.centerX]],
                bottom: level.walls[level.map[location.bottom][location.centerX]]
            };
            switch (key) {
                case 37:
                    this.moving.left = true;
                    break;
                case 38:
                    if (walls.bottom.solid == 1) {
                        if (walls.bottom.id == 'tramp') {
                            this.#fallingCounter = 0.01;
                            this.moving.uptramp = true;
                        } else if (walls.bottom.id == 'wall') {
                            this.#fallingCounter = 0.01;
                            this.moving.up = true;
                        }                   
                    }
                    break;
                case 39:
                    this.moving.right = true;
                    break;
            };
            this.setMoving(walls);
        }
        chekSolidWalls(walls, location, oldPosition) {
            if (walls.left.solid == 1) {
                if (this.position.x < oldPosition.x) {
                    this.#position.x = (location.left + 1) * level.wall.width + this.r;
                }
            }
            if (walls.right.solid == 1) {
                if (this.position.x > oldPosition.x) {
                    this.#position.x = ((location.right) * level.wall.width) - this.r;
                }
            }
            if (walls.top.solid == 1) {
                if (this.position.y < oldPosition.y) {
                    this.#position.y = ((location.bottom) * level.wall.width) + this.r;
                }
            }
            if (walls.bottom.solid == 1) {
                if (this.position.y > oldPosition.y) {
                    this.#position.y = ((location.bottom) * level.wall.width) - this.r;
                    this.#fallingCounter = 0.01;
                }
            }
            if (walls.prawyDolnyPunktPoSkosie.solid == 1) {
                if (this.position.y > oldPosition.y) {
                    this.#position.x = ((location.right) * level.wall.width) + this.r;
                }

            }
            if (walls.lewyDolnyPunktPoSkosie.solid == 1) {
                if (this.position.y > oldPosition.y) {
                    this.#position.x = ((location.right) * level.wall.width) - this.r;
                }
            }
            if (walls.lewyDolnyPunktPoSkosie2.solid == 1) {
                if (this.position.y < oldPosition.y) {
                    this.#position.x = ((location.right) * level.wall.width) - this.r;
                }
            }
            if (walls.lewyDolnyPunktPoSkosie3.solid == 1) {
                if (this.position.y < oldPosition.y) {
                    this.#position.x = ((location.right) * level.wall.width) + this.r;
                }
            }
        }
        stoptMoving(key) {
            switch (key) {
                case 37:
                    this.moving.left = false;//lewo
                    break;
                case 38:
                    this.moving.up = false;//góra
                    this.moving.uptramp = false;
                    break;
                case 39:
                    this.moving.right = false;//prawo
                    break;
            };
            this.setMoving();
        }
        checkWinWalls(walls) {
            if (walls.top.id == 'win' || walls.bottom.id == 'win' || walls.left.id == 'win' || walls.right.id == 'win') {
                this.wen();
            }
        }
        checkTeleport(walls) {
            if (walls.top.id == 'teleport' || walls.bottom.id == 'teleport' || walls.left.id == 'teleport' || walls.right.id == 'teleport') {
                this.teleport();
            }

        }
        kea(walls) {
            if (walls.top.id == 'klucz' || walls.bottom.id == 'klucz' || walls.left.id == 'klucz' || walls.right.id == 'klucz') {
                //console.log("klucz");              
                level.cznge(0);
                
            }

        }
        wen() {
            alert("You Win! :-). Time " + min + " : " + sek + ".");
            this.resetMoving();
            this.#position = {
                x: level.wall.width * (30 + 0.5),
                y: level.wall.height * (22 + 0.5)
            }
            resetZegar();
            level.cznge(1);

        }
        lose() {
            alert("You lose! :-(. Time " + min + " : " + sek + ".");
            this.resetMoving();
            this.#position = {
                x: level.wall.width * (30 + 0.5),
                y: level.wall.height * (22 + 0.5)
            }
            resetZegar();
            level.cznge(1);

        }
        teleport() {
            this.resetMoving();
            this.#position = {
                x: level.wall.width * (30 + 0.5),
                y: level.wall.height * (3 + 0.5)
            }
        }
        checkWinLose(walls) {
            if (walls.top.id == 'lose' || walls.bottom.id == 'lose' || walls.left.id == 'lose' || walls.right.id == 'lose') {
                this.lose();
            }

        }
    }

    var li = document.getElementById("li");
    li.style.display = "none";
    var zegar = document.getElementById("zegar");

    const start = document.getElementById("start");
    start.addEventListener("click", myFunction);

    const stop = document.getElementById("stop");
    stop.style.display = "none";
    stop.addEventListener("click", myFunction2);

    function myFunction() {
        li.style.display = "block";
        startPlayer = 4; 
        start.style.display = "none";
        stop.style.display = "block";
        level = new Level(30, 30, canvas.width, canvas.height, map);
        player = new Player(level, '#0F0D22');
        licznikMalejacy();

        if (level.checkMap(map) == true) {
            setTimeout(uruchomGre, 4000);
            setTimeout(startzegar, 4000);
            
        } else {
            alert("Bład danych generujących mapę. Sprawdz parametry i spróbuj jeszcze.");
        }
    }
    function myFunction2() {
        start.style.display = "block";
        stop.style.display = "none";
        player.lose();
        delete level;
        delete player;
        graUruchomiona = false;
        location.reload();
    }
    function drawGame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        level.drawMap(context);
        //level.cznge();
        player.muve(context, level);

    }
    function licznikMalejacy() {
        setInterval(dekrementuj, 1000)

    }
    function dekrementuj() {     
        if (startPlayer != 0) {
            startPlayer--;
            li.innerText = startPlayer;
            graUruchomiona = true;
        } else if (startPlayer == 0) {
            li.style.display = "none";
        }

    }
    function startzegar() {
        setInterval(zegarOdlicz, 1000)

    }
    function zegarOdlicz() {
        if (min != 10) {
            if (sek != 60) {
                zegar.innerText = min + " : " + sek;  
                sek++;
            } else if (sek= 60){
                sek = 0;
                min++;
            }
        } else if (min == 10) {
            player.lose();
        }
    }
    function resetZegar() {
        sek = 0;
        min = 0;
    } 
    function uruchomGre() {
        level.drawMap(context);

        setInterval(drawGame, 1000 / 25);
        document.addEventListener('keydown', function (event) {
            player.startMoving(event.keyCode, context);
        })
        document.addEventListener('keyup', function (event) {
            player.stoptMoving(event.keyCode, context);
        })
        setInterval(drawGame, 1000 / 25);
    }
})








   
