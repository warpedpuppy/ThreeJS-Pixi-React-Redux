(function () {


    var canvasWidth = $(window).width(),
        canvasHeight = $(window).height(),
        block = new PIXI.Graphics(),
        background,
        drawing = false,
        global_color = '#000000',
        startX,
        startY,
        block_width,
        block_height,
        stage,
        renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height(), {antialias: false, transparent: true, resolution: 1});

    document.getElementById("background_canvas").appendChild(renderer.view);

    animate();
    resize_handler();
    window.onresize = resize_handler;


    stage = new PIXI.Container();
    stage.interactive = true;
    stage.buttonMode = true;
    background = new Block(canvasWidth, canvasHeight, 0xFFFFFF);
    stage.addChild(background);

    stage.on('pointerdown', draw_square);
    stage.on('pointerup', end_draw_square);

    function draw_square(e) {

        $("#enterBlockSize").val("");
        if ($(".input_div").css("display") === "none") {
            $(".input_div").css("display", "block");
        }
        drawing = true;
        background.removeChildren();
        startX = renderer.plugins.interaction.mouse.global.x;
        startY = renderer.plugins.interaction.mouse.global.y;

        block.x = startX;
        block.y = startY;
        block.clear();
        background.addChild(block);
    }

    function end_draw_square(e) {
        drawing = false;
    }

    function Block(w, h, color) {
        var tint = (color === undefined) ? 0x000000 : color;
        var x = new PIXI.Graphics();
        x.beginFill(tint).drawRect(0, 0, w, h).endFill();
        return x;
    }

    function resize_handler() {

        canvasWidth = $(window).width();
        canvasHeight = $(window).height();
        block.clear();
        background = new Block(canvasWidth, canvasHeight, 0xFFFFFF);
        stage.addChild(background);
        renderer.resize(canvasWidth, canvasHeight);
        $(".input_div").css("display", "none");

    }

    $("#enterBlockSize").on("change paste keyup", function () {

        if (!isNaN(parseInt($("#enterBlockSize").val()))) {
            block_height = parseInt($("#enterBlockSize").val());
            $("#enterBlockSize").attr("placeholder", "Enter integer to change block height");
            block.clear();
            block.beginFill(global_color).drawRect(0, 0, block_width, block_height).endFill();
        } else {
            $("#enterBlockSize").attr("placeholder", "must be integer!")

        }
    });
    $("#preview3JS").click(function () {
        window.open("/threejs.html?width=" + Math.abs(block_width).toString() + "&height=" + Math.abs(block_height).toString());
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
        if (drawing === true) {
            block_width = renderer.plugins.interaction.mouse.global.x - startX;
            block_height = renderer.plugins.interaction.mouse.global.y - startY;
            block.clear();
            block.beginFill(global_color).drawRect(0, 0, block_width, block_height).endFill();
        }
    }


})();