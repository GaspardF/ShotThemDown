function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    baddy1.move();
    dead_baddy();
    controls.update();
}

function dead_baddy()
{
  // Check if dead
  var nb_tile = 10;
  var sizeOfTileX = WIDTH / nb_tile;
  var sizeOfTileY = HEIGHT / nb_tile;
  var x = baddy1.graphic.position.x | 0;
  var y = baddy1.graphic.position.y | 0;
  var length = player1.bullets.length;
  var element = null;

  for (var i = 0; i < length; i++) {
      element = player1.bullets[i];

      var tileX = (element.position.x) | 0;
      var tileY = (element.position.y) | 0;
      var mtileX = (element.position.x + sizeOfTileX/2) | 0;
      var mtileY = (element.position.y + sizeOfTileY/2) | 0;

      if ((x > tileX)
          && (x < mtileX)
          && (y > tileY)
          && (y < mtileY))
      {
          scene.remove(baddy1.graphic);
      }
  }
}
