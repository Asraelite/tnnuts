//@0

var game;

class Game {
	constructor() {}

	start() {
		this.canvas = document.getElementById('game');
		this.babylonEngine = new BABYLON.Engine(this.canvas, true);
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		const scene = new BABYLON.Scene(this.babylonEngine);
		const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.attachControl(this.canvas, true);
		var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
		var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
		sphere.position.y = 1;
		var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

		this.babylonEngine.runRenderLoop(function () {
			scene.render();
		});

		window.addEventListener("resize", _ => {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.babylonEngine.resize();
		});
	}
}

window.addEventListener('load', _ => {
	game = new Game();

	game.start();
});
